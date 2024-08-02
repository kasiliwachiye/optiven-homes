import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface DetailsSectionProps {
  plan: {
    title: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    plinthArea: number;
    features: string[];
    bannerImage: string;
  };
}

export default function DetailsSection({ plan }: DetailsSectionProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5vh", "5vh"]);
  return (
    <div className="container mx-auto px-4 py-16 lg:py-32">
      <div className="relative h-[70vh]">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={`/assets/${plan.bannerImage}`}
            fill
            alt="Banner Image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <h1 className="text-[5vw] leading-[0.8] font-bold mb-12">{plan.title}</h1>
      <div className="flex flex-wrap gap-8 mb-8">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Bedrooms:</span>
          <span>{plan.bedrooms}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Bathrooms:</span>
          <span>{plan.bathrooms}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Area:</span>
          <span>{plan.area} sqft</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Plinth Area:</span>
          <span>{plan.plinthArea} sqft</span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="list-disc list-inside text-lg">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
