import React from "react";
import img3 from "../../../assets/UK.png";

export default function DreamScoreHero() {
  return (
    <section className="relative w-full bg-[#e6f5e1]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto">
        {/* Left: Image with overlay */}
        <div className="relative">
          <img
            src={img3} // 👈 apni image ka path yaha daalein
            alt="Student studying"
            className="w-full h-full object-cover md:ml-[-150px]"
          />
          <div className="absolute inset-0 bg-[#E6F5E1] opacity-0"></div>
        </div>

        {/* Right: Content */}
        <div className="p-8 md:p-12 relative z-10 text-center md:text-left md:ml-[-150px]">
          <h1 className="text-2xl md:text-4xl font-bold text-black leading-snug">
            Your Dream Score, <br /> Delivered.
          </h1>
          <p className="mt-4 text-gray-700 text-base md:text-lg">
            Master <span className="font-semibold">IELTS, TOEFL, GRE, GMAT,</span> 
            or <span className="font-semibold">SAT</span> with expert-led classes, 
            adaptive mock tests & guaranteed improvement.
          </p>

          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-[#8cc63f] text-white rounded-lg shadow-md hover:bg-emerald-700 transition">
            Explore Test Courses
          </button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8 text-sm text-gray-600">
            <span className="px-3 py-1 bg-[#f0f8f5] rounded-lg">
              +5000 Students
            </span>
            <span className="px-3 py-1 bg-[#f0f8f5] rounded-lg">
              🌍 Global Expert Coaches
            </span>
            <span className="px-3 py-1 bg-[#f0f8f5] rounded-lg">
              97% Score Improvement Rate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
