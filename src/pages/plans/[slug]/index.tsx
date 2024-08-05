import { useEffect } from "react";
import { useRouter } from "next/router";
import Lenis from "lenis";
import DetailsSection from "@/components/scroll/plan/details-section";
import ContentSection from "@/components/scroll/plan/content";
import Footer from "@/components/scroll/Footer";
import Section from "@/components/scroll/home/Section";
import LinksSection from "@/components/scroll/plan/links-section";
import Curve from "@/components/transition/Curve";
import PriceSection from "@/components/scroll/plan/price-section";

const getPlanBySlug = (slug: string) => {
  const plans = [
    {
      slug: "elegant-maisonette",
      title: "Elegant Maisonette",
      intro:
        "A modern and elegant maisonette with spacious rooms and a beautiful garden.",
      bedrooms: 4,
      bathrooms: 3,
      plinthArea: 200,
      unitAreaPrice: 500000,
      bannerImage: "a.jpg",
      images: [
        "a.jpg",
        "b.jpg",
        "c.jpg",
        "d.jpg",
        "e.jpg",
        "f.jpg",
        "g.jpg",
        "h.jpg",
      ],
      content: `
        <p>Welcome to the Elegant Maisonette, a perfect blend of modern design and luxury living. This stunning home offers a spacious and functional layout, ideal for families looking for comfort and style.</p>
        <br/>
        <strong>Features:</strong>
        <li>4 Bedrooms: Each bedroom is thoughtfully designed with ample closet space and large windows for natural light.</li>
        <li>3 Bathrooms: Enjoy modern bathrooms with high-end fixtures and finishes.</li>
        <li>2 Living Rooms: A formal living room for entertaining guests and a cozy family room for relaxation.</li>
        <li>1 Kitchen: A state-of-the-art kitchen equipped with modern appliances, custom cabinetry, and a spacious pantry.</li>
        <li>1 Dining Area: An elegant dining area that accommodates a large dining table for family gatherings.</li>
        <li>1 Garage: A spacious garage with enough room for two vehicles and additional storage.</li>
        <li>Swimming Pool: A private swimming pool for leisure and exercise.</li>
        <li>Garden: A beautifully landscaped garden with space for outdoor activities and a tranquil retreat.</li>
        <br/>
        <p>The Elegant Maisonette is designed to cater to your every need, providing a sanctuary that is both functional and aesthetically pleasing. With its luxurious interiors and premium amenities, this home is a true masterpiece. Experience the perfect blend of comfort and sophistication in this exquisite property.</p>
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
    },
  ];

  return plans.find((plan) => plan.slug === slug);
};

export default function PlanDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const plan = getPlanBySlug(slug as string);

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
    <div>
      <Curve>
        <DetailsSection plan={plan} />
        <Section />
        <ContentSection content={plan.content} images={plan.images} />
        <PriceSection plinthArea={plan.plinthArea} />
        <LinksSection />
        <Footer />
      </Curve>
    </div>
  );
}
