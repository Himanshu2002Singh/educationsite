import React from 'react';
import { BarChart2, Activity, HeartPulse, Cpu } from 'lucide-react';

const JobProspectsSectionIreland = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-6  max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center ">
        Job<span className="text-[#8cc63f]"> Opportunities & Work</span> Permit After Studying in Ireland
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

      {/* Overview */}
      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <p className="text-[#444] text-sm sm:text-base leading-relaxed">
          Ireland offers a unique blend of academic excellence, cultural experiences, and post-study work opportunities. 
          After completing your studies, you can apply for a <strong>Post-Study Work Visa</strong>, also known as the 
          <strong> Third Level Graduate Scheme</strong>, which allows non-EU/EEA students to stay and work in Ireland 
          for <strong>12 to 24 months</strong> depending on your qualification.
        </p>
      </div>

      {/* Post-Study Work Visa Duration */}
      <div className="overflow-x-auto mb-12">
        <table className="w-full table-auto border rounded-xl overflow-hidden bg-white shadow-sm text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#8DC63F]/10 text-[#2C2C2C]">
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Level</th>
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Qualification</th>
              <th className="px-2 py-3 sm:px-4 font-semibold text-left">Duration</th>
            </tr>
          </thead>
          <tbody className="text-[#444]">
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Level 7</td>
              <td className="px-2 py-3 sm:px-4">Bachelor's Degree/Diploma (3 Years)</td>
              <td className="px-2 py-3 sm:px-4">12 months</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Level 8</td>
              <td className="px-2 py-3 sm:px-4">Bachelor's Degree/Higher Diploma (4 Years)</td>
              <td className="px-2 py-3 sm:px-4">12 months</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Level 9</td>
              <td className="px-2 py-3 sm:px-4">Master's Degree/PG Diploma</td>
              <td className="px-2 py-3 sm:px-4">24 months</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Level 10</td>
              <td className="px-2 py-3 sm:px-4">Doctoral Degree</td>
              <td className="px-2 py-3 sm:px-4">24 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Eligibility */}
      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#2C2C2C]">
          ✅ Eligibility for Post-Study Work Visa
        </h3>
        <ul className="space-y-2 text-[#444] text-sm sm:text-base">
          <li>• Hold a valid Stamp 2 visa</li>
          <li>• Complete higher education in Ireland as per NFQ standards</li>
          <li>• Provide proof of funds for extension of stay</li>
          <li>• Maintain valid medical/health insurance</li>
        </ul>
      </div>

      {/* Top Industries */}
      <div className="mb-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
          📌Career Prospects in Key Sectors 
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Cpu size={28} className="text-[#8DC63F]" />, title: 'Technology & IT', desc: 'Software, AI, and cloud computing roles' },
            { icon: <Activity size={28} className="text-[#8DC63F]" />, title: 'Engineering', desc: 'Civil, mechanical, and electrical engineering' },
            { icon: <BarChart2 size={28} className="text-[#8DC63F]" />, title: 'Finance & Accounting', desc: 'Banking, fintech, and auditing roles' },
            { icon: <HeartPulse size={28} className="text-[#8DC63F]" />, title: 'Healthcare', desc: 'Nursing, medical research, and health tech' },
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

export default JobProspectsSectionIreland;
