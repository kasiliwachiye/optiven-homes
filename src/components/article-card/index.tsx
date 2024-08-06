import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleCardProps {
  image: string;
  title: string;
  date: string;
  intro: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  title,
  date,
  intro,
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
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-4">{intro}</p>
        <a href={link} className="text-green-500 hover:underline">
          Read More
        </a>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
