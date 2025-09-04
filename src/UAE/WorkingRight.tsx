import React, { useState } from 'react';
import { 
  Briefcase, Clock, FileText, ShieldCheck, Search, 
  UserCheck, CheckCircle, Globe, GraduationCap, Building, Award, Users 
} from 'lucide-react';

const WorkingRight= () => {
  const [activeTab, setActiveTab] = useState<'studying' | 'postStudy'>('studying');

  // While Studying data
  const studyWorkRights = [
    {
      title: "On-Campus Work",
      icon: <Building className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Permitted in approved universities",
        "Positions in library, admin, research, student services, etc.",
        "Requires university approval"
      ],
      bgColor: "bg-[#E6F0FF]",
    },
    {
      title: "Off-Campus Work",
      icon: <Briefcase className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Allowed only with a MOHRE work permit",
        "Requires university approval",
        "Must comply with UAE labor laws"
      ],
      bgColor: "bg-[#F3E8FF]",
    },
    {
      title: "Work Hours",
      icon: <Clock className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Up to 20 hours per week during classes",
        "40 hours per week during breaks",
        "Must maintain academic performance"
      ],
      bgColor: "bg-[#DFFFE6]",
    },
    {
      title: "Internships",
      icon: <FileText className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Allowed if part of the academic program",
        "Requires university approval",
        "Can be paid or unpaid depending on arrangement"
      ],
      bgColor: "bg-[#FFF9E6]",
      fullWidth: true,
    },
    {
      title: "Important Notes",
      icon: <ShieldCheck className="w-6 h-6 text-[#4C51BF]" />,
      points: [
        "Students must maintain valid residency visa",
        "Work must not interfere with studies",
        "Violations can lead to visa cancellation"
      ],
      bgColor: "bg-[#E6F4FF]",
      fullWidth: true,
    },
  ];

  // After Graduation data
  const postStudyRights = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#4C51BF]" />,
      title: 'Employment Visa',
      points: [
        'Students must switch from student visa to employer-sponsored work visa',
        'Requires a job offer from a UAE-based company',
        'Employer handles visa processing and sponsorship'
      ],
    },
    {
      icon: <Search className="w-8 h-8 text-[#2563EB]" />,
      title: 'Job Seeker Visa',
      points: [
        'Graduates can apply for a 2–12-month job seeker visa',
        'Allows time to find employment in UAE',
        'Must meet certain eligibility criteria'
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#10B981]" />,
      title: 'Green Visa (5 years)',
      points: [
        'For skilled professionals meeting salary and qualification criteria',
        'Independent of employer sponsorship',
        'Allows greater flexibility in employment'
      ],
    },
    {
      icon: <Award className="w-8 h-8 text-[#F59E0B]" />,
      title: 'Golden Visa (10 years)',
      points: [
        'For outstanding students, top graduates, and exceptional talent',
        'Long-term residency without need for sponsor',
        'Includes researchers and professionals with exceptional abilities'
      ],
    },
    {
      icon: <Globe className="w-8 h-8 text-[#8B5CF6]" />,
      title: 'Career Pathway',
      points: [
        'Graduate → Job Seeker Visa / Employment Visa',
        '→ Green or Golden Visa (long-term residency)',
        'Opportunity to build long-term career in UAE'
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            Working <span className="text-[#8cc63f]">Rights in the UAE</span> for International Students
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
          <p className="text-xl text-[#2C2C2C] max-w-3xl mx-auto">
            International students in the UAE have specific work rights designed to help them gain experience during studies and build careers after graduation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-nowrap justify-center mb-10 rounded-2xl max-w-md mx-auto bg-[#DFF5E3] w-full px-4 sm:px-12 py-2 gap-2">
          {['studying', 'postStudy'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'studying' | 'postStudy')}
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
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 mx-auto">
                      {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center mb-3">
                      {item.title}
                    </h3>

                    {/* Points */}
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
                    {/* Icon */}
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white border-4 border-[#4C51BF] shadow-md mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1E293B] text-center md:text-left mb-3">
                        {item.title}
                      </h3>

                      {/* Points */}
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
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#EEF2FF] mb-6">
                    {icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#1E293B] mb-4">
                    {title}
                  </h4>

                  {/* Points */}
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

export default WorkingRight;