import React from "react";
import {
  Globe,
  DollarSign,
  CheckCircle,
  Briefcase,
  MapPin,
  Users,
} from "lucide-react";
import nzGirl from "../../assets/students1.png"; // Replace with actual image path

const points = [
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "World-Class Education",
    description:
      "Top-ranked universities like Auckland and Otago known for excellence in tech, business, and research.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Affordable, High-Quality Education",
    description:
      "Globally recognized degrees with lower tuition and living costs than many Western countries.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-[#2d6a4f]" />,
    title: "NZQA-Accredited Programs",
    description:
      "All courses meet national standards via NZQF & NZQA — ensuring global recognition.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Work Opportunities",
    description:
      "20 hrs/week during study, full-time in breaks. Up to 3-year post-study work visa available.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Pathway to PR",
    description:
      "Clear routes from study to residency, especially for IT, Engineering, Healthcare graduates.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Welcoming Lifestyle",
    description:
      "Ranked 4th in quality of life. Safe, diverse, friendly, and full of natural beauty.",
  },
];

const StudyNZSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C] flex items-center">
            <img
              src="https://flagcdn.com/w40/nz.png"
              alt="New Zealand Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study in New Zealand?
          </h2>

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
            Talk to a NZ Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={nzGirl}
            alt="Student with NZ Flag"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyNZSection;
