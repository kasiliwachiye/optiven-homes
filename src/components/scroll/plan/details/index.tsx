import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface DetailsProps {
  plan: {
    title: string;
    bedrooms: number;
    bathrooms: number;
    intro: string;
    plinthArea: number;
    features: string[];
    displayImage: string;
  };
}

export default function Details({ plan }: DetailsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5vh", "5vh"]);
  return (
    <div className="container mx-auto px-4 py-16 lg:pt-32">
      <div className="relative h-[70vh]">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={plan.displayImage}
            fill
            alt="Banner Image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <h1 className="text-3xl lg:text-[5vw] leading-[0.8] font-bold mb-8">
        {plan.title}
      </h1>
      <div className="flex items-center text-lg space-x-2">
        <p>{plan.intro}</p>
      </div>
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold my-4">Features</h2>
      <div className="flex flex-wrap gap-2">
        {plan.features.map((feature, index) => (
          <span
            className="bg-gray-200 text-gray-800 text-lg font-semibold px-2 py-1 rounded"
            key={index}
          >
            {feature}
          </span>
        ))}
      </div>
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold my-4">Plinth Area</h2>
      <h1 className="text-5xl lg:text-[5vw] leading-[0.8] font-bold mb-8">
        {plan.plinthArea}M SQ
      </h1>
    </div>
  );
}
