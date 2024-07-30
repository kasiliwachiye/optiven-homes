import React, { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import Background from "../../../public/assets/d.jpg";
import FilterBar from "@/components/filter-bar";
import router from "next/router";

interface InitialFilters {
  propertyTypes?: string[];
  bedrooms?: number[];
  minPrice?: string;
  maxPrice?: string;
}

export default function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const { propertyTypes, bedrooms, minPrice, maxPrice } = router.query;

  const initialFilters: InitialFilters = {
    propertyTypes: propertyTypes
      ? Array.isArray(propertyTypes)
        ? propertyTypes
        : propertyTypes.split(",")
      : [],
    bedrooms: bedrooms
      ? Array.isArray(bedrooms)
        ? bedrooms.map((b) => parseInt(b, 10))
        : bedrooms.split(",").map((b) => parseInt(b, 10))
      : [],
    minPrice: minPrice as string,
    maxPrice: maxPrice as string,
  };

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute bottom-16 w-full">
        <FilterBar initialFilters={initialFilters} />
      </div>
    </div>
  );
}
