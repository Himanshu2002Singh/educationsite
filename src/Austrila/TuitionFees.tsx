import React, { useState } from 'react';
import { GraduationCap, BookOpen, Briefcase, Home, MapPin, UtensilsIcon, Car, Phone } from 'lucide-react';

const TuitionLivingAustraliaSection = () => {
  const [activeTab, setActiveTab] = useState('tuition');
    const costBreakdown = {
    newzealand: {
      totalRange: 'AUD $29,710/year',
      // visaRequirement: 'NZD $20,000/year',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation (shared)', cost: '$380 – $860/month', annual: '$4,560 – $10,320 annually' },
        { icon: <UtensilsIcon className="w-5 h-5" />, category: 'Food & Groceries', cost: '$300 – $500/month', annual: '$3,600 – $6,000 annually' },
        { icon: <Car className="w-5 h-5" />, category: 'Transport', cost: '$100 – $250/month', annual: '	$1,200 – $3,000 annually' },
        { icon: <Phone className="w-5 h-5" />, category: 'Utilities & Internet', cost: '$90 – $150/month', annual: '$1,080 – $1,800 annually' },
      ],
    },
  };

  const key = 'newzealand';
  const data = costBreakdown[key];
  const accentColor = '#8cc63f';

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
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-[#DFF5E3] w-full px-4 sm:px-12 py-2 gap-2">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition'
                ? 'bg-[#8DC63F] text-white'
                : 'text-[#2C2C2C] hover:text-[#8DC63F]'
            }`}
          >
            Tuition Fees
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'living'
            ? 'bg-[#C1272D] text-white'
                : 'text-[#2C2C2C] hover:text-[#C1272D]'
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
                      <div className="mb-10">
            <div
              className="max-w-xl mx-auto bg-[#F9F9F9]/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 transition-all duration-300 border-[var(--accent)] shadow-xl"
              style={{ ['--accent' as any]: accentColor }}
            >
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 mr-2" style={{ color: accentColor }} />
                </div>
                <div
                  className="bg-opacity-10 border rounded-lg p-4"
                  style={{ backgroundColor: accentColor + '1A', borderColor: accentColor }}
                >
                  <p className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: accentColor }}>
                    {data.totalRange}
                  </p>
                  {/* <p className="text-sm sm:text-lg text-gray-700 break-words">
                    Minimum Proof for Visa: {data.visaRequirement}
                  </p> */}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {data.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="text-gray-600 mr-3">{item.icon}</div>
                      <span className="text-sm font-medium text-[#2C2C2C] break-words">{item.category}</span>
                    </div>
                    <div className="text-right sm:text-right">
                      <p className="text-sm font-bold text-[#2C2C2C]">{item.cost}</p>
                      <p className="text-xs text-gray-600 break-words">{item.annual} annually</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TuitionLivingAustraliaSection;
