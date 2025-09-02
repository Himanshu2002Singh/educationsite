import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/logo_universities/Germany/bonn.png';
import img2 from '../../assets/logo_universities/Germany/heidelberg.png';
import img3 from '../../assets/logo_universities/Germany/lmu.png';
import img4 from '../../assets/logo_universities/Germany/medizinische.png';
import img5 from '../../assets/logo_universities/Germany/tubingen.png';

const UniversitySection: React.FC = () => {
  const [view, setView] = useState<"public" | "private">("public");

  const publicUniversities = [
    // { name: "Technical University of Munich", logo: "../../assets/Technical University of Munich.png" },
    // { name: "Ludwig Maximilian University of Munich", logo: "/images/lmu.png" },
    // { name: "University of Heidelberg", logo: "/images/heidelberg.png" },
    // { name: "University of Berlin", logo: "/images/berlin.png" },
    // { name: "Karlsruhe Institute of Technology", logo: "/images/kit.png" },
    // { name: "University of Göttingen", logo: "../../assets/goettingen.png" },
    // { name: "University of Freiburg", logo: "/images/freiburg.png" },
    // { name: "RWTH Aachen University", logo: "/images/rwth.png" },
    // { name: "University of Hamburg", logo: "/images/hamburg.png" },
    // { name: "University of Cologne", logo: "/images/cologne.png" },
        {
      name: "Universitat Bonn",
      logo: img1,
      courses: "Engineering, Science, Law, Medicine, Social Sciences, Business Management"
    },
    {
      name: "Universitat Heidelberg",
      logo: img2,
      courses: "Engineering, Education, Science, Law"
    },
    {
      name: "LMU",
      logo: img3,
      courses: "Engineering, Business, Medicine, Social Sciences"
    }
    ,  {
      name: "Medizinische Hochschule Hannoer",
      logo: img4,
      courses: "Engineering, Business, Medicine, Social Sciences"
    },
      {
      name: "Universitat Tubingen",
      logo: img5,
      courses: "Engineering, Business, Medicine, Social Sciences"
    }
  ];

  const privateUniversities = [
    // { name: "Berlin School of Business and Innovation", logo: "/images/bsbi.png" },
    // { name: "SRH Berlin University of Applied Sciences", logo: "/images/srh-berlin.png" },
    // { name: "University of Europe for Applied Sciences", logo: "/images/ue.png" },
    // { name: "International University of Applied Sciences (IU)", logo: "/images/iu.png" },
    // { name: "Arden University", logo: "/images/arden.png" },
    // { name: "EU Business School", logo: "/images/eubs.png" },
    // { name: "GISMA Business School Hochschule", logo: "/images/gisma.png" },
    // { name: "Fresenius University of Applied Sciences", logo: "/images/fresenius.png" },
    // { name: "International School of Management", logo: "/images/ism.png" },
    // { name: "SRH Hochschule Heidelberg", logo: "/images/srh-heidelberg.png" },
    // { name: "Munich Business School", logo: "/images/munich-business.png" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  const renderCarousel = (universities: { name: string; logo: string }[]) => (
    <Slider {...sliderSettings}>
      {universities.map((uni) => (
        <div key={uni.name} className="p-3">
          <div className="bg-white backdrop-blur-lg border border-gray-200 shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg h-48 sm:h-56 w-full max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl">
            <div className="h-36 w-36 sm:h-28 sm:w-28">
              <img
                src={uni.logo}
                alt={uni.name}
                className="h-full w-full object-contain"
              />
            </div>
            <p className="mt-4 text-black font-semibold text-sm sm:text-base sm:mb-[20px]">
              {uni.name}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );

  return (
    <div className=" bg-green-50 ">
    <div className="py-12 px-15 sm:px-8  max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        <span className="text-[#8cc63f]">Top German </span>Universities You Should Know
      </h2>
      
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
        {/* <p className="text-black-700 text-center mb-6 text-sm sm:text-base">
          Click a button to explore public or private universities in Germany
        </p> */}

      {/* Toggle Buttons */}
      {/* <div className="flex justify-center gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setView("public")}
          className={`px-5 py-2 rounded-lg font-semibold border transition-all ${
            view === "public"
              ? "bg-[#8cc63f] text-white border-[#8cc63f]-600"
              : "bg-green-100 text-green-900 border-green-300 hover:bg-green-200"
          }`}
        >
          Public Universities
        </button>
        <button
          onClick={() => setView("private")}
          className={`px-5 py-2 rounded-lg font-semibold border transition-all ${
            view === "private"
              ? "bg-[#8cc63f] text-white border-green-600"
              : "bg-green-100 text-green-900 border-green-300 hover:bg-green-200"
          }`}
        >
          Private Universities
        </button>
      </div> */}

      {/* Carousel */}
      <div className="pb-8"> {/* extra space for dots */}
        {view === "public"
          ? renderCarousel(publicUniversities)
          : renderCarousel(privateUniversities)}
      </div>
    </div>
    </div>
  );
};

export default UniversitySection;
