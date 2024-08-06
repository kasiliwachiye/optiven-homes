// pages/plans/[slug]/index.tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Lenis from "lenis";
import Details from "@/components/scroll/plan/details";
import Content from "@/components/scroll/plan/content";
import Footer from "@/components/scroll/Footer";
import ParallaxImageSection from "@/components/scroll/ParallaxImageSection";
import Links from "@/components/scroll/plan/links";
import Curve from "@/components/transition/Curve";
import Price from "@/components/scroll/plan/price";
import { type BlocksContent } from "@strapi/blocks-react-renderer";
import { fetchContent } from "../../../../lib/api";

interface Plan {
  title: string;
  displayImage: string;
  intro: string;
  bedrooms: number;
  bathrooms: number;
  plinthArea: number;
  bannerImage: string;
  images: string[];
  content: BlocksContent;
  features: string[];
  waterFormLink: string;
  designContractLink: string;
  floorPlanPDF: string;
}

interface FinishType {
  name: string;
  unitPrice: number;
}

export default function PlanDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [plan, setPlan] = useState<Plan | null>(null);
  const [finishTypes, setFinishTypes] = useState<FinishType[]>([]);

  useEffect(() => {
    if (!slug) return;

    const fetchPlanData = async () => {
      try {
        const [planResponse, finishTypesResponse] = await Promise.all([
          fetchContent("plans", { slug }, 1, 1, [
            "bannerImage",
            "galleryImages",
            "finishTypes",
            "propertyType",
            "displayImage",
          ]),
          fetchContent("finish-types"),
        ]);

        const planData = planResponse.data[0]?.attributes;
        const finishTypesData = finishTypesResponse.data;

        if (planData) {
          setPlan({
            title: planData.title,
            intro: planData.intro,
            displayImage: planData.displayImage?.data?.attributes?.url || "",
            bedrooms: planData.bedrooms,
            bathrooms: planData.bathrooms,
            plinthArea: parseInt(planData.plinthArea),
            bannerImage: planData.bannerImage?.data?.attributes?.url || "",
            images:
              planData.galleryImages?.data?.map(
                (img: any) => img.attributes.url
              ) || [],
            content: planData.content,
            features: [
              `${planData.bedrooms} Bedrooms`,
              `${planData.bathrooms} Bathrooms`,
            ],
            waterFormLink: planData.waterFormLink,
            designContractLink: planData.designContractLink,
            floorPlanPDF: planData.floorPlanPDF,
          });
        }

        if (finishTypesData) {
          setFinishTypes(
            finishTypesData.map((type: any) => ({
              name: type.attributes.name,
              unitPrice: parseInt(type.attributes.unitPrice, 10),
            }))
          );
        }
      } catch (error) {
        console.error("Failed to fetch plan or finish type data:", error);
      }
    };

    fetchPlanData();
  }, [slug]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (!plan) return <div>Loading...</div>;

  return (
    <Curve>
      <Details plan={plan} />
      <ParallaxImageSection src={plan.bannerImage} />
      <Content content={plan.content} images={plan.images} />
      <Price plinthArea={plan.plinthArea} finishTypes={finishTypes} />
      <Links
        waterFormLink={plan.waterFormLink}
        designContractLink={plan.designContractLink}
        floorPlanPDF={plan.floorPlanPDF}
      />
      <Footer />
    </Curve>
  );
}
