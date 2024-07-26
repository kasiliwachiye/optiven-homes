import { useState } from "react";
import HousePlanCard from "@/components/house-plan-card";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

const housePlans = [
  {
    image: "a.jpg",
    title: "Elegant Maisonette",
    bedrooms: 4,
    bathrooms: 3,
    price: 25000000, // in KES
    link: "/plans/elegant-maisonette",
  },
  {
    image: "b.jpg",
    title: "Modern Bungalow",
    bedrooms: 3,
    bathrooms: 2,
    price: 18000000, // in KES
    link: "/plans/modern-bungalow",
  },
  {
    image: "c.jpg",
    title: "Luxury Apartment",
    bedrooms: 2,
    bathrooms: 2,
    price: 20000000, // in KES
    link: "/plans/luxury-apartment",
  },
  {
    image: "d.jpg",
    title: "Cozy Cottage",
    bedrooms: 2,
    bathrooms: 1,
    price: 15000000, // in KES
    link: "/plans/cozy-cottage",
  },
  {
    image: "e.jpg",
    title: "Spacious Villa",
    bedrooms: 5,
    bathrooms: 4,
    price: 35000000, // in KES
    link: "/plans/spacious-villa",
  },
  {
    image: "f.jpg",
    title: "Modern Duplex",
    bedrooms: 4,
    bathrooms: 3,
    price: 28000000, // in KES
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

  const handleFilterChange = () => {
    const filtered = housePlans.filter((plan) => {
      const matchesPropertyType =
        propertyType === "Any" || plan.title.includes(propertyType);
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
  };

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col">
            <label className="font-bold mb-2">Property Type</label>
            <select
              value={propertyType}
              onChange={(e) => {
                setPropertyType(e.target.value);
                handleFilterChange();
              }}
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
              onChange={(e) => {
                setBedrooms(e.target.value);
                handleFilterChange();
              }}
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
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  handleFilterChange();
                }}
                className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
              <input
                type="number"
                placeholder="To"
                value={maxPrice}
                min={0}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  handleFilterChange();
                }}
                className="p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map((plan, index) => (
            <HousePlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
