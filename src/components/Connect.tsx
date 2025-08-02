import React, { useEffect, useState } from 'react';

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

        {/* Right: Rotating Country Card */}
        <div className="relative w-full h-[360px] flex items-center justify-center">
          {countries.map((country, index) => {
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
    perspective: '1000px',
  }}
>
  <div
    className={`rounded-3xl bg-white border-4 border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500 transform hover:-rotate-1 hover:scale-[1.03] flex flex-col items-center justify-between h-full`}
  >
    <div className="p-4">
      <img
        src={`https://flagcdn.com/w320/${country.code}.png`}
        alt={country.name}
        className="rounded-xl shadow-md border border-gray-300 w-full h-48 object-cover"
      />
    </div>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
        {country.name}
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
