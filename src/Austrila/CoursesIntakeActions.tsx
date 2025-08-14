import React, { useState, useEffect } from 'react';
import {
  Briefcase, Database, Cog, Heart, Microscope,
  Calendar, Sun, Leaf, Snowflake, BarChart, Brain
} from 'lucide-react';

const CoursesAustraliaIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // 📚 Popular Programs in Australia
  const courses = [
    { icon: <Briefcase className="w-8 h-8 text-[#8cc63f]" />, title: "Business & Management", subjects: "International Business, Marketing, HR, Entrepreneurship" },
    { icon: <Database className="w-8 h-8 text-blue-600" />, title: "Information Technology", subjects: "Software Engineering, Cyber Security, Cloud Computing" },
    { icon: <Cog className="w-8 h-8 text-gray-700" />, title: "Engineering", subjects: "Civil, Mechanical, Electrical, Mining, Chemical" },
    { icon: <Microscope className="w-8 h-8 text-purple-600" />, title: "Life Sciences", subjects: "Biology, Environmental Science, Biotechnology" },
    { icon: <BarChart className="w-8 h-8 text-yellow-600" />, title: "Accounting & Finance", subjects: "Accounting, Financial Planning, Investment Management" },
    { icon: <Heart className="w-8 h-8 text-pink-500" />, title: "Psychology", subjects: "Clinical, Counselling, Organisational Psychology" },
    { icon: <Brain className="w-8 h-8 text-indigo-600" />, title: "Artificial Intelligence", subjects: "Machine Learning, Robotics, Natural Language Processing" },
    { icon: <Database className="w-8 h-8 text-teal-500" />, title: "Data Science & Analytics", subjects: "Big Data, Predictive Analytics, Business Intelligence" },
  ];

  // 📅 Australian University Intakes
  const intakes = [
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "February Intake (Semester 1)",
      description: "Late February / Early March - Late May / Early June"
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#8cc63f]" />,
      title: "July Intake (Semester 2)",
      description: "Late July / Early August – October / November"
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: "November Intake (Trimester 3 / Summer Term)",
      description: "Late October / Early November – February"
    }
  ];

  const dynamicFacts = [
    "Australia offers 3 major intakes: February, July, and November",
    "Business, IT, and Engineering are top picks among international students",
    "Australian universities rank among the top globally",
    "AI and Data Science programs are growing rapidly in demand",
    "Life in Australia offers a mix of world-class education and lifestyle"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 font-serif">
            Popular Programs & Intakes – Australia
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Australia’s top study programs and university intake schedules to plan your academic journey effectively.
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-10 bg-white rounded-2xl p-2 max-w-md mx-auto shadow-md">
          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'courses'
                ? 'bg-blue-600 text-white'
                : 'text-[#2C2C2C] hover:text-blue-600'
            }`}
          >
            Courses in Demand
          </button>
          <button
            onClick={() => setActiveTab('intakes')}
            className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'intakes'
                ? 'bg-green-600 text-white'
                : 'text-[#2C2C2C] hover:text-[#8cc63f]'
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
                <p className="text-gray-600 text-sm">{intake.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesAustraliaIntakeSection;
