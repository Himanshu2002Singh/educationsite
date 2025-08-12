import React from 'react';
import { Briefcase, CheckCircle, UserCheck } from 'lucide-react';

const infoItems = [
  {
    icon: <UserCheck className="w-7 h-7 text-[#4C51BF]" />,
    title: 'Eligibility Requirements',
    points: [
      'Successful completion of a university degree from a recognized German university',
      'Valid national passport',
      'Proof of successful completion of studies (degree certificate or official confirmation)',
      'Valid health insurance coverage',
      'Demonstration of sufficient financial resources to support yourself during the visa period',
    ],
  },
  {
    icon: <Briefcase className="w-7 h-7 text-[#2563EB]" />,
    title: 'Types of Post-Study Work Visas',
    points: [
      'Job-Seeker Visa: Stay 18 months to look for a job related to your field of study. Does not authorize immediate work.',
      "Residence Permit for Employment: Stay & work tied to your job; must update if you change jobs.",
      'EU Blue Card: For highly skilled with a job offer meeting salary requirements; pathway to permanent residency.',
    ],
  },
  {
    icon: <CheckCircle className="w-7 h-7 text-[#10B981]" />,
    title: 'Key Benefits',
    points: [
      'Stay in Germany up to 18 months post-study',
      'Time to find employment in your field and gain experience',
      'Pathway to permanent residency via EU Blue Card',
      'Work in any field while searching for relevant jobs',
    ],
  },
];

const JobOpportunitiesSection = () => {
  return (
    <section className="py-16 bg-white max-w-7xl mx-auto px-6 sm:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Text Content */}
        <div className="space-y-8 max-w-xl mx-auto lg:mx-0">
          <h2 className="text-4xl font-serif font-extrabold text-[#1E293B] leading-tight">
            Job Opportunities & Work Permit After Studying in Germany
          </h2>

          <p className="text-lg text-[#475569] leading-relaxed tracking-wide">
            Studying in Germany can open doors to fantastic job opportunities. After completing your studies, you can stay in Germany for up to 18 months to look for a job related to your field of study. This is a great chance to gain practical experience and build your professional network.
          </p>

          <h3 className="text-2xl font-semibold text-[#334155] mt-8">
            Job Opportunities
          </h3>
          <ul className="list-disc list-inside space-y-3 text-[#475569] text-base tracking-wide">
            <li>STEM fields (science, technology, engineering, and mathematics)</li>
            <li>Automotive and manufacturing</li>
            <li>IT and data analytics</li>
          </ul>

          <p className="text-lg text-[#475569] leading-relaxed tracking-wide mt-8">
            Germany offers a post-study work visa that allows international graduates to stay in the country for up to 18 months after completing their studies. This visa is designed to give graduates time to find employment in their field of study and gain practical experience in the German job market.
          </p>
        </div>

        {/* Right Timeline Style */}
        <div className="relative max-w-md mx-auto lg:mx-0">
          {/* Vertical gradient line */}
          {/* Hide line on smaller screens to avoid overlap */}
          <div
            className="hidden lg:block absolute top-10 left-10 h-full w-1 rounded-full"
            style={{
              background:
                'linear-gradient(to bottom, #4C51BF, #7F9CF5, #4C51BF)',
            }}
          />

          <div className="space-y-14">
            {infoItems.map(({ icon, title, points }, idx) => (
              <div
                key={idx}
                className="relative pl-20 py-6 bg-[#F9FAFB] rounded-2xl border border-[#E0E7FF] hover:border-[#4C51BF] transition-colors duration-300 cursor-default"
              >
                {/* Icon container */}
                <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-white border-2 border-[#4C51BF] flex items-center justify-center shadow-sm">
                  {icon}
                </div>

                <h4 className="text-xl font-bold text-[#1E293B] mb-4">{title}</h4>
                <ul className="list-disc list-inside space-y-2 text-[#475569]">
                  {points.map((point, i) => (
                    <li key={i} className="text-sm leading-relaxed tracking-wide">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunitiesSection;
