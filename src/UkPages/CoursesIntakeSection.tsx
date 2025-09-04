import React, { useState, useEffect } from 'react';
import {
  TrendingUp, Database, Cog, Heart, Palette,
  Calendar, Snowflake, Leaf, Sun
} from 'lucide-react';

const CoursesIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const courses = [
    { icon: <Database className="w-8 h-8 text-[#8DC63F]" />, title: "Business", subjects: " Management, Finance, Marketing, International Business" },
    { icon: <Cog className="w-8 h-8 text-[#C1272D]" />, title: "Data Science", subjects: " Big Data, AI, Analytics, Machine Learning" },
    { icon: <Cog className="w-8 h-8 text-[#2C2C2C]" />, title: "Engineering", subjects: " Mechanical, Civil, Electrical, and Renewable Energy" },
    { icon: <Database className="w-8 h-8 text-amber-600" />, title: "Law", subjects: " International Law, Corporate Law, Human Rights" },
    { icon: <Palette className="w-8 h-8 text-pink-500" />, title: "Health Sciences", subjects: "Nursing, Public Health, Physiotherapy, Healthcare Management" },
    { icon: <TrendingUp className="w-8 h-8 text-[#8cc63f]" />, title: "Design", subjects: " Interior Design, Product Design, UI/UX, Fashion Design" },
    // { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Hospitality & Hotel Management", subjects: "Tourism, Hospitality" },
    // { icon: <Palette className="w-8 h-8 text-[#8DC63F]" />, title: "Animation and Web Design", subjects: "2D/3D, Web UX" },
    // { icon: <Heart className="w-8 h-8 text-[#C1272D]" />, title: "Health care & Nursing", subjects: "Nursing, Patient Care" },
    // { icon: <Database className="w-8 h-8 text-[#2C2C2C]" />, title: "Master of Information Technology", subjects: "Advanced IT, Security" },
    // { icon: <TrendingUp className="w-8 h-8 text-amber-600" />, title: "Master of Business Administration (MBA)", subjects: "Leadership, Finance, HR" },
  ];

  const intakes = [
    {
      icon: <Sun className="w-8 h-8 text-[#8DC63F]" />,
      title: "September Intake ",
      subtitle: "(Major)",
      description: " Maximum course options and highest student enrolments."
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#2C2C2C]" />,
      title: " January Intake",
      subtitle: "(Minor)",
      description: "  Wide course availability across multiple fields."
    },
    {
      icon: <Snowflake className="w-8 h-8 text-[#C1272D]" />,
      title: "May Intake",
      subtitle: "(Mid)",
      description: " Available at selected universities and courses."
    }
  ];

  const dynamicFacts = [
    "Sports Management", "Architecture", "Nursing", "Design Studies",
    "Economics", "Computer Science", "Health Care"
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
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
          {" "}Popular<span className="text-[#8cc63f]"> Programs & Intake </span>  Timelines in the UK
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Find your dream program across 1000s of specializations in the UK
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

export default CoursesIntakeSection;   