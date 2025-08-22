"use client";
import React, { useState } from "react";

interface TestCardProps {
  icon: string;
  title: string;
  summary: string;
  format: string;
  duration: string;
  cta: string;
}

const testCategories = {
  "English Proficiency": [
    {
      icon: "🌍",
      title: "IELTS",
      summary:
        "Tests your English language skills across all four modules for global education & migration.",
      format: "Computer-based or Paper-based",
      duration: "4–6 weeks, 8–10 weeks",
      cta: "Start Your IELTS Prep →",
    },
    {
      icon: "💻",
      title: "PTE",
      summary:
        "AI-powered English test used for fast-track admissions and visa approvals.",
      format: "Fully Computer-based",
      duration: "3–5 weeks, 6–8 weeks",
      cta: "Ace the PTE with Us →",
    },
    {
      icon: "📘",
      title: "TOEFL",
      summary:
        "Measures academic English proficiency, especially accepted in US & Canadian universities.",
      format: "Internet-based Test (iBT)",
      duration: "4–6 weeks, 8 weeks",
      cta: "Master TOEFL the Smarter Way →",
    },
    {
      icon: "🦉",
      title: "Duolingo English Test",
      summary:
        "Quick and affordable English test for students applying on short timelines.",
      format: "Fully Online, Adaptive",
      duration: "2–3 weeks",
      cta: "Get Duolingo-Ready in Days →",
    },
  ],
  "Master’s & MBA": [
    {
      icon: "📊",
      title: "GRE",
      summary:
        "Required for STEM, business & grad programs; tests reasoning and writing skills.",
      format: "Computer-based",
      duration: "8–12 weeks, 4–6 weeks",
      cta: "Crack the GRE with Confidence →",
    },
    {
      icon: "📈",
      title: "GMAT",
      summary:
        "Preferred for top MBA programs; evaluates quant, verbal & analytical skills.",
      format: "Online or Test Center",
      duration: "10–12 weeks, 6 weeks",
      cta: "GMAT Prep That Gets You In →",
    },
  ],
  Undergraduate: [
    {
      icon: "🎓",
      title: "SAT",
      summary:
        "Assesses math and verbal reasoning for undergrad admissions globally.",
      format: "Digital Adaptive Test",
      duration: "10–12 weeks, 6 weeks",
      cta: "Get a Headstart on SAT prep →",
    },
  ],
};

const TestCard: React.FC<TestCardProps> = ({
  icon,
  title,
  summary,
  format,
  duration,
  cta,
}) => (
  <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition">
    <div>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{summary}</p>
      <p className="text-gray-700 text-sm mt-3">
        <strong>Format:</strong> {format}
      </p>
      <p className="text-gray-700 text-sm">
        <strong>Course Duration:</strong> {duration}
      </p>
    </div>
    <button className="mt-4 text-[#8cc63f] bg-[#be1e2d] font-semibold hover:text-green-900 rounded-lg px-2xl">
      {cta}
    </button>
  </div>
);

export default function PrepTabs() {
  const [activeTab, setActiveTab] = useState("English Proficiency");

  return (
    <section className="py-12 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-center text-black ">
          We prepare <span className="text-[#8cc63f]">you for </span>
        </h2>

         <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-8"></div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-black">
          {Object.keys(testCategories).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeTab === tab
                  ? "bg-[#8cc63f]  text-white"
                  : "bg-green-100 text-black hover:bg-green-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCategories[activeTab].map((test, idx) => (
            <TestCard key={idx} {...test} />
          ))}
        </div>

        {/* Overall CTA */}
        <div className="text-center mt-10">
          <button className="bg-[#8cc63f] hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-full shadow-md">
            Start Your Prep →
          </button>
        </div>
      </div>
    </section>
  );
}
