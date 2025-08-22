import React, { useState } from 'react';
import { Clock, Calendar, GraduationCap, Briefcase, Info } from 'lucide-react';

const WorkingRightsSectionCanada = () => {
  const [activeTab, setActiveTab] = useState<'studying' | 'postStudy'>('studying');

  const studyWorkRights = [
    {
      level: "International Students in Canada",
      studyLimit: "Up to 24 hours/week during academic sessions",
      holidayLimit: "Full-time (up to 40 hours/week) during scheduled breaks",
      color: "from-[#F0FFF4] to-white border-[#CDEFD4]"
    }
  ];

  return (
    <section className="py-16 bg-[#F0FFF4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Working {" "}<span className="text-[#8cc63f]">Rights in Canada</span> for International Students
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            International students in Canada can work part-time while studying to gain experience and help cover living expenses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 bg-white rounded-full p-2 shadow-lg w-fit mx-auto border border-gray-200">
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
                        <span className="text-[#2C2C2C] font-medium">During Academic Sessions</span>
                      </div>
                      <span className="text-[#2C2C2C] font-bold text-lg">{item.studyLimit}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <Calendar className="w-6 h-6 text-[#C1272D] mr-3" />
                        <span className="text-[#2C2C2C] font-medium">During Scheduled Breaks</span>
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
                Students can work off-campus up to 24 hours per week during academic sessions and full-time during scheduled breaks, as per Canadian immigration rules.
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
                  <h4 className="text-xl font-bold text-[#2C2C2C] mt-4">Post-Graduation Work Permit (PGWP)</h4>
                </div>
                <div className="bg-[#F0FFF4] border border-[#CDEFD4] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#8DC63F] mb-2">Up to 3 Years</p>
                  <p className="text-[#2C2C2C]">Duration depends on the length of the study program</p>
                </div>
                <ul className="mt-6 space-y-2 text-[#2C2C2C] text-sm">
                  <li>Work for any employer</li>
                  <li>No job offer required to apply</li>
                  <li>Gain Canadian work experience for PR pathways</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkingRightsSectionCanada;
