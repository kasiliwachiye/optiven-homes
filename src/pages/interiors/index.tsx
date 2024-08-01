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
    title: "Modern Living Room",
    intro:
      "A sleek and modern living room with minimalist decor and smart home features.",
    style: "Modern",
    price: 5000000,
    link: "/interior-designs/modern-living-room",
  },
  {
    id: 2,
    image: "b.jpg",
    title: "Classic Bedroom",
    intro:
      "A classic bedroom design with elegant furnishings and timeless charm.",
    style: "Classic",
    price: 4000000,
    link: "/interior-designs/classic-bedroom",
  },
  {
    id: 3,
    image: "c.jpg",
    title: "Scandinavian Kitchen",
    intro:
      "A Scandinavian-inspired kitchen with clean lines and natural materials.",
    style: "Scandinavian",
    price: 6000000,
    link: "/interior-designs/scandinavian-kitchen",
  },
  // Add more designs as needed
];

interface InitialFilters {
  styles?: string[];
  minPrice?: string;
  maxPrice?: string;
}

export default function InteriorDesigns() {
  const router = useRouter();
  const { styles, minPrice, maxPrice } = router.query;

  const initialFilters: InitialFilters = {
    styles: styles ? (Array.isArray(styles) ? styles : styles.split(",")) : [],
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
      const matchesMinPrice =
        !initialFilters.minPrice ||
        design.price >= parseInt(initialFilters.minPrice);
      const matchesMaxPrice =
        !initialFilters.maxPrice ||
        design.price <= parseInt(initialFilters.maxPrice);

      return matchesStyle && matchesMinPrice && matchesMaxPrice;
    });

    setFilteredDesigns(filtered);
  }, [styles, minPrice, maxPrice]);

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
