import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "@/components/scroll/Intro";
import Description from "@/components/scroll/Description";
import Section from "@/components/scroll/Section";
import Curve from "@/components/transition/Curve";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Curve>
      <Intro />
      <Description />
      <Section />
      <div className="h-screen">
        <h1>Home Page</h1>
      </div>
    </Curve>
  );
}

