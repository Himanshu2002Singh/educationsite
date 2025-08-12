import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IrelandUniversitiesSection = () => {
  const universities = [
    { name: "Trinity College Dublin" },
    { name: "University College Dublin" },
    { name: "University College Cork" },
    { name: "University of Galway" },
    { name: "University of Limerick" },
    { name: "Dublin City University" },
    { name: "Maynooth University" },
    { name: "Technological University Dublin" },
    { name: "National College of Ireland" },
    { name: "TUS: Midlands Midwest" },
    { name: "Munster Technological University" },
    { name: "Atlantic Technological University" },
    { name: "Dublin Business School" },
    { name: "Griffith College" },
    { name: "IBAT College Dublin" },
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
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">
            Top Ireland Universities You Should Know 🎓
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Discover Ireland’s leading institutions known for academic excellence, research, and vibrant student life.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-4 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#016241] via-[#9fd3c7] to-[#016241] flex items-center justify-center mb-3 sm:mb-4">
                  <span className="text-white text-lg font-bold">IE</span>
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
          <button className="bg-[#016241] hover:bg-[#014d33] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your Ireland University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default IrelandUniversitiesSection;
