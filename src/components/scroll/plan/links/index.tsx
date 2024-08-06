import React from "react";
import Link from "next/link";

interface LinksProps {
  waterFormLink?: string;
  designContractLink?: string;
  floorPlanPDF?: string;
}

export default function Links({
  waterFormLink,
  designContractLink,
  floorPlanPDF,
}: LinksProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        {floorPlanPDF && (
          <AnimatedLink href={floorPlanPDF} label="Floor Plans" />
        )}
        {waterFormLink && (
          <AnimatedLink href={waterFormLink} label="Water Form" />
        )}
        {designContractLink && (
          <AnimatedLink href={designContractLink} label="Design Contract" />
        )}
      </div>
    </div>
  );
}

interface AnimatedLinkProps {
  href: string;
  label: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ href, label }) => {
  return (
    <div>
      <Link
        href={href}
        className="w-full text-3xl lg:text-[3.5vw] leading-[0.8] relative text-green-600 hover:text-green-800"
      >
        {label}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>
    </div>
  );
};
