import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestCitiesGermany = () => {
  const cities = [
    { name: "Berlin", desc: "An academic powerhouse with 33 universities. It's a cultural melting pot with vibrant nightlife." },
    { name: "Munich", desc: "Known for academic excellence, cultural richness, and high quality of life. Home to TUM & LMU Munich." },
    { name: "Aachen", desc: "Rich history, high quality of life, and affordability. Home to RWTH Aachen University and more." },
    { name: "Cologne", desc: "Dynamic city with 12 universities. Famous for Cologne Cathedral and rich cultural attractions." },
    { name: "Bonn", desc: "Compact hub with 3 universities including the University of Bonn. Home to the UN Campus." },
    { name: "Stuttgart", desc: "Known for technical programs, affordability, and green landscapes. Home to University of Stuttgart." },
    { name: "Frankfurt", desc: "Finance capital, perfect for business studies. Home to Goethe University and Frankfurt School." },
    { name: "Dresden", desc: "Affordable, high quality of life, and great healthcare. Home to TU Dresden." },
    { name: "Leipzig", desc: "Rich musical heritage, creative scene, and affordability. Home to Leipzig University and HHL." },
    { name: "Hamburg", desc: "Maritime heritage, cultural attractions, and vibrant nightlife. Home to University of Hamburg." },
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
    <section className="py-14 sm:py-20 bg-gradient-to-b from-indigo-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-indigo-200/30 to-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            Best Cities for International Students in Germany
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Discover the top cities in Germany that offer excellent education, vibrant culture, and great student life.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {cities.map((city, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-3"
            >
              <div className="group p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-emerald-300/50 transition-all duration-300 h-full min-h-[220px] flex flex-col justify-start">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-rose-400 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {city.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {city.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestCitiesGermany;
