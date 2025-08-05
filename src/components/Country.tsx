import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/IMG_7936.png";
import img2 from "../../assets/IMG_7937.png";
import img3 from "../../assets/IMG_7938.png";
import img4 from "../../assets/IMG_7939.png";
import img5 from "../../assets/IMG_7940.png";
import img6 from "../../assets/IMG_7941.png";
import img7 from "../../assets/IMG_7942.png";
import img8 from "../../assets/IMG_7943.png";
import img9 from "../../assets/IMG_7944.png";
import img10 from "../../assets/IMG_7945.png";
import img11 from "../../assets/IMG_7946.png";
import img12 from "../../assets/IMG_7947.png";
import img13 from "../../assets/IMG_7948.png";
import img14 from "../../assets/IMG_7949.png";

const AutoCarousel: React.FC = () => {
  const settings = {
    dots: false, // ✅ Dots removed
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
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
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const logos = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
  ];

  return (
    <div className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2C2C] mb-12">
          Where our Students got admit from
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-xl p-4 h-[120px] flex items-center justify-center shadow-md transition-transform hover:scale-105 duration-300">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="object-contain h-full w-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* ...and many more */}
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold text-gray-600 italic">
            ...and many more prestigious universities across the globe
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoCarousel;
