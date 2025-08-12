import React, { useState } from 'react';
import { Trophy, TrendingUp, Star, MapPin } from 'lucide-react';

const UniversitiesSection = () => {
  const [activeTab, setActiveTab] = useState('elite');

  const eliteUniversities = [
    { name: "Imperial College London", rank: 2, courses: "Engineering, Medicine, Business" },
    { name: "University of Oxford", rank: 4, courses: "Law, Philosophy, Medicine" },
    { name: "University of Cambridge", rank: 6, courses: "Natural Sciences, Engineering, Law" },
    { name: "University College London", rank: 9, courses: "Medicine, Engineering, Arts" },
    { name: "King's College London", rank: 31, courses: "Medicine, Law, Business" },
    { name: "The University of Edinburgh", rank: 34, courses: "Medicine, Engineering, Arts" },
    { name: "The University of Manchester", rank: 35, courses: "Engineering, Business, Medicine" },
    { name: "University of Bristol", rank: 51, courses: "Engineering, Medicine, Social Sciences" },
    { name: "London School of Economics (LSE)", rank: 56, courses: "Economics, Politics, Law" },
    { name: "The University of Warwick", rank: 74, courses: "Business, Engineering, Mathematics" },
    { name: "University of Birmingham", rank: 76, courses: "Medicine, Engineering, Business" },
    { name: "University of Glasgow", rank: 79, courses: "Medicine, Engineering, Arts" },
    { name: "University of Leeds", rank: 86, courses: "Business, Engineering, Medicine" },
    { name: "University of Southampton", rank: 87, courses: "Engineering, Medicine, Business" },
    { name: "The University of Sheffield", rank: 92, courses: "Engineering, Medicine, Arts" },
    { name: "Durham University", rank: 94, courses: "Business, Law, Natural Sciences" },
    { name: "University of Nottingham", rank: 97, courses: "Medicine, Engineering, Business" },
  ];

  const risingUniversities = [
    { name: "University of Bath", rank: 148, courses: "Engineering, Business, Architecture" },
    { name: "University of York", rank: 162, courses: "Computer Science, Psychology, History" },
    { name: "Newcastle University", rank: 171, courses: "Medicine, Engineering, Business" },
    { name: "University of Surrey", rank: 347, courses: "Engineering, Business, Hospitality" },
    { name: "University of Strathclyde", rank: 325, courses: "Engineering, Business, Pharmacy" },
  ];

  const underdogUniversities = [
    { name: "Coventry University", rank: 571, courses: "Design, Engineering, Business" },
    { name: "University of Hertfordshire", rank: 751, courses: "Computer Science, Business, Arts" },
    { name: "Middlesex University", rank: 801, courses: "Business, Arts, Health Sciences" },
    { name: "University of Greenwich", rank: 1001, courses: "Business, Computing, Architecture" },
    { name: "London South Bank University", rank: 1201, courses: "Engineering, Business, Health" },
  ];

  const getUniversities = () => {
    switch (activeTab) {
      case 'elite': return eliteUniversities;
      case 'rising': return risingUniversities;
      case 'underdogs': return underdogUniversities;
      default: return eliteUniversities;
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case 'elite':
        return "Leading global institutions with high rankings, historic legacy, and global recognition.";
      case 'rising':
        return "Top-tier UK universities making consistent leaps in global rankings over the last 5 years.";
      case 'underdogs':
        return "Often overlooked but delivers exceptional education, campus life, and value.";
      default:
        return "";
    }
  };

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

  const nzUniversityTable = [
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
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-6">
            Top Cities in New Zealand for Education
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nzCities.map((city, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 shadow-sm text-left">
                <div className="flex items-center text-[#8DC63F] mb-2">
                  <MapPin className="w-5 h-5 mr-2" />
                  <h4 className="text-lg font-semibold text-[#2C2C2C]">{city.name}</h4>
                </div>
                <p className="text-sm text-gray-700">{city.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NZ University Table */}
        <div className="mt-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-[#2C2C2C] mb-6">
            Top New Zealand Universities (QS 2025)
          </h3>

          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {nzUniversityTable.map((uni, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
                <h4 className="font-semibold text-[#2C2C2C]">{uni.university}</h4>
                <p className="text-sm text-gray-600"><strong>Location:</strong> {uni.location}</p>
                <p className="text-sm text-gray-600"><strong>Ranking:</strong> {uni.rank}</p>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden sm:block mt-6">
            <div className="min-w-[600px] w-full max-w-4xl mx-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#8DC63F] text-white">
                  <tr>
                    <th className="px-6 py-3 font-semibold">University</th>
                    <th className="px-6 py-3 font-semibold">Location</th>
                    <th className="px-6 py-3 font-semibold">QS World Ranking</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {nzUniversityTable.map((uni, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4">{uni.university}</td>
                      <td className="px-6 py-4">{uni.location}</td>
                      <td className="px-6 py-4">{uni.rank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UniversitiesSection;
