import React, { useState, useEffect } from "react";
import girl from "../../../assets/Girl Png.png";
import boy from '../../../assets/Boy Png.png'

const ieltsTestimonials = [
  {
    id: 1,
    name: "Aanchal, IELTS",
    before: "Score: 7.5",
    after: "Score: 9",
    duration: "Achieved with EduKonnect training.",
    quote:
      "I had an amazing experience with EduKonnect’s IELTS training. The trainer was extremely supportive, explained every concept clearly, and gave me personalized feedback that really boosted my confidence. The mock tests and practice sessions made me exam-ready, and I was able to achieve the band score I needed to secure my university admission. I highly recommend EduKonnect to anyone preparing for IELTS!",
    img:girl,    
  },
  {
    id: 2,
    name: "Ayush Falor, PTE",
    before: "Score: 90",
    after: "Score: 90",
    duration: "Achieved with EduKonnect’s structured program.",
    quote:
      "I’m thrilled to share that I scored 90/90 on the PTE, and I owe it to the exceptional training I received at Edukonnect. The program is well-structured, with clear modules, regular mock exams, and actionable feedback after every session. The instructors explained strategies for each task type and helped me refine my timing, accuracy, and confidence. Beyond technical preparation, the team’s encouragement and flexible support created an environment where I could progress quickly. I highly recommend Edukonnect to anyone aiming for top PTE results.",
      img:boy,
  },
  {
    id: 3,
    name: "Rushi Ketan Pandya, IELTS",
    before: "Score: 8",
    after: "Score: 9",
    duration: "Achieved with EduKonnect guidance.",
    quote:
      "EduKonnect’s IELTS coaching gave me the clarity and confidence I needed. The structured sessions, detailed feedback, and constant support from the trainers helped me achieve an overall band score of 8/9. I highly recommend EduKonnect to anyone aiming for top scores.",
      img:boy,
  },
  {
    id: 4,
    name: "Jay Anil Thakkar, IELTS",
    before: "Score: 7.5",
    after: "Score: 9",
    duration: "Achieved with EduKonnect training.",
    quote:
      "Before joining EduKonnect, IELTS felt overwhelming. The trainer broke it down into simple strategies and gave me constant feedback that made all the difference. Scoring 7.5/9 felt like a big win, and it has opened doors for my study abroad dream.",
      img:boy,
  },
];

const StudentTestimonialTest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = window.innerWidth < 768 ? 1 : 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const totalSlides = Math.ceil(ieltsTestimonials.length / slidesPerView);
        return (prev + 1) % totalSlides; // 🔁 infinite loop
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [slidesPerView]);

  const getVisibleTestimonials = () => {
    const start = currentSlide * slidesPerView;
    let visible = ieltsTestimonials.slice(start, start + slidesPerView);

    // अगर end से बाहर निकल जाए तो दुबारा start से ले आओ
    if (visible.length < slidesPerView) {
      visible = [
        ...visible,
        ...ieltsTestimonials.slice(0, slidesPerView - visible.length),
      ];
    }
    return visible;
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
      <div className="flex overflow-hidden max-w-7xl mx-auto">
        <div className="flex w-full justify-center gap-6">
          {getVisibleTestimonials().map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-6 w-full sm:w-72 md:w-80 h-[590px] flex flex-col items-center text-center"
            >
              {/* Profile */}
              <img
                src={item.img}
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

              {/* Quote */}
              <p className="text-gray-600 text-sm overflow-hidden">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
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
