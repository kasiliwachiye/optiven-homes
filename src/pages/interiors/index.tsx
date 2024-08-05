import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DesignCard from "@/components/interior-card";
import DesignFilterBar from "@/components/interior-filter-bar";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

const designs = [
  {
    id: 1,
    image: "a.jpg",
    title: "Rustic",
    intro:
      "Rough-hewn wood siding, exposed beams, textural fabrics, and minimal decoration.",
    style: "Rustic",
    finishing: ["High Gloss", "Woody"],
    price: 5000000,
    link: "/interiors/rustic",
  },
  {
    id: 2,
    image: "e.jpg",
    title: "Minimalist",
    intro:
      "A graphic contrast with a combination of organic modern and organic minimalism.",
    style: "Minimalist",
    finishing: ["Minimalist", "Luxury"],
    price: 4000000,
    link: "/interiors/minimalist",
  },
  {
    id: 3,
    image: "f.jpg",
    title: "Scandinavian",
    intro:
      "With sleek, often minimal elements, bespoke furniture, and high-tech details.",
    style: "Scandinavian",
    finishing: ["Bespoke", "Minimalist"],
    price: 6000000,
    link: "/interiors/scandinavian",
  },
  // Add more designs as needed
];

interface InitialFilters {
  styles?: string[];
  finishings?: string[];
  minPrice?: string;
  maxPrice?: string;
}

export default function InteriorDesigns() {
  const router = useRouter();
  const { styles, finishings, minPrice, maxPrice } = router.query;

  const initialFilters: InitialFilters = {
    styles: styles ? (Array.isArray(styles) ? styles : styles.split(",")) : [],
    finishings: finishings
      ? Array.isArray(finishings)
        ? finishings
        : finishings.split(",")
      : [],
    minPrice: minPrice as string,
    maxPrice: maxPrice as string,
  };

  const [filteredDesigns, setFilteredDesigns] = useState(designs);

  useEffect(() => {
    const filtered = designs.filter((design) => {
      const matchesStyle =
        (initialFilters.styles?.length || 0) === 0 ||
        initialFilters.styles?.some((style) =>
          design.style.toLowerCase().includes(style.toLowerCase())
        );
      const matchesFinishing =
        (initialFilters.finishings?.length || 0) === 0 ||
        initialFilters.finishings?.some((finishing) =>
          design.finishing.includes(finishing)
        );
      const matchesMinPrice =
        !initialFilters.minPrice ||
        design.price >= parseInt(initialFilters.minPrice);
      const matchesMaxPrice =
        !initialFilters.maxPrice ||
        design.price <= parseInt(initialFilters.maxPrice);

      return (
        matchesStyle && matchesFinishing && matchesMinPrice && matchesMaxPrice
      );
    });

    setFilteredDesigns(filtered);
  }, [styles, finishings, minPrice, maxPrice]);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <DesignFilterBar initialFilters={initialFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredDesigns.map((design) => (
            <DesignCard key={design.id} {...design} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
