import React from 'react';
import { BarChart2, Activity, HeartPulse, Cpu, Globe2, PenTool } from 'lucide-react';

const JobProspectsSectionUSA = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-5  max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 text-center">
        Job Opportunities & Post-Study <span className="text-[#8cc63f]">Work Rights</span> in the USA
      </h2>
      <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>

      {/* Job Opportunities for International Students */}
      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#2C2C2C]">
          💼 Job Opportunities for International Students
        </h3>
        <p className="text-[#444] text-sm sm:text-base leading-relaxed font-semibold">
          1. During Studies (F-1 Visa Work Rights)
        </p>
        <ul className="mt-2 space-y-2 text-[#444] text-sm sm:text-base">
          <li>✅ <strong>On-Campus Jobs</strong> (20 hrs/week) – Teaching/Research Assistant, Library Staff</li>
          <li>✅ <strong>CPT (Curricular Practical Training)</strong> – Paid internships related to your field</li>
          {/* <li>✅ <strong>Pre-Completion OPT</strong> – Rarely used (reduces post-study OPT time)</li> */}
        </ul>

        <p className="text-[#444] text-sm sm:text-base leading-relaxed mt-6 font-semibold">
          2. After Graduation (Post-Study Work Options)
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full table-auto border rounded-xl overflow-hidden bg-white shadow-sm text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#8DC63F]/10 text-[#2C2C2C]">
                <th className="px-2 py-3 sm:px-4 font-semibold text-left">Work Visa</th>
                <th className="px-2 py-3 sm:px-4 font-semibold text-left">Duration</th>
                <th className="px-2 py-3 sm:px-4 font-semibold text-left">Eligibility</th>
                <th className="px-2 py-3 sm:px-4 font-semibold text-left">Employer Sponsorship Needed?</th>
              </tr>
            </thead>
            <tbody className="text-[#444]">
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4">OPT (Optional Practical Training)</td>
                <td className="px-2 py-3 sm:px-4">12 months</td>
                <td className="px-2 py-3 sm:px-4">All F-1 graduates</td>
                <td className="px-2 py-3 sm:px-4">No</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4">STEM OPT Extension</td>
                <td className="px-2 py-3 sm:px-4">+24 months</td>
                <td className="px-2 py-3 sm:px-4">STEM degree holders</td>
                <td className="px-2 py-3 sm:px-4">Yes (E-Verify employer)</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4">H-1B Visa</td>
                <td className="px-2 py-3 sm:px-4">3+ years</td>
                <td className="px-2 py-3 sm:px-4">Specialty occupation</td>
                <td className="px-2 py-3 sm:px-4">Yes (Lottery-based)</td>
              </tr>
              {/* <tr className="border-t">
                <td className="px-2 py-3 sm:px-4">L-1 Visa</td>
                <td className="px-2 py-3 sm:px-4">5–7 years</td>
                <td className="px-2 py-3 sm:px-4">Intracompany transfer</td>
                <td className="px-2 py-3 sm:px-4">Yes (Must work for employer 1+ year abroad)</td>
              </tr>
              <tr className="border-t">
                <td className="px-2 py-3 sm:px-4">EB-2 / EB-3 Green Card</td>
                <td className="px-2 py-3 sm:px-4">Permanent</td>
                <td className="px-2 py-3 sm:px-4">Advanced degree/skilled workers</td>
                <td className="px-2 py-3 sm:px-4">Yes (Lengthy process)</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Industries */}
      <div className="mb-12">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
          📌 Top Industries Hiring International Graduates
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { icon: <Cpu size={28} className="text-[#8DC63F]" />, title: 'Technology', desc: 'Software engineers, data scientists (H-1B demand: 70%)' },
            { icon: <HeartPulse size={28} className="text-[#8DC63F]" />, title: 'Healthcare', desc: 'Nurses, medical researchers (STEM OPT common)' },
            { icon: <BarChart2 size={28} className="text-[#8DC63F]" />, title: 'Finance & Consulting', desc: 'Analysts, accountants (OPT-friendly)' },
            { icon: <Activity size={28} className="text-[#8DC63F]" />, title: 'Engineering', desc: 'Civil, mechanical, electrical (STEM-heavy)' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-xl border border-[#8DC63F]/10 p-5 shadow-sm hover:shadow-md transition">
              <div className="mb-3">{item.icon}</div>
              <h4 className="font-semibold text-[#2C2C2C] mb-1">{item.title}</h4>
              <p className="text-[#444] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Post-Study Work Timeline */}
      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-[#2C2C2C]">
          📅 Post-Study Work Timeline
        </h3>
        <ul className="mt-2 space-y-2 text-[#444] text-sm sm:text-base">
          <li>1️⃣ <strong>Before Graduation:</strong> Apply for OPT (takes 90+ days to process)</li>
          <li>2️⃣ <strong>During OPT:</strong> Find an H-1B sponsor (April lottery deadline)</li>
          <li>3️⃣ <strong>After OPT:</strong> STEM extension or switch to other visas </li>
        </ul>
      </div>

      {/* Key Challenges */}
    
    </section>
  );
};

export default JobProspectsSectionUSA;
