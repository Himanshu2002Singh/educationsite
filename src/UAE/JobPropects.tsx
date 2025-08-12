import React from 'react';
import {  BarChart2, Activity, HeartPulse, Cpu, Globe2, PenTool } from 'lucide-react';

const JobProspectsSectionUAE = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
        Post-Study Work Options & Career Prospects in Dubai
      </h2>

      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#2C2C2C]">
          Post-Study Work Opportunities
        </h3>
        <p className="text-[#444] text-sm sm:text-base leading-relaxed">
          Dubai is not just a study destination — it’s a fast-growing global business hub offering exciting career opportunities after graduation. International students can explore internships, full-time roles, and long-term career pathways across industries.
        </p>
        <ul className="mt-4 space-y-2 text-[#444] text-sm sm:text-base">
          <li><strong>Job Seeker Visa:</strong> Allows graduates to stay in the UAE for 6–12 months to find employment.</li>
          <li><strong>Graduate Internship Programs:</strong> Many universities have career centers linking students with employers.</li>
          <li><strong>Company Sponsorship:</strong> After securing a job, your employer can sponsor your work/residence visa.</li>
          <li><strong>Golden Visa (10 Years):</strong> Offered to top-performing graduates and professionals in key sectors.</li>
        </ul>
      </div>

      <div className="mb-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6  text-center">
          Career Prospects in Key Sectors
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: <BarChart2 size={28} className="text-[#8DC63F]" />,
              title: 'Business & Finance',
              desc: 'Financial analyst, business development, accountant, HR.',
            },
            {
              icon: <Cpu size={28} className="text-[#8DC63F]" />,
              title: 'IT & Tech',
              desc: 'Software developer, data analyst, cybersecurity, AI specialist.',
            },
            {
              icon: <PenTool size={28} className="text-[#8DC63F]" />,
              title: 'Media & Design',
              desc: 'Digital marketer, content creator, UX/UI designer, journalist.',
            },
            {
              icon: <Globe2 size={28} className="text-[#8DC63F]" />,
              title: 'Hospitality & Tourism',
              desc: 'Event manager, hotel operations, F&B coordinator.',
            },
            {
              icon: <Activity size={28} className="text-[#8DC63F]" />,
              title: 'Logistics & Supply Chain',
              desc: 'Procurement officer, operations analyst, supply chain executive.',
            },
            {
              icon: <HeartPulse size={28} className="text-[#8DC63F]" />,
              title: 'Healthcare & Life Sciences',
              desc: 'Lab technician, healthcare admin, research associate.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#8DC63F]/10 p-5 shadow-sm hover:shadow-md transition">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-semibold text-[#2C2C2C] mb-1">{item.title}</h4>
              <p className="text-[#444] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6  text-center">
          Why Dubai for Your Career
        </h3>
        <div className="w-full">
          <table className="w-full table-auto border rounded-xl overflow-hidden bg-white shadow-sm">
            <thead>
              <tr className="bg-[#8DC63F]/10 text-[#2C2C2C] text-sm sm:text-base">
                <th className="text-left px-2 py-3 sm:px-4 sm:py-4 font-semibold">Reason</th>
                <th className="text-left px-2 py-3 sm:px-4 sm:py-4 font-semibold">Benefit</th>
              </tr>
            </thead>
            <tbody className="text-[#444] text-xs sm:text-sm">
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Tax-Free Salaries</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Higher take-home income and competitive packages.</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Global Companies & Start-ups</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Multilingual, multicultural workplaces with global exposure.</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Strategic Location</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Central hub connecting East and West for trade & travel.</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Fast Visa Reforms</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Policies supporting foreign talent retention and growth.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default JobProspectsSectionUAE;
