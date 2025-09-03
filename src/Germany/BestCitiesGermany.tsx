import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aachenImg from '../../assets/topcity/Germany top cities/Aachen.png';
import berlinImg from '../../assets/topcity/Germany top cities/Berlin.png';
import bonnImg from '../../assets/topcity/Germany top cities/Bonn.png';
import dresdenImg from '../../assets/topcity/Germany top cities/Dresden.png';
import frankfurtImg from '../../assets/topcity/Germany top cities/Frankfurt.png';
import hamburgImg from '../../assets/topcity/Germany top cities/Hamburg.png';
import leipzigImg from '../../assets/topcity/Germany top cities/Leipzig.png';
import munichImg from '../../assets/topcity/Germany top cities/Munich.png';
import stuttgartImg from '../../assets/topcity/Germany top cities/Stuttgart.png';
import cologneImg from '../../assets/topcity/Germany top cities/cologne.png';

const BestCitiesGermany = () => {
const cities = [
  { name: "Aachen", img: aachenImg },
  { name: "Berlin", img: berlinImg },
  { name: "Bonn", img: bonnImg },
  { name: "Dresden", img: dresdenImg },
  { name: "Frankfurt", img: frankfurtImg },
  { name: "Hamburg", img: hamburgImg },
  { name: "Leipzig", img: leipzigImg },
  { name: "Munich", img: munichImg },
  { name: "Stuttgart", img: stuttgartImg },
  { name: "Cologne", img: cologneImg },
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
            <span className="text-[#8cc63f]">Best Cities</span> in Germany
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

export default BestCitiesGermany;