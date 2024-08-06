import { useEffect } from "react";
import { useRouter } from "next/router";
import Lenis from "lenis";
import DetailsSection from "@/components/scroll/interior/details-section";
import ContentSection from "@/components/scroll/interior/content";
import Footer from "@/components/scroll/Footer";
import LinksSection from "@/components/scroll/interior/links-section";
import Curve from "@/components/transition/Curve";
import Section from "@/components/scroll/Section";
import PriceSection from "@/components/scroll/interior/price-section";

// Example data fetching function
const getInteriorBySlug = (slug: string) => {
  const designs = [
    {
      slug: "minimalist",
      title: "Minimalist",
      intro:
        "A graphic contrast with a combination of organic modern and organic minimalism.",
      style: "Minimalist",
      finishing: ["Minimalist", "Luxury"],
      plinthArea: 300,
      images: ["b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg"],
      content: `
        <p>Minimalist interiors are a celebration of simplicity and functionality, creating serene spaces that are free from clutter and distractions. This design philosophy embraces the idea that less is more, focusing on the essentials to achieve harmony and balance in every room.</p>
        <br/>
        <strong>Features</strong>
        <ul>
          <li>
            <strong>Sleek Lines and Uncluttered Spaces</strong> 
            <p>The minimalist design emphasizes clean, straight lines and open spaces. Furniture is carefully selected to provide functionality while maintaining a sense of spaciousness. Each piece serves a purpose and is placed strategically to enhance the room's flow and usability.</p>
          </li>
          <li>
            <strong>Neutral Color Palettes</strong> 
            <p>Soft, neutral tones dominate the color scheme, creating a calm and soothing atmosphere. Whites, beiges, grays, and muted earth tones are commonly used to evoke a sense of peace and tranquility, allowing the mind to relax and focus.</p>
          </li>
          <li>
            <strong>Emphasis on Light and Space</strong> 
            <p>Natural light plays a crucial role in minimalist interiors, enhancing the openness of the space. Large windows and strategically placed mirrors are used to reflect light and make rooms feel larger and more inviting. The interplay of light and shadow adds depth and interest without overwhelming the senses.</p>
          </li>
          <li>
            <strong>Functional Decor</strong>
            <p>Decorative elements are kept to a minimum, often featuring art pieces or sculptures that serve as focal points. These are carefully chosen to complement the overall aesthetic and to ensure they contribute to the space's functionality and appeal.</p>
          </li>
          <li>
            <strong>Quality Over Quantity</strong>
            <p>Minimalist interiors prioritize quality materials and craftsmanship. Furniture and finishes are selected for their durability and aesthetic value, ensuring that each piece contributes to the room's elegance and longevity.</p>
          </li>
        </ul>
        <br/>
        <p>This minimalist interior design offers a peaceful retreat from the outside world, providing a space where you can unwind and find clarity. It's a perfect choice for those who appreciate the beauty of simplicity and the comfort of an organized, tranquil environment.</p>
      `,
      features: [
        "Sleek lines",
        "Uncluttered spaces",
        "Neutral color palettes",
        "Emphasis on light and space",
      ],
    },
  ];

  return designs.find((design) => design.slug === slug);
};

export default function InteriorDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const design = getInteriorBySlug(slug as string);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (!design) return <div>Loading...</div>;

  return (
    <div>
      <Curve>
        <DetailsSection design={design} />
        <Section />
        <ContentSection content={design.content} images={design.images} />
        <PriceSection plinthArea={design.plinthArea} />
        <LinksSection />
        <Footer />
      </Curve>
    </div>
  );
}
