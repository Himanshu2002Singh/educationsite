import React from 'react';
import { GraduationCap, BookOpen, Landmark, Home, Utensils, Bus, Heart, ShoppingBag } from 'lucide-react';

const TuitionFeesSection = () => {
  const tuitionFees = [
    {
      icon: <Landmark className="w-10 h-10 text-blue-600" />,
      degree: "Public Universities",
      fee: "Low or No Tuition Fees",
      description: "Most bachelor's & master's programs have minimal or zero fees",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-[#8cc63f]" />,
      degree: "Private Universities",
      fee: "€5,000 – €20,000 / semester",
      description: "Charged for bachelor's and master's programs",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      degree: "International Programs",
      fee: "€5,000 – €30,000 / semester",
      description: "Specialized courses for global students",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const livingCosts = [
    {
      icon: <Home className="w-8 h-8 text-red-600" />,
      item: "Rent"
    },
    {
      icon: <Utensils className="w-8 h-8 text-yellow-600" />,
      item: "Food"
    },
    {
      icon: <Bus className="w-8 h-8 text-indigo-600" />,
      item: "Transportation"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      item: "Health Insurance"
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-orange-600" />,
      item: "Other Expenses"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
             <span className="text-[#8cc63f]">Tuition </span>Fees & Additional Study Costs
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Studying in Germany can be an affordable option for international students, with relatively low tuition fees and living costs compared to other Western European countries.
          </p>
        </div>

        {/* Tuition Fees */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Tuition Fees
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tuitionFees.map((item, index) => (
              <div
                key={index}
                className={`${item.color} border-2 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 bg-white rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>

                <div className="bg-british-navy text-white px-4 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  {item.degree}
                </div>

                <div className="text-lg sm:text-xl font-bold text-gray-800 mb-1">
                  {item.fee}
                </div>

                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Living Costs */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Living Costs Include:
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {livingCosts.map((cost, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl p-4 w-32 sm:w-40 shadow hover:shadow-md transition-all"
              >
                {cost.icon}
                <span className="mt-2 text-sm sm:text-base text-gray-700 font-medium text-center">
                  {cost.item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionFeesSection;
