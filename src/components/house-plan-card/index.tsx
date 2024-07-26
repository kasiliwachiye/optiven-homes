import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HousePlanCardProps {
  image: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  link: string;
}

const HousePlanCard: React.FC<HousePlanCardProps> = ({
  image,
  title,
  bedrooms,
  bathrooms,
  price,
  link,
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
        <p className="text-gray-700 mb-4">KES {price.toLocaleString()}</p>
        <a href={link} className="text-green-500 hover:underline">
          View Details
        </a>
      </div>
    </motion.div>
  );
};

export default HousePlanCard;
