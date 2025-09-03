import React from "react";
import { Cpu, Heart, Settings, BarChart2, Leaf, Factory } from "lucide-react";

const careerSectors = [
  {
    icon: <Cpu className="w-10 h-10 text-[#8cc63f]" />,
    title: "Technology",
    description: "Artificial Intelligence, Data Science, Cybersecurity",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#8cc63f]" />,
    title: "Healthcare",
    description: "Nursing, Pharmacy, Healthcare Management",
  },
  {
    icon: <Settings className="w-10 h-10 text-[#8cc63f]" />,
    title: "Engineering",
    description: "Mechanical, Electrical, Civil",
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-[#8cc63f]" />,
    title: "Business",
    description: "Finance, Marketing, HR, Supply Chain, Management",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#8cc63f]" />,
    title: "Sustainability",
    description: "Environmental Science, Renewable Energy, Sustainable Development",
  },
  {
    icon: <Factory className="w-10 h-10 text-[#8cc63f]" />,
    title: "Manufacturing",
    description: "Industrial Engineering, Operations Management, Quality Control",
  },
];

const CareerProspects = () => {
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

export default CareerProspects;
