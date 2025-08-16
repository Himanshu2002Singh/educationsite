import React from "react";

const OfferBanner: React.FC = () => {
  return (
    <section className="bg-black text-white py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Text */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-4xl font-bold text-[#8cc63f]">
           Special Launch Offer!
          </h3>
           <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3"></div>
          <p className="mt-1 text-base md:text-lg">
            Get <span className="font-bold">10% Off Premium Plan</span> with code{" "}
            <span className="bg-white text-green-700 px-2 py-0.5 rounded font-mono">
              EDK10
            </span>
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Apply Code & Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
