import React, { useState, useEffect } from 'react';
import {
  Briefcase, Database, Cog, Heart, Microscope,
  Calendar, Sun, Leaf, Snowflake, BarChart, Brain
} from 'lucide-react';

const CoursesCanadaIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  // 📚 Popular Programs in Canada
  const courses = [
    { icon: <Briefcase className="w-8 h-8 text-[#8cc63f]" />, title: "Business Administration & Management", subjects: "International Business, Marketing, HR, Entrepreneurship" },
    { icon: <Cog className="w-8 h-8 text-gray-700" />, title: "Supply Chain & Logistics", subjects: "Procurement, Warehousing, Transportation" },
    { icon: <Database className="w-8 h-8 text-blue-600" />, title: "Computer Science & IT", subjects: "Software Engineering, Cybersecurity, Networking" },
    { icon: <Cog className="w-8 h-8 text-orange-600" />, title: "Engineering", subjects: "Civil, Mechanical, Electrical, Automotive" },
    { icon: <Microscope className="w-8 h-8 text-purple-600" />, title: "Health & Life Sciences", subjects: "Nursing, Biotechnology, Environmental Science" },
    { icon: <Heart className="w-8 h-8 text-pink-500" />, title: "Hospitality & Tourism", subjects: "Hotel Management, Event Planning, Culinary Arts" },
    { icon: <BarChart className="w-8 h-8 text-yellow-600" />, title: "Media & Communications", subjects: "Journalism, PR, Digital Media" },
    { icon: <Brain className="w-8 h-8 text-indigo-600" />, title: "Data Science & AI", subjects: "Machine Learning, Predictive Analytics" },
    { icon: <Database className="w-8 h-8 text-teal-500" />, title: "Graphic & Web Design", subjects: "UX/UI, Motion Graphics, Branding" },
    { icon: <Cog className="w-8 h-8 text-red-500" />, title: "Animation & Gaming", subjects: "3D Animation, Game Development, VFX" },
  ];

  // 📅 Canadian University Intakes
  const intakes = [
    {
      icon: <Leaf className="w-8 h-8 text-[#8cc63f]" />,
      title: "Fall Intake (September)",
      description: "Most popular, wide range of programs"
    },
    {
      icon: <Snowflake className="w-8 h-8 text-blue-500" />,
      title: "Winter Intake (January)",
      description: "Good for students who may have missed September intake"
    },
    {
      icon: <Sun className="w-8 h-8 text-orange-500" />,
      title: "Spring/Summer Intake (May)",
      description: "Limited program options available"
    }
  ];

  const dynamicFacts = [
    "Canada has 3 main intakes: Fall, Winter, and Spring/Summer",
    "Business, IT, and Engineering remain top picks for international students",
    "Colleges in Canada offer job-oriented diplomas and postgraduate programs",
    "Preparing 6–8 months in advance increases your admission chances",
    "Many Canadian programs offer co-op work opportunities"
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
            Popular Programs & Intakes – Canada
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Canada’s most sought-after programs and intake schedules to plan your study path for maximum success.
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

export default CoursesCanadaIntakeSection;
