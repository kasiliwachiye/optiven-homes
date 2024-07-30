import React from "react";
import { motion } from "framer-motion";

export default function AboutDescription() {
  return (
    <div className="flex flex-col items-center my-40 px-4 space-y-16">
      <motion.div
        className="text-center max-w-[70vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-[5vw] uppercase leading-tight font-bold mb-8 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-[2vw] leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Optiven Real Estate has been in the business of selling land for over
          20 years. Recently, there has been a rising demand for us to develop
          homes, especially for customers who have bought our value added land.
          For a long time, we have been referring our customers to contractors
          who in turn undertake to build homes for these customers. Optiven
          Homes is a deliberate step that is aimed at providing our customers
          100% professional touch. We endeavor to deliver to our customers; our
          solid expertise and our outstanding experience.
        </motion.p>
      </motion.div>

      {/* <motion.div
        className="text-center max-w-[70vw]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h2
          className="text-[5vw] uppercase leading-tight font-bold mb-8 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          Our Vision
        </motion.h2>
        <motion.p
          className="text-[2vw] leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          Our vision is to be the leading provider of affordable, high-quality
          homes that enhance the lifestyle of our clients. We aim to create
          communities that are not just places to live, but places to thrive.
        </motion.p>
      </motion.div> */}
    </div>
  );
}
