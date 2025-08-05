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
    <div className="bg-[linear-gradient(270deg,#e6f7ea,#f0f7f4,#d8f3dc)] bg-[length:400%_400%] animate-[gradient-x_10s_ease_infinite]">
      <section className="px-4 py-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Admissions Open
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-[#f5f5f5] text-black w-full max-w-sm"
            >
              <div className="flex flex-col items-center p-4">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full mb-2 shadow-sm">
                  EduConnect
                </span>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-40 object-contain"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-bold text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdmissionsSection;
