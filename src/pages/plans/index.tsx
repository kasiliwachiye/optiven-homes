import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PlanCard from "@/components/plan-card";
import FilterBar from "@/components/filter-bar";
import Curve from "@/components/transition/Curve";
import Footer from "@/components/scroll/Footer";
import { fetchContent } from "../../../lib/api";

interface Plan {
  id: number;
  attributes: {
    displayImage: string;
    title: string;
    intro: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    propertyType: string;
    link: string;
  };
}

interface HousePlansProps {
  plans: Plan[];
  error?: string;
}

export default function HousePlans({ plans, error }: HousePlansProps) {
  const router = useRouter();
  const { propertyTypes, bedrooms, minPrice, maxPrice } = router.query;

  const initialFilters = {
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

  const [filteredPlans, setFilteredPlans] = useState<Plan[]>(plans);

  useEffect(() => {
    const filtered = plans.filter((plan) => {
      const matchesPropertyType =
        (initialFilters.propertyTypes.length || 0) === 0 ||
        initialFilters.propertyTypes.some((type) =>
          plan.attributes.propertyType
            .toLowerCase()
            .includes(type.toLowerCase())
        );
      const matchesBedrooms =
        (initialFilters.bedrooms.length || 0) === 0 ||
        initialFilters.bedrooms.includes(plan.attributes.bedrooms);
      const matchesMinPrice =
        !initialFilters.minPrice ||
        plan.attributes.price >= parseInt(initialFilters.minPrice);
      const matchesMaxPrice =
        !initialFilters.maxPrice ||
        plan.attributes.price <= parseInt(initialFilters.maxPrice);

      return (
        matchesPropertyType &&
        matchesBedrooms &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    setFilteredPlans(filtered);
  }, [propertyTypes, bedrooms, minPrice, maxPrice, plans]);

  return (
    <Curve>
      <div className="container mx-auto py-20 px-4">
        <FilterBar initialFilters={initialFilters} />
        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                displayImage={plan.attributes.displayImage}
                title={plan.attributes.title}
                intro={plan.attributes.intro}
                bedrooms={plan.attributes.bedrooms}
                bathrooms={plan.attributes.bathrooms}
                link={plan.attributes.link}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </Curve>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await fetchContent("plans", {}, 1, 25, [
      "displayImage",
      "bannerImage",
      "galleryImages",
      "finishTypes",
      "propertyType",
    ]);

    return {
      props: {
        plans: data.map((item: any) => ({
          id: item.id,
          attributes: {
            ...item.attributes,
            displayImage:
              item.attributes.displayImage?.data?.attributes?.url || "",
            bannerImage:
              item.attributes.bannerImage?.data?.attributes?.url || "",
            galleryImages:
              item.attributes.galleryImages?.data?.map(
                (img: any) => img.attributes.url
              ) || [],
            link: `/plans/${item.id}`,
          },
        })),
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching plans:", error);
    return {
      props: {
        plans: [],
        error: "Failed to load plans. Please try again later.",
      },
    };
  }
}
