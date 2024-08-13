import { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

interface Design {
  id: number;
  image: string;
  style: string;
}

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const images = Array.from({ length: 17 }, (_, i) =>
  String.fromCharCode(97 + i)
).map((letter) => `interiors/${letter}.jpg`);

const shuffledImages = shuffleArray(images);

const styles = ["Rustic", "Minimalist", "Scandinavian", "Mid-Century Modern"];

const designs: Design[] = shuffledImages.map((image, index) => ({
  id: index + 1,
  image,
  style: styles[index % styles.length],
}));

const categories = [
  "All categories",
  "Rustic",
  "Minimalist",
  "Scandinavian",
  "Mid-Century Modern",
];

export default function InteriorDesigns() {
  const [filteredDesigns, setFilteredDesigns] = useState<Design[]>(designs);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All categories");

  useEffect(() => {
    if (selectedCategory === "All categories") {
      setFilteredDesigns(designs);
    } else {
      setFilteredDesigns(
        designs.filter((design) => design.style === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${
                selectedCategory === category
                  ? "text-blue-700 border-blue-600"
                  : "text-gray-900 border-white"
              } hover:text-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
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
                alt={`image for ${design.style}`}
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
