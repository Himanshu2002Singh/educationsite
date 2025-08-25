import React from "react";
import { Clock, FileText, Users, ClipboardList, TrendingUp } from "lucide-react";

const TestPrepJourney = () => {
  const steps = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Take a Free Diagnostic",
      desc: "Know your current level in 10 mins.",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Get Your Study Plan",
      desc: "Personalized strategy based on your score, timeline & target country.",
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Join Live Classes - Online or Offline",
      desc: "Attend weekday or weekend batches — flexible & interactive.",
    },
    {
      icon: <ClipboardList className="w-6 h-6 text-white" />,
      title: "Practice with Real Mocks",
      desc: "Timed tests with instant feedback and scoring.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Track, Improve & Apply",
      desc: "Watch your scores rise + Get help applying.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
            A sneak peek to your Test{" "}
            <span className="text-[#8cc63f]">Prep Journey…</span>
          </h2>
          <div className="w-16 h-1 bg-[#8cc63f] mx-auto mt-4 mb-6"></div>
        </div>

        {/* Mobile view with vertical line */}
        <div className="lg:hidden">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-9 top-0  h-full w-0.5 bg-[#8cc63f] transform -translate-x-1/2"></div>
              
              {/* Steps container */}
              <div className="space-y-10 pl-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Icon circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-[#8cc63f]  border-white shadow-md flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop view with connecting line behind circles */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute left-[110px] right-[110px] top-[30px] h-1 bg-[#8cc63f] -translate-y-1/2"></div>
            
            <div className="grid grid-cols-5 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#8cc63f]  border-white shadow-lg mb-4">
                    {step.icon}
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#8cc63f] hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition duration-300">
            Start your journey now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestPrepJourney;