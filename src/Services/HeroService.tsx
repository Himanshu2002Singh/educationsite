import React from "react";
import hero from '../../assets/Australia.png'

export default function HeroCounselling() {
  return (
    <section className="bg-[#e6f5e1]">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Text */}
        <div className="text-center md:text-left space-y-4 md:ml-[100px] ">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            From Counselling to Campus <p className="text-[#14532d]">We're With You</p>
          </h1>
          {/* Optional heading variants (comment/uncomment as needed) */}
          {/* <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">Your Global Journey Starts Here</h1> */}
          {/* <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">From First Step to Final Offer—We’ve Got You</h1> */}
          {/* <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">Our Comprehensive Services</h1> */}

          {/* Subheading */}
          <p className="text-black text-sm md:text-base">
            Helping 10,000+ Students Succeed Abroad <p>Here’s How We Do It</p>
          </p>
          {/* Optional subheading variants */}
          {/* <p className="text-gray-600 text-sm md:text-base">10,000+ Students Made It. Here’s What Helped Them.</p> */}
          {/* <p className="text-gray-600 text-sm md:text-base">These Are the Services That Got 10,000+ Students Overseas</p> */}

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#"
              className="inline-block text-sm md:text-lg rounded-md bg-[#8cc63f]  px-5 py-3 text-white font-medium shadow hover:bg-green-700 transition"
            >
               Book Your Free Counselling Session
            </a>
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
