import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  "Dubai is home to people from 200+ nationalities.",
  "Around 85-90% of the population are expats – making it a true melting pot.",
  "English is widely spoken, so international students rarely face a language barrier.",
  "Dubai blends modern skyscrapers with traditional souks (markets).",
  "Students can enjoy over 300 days of sunshine per year.",
  "Weekends are Friday & Saturday (not Saturday & Sunday).",
  "Dubai is ranked among the safest cities in the world.",
  "The city celebrates festivals from Diwali to Christmas to Eid, thanks to its diversity.",
  "Modest dressing is expected in public areas, but campuses and student zones are more relaxed.",
  "Dubai has strict laws on alcohol, but students can enjoy a vibrant nightlife in legal venues.",
  "Dubai hosts branch campuses of universities from the UK, US, Australia, India, and more.",
  "Degrees earned in Dubai are globally recognized.",
  "International students can now work part-time up to 20 hours per week during semesters.",
  "Student IDs give discounts at gyms, cinemas, and restaurants.",
  "Dubai Knowledge Park is dedicated exclusively to education and training institutions.",
  "The city is building a reputation as a top study destination in the Middle East.",
  "Networking is huge – you can meet people from almost every career field while studying.",
  "Some universities in Dubai offer dual degrees (one from Dubai, one from the partner university abroad).",
  "Dubai offers scholarships & grants for international students in selected institutions.",
  "Internships with global companies are often available during or after study.",
  "Dubai is home to the world’s tallest building – Burj Khalifa.",
  "The city has the largest mall in the world (Dubai Mall).",
  "You can go from desert safari to beach in the same day.",
  "Dubai has an indoor ski slope (Ski Dubai) – snow in the desert!",
  "Palm Jumeirah is the largest man-made island on Earth.",
  "Dubai’s metro is fully automated (driverless).",
  "The city has robot policemen assisting tourists in certain areas.",
  "Dubai Fountain shows are free and as famous as Las Vegas’ Bellagio fountains.",
  "The Gold Souk has shops selling gold jewelry by weight.",
  "Dubai has introduced futuristic concepts like flying taxis, AI, and smart city projects.",
];

const UaeLifestyleFact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 3) % facts.length);
  };

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 3 + facts.length) % facts.length);
  };

  return (
    <section className="py-12 px-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto md:mx-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
          UAE <span className="text-[#8cc63f]">Lifestyle </span> & Fun Facts
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facts.slice(currentIndex, currentIndex + 3).map((fact, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 border border-transparent border-[#8DC63F] shadow-xl ${
                  index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#C5E3DC]'
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#8DC63F] mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed text-[#2C2C2C]">{fact}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevFact}
              className="p-2 text-[#2C2C2C] hover:text-[#C1272D] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <p className="text-sm font-medium text-[#2C2C2C]">
              {currentIndex + 1} - {Math.min(currentIndex + 3, facts.length)} of {facts.length}
            </p>

            <button
              onClick={nextFact}
              className="p-2 text-[#2C2C2C] hover:text-[#C1272D] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="bg-[#8DC63F] hover:bg-[#C1272D] text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors">
            Explore Germany Lifestyle
          </button>
        </div>
      </div>
    </section>
  );
};

export default UaeLifestyleFact;
