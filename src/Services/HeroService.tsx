import React from "react";
import hero from '../../assets/Imaesg with name/Service Page.png';
import ServicePop from "./ServicePop"; // import your popup

export default function HeroCounselling() {
  return (
    <section className="bg-[#e6f5e1]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div className="text-center md:text-left space-y-4 md:ml-[100px] ">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We're with You at Every Step
          </h1>

          {/* Subheading */}
          <p className="text-black text-sm md:text-base">
            Helping 12000+ students achieve their Study Abroad Dreams
          </p>

          {/* CTA */}
          <div className="pt-2">
            <ServicePop
              trigger={(openModal) => (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // prevent page jump
                    openModal();        // open the popup
                  }}
                  className="inline-block text-sm md:text-lg rounded-md bg-[#8cc63f] px-5 py-3 text-white font-medium shadow hover:bg-green-700 transition"
                >
                  Book Your Free Counselling Session
                </a>
              )}
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end md:mr-[100px]">
          <img
            src={hero}
            alt="Student with country flags"
            className="max-w-xs md:max-w-sm w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
