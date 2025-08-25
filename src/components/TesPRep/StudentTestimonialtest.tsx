import React, { useState, useEffect } from "react";
import girl from "../../../assets/Girl Png.png";

const ieltsTestimonials = [
  {
    id: 1,
    name: "Aditi, IELTS",
    before: "Score 6.0",
    after: "Score 7.5",
    duration: "Achieve within 5 weeks with Edukonnect.",
    quote:
      "I really feel grateful for the service provided by Edukonnect. In very less time Edukonnect helped me to get into a reputed University and with a good choice of course.",
  },
  {
    id: 2,
    name: "Aditi, IELTS",
    before: "Score 6.0",
    after: "Score 7.5",
    duration: "Achieve within 5 weeks with Edukonnect.",
    quote:
      "I really feel grateful for the service provided by Edukonnect. In very less time Edukonnect helped me to get into a reputed University and with a good choice of course.",
  },
  {
    id: 3,
    name: "Aditi, IELTS",
    before: "Score 6.0",
    after: "Score 7.5",
    duration: "Achieve within 5 weeks with Edukonnect.",
    quote:
      "I really feel grateful for the service provided by Edukonnect. In very less time Edukonnect helped me to get into a reputed University and with a good choice of course.",
  },
];

const StudentTestimonialTest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(ieltsTestimonials.length / slidesPerView)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [slidesPerView]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    return ieltsTestimonials.slice(start, start + slidesPerView);
  };

  return (
    <div className="py-16 bg-white px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          Student <span className="text-[#8cc63f]">Testimonials</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-3"></div>
        <p className="text-lg text-gray-600">
          Read what our students say about their experience.
        </p>
      </div>

      {/* Slider Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {getVisibleTestimonials().map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-6 w-full sm:w-72 md:w-80 flex flex-col items-center text-center"
          >
            {/* Profile */}
            <img
              src={girl}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h4 className="font-semibold text-gray-800">{item.name}</h4>

            {/* Before After */}
            <div className="grid grid-cols-2 border border-[#8cc63f] mt-4 mb-4 w-40 text-sm">
              <div className="border-r border-[#8cc63f] p-2">
                <p className="font-semibold">Before</p>
                <p>{item.before}</p>
              </div>
              <div className="p-2">
                <p className="font-semibold">After</p>
                <p>{item.after}</p>
              </div>
            </div>

            {/* Duration */}
            <p className="italic text-gray-500 text-xs mb-4">{item.duration}</p>

            {/* Quote */}
            <p className="text-gray-600 text-sm">{item.quote}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 md:mt-6 mt-8">
        {Array.from({
          length: Math.ceil(ieltsTestimonials.length / slidesPerView),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`md:w-3 md:h-3 w-2 h-2 rounded-full ${
              index === currentSlide
                ? "bg-emerald-600 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentTestimonialTest;
