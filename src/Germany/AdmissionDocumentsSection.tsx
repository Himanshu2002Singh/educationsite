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
    "TestAS (bachelor & if applicable)",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - heading and description */}
          <div className="lg:w-1/3 border-l-4 border-[#4C51BF] pl-6">
            <h2 className="text-4xl font-extrabold text-[#1E293B] mb-4 font-serif leading-tight">
              Admission Documents<br />for Studying in Germany
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              Required documents to apply for studies in Germany. Ensure you gather all necessary paperwork early to avoid delays in your application process.
            </p>
          </div>

          {/* Right side - list of documents */}
          <ul className="lg:w-2/3 flex flex-col gap-5">
            {documents.map((doc, index) => {
              const colorClass = colorClasses[index];
              return (
                <li
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl ${colorClass} bg-opacity-30 hover:bg-opacity-50 transition cursor-default`}
                >
                  <div className="bg-white rounded-full p-3 shadow-md flex items-center justify-center">
                    <FileText className={`w-7 h-7 ${colorClass.split(' ')[1]}`} />
                  </div>
                  <span className="text-lg font-semibold">{doc}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDocumentsSection;
