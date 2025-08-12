import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const facts = [
  "Germany is home to over 20,000 castles, more than any other country in the world.",
  "The country has a rich beer culture, with over 1,300 breweries producing over 5,000 different beer varieties.",
  "Germany is the birthplace of the automobile, with Karl Benz inventing the first gasoline-powered car in 1886.",
  "The country is home to some of the world's leading car manufacturers, including Mercedes-Benz, BMW, and Volkswagen.",
  "Germany has a strong cycling culture, with over 200,000 km of bike paths.",
  "The country has a rich philosophical history, with influential philosophers like Immanuel Kant, Friedrich Nietzsche, and Karl Marx.",
  "Germany is a global leader in innovation, with many world-renowned research institutions and companies.",
  "The country is home to over 600 zoos and wildlife parks, with the Berlin Zoo being one of the oldest and most famous.",
  "Germany has a unique Christmas tradition, with the Christmas tree originating in 16th-century Germany.",
  "The country is famous for its festive Christmas markets, with over 2,500 markets taking place every year.",
  "Germany has a rich musical heritage, with famous composers like Bach, Beethoven, and Brahms.",
  "The country is home to many world-renowned orchestras, including the Berlin Philharmonic.",
  "Germany has a vibrant arts scene, with many famous artists like Albrecht Dürer and Lucas Cranach.",
  "The country is home to over 300 museums, with the Pergamon Museum in Berlin being one of the most famous.",
  "Germany has a unique Fairy-Tale Road, featuring towns and landmarks that inspired the Brothers Grimm's fairy tales.",
  "The country is home to the famous Neuschwanstein Castle, which inspired the Disney castle.",
  "Germany has a rich history, with many historical landmarks like the Berlin Wall and Checkpoint Charlie.",
  "The country is a member of the European Union and the G7, playing an important role in global politics and economy.",
  "Germany is a popular tourist destination, with over 40 million tourists visiting every year.",
  "The country has a diverse landscape, with mountains, forests, and coastlines along the North Sea and Baltic Sea.",
];

const GermanyLifestyleFacts = () => {
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
          Germany Lifestyle & Fun Facts
        </h2>

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

export default GermanyLifestyleFacts;
