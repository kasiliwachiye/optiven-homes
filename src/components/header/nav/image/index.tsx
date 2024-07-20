import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { opacity } from "../../anim";

interface IndexProps {
  src: string;
  selectedLink: { isActive: boolean; index: number };
}

export default function Index({ src, selectedLink }: IndexProps) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={selectedLink.isActive ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <Image src={`/images/${src}`} fill={true} alt="image" />
    </motion.div>
  );
}
