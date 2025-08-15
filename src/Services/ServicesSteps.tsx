import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Personalised Counselling & Course Discovery",
    text: "Our counselors are trained to help you understand your academic profile, interests, and goals.",
    hidden: [
      "1:1 profile-based career mapping",
      "Country comparison (ROI, job prospects, lifestyle)",
      "Personalised course, country, and university matching",
      "Breakdown requirements, timelines, and expectations",
      "Parent counseling sessions (optional)",
    ],
    cta: "Book a free 1:1 session",
  },
  {
    id: 2,
    title: "Application & Admission Support",
    text: "We help you prepare and submit high-quality applications.",
    hidden: [
      "Shortlisting universities based on your profile & preferences",
      "Guidance on SOPs, LORs, CVs, and essays",
      "Profile building for scholarships and competitive courses",
      "Application form filling, submission, and real-time tracking",
      "University webinars + student connects",
    ],
    cta: "Apply now",
  },
  {
    id: 3,
    title: "Test Preparation (IELTS, TOEFL, SAT, GRE, GMAT, etc)",
    text: "We offer expert-led coaching for major standardised tests.",
    hidden: [
      "IELTS, PTE, TOEFL, Duolingo – for English proficiency",
      "GRE, GMAT – for Master’s & MBA admissions",
      "SAT – for undergraduate programs",
      "Doubt-clearing sessions, practice portals, mock tests & more",
    ],
    cta: "Start your Test prep",
  },
  {
    id: 4,
    title: "Visa Guidance",
    text: "With a track record of 95% visa success rate, we help you to secure your visas as well.",
    hidden: [
      "Country-specific visa documentation & financial prep",
      "Visa interview prep with mock Q&A sessions",
      "Filing & follow-ups",
      "Reapplication support in case of rejections",
      "Solutions for gaps, low finances, and backlogs",
    ],
    cta: "Start your journey now",
  },
  {
    id: 5,
    title: "Loan Assistance",
    text: "We simplify education loans & help you plan your journey without financial stress.",
    hidden: [
      "Guidance for collateral & non-collateral education loans",
      "Tie-ups with NBFCs and national banks for smooth processing",
      "Forex support & country-wise tuition + budget insights",
    ],
    cta: "Get support",
  },
  {
    id: 6,
    title: "Scholarship Assistance",
    text: "Studying abroad can be a big investment — but we make it easier.",
    hidden: [
      "List of applicable scholarships in different countries",
      "Drafting scholarship essays",
      "Scholarship documentation",
    ],
    cta: "Apply now",
  },
  {
    id: 7,
    title: "Pre-Departure Services & Post Arrival support",
    text: "Your journey doesn’t end with an admit letter — ours doesn’t either.",
    hidden: [
      "Flight & accommodation guidance",
      "Travel checklist & baggage planning",
      "Forex, SIM cards, and health insurance",
      "Community connect: student groups & alumni networks",
      "On-ground support during emergencies",
    ],
    cta: "Plan your journey now",
  },
];

export default function ServicesSteps() {
  const [openStep, setOpenStep] = useState(null);

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
         <h2 className="text-xl md:text-4xl  text-center  font-bold text-gray-800">
          Our 7-Step Services — With <span className="text-[#8cc63f] "> You at Every Stage</span>
        </h2>
         <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-10"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="border rounded-lg shadow-sm p-5 relative bg-white hover:shadow-md transition"
            >
              <div className="absolute left-3 top-3 bg-[#8cc63f]  text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                {step.id}
              </div>
              <h3 className="text-lg  text-black ml-8 font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-3">{step.text}</p>

              {openStep === step.id && (
                <ul className="list-disc list-inside text-gray-700 mb-3 space-y-1">
                  {step.hidden.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              <button
                onClick={() =>
                  setOpenStep(openStep === step.id ? null : step.id)
                }
                className="text-sm text-[#8cc63f]  mb-3 underline"
              >
                {openStep === step.id ? "Show less" : "Show more"}
              </button>

              <a
                href="#"
                className="inline-block bg-[#8cc63f]  ml-2 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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
