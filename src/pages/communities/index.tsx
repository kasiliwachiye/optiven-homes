import { useMemo } from "react";
import { useRouter } from "next/router";
import CommunityCard from "@/components/community-card";
import CommunityFilterBar from "@/components/community-filter-bar";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";

const communities = [
  {
    id: 1,
    image: "a.jpg",
    title: "Family-Friendly Suburb",
    intro:
      "A vibrant community with parks, schools, and family-friendly amenities.",
    amenities: ["Park", "School", "Playground"],
    location: "Karen",
    price: 10000000,
    link: "/community/family-friendly-suburb",
  },
  {
    id: 2,
    image: "b.jpg",
    title: "Luxury Downtown Living",
    intro:
      "Experience luxury living with high-end amenities in the heart of the city.",
    amenities: ["Gym", "Pool", "Shopping Mall"],
    location: "Westlands",
    price: 20000000,
    link: "/community/luxury-downtown-living",
  },
  {
    id: 3,
    image: "c.jpg",
    title: "Eco-Friendly Community",
    intro: "Live sustainably in an eco-friendly community with green spaces.",
    amenities: ["Renewable Energy", "Recycling Facilities"],
    location: "Nanyuki",
    price: 15000000,
    link: "/community/eco-friendly-community",
  },
  // Add more communities as needed
];

interface InitialFilters {
  amenities?: string[];
  location?: string[];
  minPrice?: string;
  maxPrice?: string;
}

export default function Community() {
  const router = useRouter();
  const { amenities, location, minPrice, maxPrice } = router.query;

  const initialFilters: InitialFilters = {
    amenities: amenities
      ? Array.isArray(amenities)
        ? amenities
        : amenities.split(",")
      : [],
    location: location
      ? Array.isArray(location)
        ? location
        : location.split(",")
      : [],
    minPrice: minPrice as string,
    maxPrice: maxPrice as string,
  };

  const filteredCommunities = useMemo(() => {
    return communities.filter((community) => {
      const matchesAmenities =
        initialFilters.amenities?.length === 0 ||
        initialFilters.amenities?.every((amenity) =>
          community.amenities.includes(amenity)
        );

      const matchesLocation =
        initialFilters.location?.length === 0 ||
        initialFilters.location?.includes(community.location);

      const matchesMinPrice =
        !initialFilters.minPrice ||
        community.price >= parseInt(initialFilters.minPrice);

      const matchesMaxPrice =
        !initialFilters.maxPrice ||
        community.price <= parseInt(initialFilters.maxPrice);

      return (
        matchesAmenities &&
        matchesLocation &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [initialFilters]);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <CommunityFilterBar initialFilters={initialFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredCommunities.map((community) => (
            <CommunityCard key={community.id} {...community} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}
