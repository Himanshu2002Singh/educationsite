import React from "react";
import img1 from "../../../assets/test/Mobile Image Test.png";
import img2 from "../../../assets/test/Desktop Image Test.png";

const PuzzleApproach: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-3">
      Why Edukonnect for your <span className="text-[#8cc63f]"> Test Prep</span> ?
      </h2>
        <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3 "></div>
      <p className="text-center mb-3 text-lg text-gray-600">  At Edukonnect, we don’t believe in one-size-fits-all prep.Our approach is student-centered</p>

    

      {/* ✅ Only Image (Responsive) */}
      <div className="flex justify-center">
        {/* Mobile Image */}
        <img
          src={img1}
          alt="Mobile View"
          className="block md:hidden w-full max-w-sm"
        />

        {/* Laptop/Desktop Image */}
        <img
          src={img2}
          alt="Desktop View"
          className="hidden md:block w-[600px] max-w-4xl"
        />
      </div>
    </div>
  );
};

export default PuzzleApproach;
