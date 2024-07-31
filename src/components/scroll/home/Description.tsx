import React from "react";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <div className="flex justify-center my-40 px-4">
      <motion.div
        className="text-center max-w-[70vw]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="text-[5vw] uppercase leading-tight font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Optiven Homes –{" "}
          <span className="text-luxury">Your Home. Our Commitment.</span>
        </motion.p>
        <motion.p
          className="text-[2vw] leading-tight text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Optiven Homes is aimed at providing our customers 100% professional
          touch. Considering your needs, wants, and plans, we create a truly
          unique home that is designed to suit your lifestyle, land, and budget.
          Optiven Homes is focusing on developing residential homes within
          Nairobi Metropolis and surrounding counties. Turn Your Optiven Plot
          Ownership Into Home Reality with our 50:40:10 Construction Plan. We
          Build Maisonettes, Bungalows, and Apartments.
        </motion.p>
      </motion.div>
    </div>
  );
}
