import React from 'react';

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
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16 bg-white">
      <h2 className="text-4xl font-serif font-extrabold text-[#1E293B] text-center mb-12">
        Germany Lifestyle & Fun Facts
      </h2>

      <ul className="space-y-8">
        {facts.map((fact, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-4 bg-[#f2fff0] border border-[#CBD5E1] rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className="flex-shrink-0 w-12 h-12 rounded-full bg-[#63bf4c] flex items-center justify-center animate-pulse"
              aria-hidden="true"
            >
              {/* Simple check icon */}
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
            <p className="text-[#243b1e] text-base leading-relaxed font-medium">{fact}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GermanyLifestyleFacts;
