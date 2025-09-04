import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Briefcase,
  MapPin,
  Home,
  Utensils,
  Phone,
  Car,
  Calculator,
} from 'lucide-react';

// ---------------- TUITION + LIVING TOGGLE (USA) ---------------- //
const TuitionLivingUSASection = () => {
  const [activeTab, setActiveTab] = useState('tuition');

  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      degree: "Undergraduate (UG)",
      fee: "$20,000 – $65,000/year",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: "Postgraduate (PG)",
      fee: "$22,000 – $75,000/year",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#8cc63f]" />,
      degree: "MBA",
      fee: "$30,000 – $120,000/year",
      color: "bg-green-50 border-green-200"
    }
  ];

  const costBreakdown = {
    usa: {
      totalRange: 'Varies by city type and lifestyle',
      visaRequirement: 'Financial proof varies by state and university',
      items: [
        { icon: <Home className="w-5 h-5" />, category: 'Mid-Cost City (9 months)', cost: '$14,220 – $29,700', annual: '$18,960 – $39,600 (12 months)' },
        { icon: <Home className="w-5 h-5" />, category: 'Low-Cost City (9 months)', cost: '$10,170 – $21,150', annual: '$13,560 – $28,200 (12 months)' },
        { icon: <Utensils className="w-5 h-5" />, category: 'Food & Groceries', cost: '$300 – $500/month', annual: '$3,600 – $6,000' },
        { icon: <Car className="w-5 h-5" />, category: 'Transportation', cost: '$50 – $120/month', annual: '$600 – $1,440' },
        { icon: <Phone className="w-5 h-5" />, category: 'Utilities & Internet', cost: '$100 – $200/month', annual: '$1,200 – $2,400' },
      ],
    },
  };

  const data = costBreakdown["usa"];
  const accentColor = '#8cc63f';

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            <span className="text-[#8cc63f]">Cost of </span>Studying & Living in USA
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plan your U.S. education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-[#DFF5E3] w-full px-4 sm:px-12 py-2 gap-2">
          <button
            onClick={() => setActiveTab('tuition')}
            className={`flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'tuition'
                ? 'bg-[#8DC63F] text-white shadow'
                : 'text-[#2C2C2C]'
            }`}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Tuition Fees
          </button>
          <button
            onClick={() => setActiveTab('living')}
            className={`flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'living'
                ? 'bg-[#C1272D] text-white shadow'
                : 'text-[#2C2C2C]'
            }`}
          >
            <Home className="w-5 h-5 mr-2" />
            Living Expenses
          </button>
        </div>

        {/* Conditional Content */}
        {activeTab === 'tuition' ? (
          <>
            {/* Tuition Fees Cards */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
                Average Annual Tuition Fees (2024–25)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tuitionFees.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.color} border-2 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white text-center`}
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
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Costs Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {/* Other Expenses */}
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Other Essential Costs</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>Health Insurance: $2,000 – $3,500/year</li>
                    <li>Books & Supplies: $1,000 – $2,500/year</li>
                    <li>Visa Fees: $350 – $500</li>
                    <li>Airfare: $800 – $2,000</li>
                  </ul>
                </div>

                {/* EduKonnect Savings */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">💡 How EduKonnect Helps</h4>
                  <p className="text-gray-700 text-sm">
                    ✅ Scholarship guidance (up to 100% tuition waiver) <br />
                    ✅ Affordable university shortlisting <br />
                    ✅ Fee waiver & cost-cutting strategies <br />
                    ✅ Financial documentation for visa success
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Living Cost Section */}
            <div className="mb-10">
              <div
                className="max-w-xl mx-auto bg-[#F9F9F9]/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 border-2 transition-all duration-300 border-[var(--accent)] shadow-xl"
                style={{ ['--accent' as keyof React.CSSProperties]: accentColor }}
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

            {/* How to Save Money */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 mb-10">
              <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
                How to Save Money?
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✔ Housing: Share apartments with roommates (saves 30–50%).</li>
                <li>✔ Food: Cook at home + use student discounts (e.g., Too Good To Go).</li>
                <li>✔ Transport: Walk/bike; use student transit passes.</li>
                <li>✔ Textbooks: Rent digital copies or use library resources.</li>
              </ul>
            </div>

            {/* Why Choose EduKonnect */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200">
              <h4 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-4 text-center">
                Why Choose EduKonnect?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <InsightItem
                  icon={<Home className="w-6 h-6 text-[#1E3A8A]" />}
                  title="Find Budget-Friendly Housing"
                  description="Partnered with 100+ US student accommodations."
                  color="#1E3A8A"
                />
                <InsightItem
                  icon={<Calculator className="w-6 h-6 text-[#C1272D]" />}
                  title="Access Exclusive Scholarships"
                  description="Reduce tuition and living costs."
                  color="#C1272D"
                />
                <InsightItem
                  icon={<Briefcase className="w-6 h-6 text-[#2C2C2C]" />}
                  title="Pre-Departure Financial Planning"
                  description="Avoid surprises with our Cost Calculator Tool."
                  color="#2C2C2C"
                />
              </div>
            </div>
          </>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-[#8cc63f] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Estimate My USA Budget
          </button>
        </div>
      </div>
    </section>
  );
};

type InsightItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const InsightItem = ({ icon, title, description, color }: InsightItemProps) => (
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

export default TuitionLivingUSASection;
