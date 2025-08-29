import React from 'react';
import { FileText } from 'lucide-react';

const colorClasses = [
  'bg-[#E6F0FF] text-[#1E293B]',  // pastel blue
  'bg-[#F3E8FF] text-[#3730A3]',  // pastel purple
  'bg-[#DFFFE6] text-[#166534]',  // pastel green
  'bg-[#FFF9E6] text-[#92400E]',  // pastel yellow
  'bg-[#E6F4FF] text-[#2563EB]',  // light blue
  'bg-[#FFE6F0] text-[#9D174D]',  // pastel pink
  'bg-[#FFF0E6] text-[#B45309]',  // pastel orange
  'bg-[#E6FFF9] text-[#0F766E]',  // pastel teal
  'bg-[#F0E6FF] text-[#5B21B6]',  // pastel indigo
  'bg-[#FFF6E6] text-[#78350F]',  // pastel amber
  'bg-[#E6F7FF] text-[#0369A1]',  // pastel cyan
];

const AdmissionDocumentsSection = () => {
  const documents = [
    "Passport copy",
    "Updated resume",
    "Academic documents",
    "Work Experience (if any)",
    "Recommendation letters (if any)",
    "Statement of purpose",
    "English proficiency scores",
    "GRE/GMAT score card (if applicable)",
    "German Proficiency Certificate (if applicable)",
    "APS",
    "TestAS (if applicable)",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Admission</span> Documents for Studying in Germany
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg text-[#475569] leading-relaxed">
            Gather all the required documents early to avoid delays in your Germany study application process.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const colorClass = colorClasses[index % colorClasses.length];
            const [bgColor, textColor] = colorClass.split(' ');
            return (
              <div
                key={index}
                className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg ${bgColor} bg-opacity-40`}
              >
                <div className="bg-white rounded-full p-4 shadow-md flex items-center justify-center mb-4">
                  <FileText className={`w-8 h-8 ${textColor}`} />
                </div>
                <span className={`text-lg font-semibold ${textColor}`}>{doc}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdmissionDocumentsSection;
