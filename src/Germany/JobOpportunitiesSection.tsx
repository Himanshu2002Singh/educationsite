import React, { useState } from 'react';
import { 
  Briefcase, Clock, FileText, ShieldCheck, Search, 
  UserCheck, CheckCircle, Globe, GraduationCap 
} from 'lucide-react';

const WorkingRightsSectionGermany = () => {
  const [activeTab, setActiveTab] = useState('studying');

  // While Studying data
  const studyWorkRights = [
    {
      title: "Work Hours",
      icon: <Clock className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        <span><strong>During Semester:</strong> Work up to 20 hours per week.</span>,
        <span><strong>Semester Breaks:</strong> Up to 40 hours per week (full-time allowed).</span>,
        <span><strong>Annual Limit:</strong> Max 120 full days or 240 half-days per year.</span>
      ],
      bgColor: "bg-[#E6F0FF]",
    },
    {
      title: "Types of Work Allowed",
      icon: <Briefcase className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        <span><strong>Part-time Jobs:</strong> Common in retail, hospitality, campus jobs, etc.</span>,
        <span><strong>Internships:</strong> Paid or unpaid; must follow work hour rules unless mandatory.</span>,
        <span><strong>Freelancing & Self-employment:</strong> Only possible with special permits (case-by-case approval).</span>,
      ],
      bgColor: "bg-[#F3E8FF]",
    },
    {
      title: "Work Permit & Visa Rules",
      icon: <ShieldCheck className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "No separate work permit required – student residence permit allows part-time work.",
        "Non-EU students must strictly follow the 120-day rule unless otherwise authorized.",
      ],
      bgColor: "bg-[#DFFFE6]",
    },
    {
      title: "Important Points",
      icon: <FileText className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Working more than 20 hrs/week during semester can affect student status & health insurance.",
        "Language skills (German/English) improve job opportunities.",
        "Always ensure compliance with tax regulations (get a tax ID if earning above allowance).",
      ],
      bgColor: "bg-[#FFF9E6]",
    },
    {
      title: "Finding a Job",
      icon: <Search className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Job platforms: Indeed, LinkedIn, Jobbörse.",
        "University job boards and career services.",
        "Networking with professors, classmates, and professionals.",
      ],
      bgColor: "bg-[#E6F4FF]",
    },
  ];

  // After Graduation data
  const postStudyRights = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#4C51BF]" />,
      title: 'Stay Back Option',
      points: [
        'After completing your degree, international students can apply for a Post-Study Work (PSW) visa.',
        'This allows you to stay in Germany for 18 months to search for a full-time job related to your qualification.',
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#2563EB]" />,
      title: 'Job Opportunities',
      points: [
        'High-demand fields: Engineering, IT & Computer Science, Artificial Intelligence, Data Science, Business & Finance, Healthcare.',
        'Germany has one of the lowest unemployment rates in Europe and a strong need for skilled professionals.',
        'Many international graduates secure employment within their stay-back period.',
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#10B981]" />,
      title: 'Work Permit / Residence Permit',
      points: [
        'Once you secure a job, you can apply for:',
        'EU Blue Card (if your salary meets the threshold) – offers a path to Permanent Residency (PR).',
        'Residence Permit for Employment – if salary is below Blue Card level but job is relevant.',
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-[#F59E0B]" />,
      title: 'Pathway to PR',
      points: [
        'With an EU Blue Card: Eligible for PR in 21–33 months (depending on German language skills).',
        'With a standard work permit: PR is possible after 5 years of working in Germany.',
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#8B5CF6]" />,
      title: 'Key Advantages',
      points: [
        'Strong career growth in Europe’s largest economy.',
        'Opportunity to settle long-term through PR.',
        'International graduates are highly valued in the German labour market.',
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Working <span className="text-[#8cc63f]">Rights in Germany</span> for International Students
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            International students in Germany have specific work rights designed to help them support themselves financially and build careers after graduation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 bg-white rounded-2xl p-2 px-12 shadow-lg w-fit mx-auto border border-gray-200">
          {['studying', 'postStudy'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-white'
                  : 'text-[#2C2C2C] hover:text-[#8DC63F]'
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
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6 mb-8">
              {/* First row - regular cards */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {studyWorkRights.slice(0, 3).map((item, idx) => (
                  <div
                    key={idx}
                    className={`${item.bgColor} border border-[#CBD5E1] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col`}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center mb-3">
                      {item.title}
                    </h3>
                    <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-2 text-left">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Full-width cards */}
              {studyWorkRights.slice(3).map((item, idx) => (
                <div
                  key={idx + 3}
                  className={`${item.bgColor} border border-[#CBD5E1] p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col`}
                >
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center md:text-left mb-3">
                        {item.title}
                      </h3>
                      <ul className="list-disc list-inside text-black text-sm sm:text-base space-y-2 text-left">
                        {item.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postStudyRights.map(({ icon, title, points }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EEF2FF] mb-6">
                    {icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#1E293B] mb-4">
                    {title}
                  </h4>
                  <ul className="space-y-2 text-[#475569] text-sm leading-relaxed tracking-wide flex-1">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#4C51BF] mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WorkingRightsSectionGermany;
