import React from 'react';
import { Clock, GraduationCap, Briefcase, BookOpen, Microscope } from 'lucide-react';

const DegreeDurationUsaSection = () => {
  const programs = [
    {
      type: "Associate Degrees",
      duration: "2 years (full-time)",
      subtitle: "60 credits | AA, AS, AAS",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      description: "General education + core subjects. CPT after 1 year. Can transfer to Bachelor's."
    },
    {
      type: "Bachelor's Degrees",
      duration: "4 years (full-time)",
      subtitle: "120–130 credits | BA, BS, BEng",
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />,
      color: "bg-green-50 border-green-200",
      description: "Years 1–2: General education. Years 3–4: Major specialization. OPT up to 12 months (+24 months STEM)."
    },
    {
      type: "Master's Degrees",
      duration: "1–2 years",
      subtitle: "30–60 credits | MS, MA, MBA, etc.",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      description: "Coursework + Thesis/Project. CPT possible from year 1. OPT up to 12 months (+24 months STEM)."
    },
    {
      type: "Doctoral Degrees (PhD)",
      duration: "4–7 years",
      subtitle: "Research-based | Multiple fields",
      icon: <Microscope className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      color: "bg-red-50 border-red-200",
      description: "Advanced coursework + dissertation. Often fully funded via assistantships."
    },
    {
      type: "CPT (Curricular Practical Training)",
      duration: "During studies",
      subtitle: "For F-1 students after 1 year",
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />,
      color: "bg-orange-50 border-orange-200",
      description: "Work experience integral to program. No official limit (varies by program)."
    },
    {
      type: "OPT (Optional Practical Training)",
      duration: "After graduation",
      subtitle: "12 months (+24 months STEM)",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />,
      color: "bg-teal-50 border-teal-200",
      description: "Work in your field of study. On-campus work allowed up to 20 hrs/week from Day 1."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-3 sm:mb-4 font-serif">
            Program Duration & Course Structure – USA
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Flexible degree pathways in the U.S., with opportunities to work while studying.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`min-w-[240px] sm:min-w-[280px] ${program.color} border-2 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">{program.icon}</div>
              <div className="text-center">
                <div className="bg-[#2C2C2C] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold mb-2">
                  {program.type}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                  {program.duration}
                </div>
                {program.subtitle && (
                  <div className="text-[10px] sm:text-xs text-gray-600 mb-2">
                    {program.subtitle}
                  </div>
                )}
                <div className="text-xs sm:text-sm text-gray-600">{program.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Check your eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default DegreeDurationUsaSection;
