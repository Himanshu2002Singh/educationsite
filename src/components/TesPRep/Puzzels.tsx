import React from "react";
import img1 from "../../../assets/testprep Mobile Image.png";
import img2 from "../../../assets/testprep laptop.png";

const PuzzleApproach: React.FC = () => {
  return (
    <div className="bg-white py-10 px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black">
        At Edukonnect, we don’t believe in one-size-fits-all prep.
        <br />
        <span className="text-[#8cc63f]">Our approach is student-centered</span>
      </h2>

      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mt-3 mb-20"></div>

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
