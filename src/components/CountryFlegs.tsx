import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import flag images from your assets
import usa from "../../assets/fleg1.png";
import uk from "../../assets/flegs2.png";
import uae from "../../assets/3.png";
import singapore from "../../assets/4.png";
import newzealand from "../../assets/5.png";
import italy from "../../assets/6.png";
import france from "../../assets/7.png";
import canada from "../../assets/8.png";
import australia from "../../assets/9.png";

const countries = [
  { name: "USA", img: usa },
  { name: "UK", img: uk },
  { name: "UAE", img: uae },
  { name: "Singapore", img: singapore },
  { name: "New Zealand", img: newzealand },
  { name: "Italy", img: italy },
  { name: "France", img: france },
  { name: "Canada", img: canada },
  { name: "Australia", img: australia },
];

export default function GlobalStudyDestinations() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-10 bg-gray-50">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl   font-bold text-gray-800">
          Global Study <span className="text-[#8cc63f]">Destinations</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3"></div>
      </div>

      {/* Slider */}
      <div className="px-4 max-w-7xl mx-auto">
        <Slider {...settings}>
          {countries.map((country, idx) => (
            <div key={idx} className="px-2">
              <div className="rounded-md overflow-hidden hover:scale-90 transition-transform duration-300 flex flex-col items-center">
                <img
                  src={country.img}
                  alt={country.name}
                  className="h-auto w-auto object-contain" // same height for all
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
