import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

const housePlan = {
  title: "Elegant Maisonette",
  description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
    Cras venenatis euismod malesuada. Nullam ac risus bibendum, laoreet libero vel, euismod lorem. Suspendisse 
    potenti. Maecenas suscipit purus sit amet velit ultricies, at venenatis purus molestie.
  `,
  features: [
    "4 Bedrooms",
    "3 Bathrooms",
    "2 Living Rooms",
    "1 Kitchen",
    "1 Dining Area",
    "1 Garage",
    "Swimming Pool",
    "Garden",
  ],
  images: ["a.jpg", "b.jpg", "c.jpg", "d.jpg"],
  price: 25000000, // in KES
};

export default function HousePlan() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {housePlan.title}
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <p className="text-xl leading-relaxed text-gray-700">
              {housePlan.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              {housePlan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
            <motion.div className="relative w-full h-full transform transition-transform duration-500 hover:scale-110">
              <Image
                src={`/assets/${housePlan.images[0]}`}
                alt={housePlan.title}
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {housePlan.images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg"
            >
              <motion.div className="relative w-full h-full transform transition-transform duration-500 hover:scale-110">
                <Image
                  src={`/assets/${image}`}
                  alt={`${housePlan.title} ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-center mb-12">
          <p className="text-3xl font-bold text-gray-800 mb-4">
            Price: KES {housePlan.price.toLocaleString()}
          </p>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-400">
            Contact Us for More Details
          </button>
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
