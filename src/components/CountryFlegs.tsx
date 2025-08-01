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
    dots: true,
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
    <div className="w-full py-12 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Country flags
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {countries.map((country, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center justify-center gap-3">
                <img
                  src={`https://flagcdn.com/w320/${country.code}.png`}
                  alt={country.name}
                  className="w-[150px] h-[100px] object-contain rounded-lg shadow-md transition-transform hover:scale-105"
                />
                <span className="text-lg font-semibold text-gray-700">
                  {country.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Dot customization */}
      <style>
        {`
          .slick-dots {
            bottom: -25px;
          }
          .slick-dots li button:before {
            font-size: 10px;
            color: #888;
          }
          .slick-dots li.slick-active button:before {
            color: #2563eb;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default CountryFlagSlider;
