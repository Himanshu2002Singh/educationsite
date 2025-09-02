import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Personalised Counselling & Course Selection",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    hidden: [
      "✔️ 1:1 profile-based career mapping",
      "✔️ Country comparison (ROI, job prospects, lifestyle)",
      "✔️ Personalised course, country, and university matching",
      "✔️ Breakdown requirements, timelines, and expectations",
      "✔️ Parent counseling sessions (optional)",
    ],
    cta: "Book a free 1:1 session",
  },
  {
    id: 2,
    title: "Application & Admission Support",
    text: "We help you prepare and submit high-quality applications.",
    hidden: [
      "✔️ Shortlisting universities based on your profile & preferences",
      "✔️ Guidance on SOPs, LORs, CVs, and essays",
      "✔️ Profile building for scholarships, top-tier universities, and competitive courses",
      "✔️ Application form filling, submission, and real-time tracking",
      "✔️ University webinars + student connects",
    ],
    cta: "Apply now",
  },
  {
    id: 3,
    title: "Test Preparation (IELTS, TOEFL, SAT, GRE, GMAT, etc)",
    text: "We offer expert-led coaching for major standardised tests.",
    hidden: [
      "✔️ IELTS, PTE, TOEFL, Duolingo – for English proficiency",
      "✔️ GRE, GMAT – for Master’s & MBA admissions",
      "✔️ SAT – for undergraduate programs",
      "Including doubt-clearing sessions, practice portals, mock tests & more",
    ],
    cta: "Start your Test prep",
  },
  {
    id: 4,
    title: "Visa Guidance",
    text: "With a track record of 95% visa success rate, we help you to secure your visas as well.",
    hidden: [
      "✔️ Country-specific visa documentation & financial prep",
      "✔️ Visa interview prep with mock Q&A sessions",
      "✔️ Filing & follow-ups",
      "✔️ Reapplication support in case of rejections",
      "✔️ Solutions for gaps, low finances, and backlogs",
    ],
    cta: "Start your journey now",
  },
  {
    id: 5,
    title: "Loan Assistance",
    text: "We simplify education loans & help you plan your journey without financial stress.",
    hidden: [
      "✔️ Guidance for collateral & non-collateral education loans",
      "✔️ Tie-ups with NBFCs and national banks for smooth processing",
      "✔️ Forex support & Country-wise tuition + budget insights",
    ],
    cta: "Get support",
  },
  {
    id: 6,
    title: "Scholarship Assistance",
    text: "Studying abroad can be a big investment — but we make it easier. Our expert team helps you discover and apply to the right scholarships.",
    hidden: [
      "✔️ List of applicable scholarships in different countries",
      "✔️ Drafting scholarship essays",
      "✔️ Scholarship documentation",
    ],
    cta: "Apply now",
  },
  {
    id: 7,
    title: "Pre-Departure Services & Post Arrival support",
    text: "Your journey doesn’t end with an admit letter — ours doesn’t either. Our pre-departure support ensures you’re fully prepared to settle smoothly in a new country.",
    hidden: [
      "✔️ Flight & accommodation guidance",
      "✔️ Travel checklist & baggage planning",
      "✔️ Forex, international SIM cards, and health insurance",
      "✔️ Community connect: student groups & alumni networks",
      "✔️ On-ground support during emergencies",
    ],
    cta: "Plan your journey now",
  },
];

export default function ServicesSteps() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

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
              className={`border border-[#8cc63f] rounded-xl shadow-md bg-[#f9f9f9] p-8 flex flex-col text-center md:h-auto sm:h-auto hover:shadow-lg transition 
                ${
                  step.id === 7
                    ? "sm:col-span-2 lg:col-span-3 flex justify-center mx-auto lg:w-[390px] w-[348px]"
                    : ""
                }`}
            >
              {/* Step Number */}
              <div className="bg-[#8cc63f] text-white rounded-full w-14 h-14 flex items-center justify-center font-bold text-lg mb-5 shadow-md mx-auto">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl text-black font-semibold mb-2">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {step.text}
              </p>

              {/* Read More Link */}
              <button
                onClick={() => toggleExpand(step.id)}
                className="text-[#8cc63f] text-sm sm:text-base mb-4 underline"
              >
                {expanded === step.id ? "Show Less" : "Read More"}
              </button>

              {/* Hidden Content */}
              {expanded === step.id && (
                <ul className="text-left text-gray-700 text-sm sm:text-base mb-4 space-y-1">
                  {step.hidden.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

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
