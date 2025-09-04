import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/logo_universities/Australia/melbourne (1).png';
import img2 from '../../assets/logo_universities/Australia/ancora_imparo.png';
import img3 from '../../assets/logo_universities/Australia/australian_national.png';
import img4 from '../../assets/logo_universities/Australia/queensland.png';
import img5 from '../../assets/logo_universities/Australia/sydney.png';
import img6 from '../../assets/logo_universities/Australia/unsw.png';
import img7 from '../../assets/logo_universities/Australia/western_australia.png';



const AustraliaUniversitiesSection = () => {
  const universities = [
    { name: "University of Melbourne", logo: img1 },
    { name: "Australian National University (ANU)",logo: img3 },
    // { name: "University of Adelaide" },
    { name: "University of Sydney",logo: img5 },
    { name: "University of New South Wales (UNSW Sydney)",logo: img6 },
    { name: "University of Queensland (UQ)",logo: img4 },
    // { name: "Monash University" },
    { name: "University of Western Australia (UWA)", logo:img7 },
    // { name: "Macquarie University" },
    // { name: "University of Technology Sydney (UTS)" },
    // { name: "RMIT University" },
    // { name: "Curtin University" },
    // { name: "Deakin University" },
    // { name: "Ancora University",logo: img2 },
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
    <section className="py-10 sm:py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 md:px-2  max-w-7xl ">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Top<span className="text-[#8cc63f]"> Australian </span>Universities You Should Know 🎓
          </h2>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
                <div className="h-36 w-36 sm:h-28 sm:w-28">
                  {uni.logo ? (
                    <img src={uni.logo} alt={uni.name} className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-black text-lg font-bold">AU</span>
                  )}
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
