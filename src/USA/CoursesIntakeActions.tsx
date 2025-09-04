import React, { useState, useEffect } from 'react';
import {
  Briefcase, Database, Cog, Heart, Microscope,
  Calendar, Sun, Leaf, Snowflake, BarChart
} from 'lucide-react';

const CoursesUsaIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // 📚 Popular Courses in USA
  const courses = [
    { icon: <Database className="w-8 h-8 text-blue-600" />, title: "Computer Science & IT", subjects: "Software Engineering, AI, Cybersecurity" },
    { icon: <Cog className="w-8 h-8 text-red-500" />, title: "Engineering", subjects: "Mechanical, Civil, Electrical" },
    { icon: <Briefcase className="w-8 h-8 text-[#8cc63f]" />, title: "Business & Management", subjects: "MBA, Marketing, Finance" },
    { icon: <BarChart className="w-8 h-8 text-yellow-600" />, title: "Data Science & Analytics", subjects: "Big Data, Machine Learning, Statistics" },
    { icon: <Heart className="w-8 h-8 text-pink-500" />, title: "Health & Life Sciences", subjects: "Medicine, Nursing, Public Health" },
    { icon: <Microscope className="w-8 h-8 text-purple-600" />, title: "Biotechnology", subjects: "Genetics, Bioinformatics" },
    { icon: <BarChart className="w-8 h-8 text-amber-600" />, title: "Finance / Financial Analytics", subjects: "Investment Banking, Analytics" },
    // { icon: <Briefcase className="w-8 h-8 text-indigo-500" />, title: "Top MBA", subjects: "Executive MBA, MBA in Finance" },
  ];

  // 📅 Major Intakes in USA
  const intakes = [
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "Fall Intake",
      subtitle: "September – December",
      description: "Most popular intake with 90% program availability. Application: Dec – Mar."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#8cc63f]" />,
      title: "Spring Intake",
      subtitle: "January – May",
      description: "Secondary option with moderate availability. Application: July – Oct."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: "Summer Intake",
      subtitle: "May – August",
      description: "Short semester, limited programs (ideal for bridge courses). Application: Jan – Mar."
    }
  ];

  const dynamicFacts = [
    "Fall intake offers the widest range of programs in the USA",
    "Spring intake has less competition and smaller class sizes",
    "Summer intake is ideal for internships and short courses",
    "Business, Engineering, and Computer Science are top USA picks",
    "USA degrees are highly valued worldwide"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % dynamicFacts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Popular </span>Programs & Intake Timelines in the USA
          </h2> 
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top courses and intake timelines for studying in the USA
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-white w-full px-4 sm:px-12 py-2 gap-2">
          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'courses'
                ? 'bg-[#8DC63F] text-white'
                : 'text-[#2C2C2C] hover:text-[#8DC63F]'
            }`}
          >
            Courses in Demand
          </button>
          <button
            onClick={() => setActiveTab('intakes')}
            className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'intakes'
                ? 'bg-[#C1272D] text-white'
                : 'text-[#2C2C2C] hover:text-[#C1272D]'
            }`}
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Intake Timelines
          </button>
        </div>

        {/* Conditional Content */}
        {activeTab === 'courses' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-[#F9F9F9] rounded-full">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.subjects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {intakes.map((intake, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{intake.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-1">{intake.title}</h3>
                {intake.subtitle && (
                  <p className="text-sm text-gray-500 mb-2 font-medium">{intake.subtitle}</p>
                )}
                <p className="text-gray-600 text-sm">{intake.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesUsaIntakeSection;
