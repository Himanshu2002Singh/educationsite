import React from "react";
import {
  GraduationCap,
  School,
  FlaskConical,
  Users,
  Briefcase,
  Layers,
  LifeBuoy,
  Globe,
} from "lucide-react";
import usaStudent from "../../assets/USA.png"; // Replace with actual USA student image

const points = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Top-Ranked Universities",
    description:
      "The USA is home to 10 of the top 20 universities worldwide (QS 2025). Degrees are globally recognized and respected across industries and borders.",
  },
  {
    icon: <School className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Unmatched Variety of Institutions",
    description:
      "With 4,000+ universities and colleges — from Ivy League to research powerhouses — there's a perfect fit for every academic goal and learning style.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-[#2d6a4f]" />,
    title: "World-Class Research & Innovation",
    description:
      "The U.S. ranks #1 in global R&D investment, offering hands-on experience through partnerships with industry leaders, labs, and start-ups.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#2d6a4f]" />,
    title: "A Truly Global Community",
    description:
      "Study alongside students from over 180 countries, gaining a global mindset and lifelong international connections in a multicultural setting.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Strong Career Prospects",
    description:
      "Internships, OPT/CPT, and industry collaborations ensure students graduate career-ready with skills employers value worldwide.",
  },
  {
    icon: <Layers className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Flexible, Student-Centered Learning",
    description:
      "Design your own academic path — choose majors, combine disciplines, or pivot as your interests evolve.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Comprehensive Student Support",
    description:
      "From visa guidance to language support, U.S. universities help international students adapt smoothly inside and outside the classroom.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Gateway to Global Opportunities",
    description:
      "A U.S. degree opens doors to international careers, leadership roles, and further studies worldwide.",
  },
];

const StudyUSASection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] flex items-center">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="USA Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study in the USA?
          </h2>
          <p className="text-gray-700 text-sm">
            Over 1 million international students choose the United States as their study destination every year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-[#f8f8f8] p-4 rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full sm:w-auto bg-[#8DC63F] hover:bg-[#7cb532] text-white font-semibold py-3 px-6 rounded-full transition">
            Talk to a USA Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={usaStudent}
            alt="Student in USA"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyUSASection;
