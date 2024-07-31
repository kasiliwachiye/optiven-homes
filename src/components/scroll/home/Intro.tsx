"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import FilterBar from "@/components/filter-bar";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const [initialFilters, setInitialFilters] = useState<InitialFilters>({});

  useEffect(() => {
    const { propertyTypes, bedrooms, minPrice, maxPrice } = router.query;

    const filters: InitialFilters = {
      propertyTypes: propertyTypes
        ? Array.isArray(propertyTypes)
          ? propertyTypes
          : (propertyTypes as string).split(",")
        : [],
      bedrooms: bedrooms
        ? Array.isArray(bedrooms)
          ? bedrooms.map((b) => parseInt(b, 10))
          : (bedrooms as string).split(",").map((b) => parseInt(b, 10))
        : [],
      minPrice: minPrice as string,
      maxPrice: maxPrice as string,
    };

    setInitialFilters(filters);
  }, [router.query]);

  return (
    <div className="h-screen overflow-hidden relative" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={`/assets/d.jpg`}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute bottom-12 w-full">
        <FilterBar initialFilters={initialFilters} />
      </div>
    </div>
  );
}
