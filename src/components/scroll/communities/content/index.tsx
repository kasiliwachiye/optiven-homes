import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContentSectionProps {
  content: string;
  images: string[];
}

export default function ContentSection({
  content,
  images,
}: ContentSectionProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="prose prose-lg max-w-none mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={`/assets/communities/${image}`}
              width={800}
              height={600}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
