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
    title: "Cozy Grand Residence",
    intro:
      "Enjoy the peaceful countryside with all the modern amenities in this farmhouse-style home.",
    bedrooms: 3,
    bathrooms: 2,
    link: "/plans/elegant-maisonette",
  },
  {
    id: 2, 
    image: "b.jpg",
    title: "Modern Rustic Estate",
    intro:
      "Nestled in the Colorado Rockies, this estate offers the perfect getaway for outdoor enthusiasts.",
    bedrooms: 4,
    bathrooms: 3,
    link: "/plans/elegant-maisonette",
  },
  {
    id: 3, 
    image: "c.jpg",
    title: "Urban City Apartment",
    intro:
      "Experience the vibrant city life with all the modern conveniences in this sleek urban apartment.",
    bedrooms: 2,
    bathrooms: 2,
    link: "/plans/elegant-maisonette",
  },
  {
    id: 4, 
    image: "d.jpg",
    title: "Suburban Family Home",
    intro:
      "A perfect family home located in the quiet suburbs, complete with spacious rooms and a large backyard.",
    bedrooms: 4,
    bathrooms: 3,
    link: "/plans/elegant-maisonette",
  },
  {
    id: 5, 
    image: "e.jpg",
    title: "Luxury Penthouse",
    intro:
      "Live in the lap of luxury with this exquisite penthouse offering stunning city views and premium amenities.",
    bedrooms: 5,
    bathrooms: 4,
    link: "/plans/elegant-maisonette",
  },
  {
    id: 6, 
    image: "f.jpg",
    title: "Coastal Beach House",
    intro:
      "Wake up to the sound of waves in this beautiful beach house, ideal for those who love the sea.",
    bedrooms: 3,
    bathrooms: 3,
    link: "/plans/elegant-maisonette",
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
  }, []);

  return (
    <Curve>
      <Intro />
      <Description />
      <Section />
      <div className="container mx-auto my-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
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

