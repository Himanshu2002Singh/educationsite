import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Landmark,
  Home,
  Utensils,
  Car,
  Phone,
  Briefcase,
  MapPin,
  Calculator,
} from 'lucide-react';

const TuitionLivingGermanySection = () => {
  const [activeTab, setActiveTab] = useState<'tuition' | 'living'>('tuition');

  const accentColor = '#8cc63f';

  // Tuition Fees Data
  const tuitionFees = [
    {
      icon: <Landmark className="w-10 h-10 text-blue-600" />,
      degree: 'Public Universities',
      fee: 'Low or No Tuition Fees',
      description: "Most bachelor's & master's programs have minimal or zero fees",
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#8cc63f]" />,
      degree: 'Private Universities',
      fee: '€5,000 – €20,000 / semester',
      description: "Charged for bachelor's and master's programs",
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: 'International Programs',
      fee: '€5,000 – €30,000 / semester',
      description: 'Specialized courses for global students',
      color: 'bg-purple-50 border-purple-200',
    },
  ];

  // Cost of Living Data
  const costBreakdown = {
    germany: {
      totalRange: '€11,904/year',
      visaRequirement: '€992/month in a blocked account',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Accommodation (shared)', cost: '€350 – €600/month', annual: '€4,200 – €7,200' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '€150 – €250/month', annual: '€1,800 – €3,000' },
        { icon: <Car className="w-5 h-5" />, category: 'Transport', cost: '€70 – €100/month', annual: '€840 – €1,200' },
        { icon: <Phone className="w-5 h-5" />, category: 'Misc. (phone, internet)', cost: '€30 – €50/month', annual: '€360 – €600' },
      ],
    },
  };
  const data = costBreakdown.germany;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Cost of <span className="text-[#8cc63f]">Studying & Living</span> in Germany 
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your Germany education budget with a breakdown of tuition and living expenses.
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

            {/* Key Insights */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
                Key Insights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <InsightItem
                  icon={<Calculator className="w-6 h-6 text-[#2B6CB0]" />}
                  title="€11,904/year"
                  description="Required in blocked account"
                  color="#2B6CB0"
                />
                <InsightItem
                  icon={<Briefcase className="w-6 h-6 text-[#C1272D]" />}
                  title="Part-time work"
                  description="Can help offset living costs"
                  color="#C1272D"
                />
                <InsightItem
                  icon={<Home className="w-6 h-6 text-[#2C2C2C]" />}
                  title="Affordable Housing"
                  description="Shared flats reduce expenses"
                  color="#2C2C2C"
                />
              </div>
            </div>

            {/* CTA Button */}
        <div className="text-center mt-10">
            <button className="bg-[#8cc63f] text-white px-6 py-4 w-full sm:w-auto rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Estimate My Germany Budget
            </button>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

const InsightItem = ({ icon, title, description, color }: any) => (
  <div className="text-center">
    <div
      className="rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center"
      style={{ backgroundColor: `${color}20` }}
    >
      {icon}
    </div>
    <h5 className="font-bold text-[#2C2C2C] mb-2 break-words">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default TuitionLivingGermanySection;
