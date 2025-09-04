import React from "react";
import { Settings, Cpu, Heart, Leaf, BarChart2, Factory, PenTool } from "lucide-react";

const careerSectors = [
  {
    icon: <Settings className="w-10 h-10 text-[#8cc63f]" />,
    title: "Engineering & Manufacturing",
    description: "Mechanical, Automotive, Electrical, Civil, Mechatronics, Robotics",
  },
  {
    icon: <Cpu className="w-10 h-10 text-[#8cc63f]" />,
    title: "Information Technology (IT) & Computer Science",
    description: "Software Development, Data Science, Artificial Intelligence, Cybersecurity, Cloud Computing, IT Consulting",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#8cc63f]" />,
    title: "Healthcare & Life Sciences",
    description: "Medicine, Nursing, Biotechnology, Pharmaceuticals, Public Health",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#8cc63f]" />,
    title: "Renewable Energy & Environmental Sciences",
    description: "Environmental Engineering, Renewable Energy, Climate Science, Sustainability Management",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-[#8cc63f]" />,
    title: "Business & Management",
    description: "International Business, Finance, Supply Chain, Consulting, Marketing, HR",
  },
  {
    icon: <Factory className="w-10 h-10 text-[#8cc63f]" />,
    title: "Science & Research",
    description: "Physics, Chemistry, Materials Science, Mathematics",
  },
  {
    icon: <PenTool className="w-10 h-10 text-[#8cc63f]" />,
    title: "Creative Industries & Design",
    description: "Architecture, Design, Media, Animation, Film, Fashion",
  },
];

const CareerProspectsGermany = () => {
  return (
    <section className="py-12 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl sm:text-4xl font-bold text-black mb-3 sm:mb-4 text-center pb-10">
        <span className="text-[#8cc63f]">Career Prospects</span> in Key Sectors
      </h2>

      {/* Grid of sectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {careerSectors.map((sector, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div>{sector.icon}</div>
            <h3 className="text-xl font-semibold text-black">{sector.title}</h3>
            <p className="text-black-600">{sector.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerProspectsGermany;
