import React, { useState, useEffect } from 'react';
import {
  TrendingUp, Database, Cog, Heart, Palette,
  Calendar
} from 'lucide-react';

const CoursesIntakeSection = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const courses = [
    { icon: <Database className="w-8 h-8 text-[#8DC63F]" />, title: "IT & Computer Science", subjects: "Programming, Systems, Networks" },
    { icon: <Cog className="w-8 h-8 text-[#C1272D]" />, title: "Artificial Intelligence", subjects: "AI, ML, Deep Learning" },
    { icon: <Cog className="w-8 h-8 text-[#2C2C2C]" />, title: "Civil Engineering", subjects: "Structural, Transportation, Geotechnical" },
    { icon: <Database className="w-8 h-8 text-amber-600" />, title: "Bachelor of Information Technology", subjects: "IT Management, Databases" },
    { icon: <Palette className="w-8 h-8 text-pink-500" />, title: "Bachelor of Design (Digital)", subjects: "UI/UX, Digital Art" },
    { icon: <TrendingUp className="w-8 h-8 text-green-600" />, title: "Sport Management", subjects: "Sports Admin, Marketing" },
    { icon: <Heart className="w-8 h-8 text-red-500" />, title: "Hospitality & Hotel Management", subjects: "Tourism, Hospitality" },
    { icon: <Palette className="w-8 h-8 text-[#8DC63F]" />, title: "Animation and Web Design", subjects: "2D/3D, Web UX" },
    { icon: <Heart className="w-8 h-8 text-[#C1272D]" />, title: "Health care & Nursing", subjects: "Nursing, Patient Care" },
    { icon: <Database className="w-8 h-8 text-[#2C2C2C]" />, title: "Master of Information Technology", subjects: "Advanced IT, Security" },
    { icon: <TrendingUp className="w-8 h-8 text-amber-600" />, title: "Master of Business Administration (MBA)", subjects: "Leadership, Finance, HR" },
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
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 font-serif">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your dream program across 1000s of specializations in the UK
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        
      </div>
    </section>
  );
};

export default CoursesIntakeSection;
