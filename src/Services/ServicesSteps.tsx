import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Personalised Counselling & Course Discovery",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Book a free 1:1 session",
  },
  {
    id: 2,
    title: "Application & Admission Support",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Apply now",
  },
  {
    id: 3,
    title: "Test Preparation (IELTS, TOEFL, SAT, GRE, GMAT, etc)",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Start your Test prep",
  },
  {
    id: 4,
    title: "Visa Guidance",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Start your journey now",
  },
  {
    id: 5,
    title: "Loan Assistance",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Get support",
  },
  {
    id: 6,
    title: "Scholarship Assistance",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Apply now",
  },
  {
    id: 7,
    title: "Pre-Departure Services & Post Arrival support",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    cta: "Plan your journey now",
  },
];

export default function ServicesSteps() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-800">
          Our 7-Step Services —{" "}
          <span className="text-[#8cc63f]">With You at Every Stage</span>
        </h2>
        <div className="w-1 h-[3px] bg-[#8CC63F] mx-auto mt-2 mb-10"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`border border-[#8cc63f] rounded-xl shadow-md bg-[#f9f9f9] p-8 flex flex-col items-center text-center md:h-[400px] sm:h-[320px] hover:shadow-lg transition 
                ${step.id === 7 ? "sm:col-span-2 lg:col-span-3 flex justify-center mx-auto lg:h-[400px] lg:w-[390px] w-[348px] h-[360px]" : ""}`}
            >
              {/* Step Number */}
              <div className="bg-[#8cc63f] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg mb-5 shadow-md">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl text-black font-semibold mb-2">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-600 mb-4">{step.text}</p>

              {/* Read More Link */}
              <a
                href="#"
                className="text-[#8cc63f] text-sm sm:text-base mb-4 underline"
              >
                Read More
              </a>

              {/* Spacer */}
              <div className="mt-auto"></div>

              {/* CTA Button */}
              <a
                href="#"
                className="bg-[#be1e2d] w-full p-4 flex items-center justify-center text-sm sm:text-base text-white rounded-lg hover:opacity-90 transition whitespace-nowrap text-center "
              >
                {step.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

