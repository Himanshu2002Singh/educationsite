import React from 'react';
import { Briefcase, BarChart2, Activity, HeartPulse, School, Cpu, Globe2 } from 'lucide-react';

const JobProspectsSection = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-5 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        <span className="text-[#8cc63f]">Job Prospects</span> in New Zealand
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#2C2C2C]">
          Economic Outlook
        </h3>
        <p className="text-[#444] text-sm sm:text-base leading-relaxed">
          New Zealand is a dynamic, open economy supported by strong service industries like tourism,
          international education, and finance, along with high-value agricultural exports. Inflation has
          stabilized at 2.5%, and the country is on track for 1.4% GDP growth in 2025, expected to
          accelerate to 2.7% in 2026. These trends point to a steady recovery and growing demand for
          skilled professionals.
        </p>
      </div>

      <div className="mb-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-[#2C2C2C] text-center">
          In-Demand Sectors for Graduates
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              icon: <Cpu size={28} className="text-[#8DC63F]" />,
              title: 'Information Technology & AI',
              desc: 'Tech roles like software development, cybersecurity, and AI are in high demand and prioritized under skilled migrant policies.',
            },
            {
              icon: <HeartPulse size={28} className="text-[#8DC63F]" />,
              title: 'Healthcare',
              desc: 'Nurses and allied health professionals are in chronic shortage, offering high placement rates and competitive salaries.',
            },
            {
              icon: <Activity size={28} className="text-[#8DC63F]" />,
              title: 'Engineering & Infrastructure',
              desc: 'Engineers in civil, mechanical, and electrical domains are needed for rebuilding and renewable energy initiatives.',
            },
            {
              icon: <BarChart2 size={28} className="text-[#8DC63F]" />,
              title: 'Business & Management',
              desc: 'Strong demand for business analysts, project managers, and supply-chain professionals as companies streamline operations.',
            },
            {
              icon: <Globe2 size={28} className="text-[#8DC63F]" />,
              title: 'Tourism & Hospitality',
              desc: 'As the second-largest export earner, tourism is recovering and offers opportunities in eco-tourism and adventure travel.',
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
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-[#2C2C2C] text-center">
          Job Prospects for Graduates
        </h3>
        <div className="w-full">
          <table className="w-full table-auto border rounded-xl overflow-hidden bg-white shadow-sm">
            <thead>
              <tr className="bg-[#8DC63F]/10 text-[#2C2C2C] text-sm sm:text-base">
                <th className="text-left px-2 py-3 sm:px-4 sm:py-4 font-semibold">Sector</th>
                <th className="text-left px-2 py-3 sm:px-4 sm:py-4 font-semibold">Typical Roles</th>
                <th className="text-left px-2 py-3 sm:px-4 sm:py-4 font-semibold">Demand Level</th>
              </tr>
            </thead>
            <tbody className="text-[#444] text-xs sm:text-sm">
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Information Technology</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Software Developer, Cybersecurity Expert, AI Specialist</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">High – on Long-Term Skill Shortage List</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Healthcare</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Registered Nurse, Medical Technologist, Health Administrator</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">High – ongoing nationwide shortages</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Engineering</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Civil, Mechanical, Electrical Engineers</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Moderate–High (regional demand)</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Business & Management</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Business Analyst, Project Manager</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Moderate (growing corporate sector)</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4 sm:py-4 align-top">Education</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Early Childhood & Secondary School Teachers</td>
                <td className="px-2 py-3 sm:px-4 sm:py-4">Moderate (targeted teaching shortages)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default JobProspectsSection;
