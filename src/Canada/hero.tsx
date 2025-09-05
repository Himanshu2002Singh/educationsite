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
import canadaStudent from "../../assets/Imaesg with name/Canada.png"; // Replace with actual Canada student image

const points = [
  {
    icon: <GraduationCap className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Prestigious Universities",
    description:
      "Top-ranked universities like the University of Toronto, UBC, McGill, University of Waterloo, University of Windsor, and many more",
  },
  {
    icon: <School className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Affordable & High-Quality",
    description:
      "Compared to the UK or US, tuition and living costs are more reasonable, with excellent return on investment.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Diverse Study Fields",
    description:
      "Programs available in Business, Engineering, IT, Life Sciences, Arts, and more.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Work While You Study",
    description:
      "With a Canadian Study Permit, you can work part-time (24 hours/week) during classes and full-time during semester breaks.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Post-Graduation Work Permit",
    description:
      "The Post-Graduation Work Permit (PGWP) allows up to 3 years of work after studies, helping you gain valuable Canadian experience.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#2d6a4f]" />,
    title: "Pathway to Permanent Residency",
    description:
      "Skilled work experience in Canada can help you qualify for permanent residency through programs like Express Entry.",
  },
];

const StudyCanadaSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-12 mx-7xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-[15px] sm:text-xs md:text-4xl font-bold text-black mb-3 flex items-center">
            <img
              src="https://flagcdn.com/w40/ca.png"
              alt="Canada Flag"
              className="w-8 h-5 mr-2 mb-1 sm:mb-0"
            />
            <span className="whitespace-nowrap">Why Study in&nbsp;</span>
            <span className="text-[#8cc63f] whitespace-nowrap">Canada?</span>
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
            Talk to a Canada Expert
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={canadaStudent}
            alt="Student in Canada"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudyCanadaSection;
