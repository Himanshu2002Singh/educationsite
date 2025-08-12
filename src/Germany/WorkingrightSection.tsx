import React from "react";
import {
  Briefcase,
  Clock,
  FileText,
  ShieldCheck,
  Search,
} from "lucide-react";

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
    bgColor: "bg-[#E6F0FF]", // light pastel blue
  },
  {
    title: "Work Permit",
    icon: <ShieldCheck className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "No separate work permit needed for non-EU international students.",
      "Valid residence permit for study includes part-time work rights.",
    ],
    bgColor: "bg-[#F3E8FF]", // light pastel purple
  },
  {
    title: "Restrictions",
    icon: <Clock className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "20-hour weekly limit during semester.",
      "No self-employment without special permit.",
      "Freelance restrictions in fields like medicine, law, architecture.",
    ],
    bgColor: "bg-[#DFFFE6]", // light pastel green
  },
  {
    title: "Taxes and Social Security",
    icon: <FileText className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Tax obligations depend on your income.",
      "Social security contributions may apply based on employment.",
    ],
    bgColor: "bg-[#FFF9E6]", // light pastel yellow
  },
  {
    title: "Finding a Job",
    icon: <Search className="w-6 h-6 text-[#4C51BF]" />,
    points: [
      "Job platforms: Indeed, LinkedIn, Jobbörse.",
      "University job boards and career services.",
      "Networking with professors, classmates, and professionals.",
    ],
    bgColor: "bg-[#E6F4FF]", // very light blue
  },
];

const WorkingRightsSection = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-10 md:px-16 max-w-5xl mx-auto font-sans">
      {/* Heading styled like ScholarshipsSection */}
      <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
        Working Rights in Germany
      </h2>

      {/* Paragraph styled like ScholarshipsSection */}
      <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
        International students in Germany have work rights designed to help support themselves financially. Learn about
        work types, permits, restrictions, taxes, and job search tips.
      </p>

      <div className="relative">
        {/* Vertical timeline line on desktop only */}
        <div className="hidden md:block absolute top-0 left-10 w-1 h-full bg-gradient-to-b from-[#4C51BF] via-[#7F9CF5] to-[#4C51BF] rounded"></div>

        <div className="flex flex-col space-y-8">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`relative md:flex md:items-start md:space-x-8 md:pl-28 p-6 rounded-2xl shadow-md ${item.bgColor} border border-[#CBD5E1]`}
            >
              {/* Icon circle */}
              <div
                className="
                  md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2
                  flex items-center justify-center
                  rounded-full w-12 h-12 bg-white border-4 border-[#4C51BF] shadow-md
                  mb-4 md:mb-0
                  mx-auto md:mx-0
                "
              >
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{item.title}</h3>
                <ul className="list-disc list-inside text-[#334155] text-base space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingRightsSection;
