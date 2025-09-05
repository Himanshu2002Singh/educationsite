import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/logo_universities/USA/arizona_state (1).png'
import img2 from '../../assets/logo_universities/USA/berkrlry (1).png';
import img3 from '../../assets/logo_universities/USA/boston (1).png';
import img4 from '../../assets/logo_universities/USA/brown (1).png';
import img5 from '../../assets/logo_universities/USA/carnegie mellon (1).png';

const USAUniversitiesSection = () => {
   const universities = [
    {
      name: "Arizona State University",
      img: img1, 
    },
    {
      name: "University of California, Berkeley (UCB)",
      img: img2, 
    },
    {
      name: "Boston University",
      img: img3, 
    },
    {
      name: "Brown University",
      img: img4, 
    },
    {
      name: "Carnegie Mellon University",
      img: img5, 
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
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
          {/* <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Discover America’s top-ranked institutions shaping global leaders, innovators, and change-makers.
          </p> */}
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
                <div className="h-36 w-36 sm:h-28 sm:w-28">
                  <div className="bg-white h-full w-full flex items-center justify-center">
                    <img
                      src={uni.img}
                      alt={uni.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2C2C2C] text-center">{uni.name}</h3>
                {/* <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">{uni.main}</p>
                <p className="text-xs sm:text-sm text-black font-medium text-center mt-1">{uni.perk}</p> */}
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8cc63f] hover:bg-[#003580] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your USA University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default USAUniversitiesSection;
