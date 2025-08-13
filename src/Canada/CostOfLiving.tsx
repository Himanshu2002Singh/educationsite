import React from "react";
import Slider from "react-slick";
import { MapPin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cities = [
  {
    name: "Toronto",
    description: "Business hub, diverse, home to UofT, York, Ryerson"
  },
  {
    name: "Vancouver",
    description: "Tech-focused, scenic, UBC and SFU located here"
  },
  {
    name: "Montreal",
    description: "Affordable, cultural, home to McGill, Concordia"
  },
  {
    name: "Ottawa",
    description: "Safe and bilingual, University of Ottawa and Carleton University"
  },
  {
    name: "Calgary",
    description: "Growing economy, low cost of living, University of Calgary"
  },
  {
    name: "Winnipeg",
    description: "PR-friendly, low tuition and living cost, UoM is located here"
  },
  {
    name: "Regina",
    description: "East PR policies, home to University of Regina and University of Jasie"
  }
];

const BestCitiesCanada = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4 font-serif">
            Best Cities for International Students in Canada
          </h2>
        </div>

        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-4">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    <MapPin className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {city.name}
                </h3>
                <p className="text-gray-600 text-sm">{city.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BestCitiesCanada;
