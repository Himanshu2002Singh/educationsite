import React from "react";
import Slider from "react-slick";
import { MapPin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
  {
    name: "Sydney",
  },
  {
    name: "Melbourne",
  },
  {
    name: "Brisbane",
  },
  {
    name: "Perth",
  },
  {
    name: "Adelaide",
  }
];




const BestCitiesAustrelia = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Best Cities {" "}<span className="text-[#8cc63f]"> in Australia
 </span> 
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        </div>

        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <MapPin className="w-8 h-8 text-red-600" />
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

export default BestCitiesAustrelia;
