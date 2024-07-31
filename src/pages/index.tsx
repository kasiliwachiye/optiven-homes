import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/scroll/Intro";
import Description from "@/components/scroll/Description";
import Section from "@/components/scroll/Section";
import Curve from "@/components/transition/Curve";
import PlanCard from "@/components/plan-card";
import Footer from "@/components/scroll/Footer";

const plans = [
  {
    id: 1,
    image: "a.jpg",
    title: "Elegant Maisonette",
    intro:
      "A modern and elegant maisonette with spacious rooms and a beautiful garden.",
    bedrooms: 4,
    bathrooms: 3,
    price: 25000000,
    propertyType: "Maisonette",
    link: "/plans/elegant-maisonette",
  },
  {
    id: 2,
    image: "b.jpg",
    title: "Modern Bungalow",
    intro: "A stylish bungalow with modern amenities and a cozy atmosphere.",
    bedrooms: 3,
    bathrooms: 2,
    price: 18000000,
    propertyType: "Bungalow",
    link: "/plans/modern-bungalow",
  },
  {
    id: 3,
    image: "c.jpg",
    title: "Luxury Apartment",
    intro: "A luxurious apartment with stunning views and premium facilities.",
    bedrooms: 2,
    bathrooms: 2,
    price: 20000000,
    propertyType: "Apartment",
    link: "/plans/luxury-apartment",
  },
  {
    id: 4,
    image: "d.jpg",
    title: "Cozy Cottage",
    intro: "A charming cottage with a rustic feel and modern conveniences.",
    bedrooms: 2,
    bathrooms: 1,
    price: 15000000,
    propertyType: "Cottage",
    link: "/plans/cozy-cottage",
  },
  {
    id: 5,
    image: "e.jpg",
    title: "Spacious Villa",
    intro:
      "A grand villa with ample space, luxurious interiors, and a large garden.",
    bedrooms: 5,
    bathrooms: 4,
    price: 35000000,
    propertyType: "Villa",
    link: "/plans/spacious-villa",
  },
  {
    id: 6,
    image: "f.jpg",
    title: "Modern Duplex",
    intro: "A contemporary duplex with modern design and high-end finishes.",
    bedrooms: 4,
    bathrooms: 3,
    price: 28000000,
    propertyType: "Duplex",
    link: "/plans/modern-duplex",
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Curve>
      <Intro />
      <Description />
      <Section />
      <div className="container mx-auto my-20 px-4">
        <h2 className="text-[5vw] leading-[0.8] font-bold text-center mb-12">
          Featured Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}

