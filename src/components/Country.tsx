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
    dots: false,
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
    <div className="w-full white py-12 md:py-16 rounded-3xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2C2C] mb-10">
          Where our Students got Admit from?
        </h2>

        <div className="relative">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-2">
                <div className="w-full h-[120px] flex items-center justify-center overflow-hidden gap-4">
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="object-contain h-full w-auto gap-4"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Dots Custom Styling */}
      <style>
        {`
          .slick-dots {
            bottom: -30px;
          }
          .slick-dots li button:before {
            font-size: 10px;
            color: #a3a3a3;
          }
          .slick-dots li.slick-active button:before {
            color: #22c55e;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default AutoCarousel;
