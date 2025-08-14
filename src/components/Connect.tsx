import React, { useEffect, useState } from "react";

const countries = [
  { name: "USA", code: "us" },
  { name: "UK", code: "gb" },
  { name: "UAE", code: "ae" },
  { name: "Singapore", code: "sg" },
  { name: "New Zealand", code: "nz" },
  { name: "Italy", code: "it" },
  { name: "France", code: "fr" },
  { name: "Canada", code: "ca" },
  { name: "Australia", code: "au" },
];

export default function LeadCaptureForm() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-black text-center">
        Take the <span className="text-[#8cc63f]">First</span> Step
      </h2>
      <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2 mb-8"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#92C848] rounded-2xl p-6 w-full max-w-md shadow-lg">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-full text-gray-700 placeholder-gray-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-full text-gray-700 placeholder-gray-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-full text-gray-700 placeholder-gray-600 focus:outline-none"
              />
              <button
                type="submit"
                className=" w-50 flex justify-center  bg-black text-[12px] text-white font-semibold py-3 px-6 rounded-full hover:bg-gray-900 transition"
              >
                CONNECT WITH US
              </button>
            </form>
          </div>
        </div>

        {/* Right: Rotating Flag Card */}
        <div className="hidden sm:flex w-full md:w-1/2 flex justify-center relative min-h-[240px]">
          {countries.map((country, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className={`absolute transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 w-[200px] sm:w-[240px] p-4 flex flex-col items-center">
                  <img
                    src={`https://flagcdn.com/w320/${country.code}.png`}
                    alt={country.name}
                    className="rounded-lg w-full h-32 object-cover"
                  />
                  <p className="mt-3 text-gray-800 font-medium">{country.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
