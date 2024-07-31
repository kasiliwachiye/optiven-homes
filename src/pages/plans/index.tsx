import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PlanCard from "@/components/plan-card";
import FilterBar from "@/components/filter-bar";
import Curve from "@/components/transition/Curve";
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

interface InitialFilters {
  propertyTypes?: string[];
  bedrooms?: number[];
  minPrice?: string;
  maxPrice?: string;
}

export default function HousePlans() {
  const router = useRouter();
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

  const [filteredPlans, setFilteredPlans] = useState(plans);

  useEffect(() => {
    const filtered = plans.filter((plan) => {
      const matchesPropertyType =
        (initialFilters.propertyTypes?.length || 0) === 0 ||
        initialFilters.propertyTypes?.some((type) =>
          plan.propertyType.toLowerCase().includes(type.toLowerCase())
        );
      const matchesBedrooms =
        (initialFilters.bedrooms?.length || 0) === 0 ||
        initialFilters.bedrooms?.includes(plan.bedrooms);
      const matchesMinPrice =
        !initialFilters.minPrice ||
        plan.price >= parseInt(initialFilters.minPrice);
      const matchesMaxPrice =
        !initialFilters.maxPrice ||
        plan.price <= parseInt(initialFilters.maxPrice);

      return (
        matchesPropertyType &&
        matchesBedrooms &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    setFilteredPlans(filtered);
  }, [propertyTypes, bedrooms, minPrice, maxPrice]);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <FilterBar initialFilters={initialFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredPlans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
