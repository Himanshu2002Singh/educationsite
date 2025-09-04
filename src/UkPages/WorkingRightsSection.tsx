import React, { useState } from 'react';
import { Clock, Calendar, GraduationCap, Briefcase, Info } from 'lucide-react';

const WorkingRightsSection = () => {
  const [activeTab, setActiveTab] = useState<'studying' | 'postStudy'>('studying');

  const studyWorkRights = [
    {
      level: "Postgraduate Degree",
      studyLimit: "20 hrs/week",
      holidayLimit: "Full-time",
      color: "from-[#F0FFF4] to-white border-[#CDEFD4]"
    },
    {
      level: "Undergraduate Degree", 
      studyLimit: "20 hrs/week",
      holidayLimit: "Full-time",
      color: "from-white to-[#F0FFF4] border-[#D6D6F0]"
    }
  ];

  return (
    <section className="py-16 bg-[#F0FFF4]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            Working Rights in the UK for {" "}<span className="text-[#8cc63f]"> International Students</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            Understand your work permissions during and after your studies
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
            {/* <h3 className="text-2xl font-bold text-center text-[#2C2C2C]">
              Student Work Rights (While Studying)
            </h3> */}

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
                        <span className="text-[#2C2C2C] font-medium">During Study</span>
                      </div>
                      <span className="text-[#2C2C2C] font-bold text-lg">{item.studyLimit}</span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center">
                        <Calendar className="w-6 h-6 text-[#C1272D] mr-3" />
                        <span className="text-[#2C2C2C] font-medium">During Holidays</span>
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
                The university must have a valid Tier 4 sponsor license.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* <h3 className="text-2xl font-bold text-center text-[#2C2C2C]">
              Post-Study Work Rights (Graduate Route)
            </h3> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bachelor's & Master's */}
              <div className="border-2 border-[#CDEFD4] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-center mb-4">
                  <div className="bg-[#E5F8E0] p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#8DC63F]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C2C2C] mt-4">Bachelor's & Master's</h4>
                </div>
                <div className="bg-[#F0FFF4] border border-[#CDEFD4] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#8DC63F] mb-2">2 Years</p>
                  <p className="text-[#2C2C2C]">Post-Study Work Visa</p>
                </div>
                {/* <ul className="mt-6 space-y-2 text-[#2C2C2C] text-sm">
                  <li>Work in any job at any skill level</li>
                  <li>Switch between employers</li>
                  <li>Be self-employed</li>
                </ul> */}
              </div>

              {/* PhD */}
              <div className="border-2 border-[#D6D6F0] bg-white rounded-xl p-6 shadow-lg hover:shadow-xl">
                <div className="text-center mb-4">
                  <div className="bg-[#EDEBFF] p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-[#726EFF]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#2C2C2C] mt-4">PhD Graduates</h4>
                </div>
                <div className="bg-[#F9F9FF] border border-[#D6D6F0] p-6 rounded-lg text-center">
                  <p className="text-3xl font-bold text-[#726EFF] mb-2">3 Years</p>
                  <p className="text-[#2C2C2C]">Post-Study Work Visa</p>
                </div>
                {/* <ul className="mt-6 space-y-2 text-[#2C2C2C] text-sm">
                  <li>Extended work opportunities</li>
                  <li>Research and academic roles</li>
                  <li>Industry leadership positions</li>
                </ul> */}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-white to-[#F0FFF4] rounded-xl p-8 border border-gray-200">
              <h4 className="text-xl font-bold text-[#2C2C2C] mb-6 text-center">Graduate Route Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <Briefcase className="text-[#8DC63F]" />, title: "No Job Offer Required", desc: "Apply without a job offer in hand" },
                  { icon: <Clock className="text-[#C1272D]" />, title: "Flexible Working", desc: "Work full-time or part-time" },
                  { icon: <GraduationCap className="text-[#726EFF]" />, title: "Improved Employability", desc: "Gaining valuable work experience boosts graduates' job prospects " },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h5 className="font-bold text-[#2C2C2C] mb-1">{item.title}</h5>
                    <p className="text-sm text-[#2C2C2C]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkingRightsSection;
