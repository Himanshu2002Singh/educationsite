import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your image (placeholder for now)
import img1 from '../../assets/topcity/UK top cites/Birmingham.png';
import img2 from '../../assets/topcity/UK top cites/Brighton.png';
import img3 from '../../assets/topcity/UK top cites/Bristol.png';
import img4 from '../../assets/topcity/UK top cites/Edinburgh.png';
import img5 from '../../assets/topcity/UK top cites/Glasgow.png';
import img6 from '../../assets/topcity/UK top cites/Leeds.png';
import img7 from '../../assets/topcity/UK top cites/Liverpool.png';
import img8 from '../../assets/topcity/UK top cites/London.png';
import img9 from '../../assets/topcity/UK top cites/Manchester.png';
import img10 from '../../assets/topcity/UK top cites/Newcastle.png';
import img11 from '../../assets/topcity/UK top cites/Nottingham.png';
import img12 from '../../assets/topcity/UK top cites/Oxford.png';
import img13 from '../../assets/topcity/UK top cites/Sheffield.png';
import img14 from '../../assets/topcity/UK top cites/York.png';



const cities = [
  { name: "London", img: img8 },
  { name: "Edinburgh", img: img4 },
  { name: "Manchester", img: img9 },
  { name: "Birmingham", img: img1 },
  { name: "Leeds", img: img6 },
  { name: "Glasgow", img: img5 },
  { name: "Bristol", img: img3 },
  { name: "Liverpool", img: img7 },
  { name: "Newcastle", img: img10 },
  { name: "Sheffield", img: img13 },
  { name: "Nottingham", img: img11 },
  { name: "Oxford", img: img12 },
  { name: "Cambridge", img: img1 },
  { name: "Brighton", img: img2 },
  { name: "York", img: img14 },
];

const BestCitiesUk = () => {
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
            Best Cities <span className="text-[#8cc63f]">in the UK</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        </div>

      <Slider {...settings}>
  {cities.map((city, index) => (
    <div key={index} className="px-4">
      <div className="bg-red-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
        <div className="flex justify-center mb-4">
          <div className=" rounded-full shadow-md">
            <img
              src={city.img}
              alt={city.name}
              className="w-28 h-28 object-cover rounded-full" // increased size
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

export default BestCitiesUk;
