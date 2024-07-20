import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.css";
import { blur, translate } from "../../anim";
import { JSX } from "react";

interface LinkType {
  title: string;
  href: string;
  src: string;
}

interface BodyProps {
  links: LinkType[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (link: { isActive: boolean; index: number }) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
}: BodyProps) {
  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
