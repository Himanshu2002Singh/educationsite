import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const countries = [
  { name: "USA", code: "us" },
  { name: "UK", code: "gb" },
  { name: "UAE", code: "ae" },
  { name: "Singapore", code: "sg" },
  { name: "New Zealand", code: "nz" },
  { name: "Italy", code: "it" },
  { name: "France", code: "fr" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
];

const CountryFlagSlider: React.FC = () => {
  const settings = {
    dots: false, // ✅ Removed dots
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full py-12 bg-[linear-gradient(270deg,#e6f7ea,#f0f7f4,#d8f3dc)] bg-[length:400%_400%] animate-[gradient-x_10s_ease_infinite]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Student Placements Across the Globe
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {countries.map((country, index) => (
            <div key={index} className="px-4">
              <div className="bg-whitesmoke rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
                <img
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={country.name}
                  className="w-[150px] h-[100px] object-contain rounded-lg"
                />
                <span className="mt-3 text-lg font-semibold text-gray-700">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CountryFlagSlider;
