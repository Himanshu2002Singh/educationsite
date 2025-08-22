import React from "react";
import {
  Clock,
  GraduationCap,
  Plane,
  School,
  FileText,
  Briefcase,
  Users,
  DollarSign,
  BookOpen,
  Globe,
} from "lucide-react";
import ukGirl from "../../assets/UK.png"; // Adjust path if needed

const points = [
  {
    icon: <Clock className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Affordable & Value for Money",
    description: "Courses are shorter, saving time and money",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Shorter Degrees",
    description: "Bachelor's in 3 years, Master's in just 1 year",
  },
  {
    icon: <Plane className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Graduate Route Visa",
    description: "Post completion of the degree",
  },
  {
    icon: <School className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Prestigious Universities",
    description: "Oxford, Cambridge, LSE, Imperial, and many more",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Language Proficiency Waivers",
    description: "Available for eligible students*",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Internships & Placements",
    description: "Sandwich Year available",
  },
  {
    icon: <Users className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Working Rights",
    description: "Work 20 hrs/week during studies, 40 hrs during breaks",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Scholarships",
    description: "Up to 50% available*",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Variety of Specializations",
    description: "Business, Engineering, Law, Finance, Arts & more",
  },
  {
    icon: <Globe className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Globally Recognized Degrees",
    description: "Accepted worldwide by employers",
  },
];

const StudyUKSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#2C2C2C] flex items-center">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="UK Flag"
              className="w-8 h-5 mr-2"
            />
            Study in the&nbsp;<span className="text-[#8cc63f]"> UK</span>&nbsp;?

          </h2>
          {/* <div className="w-[55px] h-[3px] bg-[#8CC63F] ml-[260px] mt-5 mb-10"></div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-start space-x-3 bg-[#f8f8f8] p-4 rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 bg-[#8DC63F] hover:bg-[#7cb532] text-white font-semibold py-3 px-6 rounded-full transition">
            Talk to a UK Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={ukGirl}
            alt="Student with UK Flag"
            className="max-w-sm w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyUKSection;
