import React from "react";
import { Briefcase, Clock, FileText, ShieldCheck, Search } from "lucide-react";

const timelineData = [
  {
    title: "Work Hours",
    icon: <Clock className="w-6 h-6 text-[#4C51BF]" />,
    points: [
    <span><strong>During Semester:</strong> Work up to 20 hours per week.</span>,
    <span><strong>Semester Breaks:</strong> Up to 40 hours per week (full-time allowed).</span>,
    <span><strong>Annual Limit:</strong>  Max 120 full days or 240 half-days per year.</span>
    ],
    bgColor: "bg-[#E6F0FF]",
    fullWidth: false,
  },
  {
    title: "Types of Work Allowed",
    icon: <Briefcase className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      <span><strong>Part-time Jobs:</strong> Common in retail, hospitality, campus jobs, etc.</span>,
      <span><strong>Internships:</strong> Paid or unpaid; must follow work hour rules unless mandatory.</span>,
      <span><strong>Freelancing & Self-employment:</strong> Only possible with special permits (case-by-case approval).</span>,
    ],
    bgColor: "bg-[#F3E8FF]",
    fullWidth: false,
  },
  {
    title: "Work Permit & Visa Rules",
    icon: <ShieldCheck className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "No separate work permit required – student residence permit allows part-time work.",
      "Non-EU students must strictly follow the 120-day rule unless otherwise authorized.",
    ],
    bgColor: "bg-[#DFFFE6]",
    fullWidth: false,
  },
  {
    title: "Important Points",
    icon: <FileText className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Working more than 20 hrs/week during semester can affect student status & health insurance.",
      "Language skills (German/English) improve job opportunities.",
      "Always ensure compliance with tax regulations (get a tax ID if earning above allowance).",
    ],
    bgColor: "bg-[#FFF9E6]",
    fullWidth: true,
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
    fullWidth: true,
  },
];

const WorkingRightsSection = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 md:px-5 max-w-7xl mx-auto font-sans">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        Working <span className="text-[#8cc63f]">Rights</span> in Germany for International Students
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

      {/* Paragraph */}
      <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
        International students in Germany have specific work rights designed to
        help them support themselves financially. Learn about work hours,
        allowed job types, permits, rules, and job search tips.
      </p>

      {/* Grid layout */}
      <div className="flex flex-col gap-6">
        {/* First row - 3 regular cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {timelineData.slice(0, 3).map((item, idx) => (
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
              <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-2 text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Full-width cards */}
        {timelineData.slice(3).map((item, idx) => (
          <div
            key={idx + 3}
            className={`${item.bgColor} border border-[#CBD5E1] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col`}
          >
            <div className="flex flex-col md:flex-row md:items-start">
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                {item.icon}
              </div>

              <div className="flex-1">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center md:text-left mb-3">
                  {item.title}
                </h3>

                {/* Points */}
                <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-2 text-left">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingRightsSection;