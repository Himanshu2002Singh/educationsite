import React from "react";
import ugImage from "../../assets/ttt.png";
import pgImage from "../../assets/ttt2.png";
import mbaImage from "../../assets/ttt3.png";

const AdmissionsSection = () => {
  const cards = [
    {
      title: "Undergraduate Admissions",
      subtitle: "Start strong with world-class bachelor’s programs abroad.",
      image: ugImage,
    },
    {
      title: "Postgraduate Admissions",
      subtitle: "Master your future with specialized global programs.",
      image: pgImage,
    },
    {
      title: "MBA Admissions",
      subtitle: "Advance your career with top-ranked global business schools.",
      image: mbaImage,
    },
  ];

  return (
    <section className="bg-white py-3">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Admissions <span className="text-[#8cc63f]">Open</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-green-50 border border-green-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image with "Fall 2025" label */}
            <div className="relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover"
              />
              {/* <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
                Fall 2025
              </span> */}
            </div>

            {/* Text content */}
            <div className="p-5">
              <h3 className="font-bold text-lg mb-2 text-black">{card.title}</h3>
              <p className="text-gray-600 text-sm text-black">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionsSection;
