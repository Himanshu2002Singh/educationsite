import React from 'react';
import { Clock, GraduationCap, Briefcase, BookOpen, Microscope } from 'lucide-react';

const DegreeDurationIrelandSection = () => {
  const programs = [
    {
      type: "Bachelor’s Degrees",
      duration: "3 or 4 years",
      subtitle: "Honours or Ordinary Level | BA, BSc, BEng",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      description: "Full-time undergraduate study. Work part-time (20 hrs/week) during term, 40 hrs/week during holidays."
    },
    {
      type: "Master’s Degrees",
      duration: "1 year",
      subtitle: "Taught or Research | MA, MSc, MBA",
      icon: <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#8cc63f]" />,
      color: "bg-green-50 border-green-200",
      description: "Intensive programs with coursework, research or a combination. Eligible for 2-year stay-back under Third Level Graduate Scheme."
    },
    {
      type: "Doctoral Degrees (PhD)",
      duration: "3–4 years",
      subtitle: "Research-based | Multiple fields",
      icon: <Microscope className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" />,
      color: "bg-red-50 border-red-200",
      description: "Advanced research projects with supervision. Funding often available through scholarships or assistantships."
    },
    // {
    //   type: "Higher Diploma / Postgraduate Diploma",
    //   duration: "1 year",
    //   subtitle: "Level 8 or 9 qualification",
    //   icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />,
    //   color: "bg-purple-50 border-purple-200",
    //   description: "Conversion courses or specialist qualifications. Ideal for career changes or upskilling."
    // },
    // {
    //   type: "Work Placement / Internships",
    //   duration: "Integrated into studies",
    //   subtitle: "Part of many courses in Ireland",
    //   icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />,
    //   color: "bg-orange-50 border-orange-200",
    //   description: "Many degrees include a co-op or internship year, offering valuable work experience and industry links."
    // },
    // {
    //   type: "Third Level Graduate Scheme",
    //   duration: "1–2 years after graduation",
    //   subtitle: "For non-EU/EEA students",
    //   icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" />,
    //   color: "bg-teal-50 border-teal-200",
    //   description: "Allows graduates to work full-time in Ireland while seeking employment or applying for a work permit."
    // }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Program <span className="text-[#8cc63f]">Duration & Course</span> Structure
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Flexible pathways in Ireland with opportunities to work during and after your studies.
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
                <div className="bg-[#8cc63f] text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold mb-2">
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

export default DegreeDurationIrelandSection;
