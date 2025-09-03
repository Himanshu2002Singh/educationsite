import React, { useState } from 'react';
import {
  MapPin,
  Home,
  Utensils,
  Car,
  Wifi,
  Calculator,
  Briefcase,
  GraduationCap,
  BookOpen,
  Heart,
  Tv,
  Zap,
} from 'lucide-react';

const TuitionLivingCanadaSection = () => {
  const [activeTab, setActiveTab] = useState('tuition');

  // Tuition Fees for Canada
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#8cc63f]" />,
      degree: "Diploma / PG Diploma / Certificate",
      fee: "CAD 16,000 – CAD 20,000/year",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-600" />,
      degree: "Bachelor's Degree",
      fee: "CAD 18,000 – CAD 35,000/year",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      degree: "Master's Degree",
      fee: "CAD 20,000 – CAD 35,000/year",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  // Living Expenses for Canada (from the provided table)
  const livingExpenses = [
    {
      icon: <Home className="w-5 h-5" />,
      category: "Accommodation (shared apartments)",
      costCAD: "400 - 900",
      costINR: "24,500 - 37,000"
    },
    {
      icon: <Car className="w-5 h-5" />,
      category: "Travel",
      costCAD: "100 - 120",
      costINR: "6,100 - 7,500"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      category: "Food",
      costCAD: "300 - 400",
      costINR: "18,000 - 24,500"
    },
    {
      icon: <Tv className="w-5 h-5" />,
      category: "Entertainment",
      costCAD: "150 - 200",
      costINR: "9,000 - 12,300"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      category: "Health Insurance",
      costCAD: "70 - 80",
      costINR: "4,200 - 5,000"
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      category: "Internet",
      costCAD: "80 - 90",
      costINR: "4,800 - 5,600"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      category: "Utilities (Electricity, Heating, Water, Garbage)",
      costCAD: "100 - 200",
      costINR: "6,347 - 12,694"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            {" "}<span className="text-[#8cc63f]">Cost of </span>Studying & Living in Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plan your Canadian education budget with a breakdown of tuition and living expenses
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-10 bg-[#DFF5E3] rounded-2xl p-2 max-w-md mx-auto shadow-md">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-10">
            <div className="max-w-4xl mx-auto bg-[#F9F9F9] rounded-xl p-8 border-2 border-[#8DC63F] shadow-xl">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 mr-2 text-[#8DC63F]" />
                  <span className="text-lg font-bold text-[#2C2C2C]">Average Monthly Living Costs in Canada</span>
                </div>
              </div>

              {/* Expenses Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-700">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                      <th className="px-4 py-3">Expenses</th>
                      <th className="px-4 py-3">Average Monthly Cost (Approx. CAD)</th>
                      <th className="px-4 py-3">Average Monthly Cost (Approx. INR)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {livingExpenses.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">
                          <div className="flex items-center">
                            <div className="text-gray-600 mr-3">{item.icon}</div>
                            {item.category}
                          </div>
                        </td>
                        <td className="px-4 py-3">CAD {item.costCAD}</td>
                        <td className="px-4 py-3">₹{item.costINR}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-2 text-sm text-[#2C2C2C]">
                  <span>Part-time work offset (approx.):</span>
                  <span className="font-bold text-[#8DC63F]">-CAD 1,000/month</span>
                </div>
                <div className="bg-[#8DC63F] bg-opacity-10 border border-[#8DC63F] rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-[#8DC63F]">Estimated Net Cost: CAD 800-1,200/month</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Insights */}
        {activeTab === 'living' && (
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mb-10">
            <h4 className="text-xl font-bold text-[#2C2C2C] mb-4 text-center">Key Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InsightItem
                icon={<Calculator className="w-6 h-6 text-[#8DC63F]" />}
                title="Save with Shared Housing"
                description="Shared accommodation can reduce costs by 30-40%"
                color="#8DC63F"
              />
              <InsightItem
                icon={<Briefcase className="w-6 h-6 text-[#C1272D]" />}
                title="Earn CAD 1,000/month"
                description="Through part-time work (20hrs/week)"
                color="#C1272D"
              />
              <InsightItem
                icon={<Home className="w-6 h-6 text-[#2C2C2C]" />}
                title="Quality Education"
                description="World-class institutions across Canada"
                color="#2C2C2C"
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-[#8DC63F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-lime-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Estimate My Canada Budget
          </button>
        </div>
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
    <h5 className="font-bold text-[#2C2C2C] mb-2">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default TuitionLivingCanadaSection;