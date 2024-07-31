"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body";
import Footer from "./footer";
import Image from "./image";

const links = [
  {
    title: "Home",
    href: "/",
    src: "a.jpg",
  },
  {
    title: "About",
    href: "/about",
    src: "c.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "e.jpg",
  },
  {
    title: "House Plans",
    href: "/plans",
    src: "d.jpg",
  },
  {
    title: "Interior Design",
    href: "/interior",
    src: "e.jpg",
  },
  {
    title: "Communities",
    href: "/communities",
    src: "f.jpg",
  },
  {
    title: "Blog",
    href: "/blog",
    src: "g.jpg",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
}
