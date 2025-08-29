import React from 'react';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const TuitionFeesSectionUSA = () => {
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      degree: "Undergraduate (UG)",
      fee: "$20,000 – $65,000/year",
      // description: "Public: $20k–$40k | Private: $30k–$55k | Top-ranked: $50k–$65k",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: "Postgraduate (PG)",
      fee: "$22,000 – $75,000/year",
      // description: "Public: $22k–$45k | Private: $35k–$60k | Top-ranked: $45k–$75k",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#8cc63f]" />,
      degree: "MBA",
      fee: "$30,000 – $120,000/year",
      // description: "Public: $30k–$70k | Private: $60k–$100k | Top-ranked: $70k–$120k",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Cost of</span> Studying in the USA
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your U.S. education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

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
                <div className="bg-british-navy text-black px-4 py-1 rounded-full text-sm font-bold mb-1 inline-block">
                  {item.degree}
                </div>
                <div className="text-lg font-bold text-gray-800 mb-1">
                  {item.fee}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Costs Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-gray-200 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation & Living */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Accommodation & Living</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>On-Campus: $10,000 – $15,000/year</li>
                <li>Off-Campus (Shared): $8,000 – $12,000/year</li>
                <li>Homestay: $9,000 – $14,000/year</li>
                <li>Food & Transport: $5,000 – $8,000/year</li>
                <li>Utilities & Internet: $1,200 – $2,400/year</li>
              </ul>
            </div>

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
      </div>
    </section>
  );
};

export default TuitionFeesSectionUSA;
