import React, { useState, useEffect } from 'react';
import {
  Briefcase, Database, Cog, Heart, Microscope,
  Calendar, Sun, Leaf, Snowflake, BarChart
} from 'lucide-react';

const CoursesIrelandIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // 📚 Popular Courses in Ireland
  const courses = [
    { icon: <Database className="w-8 h-8 text-blue-600" />, title: "Engineering & Technology", subjects: "Software Engineering, Data Science, AI, Cyber Security, Mechanical, Electrical, Computer Science" },
    { icon: <Briefcase className="w-8 h-8 text-[#8cc63f]" />, title: "Business & Finance", subjects: "International Business, Finance, Accounting, Management, Marketing, HR, Entrepreneurship" },
    { icon: <Heart className="w-8 h-8 text-pink-500" />, title: "Healthcare & Medicine", subjects: "Nursing, Pharmacy, Physiotherapy, Occupational Therapy" },
    { icon: <Microscope className="w-8 h-8 text-purple-600" />, title: "Science & Humanities", subjects: "Biological Sciences, Chemistry, Physics, Environmental Science, Psychology, Sociology, Languages" },
    { icon: <BarChart className="w-8 h-8 text-yellow-600" />, title: "Other Popular Courses", subjects: "Hospitality, Tourism, Digital Media, Game Dev, Animation, International Relations, Law" },
  ];

  // 📅 Major Intakes in Ireland
  const intakes = [
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "September Intake (Major)",
      description: "Maximum course options and highest student enrolments."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#8cc63f]" />,
      title: "January Intake (Minor)",
      description: "Wide course availability across multiple fields."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: "May Intake (Limited)",
      description: "Available for select programs, mainly in business and tech."
    }
  ];

  const dynamicFacts = [
    "September intake is the largest for Irish universities",
    "January intake offers flexibility for mid-year starts",
    "May intake is niche but great for short programs",
    "Engineering, Business, and Healthcare are top Ireland picks",
    "Ireland degrees are globally recognized, especially in tech"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % dynamicFacts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#F9F9F9] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Popular </span>
            Courses & Intakes – Ireland
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top courses and intake timelines for studying in Ireland
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-10 bg-white rounded-2xl p-2 max-w-md mx-auto shadow-md">
          <button
            onClick={() => setActiveTab('courses')}
            className={`w-full sm:w-auto px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'courses'
                ? 'bg-[#8cc63f] text-white'
                : 'text-[#2C2C2C] hover:text-[#8cc63f]'
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

export default CoursesIrelandIntakeSection;
