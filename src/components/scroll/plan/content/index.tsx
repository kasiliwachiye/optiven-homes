import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

interface ContentProps {
  content: BlocksContent;
  images: string[];
}

export default function Content({ content, images }: ContentProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="prose prose-lg w-full max-w-none mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <BlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => (
              <p className="text-gray-900 w-full">{children}</p>
            ),
            heading: ({ children, level }) => {
              const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
              return (
                <HeadingTag className={`text-${level}xl font-bold w-full`}>
                  {children}
                </HeadingTag>
              );
            },
            link: ({ children, url }) => (
              <a href={url} className="text-blue-500 hover:underline">
                {children}
              </a>
            ),
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <em className="italic">{children}</em>,
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
              src={image}
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
