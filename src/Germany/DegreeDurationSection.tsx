import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const DegreeDurationSection = () => {
  const programs = [
    {
      type: "Bachelor's",
      duration: "3 to 4 years",
      subtitle: "",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      description: "Comprehensive undergraduate education with focus on academic and skill development."
    },
    {
      type: "Master's",
      duration: "1 to 2 years",
      subtitle: "",
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      description: "Postgraduate program with options for research, coursework, and work-integrated learning."
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-british-navy mb-3 sm:mb-4 font-serif">
            Program Duration & Course Structure
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Different degree types highlighting durations, structure, and study-work integration.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`min-w-[240px] sm:min-w-[280px] ${program.color} border-2 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="flex justify-center mb-3 sm:mb-4">{program.icon}</div>
              <div className="text-center">
                <div className="bg-british-navy text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold mb-2">
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

        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Check your eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default DegreeDurationSection;
