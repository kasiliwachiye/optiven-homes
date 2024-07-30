import { useState, useEffect } from "react";
import PlanCard from "@/components/plan-card";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

const housePlans = [
  {
    id: 1,
    image: "a.jpg",
    title: "Elegant Maisonette",
    intro: "A modern and elegant maisonette with spacious rooms and a beautiful garden.",
    bedrooms: 4,
    bathrooms: 3,
    price: 25000000,
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
    link: "/plans/cozy-cottage",
  },
  {
    id: 5,
    image: "e.jpg",
    title: "Spacious Villa",
    intro: "A grand villa with ample space, luxurious interiors, and a large garden.",
    bedrooms: 5,
    bathrooms: 4,
    price: 35000000,
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
    link: "/plans/modern-duplex",
  },
];

const propertyTypes = [
  "Any",
  "Maisonette",
  "Bungalow",
  "Apartment",
  "Cottage",
  "Villa",
  "Duplex",
];
const bedroomOptions = ["Any", 1, 2, 3, 4, 5];

export default function HousePlans() {
  const [filteredPlans, setFilteredPlans] = useState(housePlans);
  const [propertyType, setPropertyType] = useState("Any");
  const [bedrooms, setBedrooms] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const filtered = housePlans.filter((plan) => {
      const matchesPropertyType =
        propertyType === "Any" ||
        plan.title.toLowerCase().includes(propertyType.toLowerCase());
      const matchesBedrooms =
        bedrooms === "Any" || plan.bedrooms === parseInt(bedrooms);
      const matchesMinPrice =
        minPrice === "" || plan.price >= parseInt(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || plan.price <= parseInt(maxPrice);

      return (
        matchesPropertyType &&
        matchesBedrooms &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    setFilteredPlans(filtered);
  }, [propertyType, bedrooms, minPrice, maxPrice]);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <label className="font-bold mb-2">Property Type</label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {propertyTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Bedrooms</label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {bedroomOptions.map((bedroom, index) => (
                <option key={index} value={bedroom}>
                  {bedroom}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-bold mb-2">Price Range (KES)</label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="From"
                value={minPrice}
                min={0}
                onChange={(e) => setMinPrice(e.target.value)}
                className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
              <input
                type="number"
                placeholder="To"
                value={maxPrice}
                min={0}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
