import Image from "next/image";
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
    <div className="flex flex-col lg:flex-row justify-between">
      <ContactForm />
      <Nav />
    </div>
  );
};

const Section2 = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="text-white">
      {/* <h1 className="text-[10vw] leading-[0.8] mt-10">Optiven Homes</h1> */}
      {/* <p>Optiven Homes - Your Home. Our Commitment</p> */}
      <p>© Copyright {getCurrentYear()} | All Rights Reserved</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-10 lg:pt-40">
      <div className="flex flex-col gap-2 text-white">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Get in Touch</h3>
        <span className="flex items-center space-x-1 p-2 rounded">
          <Image
            src="/assets/icons/home.png"
            alt="Home Icon"
            width={24}
            height={24}
          />
          <span className="font-bold text-sm">
            Absa Towers Loita Street, 2nd Floor
          </span>
        </span>
        <span className="flex items-center space-x-1 p-2 rounded">
          <Image
            src="/assets/icons/tel.png"
            alt="Tel Icon"
            width={24}
            height={24}
          />
          <span className="font-bold text-sm">+254743404040</span>
        </span>
        <span className="flex items-center space-x-1 p-2 rounded">
          <Image
            src="/assets/icons/email.png"
            alt="Email Icon"
            width={24}
            height={24}
          />
          <span className="font-bold text-sm">homes@optivenhomes.co.ke</span>
        </span>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="text-white lg:w-1/2 mb-8 lg:mb-0 lg:pt-32">
      <h3 className="text-[8vw] leading-[0.8] my-10">Contact Us*</h3>
      <form className="flex flex-col gap-4 md:gap-6 lg:gap-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-b-2 border-gray-500 w-full py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b-2 border-gray-500 w-full py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
        </div>
        {/* <div className="relative">
          <input
            type="tel"
            placeholder="Tel"
            className="bg-transparent border-b-2 border-gray-500 w-full py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-white"
          />
        </div> */}
        <div className="relative">
          <textarea
            placeholder="Message"
            className="bg-transparent border-b-2 border-gray-500 w-full py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-white"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white text-black py-2 px-6 uppercase font-semibold mt-4 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};
