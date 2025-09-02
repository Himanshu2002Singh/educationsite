import React from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

const UniversitiesSection = () => {
  const nzCities = [
    {
      name: "Auckland",
      description: "Largest city, multicultural, economic hub. Ideal for IT, Business, Engineering.",
    },
    {
      name: "Wellington",
      description: "Capital city known for arts, government, and creative technologies.",
    },
    {
      name: "Christchurch",
      description: "Innovation-driven, strong in Engineering, Architecture, and IT.",
    },
  ];

  const nzUniversityList = [
    { university: "University of Auckland", location: "Auckland", rank: "#65" },
    { university: "University of Otago", location: "Dunedin", rank: "#206" },
    { university: "Victoria University of Wellington", location: "Wellington", rank: "#241" },
    { university: "University of Canterbury", location: "Christchurch", rank: "#256" },
    { university: "Massey University", location: "Multiple", rank: "#250–300" },
    { university: "University of Waikato", location: "Hamilton", rank: "#301–350" },
    { university: "Lincoln University", location: "Lincoln", rank: "#407" },
    { university: "Auckland University of Technology (AUT)", location: "Auckland", rank: "#407" },
  ];

  return (
    <section className="py-14 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* NZ Cities Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Best Cities</span> in New Zealand 
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nzCities.map((city, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-[#f4f8ef] rounded-xl p-6 shadow hover:shadow-lg transition duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#8DC63F]/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-[#8DC63F]" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-[#2C2C2C] mb-2">{city.name}</h4>
              
              </div>
            ))}
          </div>
        </div>

        {/* NZ Universities Section */}
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
             Top <span className="text-[#8cc63f]"> New Zealand </span>Institutions You Should Know (QS 2025)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nzUniversityList.map((uni, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <GraduationCap className="w-6 h-6 text-[#8DC63F] mr-2" />
                    <h4 className="font-semibold text-[#2C2C2C]">{uni.university}</h4>
                  </div>
                  
                </div>
              
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;
