import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  {
    emoji: "🏡",
    title: "Campus Culture You’ll Love",
    content: "From football tailgates and mascots to over 1,000 student clubs, US campuses are buzzing with activities.",
  },
  {
    emoji: "🦃",
    title: "Thanksgiving Dinner",
    content: "Many international students are invited by locals to experience the iconic turkey feast.",
  },
  {
    emoji: "🚗",
    title: "Epic Road Trips",
    content: "Spring break trips to Florida beaches, California coastlines, or cross-country adventures are a student tradition.",
  },
  {
    emoji: "🍔",
    title: "Burgers & Fries",
    content: "From In-N-Out to Shake Shack, burgers are a staple—Americans eat 50 billion a year!",
  },
  {
    emoji: "🍕",
    title: "Giant Pizza Slices",
    content: "In NYC, folding your pizza is the fastest way to eat on the go.",
  },
  {
    emoji: "🥤",
    title: "Free Refills",
    content: "Most restaurants offer bottomless sodas—America is famous for it.",
  },
  {
    emoji: "🎓",
    title: "Harvard vs. Yale Rivalry",
    content: "Students have even stolen mascots during the famous football rivalry.",
  },
  {
    emoji: "🤖",
    title: "MIT Pranks",
    content: "MIT students once placed a police car on top of a campus dome.",
  },
  {
    emoji: "🏟️",
    title: "Midnight Yell Practice",
    content: "Texas A&M students gather the night before games to rehearse chants.",
  },
  {
    emoji: "💰",
    title: "Student Discounts",
    content: "From Apple to Spotify, flash your student ID for big savings.",
  },
  {
    emoji: "🖼️",
    title: "Free Museum Days",
    content: "Most cities offer monthly free entry to museums—perfect for weekends.",
  },
  {
    emoji: "🏞️",
    title: "National Park Pass",
    content: "$20 student passes let you explore iconic parks like Yosemite or the Grand Canyon.",
  },
  {
    emoji: "💬",
    title: "Small Talk Everywhere",
    content: "In the US, 'How’s it going?' just means hello—no detailed answer needed.",
  },
  {
    emoji: "📏",
    title: "Imperial System Only",
    content: "Miles, Fahrenheit, and pounds—say goodbye to metric measurements.",
  },
  {
    emoji: "🌸",
    title: "Insta-Worthy Spots",
    content: "From UW’s cherry blossoms to UCSD’s Sun God statue, campuses have photo-perfect corners.",
  },
];

const LifestyleFactsSectionUSA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 3) % facts.length);
  };

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 3 + facts.length) % facts.length);
  };

  return (
    <section className="py-12 px-4 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto container mx-auto px-4 sm:px-6 md:px-5">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-black mb-3">
          <span className="text-[#8cc63f]">Lifestyle &</span> Fun Facts
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facts.slice(currentIndex, currentIndex + 3).map((fact, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-300 border border-transparent border-[#8DC63F] shadow-xl ${
                  index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#C5E3DC]'
                } ${index % 2 === 0 ? 'text-[#2C2C2C]' : 'text-[#2C2C2C]'}`}
              >
                <h3 className="text-lg font-semibold mb-2">{fact.title}</h3>
                <p className="text-sm leading-relaxed">{fact.content}</p>
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
            Explore USA Student Life
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleFactsSectionUSA;
