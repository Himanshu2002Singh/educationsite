import React, { useEffect, useState } from 'react';
import student1 from '../../assets/students1.png'; // Replace with your paths
import student2 from '../../assets/studen2.png';
import student3 from '../../assets/students1.png';

const studentCards = [
  { name: 'Nigeria', flag: '🇳🇬', image: student1 },
  { name: 'UK', flag: '🇬🇧', image: student2 },
  { name: 'Canada', flag: '🇨🇦', image: student3 },
];

export default function LeadCaptureForm() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % studentCards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-emerald-100">
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-10 gap-12">

        {/* Left Form Section */}
        <div className="z-10 relative">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-10 text-center drop-shadow-md">
            Take the First Step
          </h2>
          <div className="bg-white border-[6px] border-black rounded-3xl p-6 md:p-8 max-w-md mx-auto shadow-xl">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-800 mb-1 text-sm">Email ID</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-1 text-sm">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2"
              >
                Connect with us
              </button>
            </form>
          </div>
        </div>

        {/* Right: 3D-style Student Card Rotation */}
        <div className="relative w-full h-[360px] flex items-center justify-center">
          {studentCards.map((card, index) => {
            const isActive = index === activeIndex;
            const zIndex = isActive ? 50 : 10;
            const scale = isActive ? 'scale-100' : 'scale-90';
            const opacity = isActive ? 'opacity-100' : 'opacity-0';
            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 transform ${scale} ${opacity}`}
                style={{
                  zIndex,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  margin: 'auto',
                  width: '260px',
                  height: '340px',
                }}
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white flex flex-col items-center justify-between h-full">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {card.flag} {card.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
