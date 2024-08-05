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
  const [isHighEnd, setIsHighEnd] = useState(false);
  const standardPricePerSqM = 55000; // Standard price per square meter
  const highEndPricePerSqM = 65000; // High-end price per square meter
  const calculatedPrice =
    plinthArea * (isHighEnd ? highEndPricePerSqM : standardPricePerSqM);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h2 className="text-5xl lg:text-[5vw] leading-[0.8] font-bold mb-8">
          Pricing Details
        </h2>
        <div className="flex justify-center items-center mb-8">
          <span className="text-xl font-semibold mr-4">Standard</span>
          <label
            htmlFor="priceToggle"
            className="relative inline-block h-8 w-16 cursor-pointer"
          >
            <input
              type="checkbox"
              id="priceToggle"
              className="peer sr-only"
              onChange={() => setIsHighEnd(!isHighEnd)}
            />
            <span className="absolute inset-0 m-auto h-full w-full rounded-full border-2 border-gray-400 bg-gray-300 transition-all peer-checked:bg-green-500"></span>

            <span className="absolute inset-y-0 left-0 m-auto h-6 w-6 rounded-full bg-white border border-gray-400 transition-all transform peer-checked:translate-x-8"></span>
          </label>
          <span className="text-xl font-semibold ml-4">High-End</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={isHighEnd ? "high" : "standard"}
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
