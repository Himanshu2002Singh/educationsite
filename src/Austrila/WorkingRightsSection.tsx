import React, { useState } from 'react';
import { Clock, Calendar, GraduationCap, Briefcase, Info } from 'lucide-react';

const WorkingRightsSectionAustralia = () => {
  const [activeTab, setActiveTab] = useState<'studying' | 'postStudy'>('studying');

  const studyWorkRights = [
    {
      level: "Student Visa Holders (Subclass 500)",
      studyLimit: "Up to 48 hours per fortnight during study periods",
      holidayLimit: "Full-time during official university breaks/holidays",
      color: "from-[#F0FFF4] to-white border-[#CDEFD4]"
    }
  ];

  return (
    <section className="py-16 bg-[#F0FFF4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  max-w-7xl ">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Working <span className="text-[#8cc63f]">Rights in Australia</span> for International Students
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            Understand your work permissions during and after your studies in Australia.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-white w-full px-4 sm:px-12 py-2 gap-2">
          {['studying', 'postStudy'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'studying' | 'postStudy')}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-[#F2F2F2] hover:bg-[#C1272D]'
                  : 'text-[#2C2C2C] hover:text-[#C1272D]'
              }`}
            >
              {tab === 'studying' ? (
                <>
                  <GraduationCap className="w-5 h-5 mr-2" /> While Studying
                </>
              ) : (
                <>
                  <Briefcase className="w-5 h-5 mr-2" /> After Graduation
                </>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'studying' ? (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studyWorkRights.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.color} border-2 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300`}
                >
                  <h4 className="text-xl font-bold text-[#2C2C2C] mb-6 text-center">{item.level}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 text-[#8DC63F] mr-3" />
                        <span className="text-[#2C2C2C] font-medium">During Study Periods</span>
                      </div>
                      <span className="text-[#2C2C2C] font-bold text-lg">{item.studyLimit}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <Calendar className="w-6 h-6 text-[#C1272D] mr-3" />
                        <span className="text-[#2C2C2C] font-medium">During Holidays/<br/>Breaks</span>
                      </div>
                      <span className="text-[#C1272D] font-bold text-lg">{item.holidayLimit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-xl p-5 text-center shadow-sm">
              <div className="flex justify-center items-center mb-3">
                <Info className="w-5 h-5 text-[#C1272D] mr-2" />
                <span className="font-semibold text-[#C1272D]">Important Note</span>
              </div>
              <p className="text-[#2C2C2C] text-sm">
               Ensure compliance with visa conditions to maintain legal status.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Post-study Work Rights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-2 border-[#CDEFD4] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-center mb-4">
                  <div className="bg-[#E5F8E0] p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#8DC63F]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C2C2C] mt-4">Bachelor's & Master's Graduates</h4>
                </div>
                <div className="bg-[#F0FFF4] border border-[#CDEFD4] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#8DC63F] mb-2">2–4 Years</p>
                  <p className="text-[#2C2C2C]">Post-Study Work Visa (Temporary Graduate Visa - Subclass 485)</p>
                </div>
                <ul className="mt-6 space-y-2 text-[#2C2C2C] text-sm">
                  <li>Work in any sector</li>
                  <li>Switch between employers</li>
                  <li>Gain valuable Australian work experience</li>
                </ul>
              </div>

              <div className="border-2 border-[#D6D6F0] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-center mb-4">
                  <div className="bg-[#EDEBFF] p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#726EFF]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C2C2C] mt-4">PhD Graduates</h4>
                </div>
                <div className="bg-[#F9F9FF] border border-[#D6D6F0] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#726EFF] mb-2">4 Years</p>
                  <p className="text-[#2C2C2C]">Post-Study Work Visa (Temporary Graduate Visa - Subclass 485)</p>
                </div>
                <ul className="mt-6 space-y-2 text-[#2C2C2C] text-sm">
                  <li>Extended career opportunities</li>
                  <li>Research and academic roles</li>
                  <li>Industry leadership positions</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkingRightsSectionAustralia;
