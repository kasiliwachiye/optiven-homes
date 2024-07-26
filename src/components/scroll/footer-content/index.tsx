import React from "react";

export default function Content() {
  return (
    <div className="bg-[#000000] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end text-white">
      <h1 className="text-[10vw] leading-[0.8] mt-10">Optiven Homes</h1>
      <p>©copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-10 lg:pt-32">
      <div className="flex flex-col gap-2 text-white">
        <h3 className="mb-2 uppercase text-[#eeeeee80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2 text-white">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Organization</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
