import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const priceVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

interface PlinthAreaProps {
  plinthArea: number;
}

const PriceSection = ({ plinthArea }: PlinthAreaProps) => {
  const pricePerSqM = 5500;
  const calculatedPrice = plinthArea * pricePerSqM;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-5xl lg:text-[5vw] leading-[0.8] font-bold mb-8">
          Pricing Details
        </h2>
        <AnimatePresence mode="wait">
          <motion.div
            variants={priceVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="text-5xl leading-[0.8] font-bold text-center mb-12 md:text-7xl lg:text-9xl"
          >
            KES {calculatedPrice.toLocaleString()}*
          </motion.div>
        </AnimatePresence>
        <p className="text-lg font-bold text-gray-600">
          *Price is calculated based on the plinth area and selected unit price.
        </p>
      </div>
    </div>
  );
};

export default PriceSection;
