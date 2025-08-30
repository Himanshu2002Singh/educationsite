import React, { useState, useEffect } from 'react';
import {
  Cog, TrendingUp, Database, Heart, Palette, BookOpen, Calendar, Snowflake, Leaf
} from 'lucide-react';

const CoursesIntakeSection = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const courses = [
    { icon: <Cog className="w-8 h-8 text-[#8DC63F]" />, title: "Engineering Programs", subjects: "Mechanical, Electrical, Computer Science" },
    { icon: <TrendingUp className="w-8 h-8 text-[#C1272D]" />, title: "Business & Economics", subjects: "Finance, MBA, Marketing, HR" },
    { icon: <Database className="w-8 h-8 text-[#2C2C2C]" />, title: "Natural Sciences", subjects: "Biology, Chemistry, Physics" },
    { icon: <BookOpen className="w-8 h-8 text-amber-600" />, title: "Computer Science & IT", subjects: "Software, AI, Cybersecurity" },
    // { icon: <Palette className="w-8 h-8 text-pink-500" />, title: "Language & Cultural Studies", subjects: "German, Linguistics, Cultural Studies" },
    { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Medicine & Health Sciences", subjects: "Medicine, Nursing, Public Health" }
  ];

  const intakes = [
    { icon: <Leaf className="w-8 h-8 text-[#8DC63F]" />, title: "Winter Intake", subtitle: "(Sept/Oct)", description: "Primary intake with widest range of programs. Deadlines: May–July (some Aug)." },
    { icon: <Snowflake className="w-8 h-8 text-[#2C2C2C]" />, title: "Summer Intake", subtitle: "(Mar/Apr)", description: "Fewer programs, ideal for research-intensive or specialized master's. Deadlines: Nov–Jan." }
  ];

  const dynamicFacts = [
    "World-class Engineering",
    "Cutting-edge Research",
    "Affordable Education",
    "Rich Cultural Heritage",
    "Global Career Opportunities"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % dynamicFacts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Popular</span> Courses & Intakes in Germany
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intake timelines (Winter & Summer) and most sought-after courses
          </p>
        </div>

        {/* Tab Switch */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-white rounded-full p-2 max-w-md mx-auto shadow-md">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'courses'
                ? 'bg-[#8DC63F] text-white'
                : 'text-[#2C2C2C] hover:text-[#8DC63F]'
            }`}
          >
            Courses in Demand
          </button>
          <button
            onClick={() => setActiveTab('intakes')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'intakes'
                ? 'bg-[#C1272D] text-white'
                : 'text-[#2C2C2C] hover:text-[#C1272D]'
            }`}
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Intake Timelines
          </button>
        </div>

        {/* Content */}
        {activeTab === 'courses' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-[#F9F9F9] rounded-full">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.subjects}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {intakes.map((intake, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
                <div className="flex justify-center mb-4">{intake.icon}</div>
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-1">{intake.title}</h3>
                <p className="text-sm text-gray-500 mb-2 font-medium">{intake.subtitle}</p>
                <p className="text-gray-600 text-sm">{intake.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic Tagline */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-full px-8 py-4 shadow-md inline-block">
            <p className="text-lg text-[#2C2C2C]">
              Germany is known for{" "}
              <span className="font-bold text-[#8DC63F] transition-all duration-500">
                {dynamicFacts[currentFactIndex]}
              </span>{" "}
            
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            💬 Some universities also offer flexible intakes: April, May, June, or July.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesIntakeSection;
