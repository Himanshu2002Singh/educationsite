import { useState } from "react";
import step1 from "../../assets/Profile Evaluation in about us our Step-by-Step.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import step5 from "../../assets/step5.png";
import step6 from "../../assets/step6.png";

const steps = [
  {
    title: "Profile Evaluation",
    content:
      "We start by understanding your academic background, interests, and goals to create a personalized roadmap for your study abroad journey.",
    image: step1,
  },
  {
    title: "University & Program Shortlisting",
    content:
      "Based on your profile and preferences, we help you shortlist the right universities and programs that align with your ambitions and potential.",
    image: step2,
  },
  {
    title: "Application Process",
    content:
      "Our expert team assists you in preparing strong applications—reviewing documents, providing SOP guidance, and ensuring timely submissions for maximum success.",
    image: step3,
  },
  {
    title: "Scholarships & Education Loans",
    content:
      "We guide you in exploring scholarship opportunities and connect you with trusted partners for student loan options that ease your financial planning.",
    image: step4,
  },
  {
    title: "Visa Support",
    content:
      "From documentation to mock interviews, we provide complete visa assistance to ensure a smooth approval process with confidence.",
    image: step5,
  },
  {
    title: "Pre-Departure Guidance",
    content:
      "We prepare you for life abroad with travel tips, accommodation advice, cultural orientation, and checklists—so you arrive ready and informed.",
    image: step6,
  },
];

const StudySteps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 px-4 md:px-20 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center  text-black">
        Your Step-by-Step Journey to <span className="text-[#8cc63f]">Studying Abroad</span>
      </h2>
      
       <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-12"></div>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Step Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-col gap-4 md:w-1/4">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full py-3 rounded-md font-semibold text-left px-5 transition ${
                activeIndex === index
                  ? "bg-[#8cc63f] text-white"
                  : "bg-[#be1e2d] text-white hover:bg-[#8cc63f]"
              }`}
            >
              Step {index + 1}
            </button>
          ))}
        </div>

        {/* Step Content */}
        <div className="md:w-3/4 flex flex-col justify-between bg-gray-50 p-6">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-[#231F20] mb-3">
              {steps[activeIndex].title}
            </h3>
            <p className="text-[#231F20] text-base leading-relaxed max-w-2xl">
              {steps[activeIndex].content}
            </p>
          </div>

          <div className="mt-8">
            <img
              src={steps[activeIndex].image}
              alt={steps[activeIndex].title}
              className="w-full max-h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySteps;
