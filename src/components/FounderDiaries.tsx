import React, { useState } from 'react';

const FounderDiaries: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Highlight an inspiring\nor important message\nfrom the company's\nleader.",
      description: "Add a short note from your CEO or president that will help\nfoster a connection between the company's leadership and\nthe audience or possible recruits.",
      name: "John Doe, CEO"
    },
    {
      id: 2,
      title: "Another inspiring\nmessage from our\ncompany's\nleadership.",
      description: "Additional insights from our leadership team about our\nvision and values that connect with our audience.",
      name: "Jane Smith, President"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full bg-gradient-to-br from-white via-slate-100 to-white py-12 md:py-16  rounded-3xl shadow-lg max-w-8xl mx-auto">
      <div className="relative max-w-6xl mx-auto overflow-hidden px-4">
        <h2 className="text-4xl font-bold text-[#2C2C2C] mb-12 text-center drop-shadow-md">
            Founder Diaries
            </h2>
        <div className="relative h-[900px] sm:h-[620px] md:h-[550px]">
            
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="flex flex-col items-center text-center md:flex-row bg-[#E6F5E1] text-white p-5 md:p-10 font-sans justify-center items-center gap-9 md:gap-16 rounded-xl h-full">
              {/* Image Section */}
              <div className="flex-1 flex justify-center w-full max-w-[280px]">
                <div className="bg-[#d1f7d5] rounded-3xl overflow-hidden text-center w-full max-w-[280px] shadow-md">
                  <div className="pt-[100%] relative bg-[#c1e8c4]">
                    <div className="absolute inset-0 flex justify-center items-center text-[#5a8f69] text-2xl">
                      CEO Photo
                    </div>
                  </div>
                  <div className="py-4 text-base text-[#333] bg-[#d1f7d5] font-semibold">
                    {slide.name}
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 md:pl-8 text-center md:text-left">
                <h1 className="text-3xl md:text-[42px] font-medium mb-6 leading-tight text-[#2C2C2C] whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-lg text-[#2C2C2C] leading-relaxed whitespace-pre-line">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10 transition-all"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10 transition-all"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-[#5a8f69]' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FounderDiaries;