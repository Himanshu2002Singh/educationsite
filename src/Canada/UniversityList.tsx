import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CanadaUniversitiesSection = () => {
  const universities = [
    { name: "University of Toronto" },
    { name: "McGill University" },
    { name: "University of British Columbia (UBC)" },
    { name: "University of Waterloo" },
    { name: "York University" },
    { name: "Sheridan College" },
    { name: "George Brown College" },
    { name: "Seneca College" },
    { name: "Humber College" },
    { name: "Centennial College" },
    { name: "Fanshawe College" },
    { name: "Conestoga College" },
    { name: "Langara College" },
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
    <section className="py-10 sm:py-16 bg-[#F9F9F9] max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Top {" "}<span className="text-[#8cc63f]"> Canadian Institutions </span>You Should Know 🎓
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3 "></div>
          <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Canada is home to some of the world’s leading universities and colleges, known for academic excellence, innovative research, and vibrant campus life. 
            {/* Whether in Toronto, Vancouver, Montreal, or other student-friendly cities, these institutions offer globally recognized programs. */}
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#6faa32] via-[#8cc63f] to-[#5a9628]
                   flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-white text-lg font-bold">CA</span>
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
          <button className="bg-[#8cc63f] hover:bg-[#001f3a] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your Canadian Institution Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default CanadaUniversitiesSection;
