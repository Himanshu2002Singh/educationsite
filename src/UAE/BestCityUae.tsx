import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import city images
import abuDhabiImg from '../../assets/topcity/UAE top cities/Abu Dhabi.png';
import ajmanImg from '../../assets/topcity/UAE top cities/Ajman.png';
import dubaiImg from '../../assets/topcity/UAE top cities/Dubai.png';
import rasAlKhaimahImg from '../../assets/topcity/UAE top cities/Ras Al Khaimah.png';
import sharjahImg from '../../assets/topcity/UAE top cities/Sharjah.png';

const BestCitiyUae = () => {
  const cities = [
    { 
      name: "Abu Dhabi", 
      img: abuDhabiImg 
    },
    { 
      name: "Ajman", 
      img: ajmanImg 
    },
    { 
      name: "Dubai", 
      img: dubaiImg 
    },
    { 
      name: "Ras Al Khaimah", 
      img: rasAlKhaimahImg 
    },
    { 
      name: "Sharjah", 
      img: sharjahImg 
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1, 
          centerMode: true,
          centerPadding: "20px"
        } 
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            {" "}<span className="text-[#8cc63f]"> Best Cities</span> in UAE
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        </div>

        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full shadow-md">
                    <img
                      src={city.img}
                      alt={city.name}
                      className="w-28 h-28 object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestCitiyUae;