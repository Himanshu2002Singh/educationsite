import React, { useState } from 'react';
import { FileText, User, Briefcase, Image, FileCheck, Award } from 'lucide-react';
import { BiIdCard } from 'react-icons/bi';

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

const DocumentsVisaSectiongermany = () => {
  const [activeTab, setActiveTab] = useState('documents');

  const documents = [
    { icon: <BiIdCard className="w-6 h-6" />, label: "Passport copy", tooltip: "Valid passport with at least 6 months validity" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Updated resume", tooltip: "Detailed CV highlighting academic and professional experience" },
    { icon: <FileText className="w-6 h-6" />, label: "Academic documents", tooltip: "Transcripts and certificates from previous education" },
    { icon: <Briefcase className="w-6 h-6" />, label: "Work Experience (if any)", tooltip: "Documents verifying any professional work experience" },
    { icon: <User className="w-6 h-6" />, label: "Recommendation letters (if any)", tooltip: "Letters from professors or employers" },
    { icon: <FileText className="w-6 h-6" />, label: "Statement of purpose", tooltip: "Personal essay explaining your motivation to study in Germany" },
    { icon: <Award className="w-6 h-6" />, label: "English proficiency scores", tooltip: "IELTS/TOEFL scores for English-taught programs" },
    { icon: <Award className="w-6 h-6" />, label: "GRE/GMAT score card (if applicable)", tooltip: "Required for certain master's programs" },
    { icon: <Award className="w-6 h-6" />, label: "German Proficiency Certificate (if applicable)", tooltip: "TestDaF, DSH, or Goethe-Zertifikat for German-taught programs" },
    { icon: <FileCheck className="w-6 h-6" />, label: "APS", tooltip: "Academic Evaluation Centre certificate for certain countries" },
    { icon: <Award className="w-6 h-6" />, label: "TestAS (if applicable)", tooltip: "Test for Academic Studies for some undergraduate programs" },
  ];

  const visaSteps = [
    {
      title: 'Proof of Admission',
      description: 'Proof of admission to a full-time degree programme.',
      bg: 'bg-green-50',
    },
    {
      title: 'Intention to Study',
      description: 'Freely written letter stating your intention to study.',
      bg: 'bg-violet-50',
    },
    {
      title: 'Proof of Funds',
      description: `• Pay minimum 1st year complete tuition fees before submitting the visa file.
• Open a blocked account of €11,904.
• Balance fees to be shown in the bank.`,
      bg: 'bg-sky-50',
    },
    {
      title: 'APS (if applicable)',
      description: 'Submit APS certification if required.',
      bg: 'bg-yellow-50',
    },
    {
      title: 'Proof of Health Insurance',
      description: 'Provide valid proof of health insurance coverage.',
      bg: 'bg-orange-50',
    },
    {
      title: 'Create Consular Portal Account',
      description: 'Create an account on Germany Consular Portal.',
      bg: 'bg-green-50',
    },
    {
      title: 'Fill Online Application',
      description: 'Fill out the online application form.',
      bg: 'bg-violet-50',
    },
    {
      title: 'Upload Documents',
      description: 'Upload all required documents to the portal.',
      bg: 'bg-sky-50',
    },
    {
      title: 'Pay Consular Fee',
      description: 'Pay the consular fee online for verification.',
      bg: 'bg-yellow-50',
    },
    {
      title: 'Schedule Appointment',
      description: 'Schedule your visa appointment.',
      bg: 'bg-orange-50',
    },
    {
      title: 'Biometrics & Visa Fees',
      description: 'Visit the VFS for Biometrics and pay the visa fees.',
      bg: 'bg-green-50',
    },
    {
      title: 'Visa Decision',
      description: 'Visa decision within 4-8 weeks post consulate appointment.',
      bg: 'bg-violet-50',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Admission & Visa</span>- Documents and Process for Studying in Germany
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          {/* <p className="text-lg text-[#475569] leading-relaxed">
            Everything you need to know about documents required and visa process for studying in Germany.
          </p> */}
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-full p-2 max-w-md mx-auto">
          {['documents', 'visa'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-white'
                  : 'text-[#2C2C2C] hover:text-white hover:bg-[#C1272D]'
              }`}
            >
              {tab === 'documents' ? 'Documents' : 'Visa Process'}
            </button>
          ))}
        </div>

        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const colorClass = colorClasses[index % colorClasses.length];
              const [bgColor, textColor] = colorClass.split(' ');
              return (
                <div
                  key={index}
                  className={`rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg ${bgColor} bg-opacity-40`}
                >
                  <div className={`rounded-full p-4 shadow-md flex items-center justify-center bg-white mb-4 ${textColor}`}>
                    {doc.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>{doc.label}</h3>
                  {/* <p className="text-sm text-gray-600">{doc.tooltip}</p> */}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'visa' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaSteps.map((step, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md p-6 transition duration-300 hover:shadow-xl ${step.bg}`}
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-[#8DC63F] hover:bg-[#C1272D] text-white transition-all duration-300 shadow-md hover:shadow-xl">
            {activeTab === 'documents' ? 'Get Document Assistance' : 'Get Visa Guidance'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsVisaSectiongermany;