import React from "react";

const approaches = [
  {
    title: "Goal-Aligned Prep",
    description: "From IELTS to GMAT, we focus only on what drives results — tailored to your goals.",
    icon: "🎯",
    color: "bg-blue-700 text-white",
  },
  {
    title: "Diagnostic First Approach",
    description: "Take a quick test to show us exactly where you stand — and what you need.",
    icon: "🧩",
    color: "bg-cyan-400 text-black",
  },
  {
    title: "Expert Coaching That Gets Results",
    description: "Certified mentors teach proven strategies, not just questions. Improve in 8 weeks.",
    icon: "👨‍🏫",
    color: "bg-yellow-400 text-black",
  },
  {
    title: "Feedback-Driven Training",
    description: "Get weekly feedback, expert insights, and see exactly what’s working.",
    icon: "📊",
    color: "bg-red-500 text-white",
  },
];

const PuzzleApproach: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
        At Edukonnect, we don’t believe in one-size-fits-all prep.
        <br />
        <span className="text-[#8cc63f]">Our approach is student-centered</span>
      </h2>

       <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-4">
        {approaches.map((item, idx) => (
          <div
            key={idx}
            className={`relative rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center text-center ${item.color}`}
          >
            <span className="text-4xl mb-3">{item.icon}</span>
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{item.title}</h3>
            <p className="text-sm md:text-base">{item.description}</p>

            {/* Puzzle effect using borders */}
            <div
              className={`absolute w-6 h-6 rounded-full bg-[#F9F9F9] ${
                idx === 0
                  ? "bottom-[-12px] right-1 translate-x-1/2"
                  : idx === 1
                  ? "bottom-[-12px] left-1 -translate-x-1/2"
                  : idx === 2
                  ? "right-[-12px] top-1 -translate-y-1/2"
                  : "top-[-12px] left-1 -translate-x-1/2"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleApproach;
