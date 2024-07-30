import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../../../public/assets/d.jpg";
import FilterBar from "@/components/filter-bar";

export default function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute bottom-0 w-full">
        <FilterBar />
      </div>
    </div>
  );
}
