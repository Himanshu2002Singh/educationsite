import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import torontoImg from '../../assets/topcity/Canada top cities/Toronto.png';
import vancouverImg from '../../assets/topcity/Canada top cities/Vancouver.png';
import montrealImg from '../../assets/topcity/Canada top cities/Montreal.png';
import ottawaImg from '../../assets/topcity/Canada top cities/Ottawa.png';
import calgaryImg from '../../assets/topcity/Canada top cities/Calgary.png';
import winnipegImg from '../../assets/topcity/Canada top cities/Winnipeg.png';
import reginaImg from '../../assets/topcity/Canada top cities/Regina.png';

const cities = [
  { name: "Toronto", img: torontoImg },
  { name: "Vancouver", img: vancouverImg },
  { name: "Montreal", img: montrealImg },
  { name: "Ottawa", img: ottawaImg },
  { name: "Calgary", img: calgaryImg },
  { name: "Winnipeg", img: winnipegImg },
  { name: "Regina", img: reginaImg },
];

const BestCitiesCanada = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Best Cities <span className="text-[#8cc63f]">in Canada</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        </div>

        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-4">
              <div className="bg-red-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
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

export default BestCitiesCanada;
