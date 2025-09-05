import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/logo_universities/UAE/alberta.png";
import img2 from "../../assets/logo_universities/UAE/amity.png";
import img3 from "../../assets/logo_universities/UAE/aud.png";
import img4 from "../../assets/logo_universities/UAE/british.png";
import img5 from "../../assets/logo_universities/UAE/british_columbia.png";
import img6 from "../../assets/logo_universities/UAE/canadian.png";
import img7 from "../../assets/logo_universities/UAE/de_montreal.png";
import img8 from "../../assets/logo_universities/UAE/dubai.png";
import img9 from "../../assets/logo_universities/UAE/heriot.png";
import img10 from "../../assets/logo_universities/UAE/manipal.png";
import img11 from "../../assets/logo_universities/UAE/manitoba.jpg";
import img12 from "../../assets/logo_universities/UAE/mc_gill.png";
import img13 from "../../assets/logo_universities/UAE/mc_master.png";
import img14 from "../../assets/logo_universities/UAE/middlesex.png";
import img15 from "../../assets/logo_universities/UAE/murdoch.png";
import img16 from "../../assets/logo_universities/UAE/queens.png";
import img17 from "../../assets/logo_universities/UAE/toronoto.png";
import img18 from "../../assets/logo_universities/UAE/uottawa.png";
import img19 from "../../assets/logo_universities/UAE/wollongong.png";
import img20 from "../../assets/logo_universities/UAE/york.png";

const UAEUniversitiesSection: React.FC = () => {
  const universities = [
    { name: "University of Alberta (Dubai Campus)", img: img1 },
    { name: "Amity University Dubai", img: img2 },
    { name: "American University in Dubai (AUD)", img: img3 },
    { name: "British University in Dubai", img: img4 },
    { name: "University of British Columbia (Dubai)", img: img5 },
    { name: "Canadian University Dubai", img: img6 },
    { name: "Université de Montréal (Dubai Campus)", img: img7 },
    { name: "University of Dubai", img: img8 },
    { name: "Heriot-Watt University Dubai", img: img9 },
    { name: "Manipal University Dubai", img: img10 },
    { name: "University of Manitoba (Dubai Campus)", img: img11 },
    { name: "McGill University (Dubai)", img: img12 },
    { name: "McMaster University (Dubai)", img: img13 },
    { name: "Middlesex University Dubai", img: img14 },
    { name: "Murdoch University Dubai", img: img15 },
    { name: "Queen’s University (Dubai)", img: img16 },
    { name: "University of Toronto (Dubai)", img: img17 },
    { name: "University of Ottawa (Dubai)", img: img18 },
    { name: "University of Wollongong Dubai", img: img19 },
    { name: "York University (Dubai)", img: img20 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="py-10 sm:py-16 bg-[#F9F9F9]  max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 md:px-5">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Top <span className="text-[#8cc63f]">Institutions</span> You Should Know
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          {/* <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            The UAE is home to several highly ranked institutions that attract students from around the globe.
          </p> */}
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
                <div className="h-36 w-36 sm:h-28 sm:w-28">
                  <div className="bg-white h-full w-full flex items-center justify-center">
                    <img
                      src={uni.img}
                      alt={uni.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#2C2C2C] text-center">{uni.name}</h3>
                {/* <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">{uni.main}</p>
                <p className="text-xs sm:text-sm text-[#C1272D] font-medium text-center mt-1">{uni.perk}</p> */}
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Get your UAE University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default UAEUniversitiesSection;
