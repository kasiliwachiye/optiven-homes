import { useEffect, useState } from "react";
import Lenis from "lenis";
import Intro from "@/components/scroll/home/Intro";
import Description from "@/components/scroll/home/Description";
import ParallaxImageSection from "@/components/scroll/ParallaxImageSection";
import Curve from "@/components/transition/Curve";
import PlanCard from "@/components/plan-card";
import Footer from "@/components/scroll/Footer";
import { fetchContent } from "../../lib/api";

interface Plan {
  id: number;
  attributes: {
    displayImage: string;
    title: string;
    intro: string;
    bedrooms: number;
    bathrooms: number;
    propertyType: string;
  };
}

export default function Home() {
  const [featuredPlans, setFeaturedPlans] = useState<Plan[]>([]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const fetchFeaturedPlans = async () => {
      try {
        const { data } = await fetchContent(
          "plans",
          { "filters[isFeatured][$eq]": "true" }, // Convert boolean to string
          1,
          6,
          ["displayImage", "propertyType"]
        );

        const plans = data.map((item: any) => ({
          id: item.id,
          attributes: {
            ...item.attributes,
            displayImage:
              item.attributes.displayImage?.data?.attributes?.url || "",
          },
        }));
        setFeaturedPlans(plans);
      } catch (error) {
        console.error("Failed to fetch featured plans:", error);
      }
    };

    fetchFeaturedPlans();
  }, []);

  return (
    <Curve>
      <Intro />
      <Description />
      <ParallaxImageSection />
      <div className="container mx-auto my-20 px-4">
        <h2 className="text-[5vw] leading-[0.8] font-bold text-center mb-12">
          Featured Plans
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              displayImage={plan.attributes.displayImage}
              title={plan.attributes.title}
              intro={plan.attributes.intro}
              bedrooms={plan.attributes.bedrooms}
              bathrooms={plan.attributes.bathrooms}
              link={`/plans/${plan.id}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}

