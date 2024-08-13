import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

interface Design {
  id: number;
  image: string;
  tags: string[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const images = Array.from({ length: 17 }, (_, i) =>
  String.fromCharCode(97 + i)
).map((letter) => `interiors/${letter}.jpg`);

const shuffledImages = shuffleArray(images);

const tags = [
  "Rustic",
  "Minimalist",
  "Scandinavian",
  "Mid-Century Modern",
  "Bathroom",
  "Living Room",
  "Kitchen",
  "Outdoor",
  "Vintage",
  "Contemporary",
  "Industrial",
  "Bohemian",
  "Traditional",
  "Modern",
  "Eclectic",
  "Art Deco",
];

const designs: Design[] = shuffledImages.map((image, index) => ({
  id: index + 1,
  image,
  tags: [tags[index % tags.length], tags[(index + 1) % tags.length]],
}));

const categories = ["All categories", ...Array.from(new Set(tags))];

export default function InteriorDesigns() {
  const [filteredDesigns, setFilteredDesigns] = useState<Design[]>(designs);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All categories");

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedCategory === "All categories") {
      setFilteredDesigns(designs);
    } else {
      setFilteredDesigns(
        designs.filter((design) => design.tags.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  // Handle grab and scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseUp = () => {
      isDown = false;
      container.style.cursor = "grab";
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <div
          className="scrollable-category-bar flex items-center justify-start py-4 md:py-8 space-x-3 overflow-x-auto cursor-grab"
          ref={scrollContainerRef}
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${
                selectedCategory === category
                  ? "text-blue-700 border-blue-600"
                  : "text-gray-900 border-white"
              } hover:text-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-xl text-base font-medium px-5 min-w-fit py-2.5 text-center dark:text-white dark:focus:ring-gray-800`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {filteredDesigns.map((design) => (
            <div key={design.id} className="mb-4">
              <img
                src={`assets/${design.image}`}
                alt={`image for ${design.tags.join(", ")}`}
                className="h-auto max-w-full rounded-lg"
              />
            </div>
          ))}
        </Masonry>
      </div>
      <Footer />
    </Curve>
  );
}
