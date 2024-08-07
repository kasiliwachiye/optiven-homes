import React, { useEffect } from "react";
import Lenis from "lenis";
import AboutSection from "@/components/scroll/about/AboutSection";
import AboutDescription from "@/components/scroll/about/AboutDescription";
import Footer from "@/components/scroll/Footer";
import Curve from "@/components/transition/Curve";

export default function About() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <Curve>
      <AboutSection />
      <AboutDescription />
      <Footer />
    </Curve>
  );
}
