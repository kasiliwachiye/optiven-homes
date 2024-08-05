import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

interface DetailsSectionProps {
  community: {
    title: string;
    intro: string;
    amenities: string[];
    images: string[];
    location: string;
  };
}

export default function DetailsSection({ community }: DetailsSectionProps) {
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
            src={`/assets/communities/${community.images[0]}`}
            fill
            alt="Banner Image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <h1 className="text-3xl lg:text-[5vw] leading-[0.8] font-bold mb-8">
        {community.title}
      </h1>
      <p className="text-lg mb-4">{community.intro}</p>
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold my-4">Amenities</h2>
      <div className="flex flex-wrap gap-2">
        {community.amenities.map((amenity, index) => (
          <span
            className="bg-gray-200 text-gray-800 text-lg font-semibold px-2 py-1 rounded"
            key={index}
          >
            {amenity}
          </span>
        ))}
      </div>
      <hr className="my-4" />
      <h2 className="text-2xl font-semibold my-4">Location</h2>
      <div className="mb-4 text-gray-800">
        <span className="inline-flex items-center space-x-1 border p-2 rounded">
          <Image
            src="/assets/icons/location.png"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span className="font-bold">{community.location}</span>
        </span>
      </div>
    </div>
  );
}
