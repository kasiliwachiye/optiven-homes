import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

interface DesignCardProps {
  image: string;
  title: string;
  intro: string;
  style: string;
  finishing: string[];
  link: string;
}

const DesignCard: React.FC<DesignCardProps> = ({
  image,
  title,
  intro,
  style,
  finishing,
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
            src={`/assets/interiors/${image}`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{intro}</p>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Finishing</h4>
          <div className="flex flex-wrap gap-2">
            {finishing.map((finish, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded"
              >
                {finish}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="flex items-center space-x-1 border p-2 rounded">
            <Image
              src="/assets/icons/button.png"
              alt="Style Icon"
              width={24}
              height={24}
            />
            <span className="font-bold">{style}</span>
          </span>
        </div>
        <Link
          href={link}
          className="block bg-black text-white w-full py-2 px-4 text-center"
        >
          Details
        </Link>
      </div>
    </motion.div>
  );
};

export default DesignCard;
