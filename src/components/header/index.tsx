"use client";
import styles from "./style.module.css";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";

export default function Index() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/">Olivier</Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
