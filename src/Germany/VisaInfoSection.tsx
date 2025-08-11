import React, { useState } from 'react';

const VisaInfoSection = () => {
  const [activeTab, setActiveTab] = useState('germany');

  const tabClass = (tab: string) =>
    `px-4 sm:px-6 py-2 rounded-full text-sm font-semibold cursor-pointer transition duration-300 border ${
      activeTab === tab
        ? 'bg-[#E0F5DC] text-[#1B1B1B] hover:bg-[#E0F5DC]'
        : 'text-[#2C2C2C] hover:text-[#C1272D]'
    }`;

  // Only one tab: Germany Student Visa Process & Documents
  const germanyVisaSteps = [
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
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-british-navy mb-6 font-serif">
            Germany Student Visa Process & Documents
          </h2>
          {/* Only one tab for this content - if you want, you can remove tabs entirely */}
          <div className="flex justify-center">
            <button
              className={tabClass('germany')}
              onClick={() => setActiveTab('germany')}
            >
              Student Visa Process
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {germanyVisaSteps.map((step, index) => (
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
      </div>
    </section>
  );
};

export default VisaInfoSection;
