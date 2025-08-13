import React, { useState } from 'react';
import { GraduationCap, BookOpen, Briefcase, Home } from 'lucide-react';

const TuitionLivingCanadaSection = () => {
  const [activeTab, setActiveTab] = useState('tuition');

  // Tuition Fees for Canada
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-green-600" />,
      degree: "Diploma / PG Diploma / Certificate",
      fee: "CAD 16,000 – CAD 20,000/year",
      description: "Costs vary depending on province and institution.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-600" />,
      degree: "Bachelor’s Degree",
      fee: "CAD 18,000 – CAD 35,000/year",
      description: "Programs in professional fields may cost more.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      degree: "Master’s Degree",
      fee: "CAD 20,000 – CAD 35,000/year",
      description: "Fees vary by specialization and university.",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  // Living Expenses for Canada
  const livingExpenses = [
    {
      icon: <Home className="w-10 h-10 text-purple-600" />,
      type: "Approx. Annual Living Expenses",
      cost: "CAD 20,000",
      description: "Includes accommodation, food, transportation, and personal expenses; varies by city and lifestyle.",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4 font-serif">
            Cost of Studying in Canada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your Canadian education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            Tuition Fees
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'living'
                ? 'bg-green-600 text-white'
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
                <div className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-1 inline-block">
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

export default TuitionLivingCanadaSection;
