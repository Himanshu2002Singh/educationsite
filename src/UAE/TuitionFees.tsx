import React from 'react';
import { GraduationCap, BookOpen, Briefcase } from 'lucide-react';

const TuitionFeesSectionUAE = () => {
  const tuitionFees = [
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-600" />,
      degree: "Undergraduate (Bachelor’s)",
      fee: "AED 37,000 – AED 115,000",
      description: "Per year tuition fee range for undergraduate programs",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: "Postgraduate (Master’s)",
      fee: "AED 48,000 – AED 135,000",
      description: "Per year tuition fee range for postgraduate programs",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#8cc63f]" />,
      degree: "MBA / Executive Programs",
      fee: "AED 65,000 – AED 150,000",
      description: "Per year tuition fee range for MBA and executive programs",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-british-navy mb-4 font-serif">
            Cost of Studying in UAE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understand the investment in your UAE education
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Average Annual Tuition Fees (AED/year)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <div className="text-1xl font-bold text-gray-800 mb-1">
                  {item.fee}
                </div>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionFeesSectionUAE;
