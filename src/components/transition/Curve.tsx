"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { text, curve, translate } from "./anim";

const routes: { [key: string]: string } = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/interiors": "Interior Design",
  "/blog": "Blog",
  "/plans": "House Plans",
  "/plans/[slug]": "Plan Details",
  "/communities": "Communities",
};

const anim = (variants: any) => {
  return {
    variants,
    initial: "initial",
    animate: "enter",
    exit: "exit",
  };
};

const Curve = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [dimensions, setDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="page curve">
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className="background"
      />
      <motion.p className="route" {...anim(text)}>
        {routes[router.route] || ""}
      </motion.p>
      {dimensions.width !== null && dimensions.height !== null && (
        <SVG height={dimensions.height} width={dimensions.width} />
      )}
      {children}
    </div>
  );
};

const SVG = ({ height, width }: { height: number; width: number }) => {
  const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

  const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

  return (
    <motion.svg {...anim(translate)}>
      <motion.path
        {...anim(curve(initialPath, targetPath))}
        fill="currentColor"
      />
    </motion.svg>
  );
};

export default Curve;
