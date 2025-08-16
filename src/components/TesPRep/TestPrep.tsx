import React from "react";
import { Clock, FileText, Users, ClipboardList, TrendingUp } from "lucide-react"; // lucide-react icons

const steps = [
  {
    icon: <Clock className="w-6 h-6 text-green-700" />,
    title: "Take a Free Diagnostic",
    desc: "Know your current level in 10 mins.",
  },
  {
    icon: <FileText className="w-6 h-6 text-green-700" />,
    title: "Get Your Study Plan",
    desc: "Personalized strategy based on your score, timeline & target country.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-700" />,
    title: "Join Live Classes - Online or Offline",
    desc: "Attend weekday or weekend batches — flexible & interactive.",
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-green-700" />,
    title: "Practice with Real Mocks",
    desc: "Timed tests with instant feedback and scoring.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-green-700" />,
    title: "Track, Improve & Apply",
    desc: "Watch your scores rise + Get help applying.",
  },
];

const TestPrepJourney: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-2xl md:text-4xl font-bold  text-gray-800">
          A sneak peek to your Test{" "}
          <span className="text-[#8cc63f] "> Prep Journey…</span>
        </h2>

         <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-8"></div>

        <div className="relative border-l-2 border-green-600 pl-6 space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* icon circle */}
              <div className="absolute -left-[37px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-[#8cc63f] border-2 border-[#8cc63f]">
                {step.icon}
              </div>
              <div>
                <h3 className="ml-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="ml-2 text-gray-600 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#8cc63f] hover:bg-[#8cc63f] text-white font-medium py-3 px-6 rounded-lg shadow-md transition">
            Start your journey now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestPrepJourney;
