import React, { useState } from 'react';
import { Wrench, Briefcase, Music } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UniversitiesGermany = () => {
  const [activeTab, setActiveTab] = useState('technical');

  const technicalUniversities = [
    {
      name: "Technical University of Munich",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/TU_Muenchen_Logo.svg/512px-TU_Muenchen_Logo.svg.png",
      courses: "Engineering, Science, Law, Medicine, Social Sciences, Business Management"
    },
    {
      name: "RWTH Aachen University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/RWTH_Aachen_University_logo.svg/512px-RWTH_Aachen_University_logo.svg.png",
      courses: "Engineering, Education, Science, Law"
    },
    {
      name: "Technical University of Berlin",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/TU_Berlin_logo.svg/512px-TU_Berlin_logo.svg.png",
      courses: "Engineering, Business, Medicine, Social Sciences"
    }
  ];

  const appliedUniversities = [
    {
      name: "Berlin University of Applied Sciences",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Hochschule_f%C3%BCr_Technik_und_Wirtschaft_Berlin_logo.svg/512px-Hochschule_f%C3%BCr_Technik_und_Wirtschaft_Berlin_logo.svg.png",
      courses: "Engineering, Business, Computer Science"
    },
    {
      name: "Munich University of Applied Sciences",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hochschule_Muenchen_Logo.svg/512px-Hochschule_Muenchen_Logo.svg.png",
      courses: "Design, Business, Social Sciences"
    },
    {
      name: "Cologne University of Applied Sciences",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/TH_K%C3%B6ln_logo.svg/512px-TH_K%C3%B6ln_logo.svg.png",
      courses: "Engineering, Architecture, Media"
    }
  ];

  const artUniversities = [
    {
      name: "Berlin University of the Arts",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Universit%C3%A4t_der_K%C3%BCnste_Berlin_logo.svg/512px-Universit%C3%A4t_der_K%C3%BCnste_Berlin_logo.svg.png",
      courses: "Music, Architecture, Dance, Drama"
    },
    {
      name: "HFF Munich (University of Television and Film)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Hochschule_f%C3%BCrn_Fernsehen_und_Film_Muenchen_logo.svg/512px-Hochschule_f%C3%BCrn_Fernsehen_und_Film_Muenchen_logo.svg.png",
      courses: "Directing, Cinematography, Screenwriting"
    },
    {
      name: "Folkwang University of the Arts",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Folkwang_Universit%C3%A4t_der_K%C3%BCnste_logo.svg/512px-Folkwang_Universit%C3%A4t_der_K%C3%BCnste_logo.svg.png",
      courses: "Music, Theater, Dance, Design"
    }
  ];

  const getUniversities = () => {
    switch (activeTab) {
      case 'technical': return technicalUniversities;
      case 'applied': return appliedUniversities;
      case 'arts': return artUniversities;
      default: return technicalUniversities;
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case 'technical':
        return "Bachelors/Masters offered • Mainly theoretical knowledge • Research oriented • Faculties: Education, Engineering, Science, Law, Medicine, Social Sciences, Business Management.";
      case 'applied':
        return "Bachelors/Masters offered • Mainly practical knowledge • Application oriented • Excellent job opportunities • Close ties to industries.";
      case 'arts':
        return "Artistic courses such as music, architecture, dance, drama • Directors, cinematographers, screenwriters trained • Admission requires demonstrated talent.";
      default:
        return "";
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false, dots: true } },
    ]
  };

  return (
    <section className="py-8 sm:py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-3 sm:px-6 md:px-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-4xl font-bold text-[#2C2C2C] mb-2 sm:mb-4 leading-snug">
            Universities in Germany
          </h2>
          <p className="text-gray-600 max-w-lg sm:max-w-3xl mx-auto text-sm sm:text-base px-2">
            Explore the three main categories of German higher education institutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-nowrap overflow-x-auto scrollbar-hide px-1 sm:px-2">
          {[
            { key: 'technical', label: 'Technical University', icon: Wrench },
            { key: 'applied', label: 'University of Applied Sciences', icon: Briefcase },
            { key: 'arts', label: 'Colleges of Art, Film & Music', icon: Music }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center whitespace-nowrap px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border font-medium text-xs sm:text-base transition-all ${
                activeTab === key
                  ? 'bg-[#C1272D] text-white shadow-lg'
                  : 'border-gray-300 text-gray-700 hover:bg-[#8DC63F] hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 flex-shrink-0" />
              {label}
            </button>
          ))}
        </div>

        <p className="text-center text-gray-700 mb-5 sm:mb-8 max-w-lg sm:max-w-3xl mx-auto text-sm sm:text-base px-2">
          {getDescription()}
        </p>

        {/* Carousel */}
        <Slider {...settings}>
          {getUniversities().map((uni, index) => (
            <div key={index} className="px-1.5 sm:px-4">
              <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-3 sm:p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-14 w-14 sm:h-20 sm:w-20 rounded-full bg-gradient-to-br from-[#8DC63F] via-[#c1f0c1] to-[#8DC63F] p-1 mb-2 sm:mb-4">
                  <div className="bg-white rounded-full h-full w-full flex items-center justify-center">
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="h-9 w-9 sm:h-12 sm:w-12 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xs sm:text-base font-semibold text-[#2C2C2C] text-center">{uni.name}</h3>
                <p className="text-[10px] sm:text-sm text-gray-600 text-center mt-1">{uni.courses}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-bold py-2 sm:py-3 px-5 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Find Your Ideal German University
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesGermany;
