import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, useAnimation } from "framer-motion";

export default function AboutSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20vh", "20vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: -50,
      transition: {
        delay: i * 0.1,
        duration: 2.0,
      },
    }));
  }, [controls]);

  const getChars = (word: string) => {
    return word.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden bg-black"
    >
      <motion.div
        style={{
          y,
          scale,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="absolute w-full h-full"
      >
        <Image
          src={"/assets/a.jpg"}
          layout="fill"
          alt="background image"
          className="object-cover"
        />
      </motion.div>
      <div className="relative text-white text-center p-8">
        <h1 className="text-[8vw] font-bold leading-tight">
          {getChars("About Us")}
        </h1>
      </div>
    </div>
  );
}
