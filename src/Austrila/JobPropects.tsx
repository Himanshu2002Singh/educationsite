import React from 'react';
import { BarChart2, Activity, HeartPulse, Cpu } from 'lucide-react';

const JobProspectsSectionAustralia = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-5  max-w-7xl mx-auto">
      {/* <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center ">
        <span className="text-[#8cc63f]">Career </span>Prospects in Australia
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div> */}

      {/* Overview */}
      {/* <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <p className="text-[#444] text-sm sm:text-base leading-relaxed">
          Australia has one of the world’s most stable and innovation-driven economies, consistently
          ranked among the top 15 by GDP. Key sectors like information technology, engineering,
          and artificial intelligence are rapidly growing, creating strong demand for skilled
          graduates. With low unemployment and high living standards, Australia is an ideal
          destination for international students pursuing future-ready careers.
        </p>
      </div> */}

      {/* Career Opportunities Table */}
      {/* <div className="overflow-x-auto mb-12">
        <table className="w-full table-auto border rounded-xl overflow-hidden bg-white shadow-sm text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#8DC63F]/10 text-[#2C2C2C]">
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Field of Study</th>
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Job Roles</th>
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Career Outlook</th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Information Technology (IT)</td>
              <td className="px-2 py-3 sm:px-4">Software Developer, Cybersecurity Analyst, Data Analyst</td>
              <td className="px-2 py-3 sm:px-4">High demand; tech skills are on the Medium- & Long-Term Skills List (MLTSSL)</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Nursing & Healthcare</td>
              <td className="px-2 py-3 sm:px-4">Registered Nurse, Aged Care Worker, Physiotherapist</td>
              <td className="px-2 py-3 sm:px-4">Extremely high demand due to aging population and post-pandemic recovery</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Engineering</td>
              <td className="px-2 py-3 sm:px-4">Civil, Mechanical, Electrical Engineers</td>
              <td className="px-2 py-3 sm:px-4">Strong demand in infrastructure, mining, and energy sectors</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Accounting & Finance</td>
              <td className="px-2 py-3 sm:px-4">Accountant, Financial Analyst, Auditor</td>
              <td className="px-2 py-3 sm:px-4">Consistent demand, especially with CPA or CA qualifications</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Social Work & Psychology</td>
              <td className="px-2 py-3 sm:px-4">Social Worker, Counselor, Psychologist</td>
              <td className="px-2 py-3 sm:px-4">Shortage of professionals in community services and mental health</td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Top Industries Icons */}
      <div className="mb-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
          📌 Top Industries in Demand
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Cpu size={28} className="text-[#8DC63F]" />, title: 'Information Technology', desc: 'Software, AI, and data roles' },
            { icon: <Activity size={28} className="text-[#8DC63F]" />, title: 'Engineering', desc: 'Civil, mechanical, and electrical engineering' },
            { icon: <BarChart2 size={28} className="text-[#8DC63F]" />, title: 'Accounting & Finance', desc: 'Banking, auditing, and financial analysis' },
            { icon: <HeartPulse size={28} className="text-[#8DC63F]" />, title: 'Healthcare & Nursing', desc: 'Nursing, physiotherapy, and aged care' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#8DC63F]/10 p-5 shadow-sm hover:shadow-md transition">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-semibold text-[#2C2C2C] mb-1">{item.title}</h4>
              <p className="text-[#444] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobProspectsSectionAustralia;
