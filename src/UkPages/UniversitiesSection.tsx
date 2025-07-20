import React, { useState } from 'react';
import { Trophy, TrendingUp, Star } from 'lucide-react';

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
        return "Often overlooked but delivers exceptional education, campus life, and value. Ideal for students looking for excellent faculty and facilities without the London price tag.";
      default:
        return "";
    }
  };

return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#2C2C2C] mb-4">
            Top UK Universities You Should Know
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover your ideal university—whether elite or rising, all offer exceptional education & ROI.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {[
            { key: 'elite', label: 'Elite Universities', icon: Trophy },
            { key: 'rising', label: 'Rising Angels', icon: TrendingUp },
            { key: 'underdogs', label: 'Underdogs', icon: Star }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-2 rounded-full border font-medium transition-all ${
                activeTab === key
                  ? 'bg-[#C1272D] text-white shadow-lg'
                  : 'border-gray-300 text-gray-700 hover:bg-[#8DC63F] hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">{getDescription()}</p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getUniversities().map((university, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-[2px] animate-gradient-border bg-[length:300%_300%] bg-border-gradient shadow-2xl"
            >
              <div className="bg-white rounded-2xl h-full w-full p-6 backdrop-blur-md">
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-2">
                  {university.name}
                </h3>
                <span className="inline-block mb-3 text-sm font-semibold bg-[#8DC63F] text-white px-3 py-1 rounded-full">
                  QS Rank #{university.rank}
                </span>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-gray-600 mb-1">Popular Courses:</p>
                  <p className="text-sm text-gray-800">{university.courses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 shadow-md">
            Get your University Match
          </button>
        </div>
      </div>
    </section>
);
};

export default UniversitiesSection;