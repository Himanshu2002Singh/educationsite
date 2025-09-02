import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UAEUniversitiesSection = () => {
  const universities = [
    {
      name: "University of Birmingham Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/University_of_Birmingham_coat_of_arms.svg/512px-University_of_Birmingham_coat_of_arms.svg.png",
      main: "Russell Group UK quality | Top for AI & Business",
      perk: "Exclusive industry tours at DIFC banks"
    },
    {
      name: "Heriot-Watt University Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Heriot-Watt_University_coat_of_arms.svg/512px-Heriot-Watt_University_coat_of_arms.svg.png",
      main: "#1 in Engineering | NASA-collaborated robotics lab",
      perk: "50% scholarships for women in STEM"
    },
    {
      name: "Middlesex University Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Middlesex_University_logo.svg/512px-Middlesex_University_logo.svg.png",
      main: "London-degree at 40% lower cost | Media City internships",
      perk: "Free Adobe Creative Cloud access"
    },
    {
      name: "Murdoch University Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Murdoch_University_Logo.svg/512px-Murdoch_University_Logo.svg.png",
      main: "Australian cybersecurity degrees | PwC/Deloitte recruitment pipeline",
      perk: "Free CISSP certification voucher"
    },
    {
      name: "SP Jain School of Global Management",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/SP_Jain_School_of_Global_Management_Logo.svg/512px-SP_Jain_School_of_Global_Management_Logo.svg.png",
      main: "Triple-accredited MBA | Avg. graduate salary: AED 25K/month",
      perk: "VIP access: Meet Dubai Chamber of Commerce executives"
    },
    {
      name: "Manipal Academy Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Manipal_Academy_of_Higher_Education_logo.svg/512px-Manipal_Academy_of_Higher_Education_logo.svg.png",
      main: "NAAC A++ Indian curriculum | Direct hospital placements",
      perk: "Free Arabic medical terminology course"
    },
    {
      name: "University of Wollongong Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/University_of_Wollongong_logo.svg/512px-University_of_Wollongong_logo.svg.png",
      main: "QS-ranked Australian degrees | Architecture studio at Dubai Design District",
      perk: "3D printing lab access"
    },
    {
      name: "Amity University Dubai",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Amity_University_logo.svg/512px-Amity_University_logo.svg.png",
      main: "Most affordable Indian degrees | Aviation simulators on campus",
      perk: "Drone pilot license included"
    },
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
                      src={uni.logo}
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
