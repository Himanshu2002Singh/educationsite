import React, { useState } from 'react';
import { Search, FileText, CheckCircle, ClipboardCheck, Globe, FileUp, Mail } from 'lucide-react';

const AustraliaAdmissionProcessSection = () => {
  const [activeTab, setActiveTab] = useState('admission');

  const admissionSteps = [
    {
      icon: <Search className="w-8 h-8 text-sky-600" />,
      title: "Choose Course & Institution",
      description: "Select your desired program and institution in Australia.",
      bg: "bg-sky-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Check Entry Requirements",
      description: "IELTS 6.0+ or equivalent PTE score now commonly required.",
      bg: "bg-purple-50",
    },
    {
      icon: <FileUp className="w-8 h-8 text-[#8cc63f]" />,
      title: "Prepare Documents",
      description: "10th & 12th certificates, Bachelor's marksheets, SOP, resume, work experience (if applicable).",
      bg: "bg-green-50",
    },
    {
      icon: <Mail className="w-8 h-8 text-yellow-600" />,
      title: "Apply to Institutions",
      description: "Submit applications via authorized education agents.",
      bg: "bg-yellow-50",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-indigo-600" />,
      title: "Prepare GS Document",
      description: "Include Genuine Student (GS) statement, which replaces the old GTE requirement.",
      bg: "bg-indigo-50",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Get Confirmation of Enrolment (CoE)",
      description: "Accept offer, pay deposit & OSHC, and receive CoE (mandatory – Offer Letter not valid for visa).",
      bg: "bg-teal-50",
    },
  ];

  const visaSteps = [
    {
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: "Apply for Student Visa (Subclass 500)",
      description: "Submit visa with CoE, GS document, medical exam, and proof of funds: Tuition Fee + AUD 29,710 (living) + AUD 2,500 (airfare).",
      bg: "bg-pink-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-red-600" />,
      title: "Pay Visa Fee",
      description: "AUD 2,000.",
      bg: "bg-red-50",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Enter Australia & Commence Study",
      description: "Travel on e-Visa grant and begin your studies.",
      bg: "bg-teal-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            🎓<span className="text-[#8cc63f]">Australia Study </span>Process
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to admission and visa process for studying in Australia
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-2xl p-2 max-w-md mx-auto">
          {['admission', 'visa'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-white'
                  : 'text-[#2C2C2C] hover:text-white hover:bg-[#C1272D]'
              }`}
            >
              {tab === 'admission' ? 'Admission Process' : 'Visa Process'}
            </button>
          ))}
        </div>

        {activeTab === 'admission' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className={`${step.bg} border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'visa' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaSteps.map((step, index) => (
              <div
                key={index}
                className={`${step.bg} border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {step.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-[#8DC63F] hover:bg-[#C1272D] text-white transition-all duration-300 shadow-md hover:shadow-xl">
            {activeTab === 'admission' ? 'Get Admission Assistance' : 'Get Visa Guidance'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AustraliaAdmissionProcessSection;