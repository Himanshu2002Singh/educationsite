import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const USAUniversitiesSection = () => {
  const universities = [
    {
      name: "Massachusetts Institute of Technology (MIT)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      main: "QS Ranking - #1 | Global leader in innovation, tech & science",
      perk: "Top Programs: Computer Science, Engineering, Architecture, Economics"
    },
    {
      name: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
      main: "QS Ranking - #4 | Oldest & most prestigious Ivy League",
      perk: "Top Programs: MBA, Law, Medicine, Economics, Government"
    },
    {
      name: "Stanford University",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
      main: "QS Ranking - #5 | Powerhouse in entrepreneurship & research",
      perk: "Top Programs: Computer Science, Engineering, Entrepreneurship, Psychology"
    },
    {
      name: "University of California, Berkeley (UCB)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/UC_Berkeley_seal.svg",
      main: "QS Ranking - #10 | Public Ivy & leader in activism & innovation",
      perk: "Top Programs: EECS, Environmental Science, Business, Public Health"
    },
    {
      name: "University of Chicago",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/68/University_of_Chicago_shield.svg",
      main: "QS Ranking - #11 | Producing Nobel laureates & economists",
      perk: "Top Programs: Economics, Business Analytics, Law, Data Science"
    },
    {
      name: "California Institute of Technology (Caltech)",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8a/Caltech_logo.svg",
      main: "QS Ranking - #16 | Elite STEM & NASA JPL partner",
      perk: "Top Programs: Physics, Engineering, Computer Science, Chemistry"
    },
    {
      name: "University of Pennsylvania (UPenn)",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Pennsylvania_shield.svg",
      main: "QS Ranking - #17 | Ivy League with practical business focus",
      perk: "Top Programs: Wharton Business, Finance, Law, Health Sciences"
    },
    {
      name: "Yale University",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4d/Yale_University_Shield_1.svg",
      main: "QS Ranking - #18 | Leader in law, humanities & diplomacy",
      perk: "Top Programs: Law, Global Affairs, History, Psychology"
    },
    {
      name: "Columbia University",
      logo: "https://upload.wikimedia.org/wikipedia/en/e/e1/Columbia_University_shield.svg",
      main: "QS Ranking - #23 | NYC-based with media & corporate access",
      perk: "Top Programs: Journalism, International Relations, Data Science, Business"
    },
    {
      name: "Princeton University",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/71/Princeton_shield.svg",
      main: "QS Ranking - #24 | Academic rigor & small class sizes",
      perk: "Top Programs: Mathematics, Public Policy, History, Computer Science"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="py-10 sm:py-16 bg-[#F9F9F9]  max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-5">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Top <span className="text-[#8cc63f]">US Universities</span> You Should Know 🎓
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Discover America’s top-ranked institutions shaping global leaders, innovators, and change-makers.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#8cc63f] via-[#b0c4de] to-[#8cc63f] p-1 mb-3 sm:mb-4">
                  <div className="bg-white rounded-full h-full w-full flex items-center justify-center">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2C2C2C] text-center">{uni.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">{uni.main}</p>
                <p className="text-xs sm:text-sm text-[#C1272D] font-medium text-center mt-1">{uni.perk}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8cc63f] hover:bg-[#003580] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your US University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default USAUniversitiesSection;
