// @components/header/index.tsx
"use client";
import styles from "./style.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import Image from "next/image";

export default function Index() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  // Close the navbar on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsActive(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className="ml-2 -my-2">
          <span className="sr-only">Optiven Limited</span>
          <Image
            src="/assets/optiven-homes-logo.png"
            alt="Optiven Homes Logo"
            height={100}
            width={160}
          />
        </Link>
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
