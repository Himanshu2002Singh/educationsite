import React, { useState } from 'react';

const FounderDiaries: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Message from Arvind Falor",
      description:
        "At EduKonnect, we simplify the global education journey with honest guidance and a student-first approach. Backed by a passionate and experienced team, we’re committed to delivering real results. We look forward to the opportunity to serve you.",
      name: "Arvind Falor",
      role: "Co-Founder",
    },
    {
      id: 2,
      title: "Message from Dr. Meena Falor",
      description:
        "Helping students achieve their dreams has always been close to my heart. At EduKonnect, I’m committed to offering guidance with care, clarity, and a genuine focus on what’s best for each student.",
      name: "Dr. Meena Falor",
      role: "Co-Founder",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className='bg-gradient-to-br from-white via-slate-50 to-white'>
    <section className="w-full  md:py-20 rounded-3xl max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Meet our Founders
      </h2>

      <div className="relative h-[600px] sm:h-[500px] md:h-[460px] px-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-center h-full gap-10 bg-[#ecfdf5] rounded-2xl p-6 md:p-10 shadow-xl border border-green-100">
              {/* Photo Circle */}
              <div className="w-48 h-48 rounded-full bg-[#d1f7d5] flex items-center justify-center text-[#5a8f69] text-xl font-semibold shadow-inner">
                {slide.name.split(' ')[0]}'s Photo
              </div>

              {/* Message Section */}
              <div className="text-center md:text-left max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-4">
                  {slide.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 whitespace-pre-line">
                  {slide.description}
                </p>
                <div className="text-[#5a8f69] font-medium text-base">
                  {slide.name} — {slide.role}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 transition rounded-full p-2 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md hover:scale-110 transition rounded-full p-2 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3.5 h-3.5 rounded-full transition ${
                index === currentSlide ? 'bg-[#5a8f69]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FounderDiaries;
