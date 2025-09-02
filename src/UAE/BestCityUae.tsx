import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestCitiyUae = () => {
const cities = [
  { name: "Dubai", desc: "A global hub with world-class universities, diverse culture, and excellent career opportunities." },
  { name: "Abu Dhabi", desc: "The capital city offering premium education institutions and strong government support for students." },
  { name: "Sharjah", desc: "Known as the cultural capital with affordable living costs and reputable universities." },
  { name: "Ajman", desc: "Offers budget-friendly education options with proximity to major UAE cities." },
  { name: "Al Ain", desc: "A green oasis city with a peaceful environment perfect for focused studies." },
  { name: "Ras Al Khaimah", desc: "Emerging education hub with new universities and stunning natural landscapes." },
  { name: "Fujairah", desc: "Coastal city offering unique marine and environmental science programs." },
  { name: "Umm Al Quwain", desc: "Quiet study environment with growing educational infrastructure." }
];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
            {" "}<span className="text-[#8cc63f]"> Best Cities</span> in Germany
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        </div>

        <Slider {...settings}>
          {cities.map((cities, index) => (
            <div key={index} className="px-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <MapPin className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cities.name}
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
