import React, { useState } from 'react';
import { Trophy, TrendingUp, Star } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/logo_universities/UK/aberdeen.png';
import img2 from '../../assets/logo_universities/UK/abertay.png';
import img3 from '../../assets/logo_universities/UK/aberystwyth.png';
import img4 from '../../assets/logo_universities/UK/bangor.png';
import img5 from '../../assets/logo_universities/UK/boltonj.png';
import img6 from '../../assets/logo_universities/UK/cambridge.png';
import img7 from '../../assets/logo_universities/UK/chester.jpg';
import img8 from '../../assets/logo_universities/UK/edinburgh.png';
import img9 from '../../assets/logo_universities/UK/lancaster.png';
import img10 from '../../assets/logo_universities/UK/landon.png';
import img11 from '../../assets/logo_universities/UK/liverpool.jpg';
import img12 from '../../assets/logo_universities/UK/liverpool_hope.jpg';
import img13 from '../../assets/logo_universities/UK/newcastle.png';
import img14 from '../../assets/logo_universities/UK/plymouth.png';
import img15 from '../../assets/logo_universities/UK/prifysgol.png';
import img16 from '../../assets/logo_universities/UK/reading.png';
import img17 from '../../assets/logo_universities/UK/salford.png';
import img18 from '../../assets/logo_universities/UK/sheffield.png';
import img19 from '../../assets/logo_universities/UK/st_andrews.png';
import img20 from '../../assets/logo_universities/UK/strathclyde.png';
import img21 from '../../assets/logo_universities/UK/uofg.png';

const UniversitiesSection = () => {
  const [activeTab, setActiveTab] = useState('elite');

  const eliteUniversities = [
    { name: "University of Aberdeen", logo: img1 },
    { name: "Abertay University", logo: img2 },
    { name: "Aberystwyth University", logo: img3 },
    { name: "Bangor University", logo: img4 },
    { name: "University of Bolton", logo: img5 },
    { name: "University of Cambridge", logo: img6 },
    { name: "University of Chester", logo: img7 },
    { name: "University of Edinburgh", logo: img8 },
    { name: "Lancaster University", logo: img9 },
    { name: "University of London", logo: img10 },
    { name: "University of Liverpool", logo: img11 },
    { name: "Liverpool Hope University", logo: img12 },
    { name: "Newcastle University", logo: img13 },
    { name: "University of Plymouth", logo: img14 },
    { name: "Prifysgol University", logo: img15 },
    { name: "University of Reading", logo: img16 },
    { name: "University of Salford", logo: img17 },
    { name: "University of Sheffield", logo: img18 },
    { name: "University of St Andrews", logo: img19 },
    { name: "University of Strathclyde", logo: img20 },
    { name: "University of Glasgow", logo: img21 },
  ];


  const risingUniversities = [
    { name: "University of Bath", rank: 148, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/University_of_Bath_logo.svg/512px-University_of_Bath_logo.svg.png", courses: "Engineering, Business, Architecture" },
    { name: "University of York", rank: 162, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/University_of_York_coat_of_arms.svg/512px-University_of_York_coat_of_arms.svg.png", courses: "Computer Science, Psychology, History" },
    { name: "Newcastle University", rank: 171, logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Newcastle_University_logo.svg/512px-Newcastle_University_logo.svg.png", courses: "Medicine, Engineering, Business" },
    { name: "University of Surrey", rank: 347, logo: "ht      tps://upload.wikimedia.org/wikipedia/en/thumb/1/1f/University_of_Surrey_logo.svg/512px-University_of_Surrey_logo.svg.png", courses: "Engineering, Business, Hospitality" },
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
    <section className="py-10 sm:py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 sm:mb-4">
            Top{" "}<span className="text-[#8cc63f]"> UK Universities</span> You Should Know
          </h2>
            <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3"></div>
          {/* <p className="text-gray-600 max-w-xl mt-5 sm:max-w-3xl mx-auto text-sm sm:text-base mb-[-25px]">
            Discover your ideal university—whether elite or rising, all offer exceptional education & ROI.
          </p> */}
        </div>

        {/* Tabs */}
        {/* <div className="flex justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap px-2">
          {[
            { key: 'elite', label: 'Elite Universities', icon: Trophy },
            { key: 'rising', label: 'Rising Angels', icon: TrendingUp },
            { key: 'underdogs', label: 'Underdogs', icon: Star }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-4 sm:px-6 py-2 rounded-full border font-medium text-sm sm:text-base transition-all ${
                activeTab === key
                  ? 'bg-[#C1272D] text-white shadow-lg'
                  : 'border-gray-300 text-gray-700 hover:bg-[#8DC63F] hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              {label}
            </button>
          ))}
        </div> */}

        {/* <p className="text-center text-gray-700 mb-6 sm:mb-8 max-w-xl sm:max-w-3xl mx-auto text-sm sm:text-base ">
          {getDescription()}
        </p> */}

        {/* Carousel */}
<Slider {...settings}>
  {getUniversities().map((uni, index) => (
    <div key={index} className="px-2 sm:px-4">
      <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
        
        {/* Logo container */}
        <div className="h-36 w-36 sm:h-28 sm:w-28 ">
          <div className="bg-white h-full w-full flex items-center justify-center ">
            <img
              src={uni.logo}
              alt={uni.name}
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* University name */}
        <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#2C2C2C] text-center">
          {uni.name}
        </h3>
      </div>
    </div>
  ))}
</Slider>



        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 shadow-md">
            Get your University Match
          </button>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;
