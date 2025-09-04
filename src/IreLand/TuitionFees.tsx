import React, { useState } from 'react';
import { GraduationCap, BookOpen, Briefcase, Home, MapPin, Utensils, Car, Phone } from 'lucide-react';

const TuitionLivingIrelandSection = () => {
  const [activeTab, setActiveTab] = useState<'tuition' | 'living'>('tuition');

  const accentColor = '#8cc63f';

  // Cost of Living Data
  const costBreakdown = {
    ireland: {
      totalRange: '€10,000 – €12,000/year',
      visaRequirement: 'Minimum proof for visa: €10,000',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation (Shared)', cost: '€400 – €700/month', annual: '€4,800 – €8,400' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '€250 – €400/month', annual: '€3,000 – €4,800' },
        { icon: <Car className="w-5 h-5" />, category: 'Transportation', cost: '€50 – €100/month', annual: '€600 – €1,200' },
        { icon: <Phone className="w-5 h-5" />, category: 'Utilities & Internet', cost: '€60 – €120/month', annual: '€720 – €1,440' },
        { icon: <Briefcase className="w-5 h-5" />, category: 'Miscellaneous', cost: '€100 – €200/month', annual: '€1,200 – €2,400' },
      ],
    },
  };
  const data = costBreakdown.ireland;

  // Tuition Fees Data
  const tuitionFees = [
    { icon: <GraduationCap className="w-10 h-10 text-[#8cc63f]" />, degree: 'Undergraduate (UG)', fee: 'Starts from €6,000/year', description: 'Tuition fees vary by program and university.', color: 'bg-green-50 border-green-200' },
    { icon: <BookOpen className="w-10 h-10 text-orange-600" />, degree: 'Postgraduate (PG)', fee: 'Starts from €12,000/year', description: 'Specialized programs may cost more depending on field.', color: 'bg-orange-50 border-orange-200' },
    { icon: <Briefcase className="w-10 h-10 text-blue-600" />, degree: 'MBA', fee: 'Starts from €14,500/year', description: 'Fees depend on university ranking & program duration.', color: 'bg-blue-50 border-blue-200' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Cost of <span className="text-[#8cc63f]">Studying & Living </span>in Ireland 
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your Ireland education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-[#DFF5E3] w-full px-4 sm:px-12 py-2 gap-2">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition' ? 'bg-[#8cc63f] text-white' : 'text-[#2C2C2C] hover:text-[#8cc63f]'
            }`}
          >
            Tuition Fees
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'living' ? 'bg-[#C1272D] text-white' : 'text-[#2C2C2C] hover:text-[#C1272D]'
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
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
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
          </div>
        )}
      </div>
    </section>
  );
};

export default TuitionLivingIrelandSection;
