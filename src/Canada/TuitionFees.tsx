import React, { useState } from 'react';
import {
  MapPin,
  Home,
  Utensils,
  Car,
  Wifi,
  GraduationCap,
  BookOpen,
  Briefcase,
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
            <div className="max-w-lg mx-auto bg-white rounded-2xl p-8 border border-[#8DC63F] shadow-lg">
              {/* Total Cost */}
              <div className="flex flex-col items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#8DC63F] mb-2" />
                <div className="bg-[#F0FAF2] text-[#2C2C2C] text-3xl font-bold px-6 py-3 rounded-xl shadow-sm">
                  CAD 22,895 / year
                </div>
              </div>

              {/* Expense Breakdown */}
              <div className="space-y-4">
                <ExpenseItem
                  icon={<Home className="w-5 h-5 text-gray-600" />}
                  title="Accommodation (shared)"
                  monthly="$400 – $900/month"
                  annually="$4,800 – $10,800/year"
                />
                <ExpenseItem
                  icon={<Utensils className="w-5 h-5 text-gray-600" />}
                  title="Food & Groceries"
                  monthly="$300 – $500/month"
                  annually="$3,600 – $6,000/year"
                />
                <ExpenseItem
                  icon={<Car className="w-5 h-5 text-gray-600" />}
                  title="Transport"
                  monthly="$100 – $150/month"
                  annually="$1,200 – $1,800/year"
                />
                <ExpenseItem
                  icon={<Wifi className="w-5 h-5 text-gray-600" />}
                  title="Utilities & Internet"
                  monthly="$180 – $290/month"
                  annually="$2,160 – $3,480/year"
                />
              </div>

              {/* Part-time offset */}
              <div className="mt-6  pt-4">
            
                <div className="bg-[#F0FAF2] border border-[#8DC63F] rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-[#8DC63F]">
                    Net Cost: CAD 22,895 / year<br />
                    
                  </p>
                </div>
              </div>
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

const ExpenseItem = ({ icon, title, monthly, annually }: any) => (
  <div className="flex flex-col border-b pb-3">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </div>
      <span className="text-gray-700 font-medium">{monthly}</span>
    </div>
    <div className="text-sm text-gray-500 ml-7 mt-1 text-end">{annually}</div>
  </div>
);

export default TuitionLivingCanadaSection;
