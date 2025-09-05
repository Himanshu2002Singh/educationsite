import React from "react";

const FounderDiaries: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-8">
         <span className="text-[#8cc63f]">About</span> Us
        <div className="w-14 h-1 bg-[#8cc63f] mx-auto mt-1"></div>
      </h2>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative p-6">
        <div className="flex flex-col md:flex-row items-center gap-5 bg-[#EAF7E8] border border-gray-200 rounded-md p-5 shadow-sm">
          <div className="text-center md:text-left">
        
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
              At Edukonnect, we believe that every dream deserves the right
              launch pad. Founded by experts with over 24 years of experience in
              overseas education consulting, we have guided thousands of
              students in building successful global careers.
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
              The overseas education process can feel overwhelming — but at
              Edukonnect, we simplify the journey with trust and the right
              guidance. From career counseling and university selection to
              applications, visas, and pre-departure support, we stand by
              students and parents at every step.
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
              With a strong network of institutions across the UK, USA, Canada,
              Australia, New Zealand, Germany, Ireland, Dubai, and other leading
              European nations, we open doors to world-class education and
              life-changing opportunities.
            </p>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium">
              At Edukonnect, we don’t just guide you — we Konnect your
              aspirations with global success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDiaries;
