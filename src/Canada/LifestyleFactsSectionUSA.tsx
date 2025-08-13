import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  { emoji: "🌦️", title: "Irish Weather", content: "You can experience all four seasons in one day!" },
  { emoji: "🍵", title: "Love of Tea", content: "The Irish drink an average of 4–6 cups of tea daily." },
  { emoji: "🍺", title: "Pub Culture", content: "You'll never be more than a short walk away from a pint of Guinness." },
  { emoji: "🗣️", title: "Irish Slang", content: "Locals use so much slang you'll feel like you need a dictionary." },
  { emoji: "🪨", title: "Blarney Stone", content: "Kiss it to get the gift of gab—if you dare!" },
  { emoji: "🍀", title: "Leprechauns", content: "Famous in Irish folklore, but they're friendly—unless you want their gold." },
  { emoji: "💃", title: "Irish Dancing", content: "Riverdance your way through college—just keep up with the beat!" },
  { emoji: "🍄", title: "Fairy Rings", content: "Mushroom circles that locals say are made by fairies." },
  { emoji: "🎶", title: "Craic Agus Ceol", content: "Traditional Irish music sessions will get you dancing." },
  { emoji: "☘️", title: "St. Patrick's Day", content: "Parades, green beer, and maybe even a pot of gold!" },
  { emoji: "🏛️", title: "Guinness Storehouse", content: "Home to a museum dedicated to the world-famous beer." },
  { emoji: "🐑", title: "Sheep Galore", content: "There are more sheep than people in many areas." },
  { emoji: "✝️", title: "Celtic Crosses", content: "Intricate designs perfect for an Instagram shot." },
  { emoji: "🥀", title: "Famine Memorials", content: "A moving reminder of Ireland’s history and resilience." },
  { emoji: "🏰", title: "Haunted Castles", content: "Ireland could be one giant spooky theme park." },
  { emoji: "🍻", title: "Late-Night Pubs", content: "Study (or not) over a pint until the wee hours." },
  { emoji: "🎵", title: "Music Sessions", content: "Live traditional music is a staple in pubs." },
  { emoji: "🗣", title: "Funny Accents", content: "Every region has its own charming twist on English." },
  { emoji: "💬", title: "Witty Banter", content: "Expect quick wit and friendly sarcasm from locals." },
  { emoji: "😏", title: "Dry Humor", content: "Irish humor is so dry you'll need a snorkel." },
  { emoji: "🎓", title: "Campus Life", content: "Plenty of student clubs and organizations to join." },
];

const LifestyleFactsSectionIreland = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFact = () => {
    setCurrentIndex((prev) => (prev + 3) % facts.length);
  };

  const prevFact = () => {
    setCurrentIndex((prev) => (prev - 3 + facts.length) % facts.length);
  };

  return (
    <section className="py-12 px-4 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#2C2C2C] mb-10">
          Ireland Lifestyle & Fun Facts
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facts.slice(currentIndex, currentIndex + 3).map((fact, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-300 border border-transparent border-[#8DC63F] shadow-xl ${
                  index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#C5E3DC]'
                }`}
              >
                <div className="text-3xl mb-2">{fact.emoji}</div>
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
            Explore Ireland Student Life
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleFactsSectionIreland;
