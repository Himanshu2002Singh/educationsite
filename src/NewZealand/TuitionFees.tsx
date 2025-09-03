import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  FlaskConical,
  MapPin,
  Home,
  Utensils,
  Car,
  Phone,
  Calculator,
} from 'lucide-react';

const TuitionLivingNewZealandSection = () => {
  const [activeTab, setActiveTab] = useState<'tuition' | 'living'>('tuition');
  const accentColor = '#8cc63f';

  // Tuition Fees Data
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      degree: 'Undergraduate',
      fee: '$25,000 – $45,000 NZD',
      description: "Per year for Bachelor's programs",
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: 'Postgraduate',
      fee: '$27,000 – $40,000 NZD',
      description: "Per year for Master's programs",
      color: 'bg-purple-50 border-purple-200',
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#8cc63f]" />,
      degree: 'MBA',
      fee: '$31,000 – $50,000 NZD',
      description: 'Per year for business programs',
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-red-600" />,
      degree: 'PhD (International)',
      fee: '$7,500 – $10,000 NZD',
      description: 'Subsidized tuition for international students',
      color: 'bg-red-50 border-red-200',
    },
  ];

  // Cost of Living Data
  const costBreakdown = {
    newzealand: {
      totalRange: 'NZD $15,000 – $20,000',
      visaRequirement: 'NZD $20,000/year',
      items: [
        {
          icon: <Home className="w-5 h-5" />,
          category: 'Accommodation (shared)',
          cost: '$800 – $1,200/month',
          annual: '$10,000 – $14,000',
        },
        {
          icon: <Utensils className="w-5 h-5" />,
          category: 'Food & Groceries',
          cost: '$300 – $500/month',
          annual: '$3,600 – $6,000',
        },
        {
          icon: <Car className="w-5 h-5" />,
          category: 'Transport',
          cost: '$100 – $150/month',
          annual: '$1,200 – $1,800',
        },
        {
          icon: <Phone className="w-5 h-5" />,
          category: 'Misc. (phone, internet)',
          cost: '$50 – $100/month',
          annual: '$600 – $1,200',
        },
      ],
    },
  };
  const data = costBreakdown.newzealand;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Cost of <span className="text-[#8cc63f]">Studying</span> in New Zealand
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your New Zealand education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex justify-center items-center gap-4 mb-12 bg-[#DFF5E3] w-fit mx-auto p-2 px-12 rounded-2xl">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition'
                ? 'bg-[#8cc63f] text-white'
                : 'text-[#2C2C2C] hover:text-[#8cc63f]'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tuitionFees.map((item, index) => (
              <div
                key={index}
                className={`${item.color} border-2 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 bg-white rounded-full shadow-md">{item.icon}</div>
                </div>
                <div className="bg-[#8cc63f] text-white px-4 py-1 rounded-full text-sm font-bold mb-1 inline-block">
                  {item.degree}
                </div>
                <div className="text-lg font-bold text-gray-800 mb-1">{item.fee}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
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
                    style={{
                      backgroundColor: accentColor + '1A',
                      borderColor: accentColor,
                    }}
                  >
                    <p
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{ color: accentColor }}
                    >
                      {data.totalRange}
                    </p>
                    <p className="text-sm sm:text-lg text-gray-700 break-words">
                      Minimum Proof for Visa: {data.visaRequirement}
                    </p>
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
                        <span className="text-sm font-medium text-[#2C2C2C] break-words">
                          {item.category}
                        </span>
                      </div>
                      <div className="text-right sm:text-right">
                        <p className="text-sm font-bold text-[#2C2C2C]">{item.cost}</p>
                        <p className="text-xs text-gray-600 break-words">
                          {item.annual} annually
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TuitionLivingNewZealandSection;
