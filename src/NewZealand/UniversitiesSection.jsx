import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MapPin, GraduationCap } from 'lucide-react';

// Import city images
import aucklandImg from '../../assets/topcity/New Zealand top cities/Auckland.png';
import wellingtonImg from '../../assets/topcity/New Zealand top cities/Wellington.png';
import christchurchImg from '../../assets/topcity/New Zealand top cities/Christchurch.png';


const UniversitiesSection = () => {
  const nzCities = [
    {
      name: "Auckland",
      description: "Largest city, multicultural, economic hub. Ideal for IT, Business, Engineering.",
      img: aucklandImg
    },
    {
      name: "Wellington",
      description: "Capital city known for arts, government, and creative technologies.",
      img: wellingtonImg
    },
    {
      name: "Christchurch",
      description: "Innovation-driven, strong in Engineering, Architecture, and IT.",
      img: christchurchImg
    },
  ];

  const nzUniversityList = [
    { university: "University of Auckland", location: "Auckland", rank: "#65" },
    { university: "University of Otago", location: "Dunedin", rank: "#206" },
    { university: "Victoria University of Wellington", location: "Wellington", rank: "#241" },
    { university: "University of Canterbury", location: "Christchurch", rank: "#256" },
    { university: "Massey University", location: "Multiple", rank: "#250–300" },
    { university: "University of Waikato", location: "Hamilton", rank: "#301–350" },
    { university: "Lincoln University", location: "Lincoln", rank: "#407" },
    { university: "Auckland University of Technology (AUT)", location: "Auckland", rank: "#407" },
  ];

  // Slider settings for cities
  const citySliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-14 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* NZ Cities Section with Slider */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Best Cities</span> in New Zealand 
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-8"></div>
          
          <Slider {...citySliderSettings} className="mb-8">
            {nzCities.map((city, idx) => (
              <div key={idx} className="px-4">
                <div className="bg-gradient-to-br from-white to-[#f4f8ef] rounded-xl p-6 shadow hover:shadow-lg transition duration-300 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full shadow-md overflow-hidden">
                      <img
                        src={city.img}
                        alt={city.name}
                        className="w-28 h-28 object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#2C2C2C] mb-2">{city.name}</h4>
                  {/* <p className="text-sm text-gray-600">{city.description}</p> */}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* NZ Universities Section */}
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
             Top <span className="text-[#8cc63f]"> New Zealand </span>Institutions You Should Know (QS 2025)
          </h3>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-8"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nzUniversityList.map((uni, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-6 h-6 text-[#8DC63F] mr-2" />
                    <h4 className="font-semibold text-[#2C2C2C]">{uni.university}</h4>
                  </div>
                  {/* <span className="bg-[#8DC63F] text-white text-xs font-bold px-2 py-1 rounded-full">
                    {uni.rank}
                  </span> */}
                </div>
                {/* <p className="text-sm text-gray-600">{uni.location}</p> */}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;