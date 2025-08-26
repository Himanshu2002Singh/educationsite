import React from "react";
import { Briefcase, Clock, FileText, ShieldCheck, Search } from "lucide-react";

const timelineData = [
  {
    title: "Types of Work",
    icon: <Briefcase className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Part-time jobs: Work up to 20 hours/week during semester, 40 hours/week in breaks.",
      "Internships: Paid or unpaid internships related to your field of study.",
      "Freelance work: Allowed with tax number & compliance with German tax laws.",
      "Self-employment: Possible with special residence permit & compliance.",
    ],
    bgColor: "bg-[#E6F0FF]",
  },
  {
    title: "Work Permit",
    icon: <ShieldCheck className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "No separate work permit needed for non-EU international students.",
      "Valid residence permit for study includes part-time work rights.",
    ],
    bgColor: "bg-[#F3E8FF]",
  },
  {
    title: "Restrictions",
    icon: <Clock className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "20-hour weekly limit during semester.",
      "No self-employment without special permit.",
      "Freelance restrictions in fields like medicine, law, architecture.",
    ],
    bgColor: "bg-[#DFFFE6]",
  },
  {
    title: "Taxes and Social Security",
    icon: <FileText className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Tax obligations depend on your income.",
      "Social security contributions may apply based on employment.",
    ],
    bgColor: "bg-[#FFF9E6]",
  },
  {
    title: "Finding a Job",
    icon: <Search className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Job platforms: Indeed, LinkedIn, Jobbörse.",
      "University job boards and career services.",
      "Networking with professors, classmates, and professionals.",
    ],
    bgColor: "bg-[#E6F4FF]",
  },
];

const WorkingRightsSection = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto font-sans">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        Working <span className="text-[#8cc63f]">Rights</span> in Germany
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

      {/* Paragraph */}
      <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
        International students in Germany have work rights designed to help
        support themselves financially. Learn about work types, permits,
        restrictions, taxes, and job search tips.
      </p>

      {/* Grid layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bgColor} border border-[#CBD5E1] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col`}
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 mx-auto">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center mb-3">
              {item.title}
            </h3>

            {/* Points */}
            <ul className="list-disc list-inside text-[#334155] text-sm sm:text-base space-y-2 text-left">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingRightsSection;
