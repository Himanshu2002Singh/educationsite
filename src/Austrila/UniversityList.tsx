import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AustraliaUniversitiesSection = () => {
  const universities = [
    { name: "University of Melbourne" },
    { name: "Australian National University (ANU)" },
    { name: "University of Sydney" },
    { name: "University of New South Wales (UNSW Sydney)" },
    { name: "University of Queensland (UQ)" },
    { name: "Monash University" },
    { name: "University of Western Australia (UWA)" },
    { name: "University of Adelaide" },
    { name: "Macquarie University" },
    { name: "University of Technology Sydney (UTS)" },
    { name: "RMIT University" },
    { name: "Curtin University" },
    { name: "Deakin University" },
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
    <section className="py-10 sm:py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 md:px-2  max-w-7xl ">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Top<span className="text-[#8cc63f]"> Australian </span>Universities You Should Know 🎓
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Australia is home to some of the top universities globally, including world-ranked institutions recognized for academic excellence, research, and innovation. 
            Whether you’re studying in Melbourne, Sydney, Brisbane, or Perth, these universities offer world-class education and vibrant student life.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#5a9628] via-[#8cc63f] to-[#5a9628] flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-white text-lg font-bold">AU</span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2C2C2C] text-center">
                  {uni.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8cc63f] hover:bg-[#e65c00] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your Australian University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default AustraliaUniversitiesSection;
