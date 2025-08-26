import React, { useState } from 'react';
import { GraduationCap, BookOpen, Briefcase, Home } from 'lucide-react';

const TuitionLivingAustraliaSection = () => {
  const [activeTab, setActiveTab] = useState('tuition');

  // Tuition Fees for Australia
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#8cc63f]" />,
      degree: "Bachelor’s Degree",
      fee: "AUD 20,000 – 45,000/year",
      description: "Tuition fees vary by program and university.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-600" />,
      degree: "Master’s Degree (Coursework)",
      fee: "AUD 25,000 – 55,000/year",
      description: "Specialized programs may cost more depending on field.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      degree: "Doctoral Degree (PhD)",
      fee: "AUD 20,000 – 42,000/year",
      description: "Fees depend on university ranking & program duration.",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  // Living Expenses for Australia
  const livingExpenses = [
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      type: "Approx. Annual Living Expenses",
      cost: "AUD 29,710",
      description: "Includes accommodation, food, transport, and personal expenses.",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Cost of <span className="text-[#8cc63f]">Studying</span> in Australia
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your Australian education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition'
                ? 'bg-[#8cc63f] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            Tuition Fees
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'living'
                ? 'bg-[#8cc63f] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            Living Expenses
          </button>
        </div>

        {/* Conditional Content */}
        {activeTab === 'tuition' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tuitionFees.map((item, index) => (
              <div
                key={index}
                className={`${item.color} border-2 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>
                <div className="bg-[#8cc63f] text-white px-4 py-1 rounded-full text-sm font-bold mb-1 inline-block">
                  {item.degree}
                </div>
                <div className="text-lg font-bold text-gray-800 mb-1">
                  {item.fee}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {livingExpenses.map((item, index) => (
              <div
                key={index}
                className={`${item.color} border-2 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>
                <div className="text-lg font-bold text-gray-800 mb-2">{item.type}</div>
                <div className="text-2xl font-extrabold text-gray-900 mb-2">{item.cost}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TuitionLivingAustraliaSection;
