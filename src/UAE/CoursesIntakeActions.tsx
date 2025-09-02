import React, { useState, useEffect } from 'react';
import {
  TrendingUp, Database, Cog, Heart, Palette,
  Calendar, Sun, Leaf, Snowflake, Briefcase
} from 'lucide-react';

const CoursesUaeIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // 📚 Popular Courses in UAE
  const courses = [
    { icon: <Briefcase className="w-8 h-8 text-[#8DC63F]" />, title: "Business Administration & Management", subjects: "Leadership, Marketing, HR" },
    { icon: <Database className="w-8 h-8 text-[#C1272D]" />, title: "Computer Science & Artificial Intelligence", subjects: "AI, Machine Learning, Software Development" },
    { icon: <Cog className="w-8 h-8 text-[#2C2C2C]" />, title: "Engineering", subjects: "Mechanical, Civil, Electrical, Aerospace" },
    { icon: <Database className="w-8 h-8 text-amber-600" />, title: "Data Science & Cybersecurity", subjects: "Analytics, Big Data, Ethical Hacking" },
    { icon: <Briefcase className="w-8 h-8 text-pink-500" />, title: "Finance & Accounting", subjects: "Corporate Finance, Taxation, Auditing" },
    { icon: <Palette className="w-8 h-8 text-[#8cc63f]" />, title: "Architecture & Interior Design", subjects: "Urban Design, Space Planning" },
    { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Tourism & Hospitality Management", subjects: "Event Management, Hotel Operations" },
    { icon: <Palette className="w-8 h-8 text-[#8DC63F]" />, title: "Media & Communication", subjects: "Journalism, PR, Digital Media" },
  ];

  // 📅 University Intakes in Dubai
  const intakes = [
    {
      icon: <Sun className="w-8 h-8 text-[#8DC63F]" />,
      title: "Fall Intake",
      subtitle: "September",
      description: "Primary intake with the widest choice of programs and scholarships. Application Period: April – August."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#2C2C2C]" />,
      title: "Spring Intake",
      subtitle: "January",
      description: "Second major intake for students who missed Fall. Application Period: September – December."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-[#C1272D]" />,
      title: "Summer Intake (Limited)",
      subtitle: "May / June",
      description: "Available at select universities (Amity, DMU, Middlesex) for specific programs. Application Period: February – April."
    }
  ];

  const dynamicFacts = [
    "Business graduates are in high demand in UAE",
    "AI and Data Science offer top-paying roles",
    "Hospitality jobs booming with Dubai Expo legacy",
    "Architecture careers growing in urban development",
    "Cybersecurity specialists are highly sought after"
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
          <span className="text-[#8cc63f]"> Popular </span>Programs & Intake Timelines in UAE  
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            These programs are in high demand due to UAE job market trends
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mb-10 bg-white rounded-2xl p-2 max-w-md mx-auto shadow-md">
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

export default CoursesUaeIntakeSection;
