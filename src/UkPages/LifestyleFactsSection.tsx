import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  {
    emoji: "🏙️",
    title: "Campus Cities = Tourist Spots",
    content: "Many university cities like Scotland, Manchester, London, Oxford, and Bath are also top-rated tourist destinations. So your study abroad is also a travel experience!",
  },
  {
    emoji: "💼",
    title: "1 in 3 Grads Join Startups",
    content: "The UK is a startup heaven! Around 1 in 3 students either work in startups or launch one themselves.",
  },
  {
    emoji: "🎬",
    title: "Bollywood's Favourite Study Spot",
    content: "Movies like Kabhi Khushi Kabhie Gham, Mohabbatein, and Ae Dil Hai Mushkil were filmed in the UK. Yes, you're walking through movie sets!",
  },
  {
    emoji: "💡",
    title: "Part-Time Work = Pub or Lab?",
    content: "Whether it's tutoring, research roles, or working at cafes, UK students are allowed to work 20 hours/week during term, and full-time in holidays.",
  },
  {
    emoji: "🍽️",
    title: "Beans for Breakfast?",
    content: "Full English breakfast includes baked beans, sausages, eggs, and mushrooms. It's weird at first... but somehow grows on you!",
  },
  {
    emoji: "🏆",
    title: "Top Rankings, Always",
    content: "The UK has 4 of the world's Top 10 universities in QS/Times rankings—no matter the course, you're getting globally respected education.",
  },
  {
    emoji: "🧪",
    title: "Hogwarts-Style Learning is Real",
    content: "Many UK universities—like Oxford, Cambridge, and Durham—use the tutorial system, where you have 1:1 or small group discussions instead of big lectures.",
  },
  {
    emoji: "🛏️",
    title: "You Might Live in a Castle",
    content: "Some student accommodations (hello, University of St Andrews and Exeter) are actual castles or historical buildings turned into dorms!",
  },
  {
    emoji: "📦",
    title: "Amazon Prime Student is Gold",
    content: "UK students get 6 months free Amazon Prime. Textbooks, ramen, hoodies—all delivered fast.",
  },
  {
    emoji: "📺",
    title: "TV License is a Real Thing",
    content: "If you watch BBC live or on iPlayer, you need a TV license. Yes, even as a student. But if you stream Netflix only, you're good!",
  },
  {
    emoji: "🚄",
    title: "London to Paris in Under 2.5 Hours",
    content: "Hop on the Eurostar and you're in France before your lecture notes are done. Europe is that close.",
  },
  {
    emoji: "🧼",
    title: "Laundry = Life Lesson",
    content: "Most UK accommodations don't have in-room laundry — you'll use communal washing machines and learn to guard your socks!",
  },
  {
    emoji: "🕰️",
    title: "Lectures Can Start at 9 AM… or Not at All",
    content: "University schedules are flexible — some days with no classes, others with packed timetables. Learn the art of self-discipline!",
  },
  {
    emoji: "🚶‍♂️",
    title: "Walkable Everything",
    content: "Campuses and student cities are super walkable. You may not even need a car or a bike.",
  },
  {
    emoji: "🥧",
    title: "Bizarre British Food You'll Love",
    content: "You'll try things like black pudding, haggis, or mushy peas — and maybe like them (or not).",
  },
  {
    emoji: "📖",
    title: "Libraries Open 24/7 (Near Exams)",
    content: "Many UK universities keep libraries open 24 hours during finals, complete with beanbags, coffee machines, and even therapy dogs!",
  },
  {
    emoji: "🐦",
    title: "Wildlife on Campus",
    content: "Expect to see foxes, squirrels, and swans strolling across your uni lawns — nature is part of the experience!",
  },
  {
    emoji: "🎭",
    title: "Discount Theatre & Concert Tickets",
    content: "Students in the UK get massive discounts on theatre, music, and cinema — you can see West End shows for £10!",
  },
  {
    emoji: "🧳",
    title: "You Can Travel During Term Breaks",
    content: "Spring and Christmas breaks last weeks — many students use this time to backpack across Europe affordably.",
  },
  {
    emoji: "🗺️",
    title: "Google Maps ≠ Real Life",
    content: "Thanks to tiny, twisty streets in old cities like York or Oxford, even Google Maps gets confused. Embrace the detours!",
  },
  {
    emoji: "☕",
    title: "Tea is More Than a Drink",
    content: "\"Let's have a cuppa\" is a social ritual — expect tea breaks during meetings, classes, and flatmate bonding.",
  },
  {
    emoji: "🔌",
    title: "Bring an Adapter",
    content: "The UK uses 3-pin plugs (Type G) — don't forget your adapter unless you want to power nothing but vibes.",
  },
  {
    emoji: "📆",
    title: "Results via Email or Portal Drops",
    content: "No notice boards here. You get results online, often causing \"portal panic\" refreshes worldwide.",
  },
  {
    emoji: "🎓",
    title: "Graduation = Fancy Robes + Hats + Pomp",
    content: "Expect Harry Potter–style robes, academic traditions, and LOTS of photos — it's a big deal!",
  },
  {
    emoji: "🏛️",
    title: "Alumni Network is Global",
    content: "UK degrees connect you to global alumni communities — great for jobs, mentorship, and travel buddies.",
  },
];

const LifestyleFactsSection = () => {
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
        <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4 text-center">
          UK Student Life {" "}<span className="text-[#8cc63f]"> Fun Facts</span>
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
                {/* <div className="text-3xl mb-3">{fact.emoji}</div> */}
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
            Explore UK Student Life
          </button>
        </div>
      </div>
    </section>
  );
};

export default LifestyleFactsSection;
