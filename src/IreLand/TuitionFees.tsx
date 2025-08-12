import React from 'react';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const TuitionFeesSectionIreland = () => {
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-green-600" />,
      degree: "Undergraduate (UG)",
      fee: "Starts from €6,000/year",
      description: "Tuition fees vary by program and university.",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-orange-600" />,
      degree: "Postgraduate (PG)",
      fee: "Starts from €12,000/year",
      description: "Specialized programs may cost more depending on field.",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      degree: "MBA",
      fee: "Starts from €14,500/year",
      description: "Fees depend on university ranking & program duration.",
      color: "bg-blue-50 border-blue-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 font-serif">
            Cost of Studying in Ireland
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your Ireland education budget with a breakdown of tuition and living expenses.
          </p>
        </div>

        {/* Tuition Fees Cards */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Average Annual Tuition Fees
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
        </div>

        {/* Additional Costs Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-gray-200 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation & Living */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Accommodation & Living</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>On-Campus: €7,000 – €12,000/year</li>
                <li>Off-Campus (Shared): €6,000 – €10,000/year</li>
                <li>Homestay: €8,000 – €12,000/year</li>
                <li>Food & Transport: €3,000 – €5,000/year</li>
              </ul>
            </div>

            {/* Other Expenses */}
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Other Essential Costs</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>Health Insurance: €500 – €1,500/year</li>
                <li>Books & Supplies: €500 – €1,000/year</li>
                <li>Visa Fees: €60 – €100</li>
                <li>Airfare: €500 – €1,200</li>
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

export default TuitionFeesSectionIreland;
