import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PropertyCardProps {
  image: string;
  title: string;
  intro: string;
  bedrooms: number;
  bathrooms: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  title,
  intro,
  bedrooms,
  bathrooms,
}) => {
  return (
    <motion.div
      className="bg-white shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <motion.div className="relative w-full h-full transform transition-transform duration-500 hover:scale-110">
          <Image
            src={`/assets/${image}`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{intro}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="flex items-center space-x-1">
            <span className="font-bold">{bedrooms}</span>
            <span>Bedrooms</span>
          </span>
          <span className="flex items-center space-x-1">
            <span className="font-bold">{bathrooms}</span>
            <span>Bathrooms</span>
          </span>
        </div>
        <button className="bg-black text-white w-full py-2 px-4">Details</button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
