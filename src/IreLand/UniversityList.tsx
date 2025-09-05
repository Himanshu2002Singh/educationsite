import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/logo_universities/Ireland/ait (1).png';
import img2 from '../../assets/logo_universities/Ireland/carlow.png';
import img3 from '../../assets/logo_universities/Ireland/cork.png';
import img4 from '../../assets/logo_universities/Ireland/dublin.png';
import img5 from '../../assets/logo_universities/Ireland/dundalk.jpg';
import img6 from '../../assets/logo_universities/Ireland/gmit.png';
import img7 from '../../assets/logo_universities/Ireland/iadt.png';
import img8 from '../../assets/logo_universities/Ireland/itsligo.png';
import img9 from '../../assets/logo_universities/Ireland/limerick.png';
import img10 from '../../assets/logo_universities/Ireland/lit.png';
import img11 from '../../assets/logo_universities/Ireland/lyit.jpg';
import img12 from '../../assets/logo_universities/Ireland/maynooth.png';
import img13 from '../../assets/logo_universities/Ireland/mic.png';
import img14 from '../../assets/logo_universities/Ireland/ncad.png';
import img15 from '../../assets/logo_universities/Ireland/nui.png';
import img16 from '../../assets/logo_universities/Ireland/st.angelas.jpg';
import img17 from '../../assets/logo_universities/Ireland/tralee.jpg';
import img18 from '../../assets/logo_universities/Ireland/trinty.png';
import img19 from '../../assets/logo_universities/Ireland/ucc.png';
import img20 from '../../assets/logo_universities/Ireland/ucd.jpg';
import img21 from '../../assets/logo_universities/Ireland/waterford.jpg';

const IrelandUniversitiesSection = () => {
  const universities = [
    { name: "Athlone Institute of Technology (AIT)", img: img1 },
    { name: "Institute of Technology Carlow", img: img2 },
    { name: "University College Cork (UCC)", img: img3 },
    { name: "Technological University Dublin", img: img4 },
    { name: "Dundalk Institute of Technology", img: img5 },
    { name: "Galway-Mayo Institute of Technology (GMIT)", img: img6 },
    { name: "Institute of Art, Design and Technology (IADT)", img: img7 },
    { name: "Institute of Technology Sligo", img: img8 },
    { name: "University of Limerick", img: img9 },
    { name: "Limerick Institute of Technology (LIT)", img: img10 },
    { name: "Letterkenny Institute of Technology (LYIT)", img: img11 },
    { name: "Maynooth University", img: img12 },
    { name: "Mary Immaculate College (MIC)", img: img13 },
    { name: "National College of Art and Design (NCAD)", img: img14 },
    { name: "National University of Ireland (NUI)", img: img15 },
    { name: "St. Angela’s College Sligo", img: img16 },
    { name: "Institute of Technology Tralee", img: img17 },
    { name: "Trinity College Dublin", img: img18 },
    { name: "University College Cork", img: img19 },
    { name: "University College Dublin (UCD)", img: img20 },
    { name: "Waterford Institute of Technology (WIT)", img: img21 },
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
    <section className="py-10 sm:py-16 bg-[#F9F9F9] ">
      <div className="container mx-auto px-4 sm:px-6 md:px-2  max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Top Ireland <span className="text-[#8cc63f]">Universities</span> You Should Know 🎓
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          {/* <p className="text-gray-600 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base">
            Discover Ireland’s leading institutions known for academic excellence, research, and vibrant student life.
          </p> */}
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {universities.map((uni, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
                {/* Logo container */}
                <div className="h-36 w-36 sm:h-28 sm:w-28">
                  <div className="bg-white h-full w-full flex items-center justify-center">
                    <img
                      src={uni.img}
                      alt={uni.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* University name */}
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-[#2C2C2C] text-center">
                  {uni.name}
                </h3>

                {/* Optional extra info */}
                {/* <p className="text-xs sm:text-sm text-gray-600 text-center mt-1">{uni.main}</p>
                <p className="text-xs sm:text-sm text-[#C1272D] font-medium text-center mt-1">{uni.perk}</p> */}
              </div>
            </div>
          ))}
        </Slider>


        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8cc63f] hover:bg-green text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your Ireland University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default IrelandUniversitiesSection;
