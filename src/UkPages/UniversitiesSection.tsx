import React, { useState } from 'react';
import { Trophy, TrendingUp, Star } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UniversitiesSection = () => {
  const [activeTab, setActiveTab] = useState('elite');

  const eliteUniversities = [
    { name: "Imperial College London", rank: 2, logo: "./assets\eda25c36a6813a03a54ec84fe0d32686.jpg", courses: "Engineering, Medicine, Business" },
    { name: "University of Oxford", rank: 4, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/University_of_Oxford_coat_of_arms.svg/512px-University_of_Oxford_coat_of_arms.svg.png", courses: "Law, Philosophy, Medicine" },
    { name: "University of Cambridge", rank: 6, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/University_of_Cambridge_coat_of_arms.svg/512px-University_of_Cambridge_coat_of_arms.svg.png", courses: "Natural Sciences, Engineering, Law" },
    { name: "UCL", rank: 9, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/UCL_logo.svg/512px-UCL_logo.svg.png", courses: "Medicine, Engineering, Arts" },
    { name: "King’s College London", rank: 31, logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/King%27s_College_London_logo.svg/512px-King%27s_College_London_logo.svg.png", courses: "Medicine, Law, Business" },
  ];

  const risingUniversities = [
    { name: "University of Bath", rank: 148, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/University_of_Bath_logo.svg/512px-University_of_Bath_logo.svg.png", courses: "Engineering, Business, Architecture" },
    { name: "University of York", rank: 162, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/University_of_York_coat_of_arms.svg/512px-University_of_York_coat_of_arms.svg.png", courses: "Computer Science, Psychology, History" },
    { name: "Newcastle University", rank: 171, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Newcastle_University_logo.svg/512px-Newcastle_University_logo.svg.png", courses: "Medicine, Engineering, Business" },
    { name: "University of Surrey", rank: 347, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/University_of_Surrey_logo.svg/512px-University_of_Surrey_logo.svg.png", courses: "Engineering, Business, Hospitality" },
  ];

  const underdogUniversities = [
    { name: "Coventry University", rank: 571, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Coventry_University_logo.svg/512px-Coventry_University_logo.svg.png", courses: "Design, Engineering, Business" },
    { name: "Middlesex University", rank: 801, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Middlesex_University_logo.svg/512px-Middlesex_University_logo.svg.png", courses: "Business, Arts, Health Sciences" },
    { name: "University of Greenwich", rank: 1001, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/University_of_Greenwich_logo.svg/512px-University_of_Greenwich_logo.svg.png", courses: "Business, Computing, Architecture" },
    { name: "London South Bank University", rank: 1201, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/London_South_Bank_University_logo.svg/512px-London_South_Bank_University_logo.svg.png", courses: "Engineering, Business, Health" },
  ];

  const getUniversities = () => {
    switch (activeTab) {
      case 'elite': return eliteUniversities;
      case 'rising': return risingUniversities;
      case 'underdogs': return underdogUniversities;
      default: return eliteUniversities;
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case 'elite':
        return "Top-tier institutions with global recognition and academic excellence.";
      case 'rising':
        return "Universities climbing rankings rapidly with strong programs.";
      case 'underdogs':
        return "Affordable options with great ROI and strong course offerings.";
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
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Top UK Universities You Should Know
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover your ideal university—whether elite or rising, all offer exceptional education & ROI.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {[
            { key: 'elite', label: 'Elite Universities', icon: Trophy },
            { key: 'rising', label: 'Rising Angels', icon: TrendingUp },
            { key: 'underdogs', label: 'Underdogs', icon: Star }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-2 rounded-full border font-medium transition-all ${
                activeTab === key
                  ? 'bg-[#C1272D] text-white shadow-lg'
                  : 'border-gray-300 text-gray-700 hover:bg-[#8DC63F] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">{getDescription()}</p>

        {/* Carousel */}
       <Slider {...settings}>
  {getUniversities().map((uni, index) => (
    <div key={index} className="px-4">
      <div className="rounded-xl bg-white/60 backdrop-blur-lg border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#8DC63F] via-[#c1f0c1] to-[#8DC63F] p-1 mb-4">
          <div className="bg-white rounded-full h-full w-full flex items-center justify-center">
            <img
              src={uni.logo}
              alt={uni.name}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
        <h3 className="text-base font-semibold text-[#2C2C2C] text-center">{uni.name}</h3>
      </div>
    </div>
  ))}
</Slider>



        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md">
            Get your University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
