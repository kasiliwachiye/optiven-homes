import { useEffect } from "react";
import { useRouter } from "next/router";
import Lenis from "lenis";
import DetailsSection from "@/components/scroll/communities/details-section";
import ContentSection from "@/components/scroll/communities/content";
import Footer from "@/components/scroll/Footer";
import LinksSection from "@/components/scroll/communities/links-section";
import Curve from "@/components/transition/Curve";
import PriceSection from "@/components/scroll/communities/price-section";
import Section from "@/components/scroll/Section";

// Example data fetching function
const getCommunityBySlug = (slug: string) => {
  const communities = [
    {
      slug: "family-friendly-suburb",
      title: "Family-Friendly Suburb",
      intro:
        "A vibrant community with parks, schools, and family-friendly amenities.",
      amenities: ["Park", "School", "Playground"],
      location: "Karen",
      price: 10000000,
      images: ["a.jpg", "d.jpg", "e.jpg", "f.jpg"],
      content: `
        <p>Welcome to the Family-Friendly Suburb, a community designed for families seeking a safe and nurturing environment.</p>
        <br/>
        <strong>Amenities</strong>
        <ul>
          <li><strong>Parks:</strong> Enjoy beautiful green spaces for recreation and relaxation.</li>
          <li><strong>Schools:</strong> Access to top-rated schools within walking distance.</li>
          <li><strong>Playgrounds:</strong> Safe and fun areas for children to play and explore.</li>
        </ul>
        <br/>
        <p>This suburb offers a peaceful and connected lifestyle, with everything you need right at your doorstep. Experience the perfect blend of community living and modern conveniences in this well-planned neighborhood.</p>
      `,
    },
  ];

  return communities.find((community) => community.slug === slug);
};

export default function CommunityDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const community = getCommunityBySlug(slug as string);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (!community) return <div>Loading...</div>;

  return (
    <div>
      <Curve>
        <DetailsSection community={community} />
        <Section />
        <ContentSection content={community.content} images={community.images} />
        <PriceSection price={community.price} />
        <LinksSection />
        <Footer />
      </Curve>
    </div>
  );
}
