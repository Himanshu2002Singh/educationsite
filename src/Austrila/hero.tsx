import React from "react";
import {
  GraduationCap,
  School,
  Globe,
  Briefcase,
  LifeBuoy,
  Home,
  MapPin,
  Building2,
} from "lucide-react";
import australiaStudent from "../../assets/studen2.png"; // Replace with actual Australia student image

const points = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "World-Ranked Universities",
    description:
      "Home to top institutions like University of Melbourne, ANU, University of Sydney, and UNSW, ranked globally for excellence.",
  },
  {
    icon: <School className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Globally Recognized Degrees",
    description:
      "Australian qualifications are valued worldwide, opening global career opportunities.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Generous Post-Study Work Visas",
    description:
      "Stay and work up to 5 years depending on qualification and location after graduation.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Multicultural & Safe Environment",
    description:
      "With students from 190+ countries, Australia offers inclusivity, safety, and respect.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Work While You Study",
    description:
      "International students can work up to 48 hours per fortnight during semester and full-time in breaks.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Cutting-Edge Facilities & Support",
    description:
      "Modern campuses, research hubs, career development, and internship opportunities.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Pathway to Permanent Residency",
    description:
      "Clear migration routes for skilled fields like nursing, IT, engineering, and accounting.",
  },
  {
    icon: <Home className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Vibrant Student Cities",
    description:
      "Melbourne, Sydney, Brisbane, and Perth rank among the world’s most livable cities.",
  },
];

const StudyAustraliaSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] flex items-center">
            <img
              src="https://flagcdn.com/w40/au.png"
              alt="Australia Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study in Australia?
          </h2>
          <p className="text-gray-700 text-sm">
            Australia offers world-class education, generous work rights, and a vibrant multicultural environment, making it one of the top choices for students worldwide.
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
            Talk to an Australia Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={australiaStudent}
            alt="Student in Australia"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyAustraliaSection;
