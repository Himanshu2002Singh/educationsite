import React, { useState } from "react";

const FounderDiaries: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "Arvind Falor",
      role: "Co-Founder",
      img: "https://via.placeholder.com/100x100", // replace with actual photo
      message:
        'At EduKonnect, we simplify the global education journey with honest guidance and a student-first approach. Backed by a passionate and experienced team, we’re committed to delivering real results. We look forward to the opportunity to serve you.',
    },
    {
      id: 2,
      name: "Dr. Meena Falor",
      role: "Co-Founder",
      img: "https://via.placeholder.com/100x100", // replace with actual photo
      message:
        'Helping students achieve their dreams has always been close to my heart. At EduKonnect, I’m committed to offering guidance with care, clarity, and a genuine focus on what’s best for each student.',
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="py-10 bg-gray-50">
       <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-8">
        Meet our <span className="text-[#8cc63f]">Founders</span>
        <div className="w-14 h-1 bg-[#8cc63f] mx-auto mt-1"></div>
      </h2>

      <div className="max-w-4xl mx-auto relative p-6">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div className="flex md:flex-row flex-col items-center gap-5 bg-[#EAF7E8] border border-2px border-gray-40 rounded-md p-5 shadow-sm">
              {/* Image */}
              <img
                src={slide.img}
                alt={slide.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* Text */}
              <div className="text-center md:text-left">
                <h4 className="font-bold text-gray-900 ">
                  Message from {slide.name}
                </h4>
                <p className="text-red-500 text-sm mb-2">{slide.role}</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  "{slide.message}"
                </p>
              </div>
            </div>

            {/* Slide Number */}
            <div className="text-xs text-gray-600 text-right mt-1">
              &lt;{index + 1}/{slides.length}&gt;
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className=" absolute left-[30px] md:left-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute  right-[30px] md:right-[-40px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default FounderDiaries;
