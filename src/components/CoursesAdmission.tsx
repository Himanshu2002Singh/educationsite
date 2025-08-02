import React from "react";
import ugImage from "../../assets/ttt.png";
import pgImage from "../../assets/ttt2.png";
import mbaImage from "../../assets/ttt3.png";

const AdmissionsSection = () => {
  const cards = [
    {
      title: "Undergraduate Admissions – Fall 2025",
      subtitle: "Start strong with world-class bachelor’s programs abroad.",
      image: ugImage,
    },
    {
      title: "Postgraduate Admissions – Fall 2025",
      subtitle: "Master your future with specialized global programs.",
      image: pgImage,
    },
    {
      title: "MBA Admissions – Fall 2025",
      subtitle: "Advance your career with top-ranked global business schools.",
      image: mbaImage,
    },
  ];

  return (
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-bold mb-2 text-gray-800">Admissions Open</h2>
        <p className="text-lg text-gray-600">
          Crafted for Global Success | Apply with Confidence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-[#f5f5f5] text-black`}
          >
            <div className="flex justify-center p-4">
              <img
                src={card.image}
                alt={card.title}
                className="w-40 object-contain"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-xl mb-2">{card.title}</h3>
              <p className="text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdmissionsSection;
