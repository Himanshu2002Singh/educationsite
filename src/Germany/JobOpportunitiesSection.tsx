import React from 'react';
import { Briefcase, CheckCircle, UserCheck } from 'lucide-react';

const infoItems = [
  {
    icon: <UserCheck className="w-8 h-8 text-[#4C51BF]" />,
    title: 'Eligibility Requirements',
    points: [
      'Completion of a degree from a recognized German university',
      'Valid national passport',
      'Proof of graduation (degree certificate or confirmation)',
      'Valid health insurance coverage',
      'Proof of sufficient financial resources',
    ],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-[#2563EB]" />,
    title: 'Types of Post-Study Work Visas',
    points: [
      'Job-Seeker Visa: 18 months to find a job in your field.',
      'Residence Permit for Employment: Linked to your job role.',
      'EU Blue Card: For highly skilled professionals meeting salary criteria.',
    ],
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-[#10B981]" />,
    title: 'Key Benefits',
    points: [
      'Stay in Germany up to 18 months post-study',
      'Time to find relevant employment',
      'Pathway to permanent residency via EU Blue Card',
      'Work in any field while job hunting',
    ],
  },
];

const JobOpportunitiesSection = () => {
  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-serif font-extrabold text-[#1E293B] leading-tight mb-4">
            Job Opportunities & Work Permit After Studying in Germany
          </h2>
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
