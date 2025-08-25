import React from "react";
import {
  GraduationCap,
  Briefcase,
  DollarSign,
  BookOpen,
  Globe,
  Users,
  Plane,
  Building2,
  Clock,
  Landmark,
} from "lucide-react";
import germanyStudent from "../../assets/Germany.png"; // Replace with your Germany image

const points = [
  {
    icon: <DollarSign className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Affordable & High-Quality Education",
    description:
      "German education provides top-tier learning at a fraction of the cost compared to other countries.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Practical + Theoretical Knowledge",
    description:
      "Gain both strong academic foundations and hands-on practical skills.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Work While Studying",
    description: "International students can work up to 23 hours per week.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Attractive Wages",
    description:
      "Earn between €12.82 and €20/hour. Higher pay for German-speaking students.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Home to Global Companies",
    description:
      "Volkswagen, BMW, Audi, Siemens, Bentley, Škoda and more call Germany home.",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Strong Economy",
    description:
      "Germany is Europe's strongest economy, leading in growth, employment, and exports.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#2d6a4f]" />,
    title: "English-Taught Programs",
    description:
      "Many courses are taught in English, especially at private universities.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Post-Study Stay",
    description:
      "Non-EU students can stay up to 18 months after graduation to find work.",
  },
  {
    icon: <Plane className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Travel Friendly",
    description:
      "Easy connections to other European countries and cities.",
  },
  {
    icon: <Landmark className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Permanent Residency Path",
    description:
      "Graduates can gain indefinite residency after 5 years of working in Germany.",
  },
];

const StudyGermanySection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 flex items-center">
            <img
              src="https://flagcdn.com/w40/de.png"
              alt="Germany Flag"
              className="w-8 h-5 mr-2"
            />
            Why Study&nbsp;<span className="text-[#8cc63f]">in Germany</span>&nbsp;?
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

          <button className="mt-6 bg-[#8DC63F] hover:bg-[#7cb532] text-white font-semibold py-3 px-6 rounded-full transition">
            Talk to a Germany Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={germanyStudent}
            alt="Student in Germany"
            className="max-w-sm w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyGermanySection;
