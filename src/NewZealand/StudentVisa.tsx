import React, { useState } from 'react';

const VisaInfoSection = () => {
  const [activeTab, setActiveTab] = useState('student');

  const tabClass = (tab: string) =>
    `px-4 sm:px-6 py-2 rounded-full text-sm font-semibold cursor-pointer transition duration-300 border ${
      activeTab === tab
        ? 'bg-[#E0F5DC] text-[#1B1B1B] hover:bg-[#E0F5DC]'
        : 'text-[#2C2C2C] hover:text-[#C1272D]'
    }`;

  const studentVisaSteps = [
    {
      title: 'Check Eligibility',
      description:
        'Ensure you have a valid 1st year Tuition fees payment receipt, proof of funds (20,000 NZD p.a.), health insurance, and meet character requirements (police clearance, medical certificate).',
      bg: 'bg-green-50',
    },
    {
      title: 'Gather Documents',
      description:
        'Collect passport photos, valid passport, First Year Tuition Fee Receipt, bank statements, insurance proof, police certificate (if applicable).',
      bg: 'bg-violet-50',
    },
    {
      title: 'Apply Online',
      description:
        'Register on Immigration NZ website, complete Form INZ 1012, upload documents, and pay NZD 295 visa fee.',
      bg: 'bg-sky-50',
    },
    {
      title: 'After Submission',
      description:
        'Wait 4–8 weeks for processing; receive visa grant (e-visa confirmation).',
      bg: 'bg-yellow-50',
    },
    {
      title: 'Arrival & Enrolment',
      description:
        'Arrive 1–2 weeks before orientation; check in with your institution’s International Office; attend orientation sessions.',
      bg: 'bg-orange-50',
    },
  ];

  const postStudyVisas = [
    {
      title: 'Post-Study Work Visa',
      eligibility:
        'Completed an NZQA-approved qualification: Degree (Level 7+) or Level 7 or below on the eligible list.',
      duration: 'Up to 3 years for degrees (Level 7+); equal to study time for Level 7 or below.',
      rights: 'Any employer (degrees); Related field only (non-degree)',
      bg: 'bg-gradient-to-br from-green-100 to-white',
    },
    {
      title: 'Work to Residence Visa',
      eligibility:
        'Hold a Post-Study Work Visa and meet Green List or Skilled Migrant criteria.',
      duration: 'Initial 30-month work visa, then residence.',
      rights: 'Any employer',
      bg: 'bg-gradient-to-br from-purple-100 to-white',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Visa</span> Process
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <button
              className={tabClass('student')}
              onClick={() => setActiveTab('student')}
            >
              Student Visa Application
            </button>
            <button
              className={tabClass('poststudy')}
              onClick={() => setActiveTab('poststudy')}
            >
              Post-Study Work Visas
            </button>
          </div>
        </div>

        {activeTab === 'student' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentVisaSteps.map((step, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-md p-6 transition duration-300 hover:shadow-xl ${step.bg}`}
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {postStudyVisas.map((visa, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 ${visa.bg}`}
              >
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {visa.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Eligibility: </span>
                  {visa.eligibility}
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold">Duration: </span>
                  {visa.duration}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Work Rights: </span>
                  {visa.rights}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default VisaInfoSection;
