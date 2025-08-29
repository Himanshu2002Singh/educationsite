import React from 'react';
import { UserCheck, Briefcase, CheckCircle, Globe } from 'lucide-react';

const infoItems = [
  {
    icon: <UserCheck className="w-8 h-8 text-[#4C51BF]" />,
    title: '🎓 Stay Back Option',
    points: [
      'After completing your degree, international students can apply for a Post-Study Work (PSW) visa.',
      'This allows you to stay in Germany for 18 months to search for a full-time job related to your qualification.',
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#2563EB]" />,
    title: '💼 Job Opportunities',
    points: [
      'High-demand fields: Engineering, IT & Computer Science, Artificial Intelligence, Data Science, Business & Finance, Healthcare.',
      'Germany has one of the lowest unemployment rates in Europe and a strong need for skilled professionals.',
      'Many international graduates secure employment within their stay-back period.',
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#10B981]" />,
    title: '🛂 Work Permit / Residence Permit',
    points: [
      'Once you secure a job, you can apply for:',
      'EU Blue Card (if your salary meets the threshold) – offers a path to Permanent Residency (PR).',
      'Residence Permit for Employment – if salary is below Blue Card level but job is relevant.',
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-[#F59E0B]" />,
    title: '🌍 Pathway to PR',
    points: [
      'With an EU Blue Card: Eligible for PR in 21–33 months (depending on German language skills).',
      'With a standard work permit: PR is possible after 5 years of working in Germany.',
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#8B5CF6]" />,
    title: '💡 Key Advantages',
    points: [
      'Strong career growth in Europe’s largest economy.',
      'Opportunity to settle long-term through PR.',
      'International graduates are highly valued in the German labour market.',
    ],
  },
];

const JobOpportunitiesSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            Job Opportunities & Work Permit<span className="text-[#8cc63f]"> After Studying</span> in Germany
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-lg text-[#475569] leading-relaxed tracking-wide">
            Germany provides excellent post-study work opportunities for international graduates, allowing them to gain professional experience and build their careers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoItems.map(({ icon, title, points }, idx) => (
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
    </section>
  );
};

export default JobOpportunitiesSection;
