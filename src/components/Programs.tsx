import { useState } from "react";
import stepImage from "../../assets/TRP.IN-Illustrations-09.svg";

const steps = [
  {
    title: "Profile Evaluation",
    content:
      "We start by understanding your academic background, interests, and goals to create a personalized roadmap for your study abroad journey.",
  },
  {
    title: "University & Program Shortlisting",
    content:
      "Based on your profile and preferences, we help you shortlist the right universities and programs that align with your ambitions and potential.",
  },
  {
    title: "Application Process",
    content:
      "Our expert team assists you in preparing strong applications—reviewing documents, providing SOP guidance, and ensuring timely submissions for maximum success.",
  },
  {
    title: "Scholarships & Education Loans",
    content:
      "We guide you in exploring scholarship opportunities and connect you with trusted partners for student loan options that ease your financial planning.",
  },
  {
    title: "Visa Support",
    content:
      "From documentation to mock interviews, we provide complete visa assistance to ensure a smooth approval process with confidence.",
  },
  {
    title: "Pre-Departure Guidance",
    content:
      "We prepare you for life abroad with travel tips, accommodation advice, cultural orientation, and checklists—so you arrive ready and informed.",
  },
];

const StudySteps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-10 px-4 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Your Step-by-Step Journey to Studying Abroad
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-col gap-4 md:w-1/4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-3 rounded-lg font-semibold transition ${
                activeIndex === index
                  ? "bg-[#231F20] text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              Step {index + 1}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="md:w-3/4 space-y-6">
          <img
            src={stepImage}
            alt="Step Illustration"
            className="w-full max-h-72 object-contain mx-auto"
          />
          <h3 className="text-xl font-bold text-[#231F20]">
            {steps[activeIndex].title}
          </h3>
          <p className="text-[#231F20] text-base">
            {steps[activeIndex].content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudySteps;
