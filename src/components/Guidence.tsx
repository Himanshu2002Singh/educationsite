import React from 'react';
import { FaEye, FaHeart, FaBalanceScale } from 'react-icons/fa'; // Updated icons
import industryImg from '../../assets/v5-casual-life.webp'; // Replace with actual image path

const industryCards = [
  {
    icon: <FaEye className="text-2xl text-green-500" />,
    title: 'Transparency',
    description: 'Every step of our process is clear, open, and built around your best interests, not commission figures.',
    linkText: '',
  },
  {
    icon: <FaHeart className="text-2xl text-pink-600" />,
    title: 'Connecting to Dreams',
    description: 'We take your dreams seriously and are committed to making them a reality.',
    linkText: '',
  },
  {
    icon: <FaBalanceScale className="text-2xl text-red-500" />,
    title: 'Ethical',
    description: 'We are passionate and driven by ethics. We highly value students’ dreams and see this as a growth opportunity for the young generations.',
    linkText: '',
  },
];

const GuidingValues = () => {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12">
       <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-10 drop-shadow-md">
         Our Guiding  Values
        </h2>  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        {/* Left: Cards */}
        <div className="md:w-1/2 w-full grid grid-cols-1 gap-8 ">
          {industryCards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-gradient-to-br from-[#f5f6ff]/70 to-[#fefeff]/80 rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1 border-2 border-transparent"
              style={{
                borderImage: 'linear-gradient(to right,rgb(46, 246, 11), #fff, #EF4444) 5 rounded-2xl',
              }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-2xl bg-white shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{card.description}</p>
              <a href="#" className="text-indigo-600 font-medium hover:underline">
                {card.linkText} →
              </a>
            </div>
          ))}
        </div>

        {/* Right: Illustration */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={industryImg}
            alt="Guiding Values Illustration"
            className="w-full max-w-md object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default GuidingValues;
