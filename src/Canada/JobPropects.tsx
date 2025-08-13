import React from 'react';
import { BarChart2, Activity, HeartPulse, Cpu } from 'lucide-react';

const JobProspectsSectionCanada = () => {
  return (
    <section className="px-4 sm:px-6 py-12 md:px-20">
      <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
        Job Opportunities & Work Permit After Studying in Canada
      </h2>

      {/* Overview */}
      <div className="bg-[#F3F9F6] border border-[#8DC63F]/20 rounded-2xl p-4 sm:p-6 md:p-10 mb-12 shadow-sm">
        <p className="text-[#444] text-sm sm:text-base leading-relaxed mb-4">
          Canada has one of the strongest and most stable economies in the world, with low unemployment, growing industries, and a strong demand for skilled talent. From tech hubs like Toronto and Vancouver to healthcare and construction across provinces, the country offers countless work opportunities for qualified graduates.
        </p>
        <p className="text-[#444] text-sm sm:text-base leading-relaxed mb-2 font-semibold">
          🌟 Work After Graduation
        </p>
        <ul className="list-disc pl-5 text-[#444] text-sm sm:text-base leading-relaxed mb-4">
          <li>🎓 University graduates (Bachelor’s, Master’s, PhD) can still apply for up to 3 years of open work permit after graduation – no matter which subject you study.</li>
          <li>🏫 College diploma or postgraduate certificate students must now choose programs in in-demand fields (like healthcare, engineering, IT, trades, early childhood education, cooking & culinary arts, etc.) to be eligible for the PGWP.</li>
        </ul>
        <p className="text-[#444] text-sm sm:text-base leading-relaxed mb-2 font-semibold">
          🚀 Your Path to Success
        </p>
        <ul className="list-disc pl-5 text-[#444] text-sm sm:text-base leading-relaxed">
          <li>Work full-time in Canada for up to 3 years</li>
          <li>Gain experience that supports permanent residency</li>
          <li>Build a successful career in a country known for diversity, safety, and opportunity</li>
        </ul>
        <p className="text-[#2C2C2C] text-sm sm:text-base mt-4 font-medium">
          ✅ Tip: We’ll help you choose PGWP-eligible programs and guide you every step of the way—from admission to your job search!
        </p>
      </div>

      {/* Career Opportunities Table */}
      <div className="overflow-x-auto mb-12">
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
              <td className="px-2 py-3 sm:px-4">High demand in tech hubs like Toronto, Vancouver, and Montreal</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Nursing & Healthcare</td>
              <td className="px-2 py-3 sm:px-4">Registered Nurse, Aged Care Worker, Physiotherapist</td>
              <td className="px-2 py-3 sm:px-4">Extremely high demand due to aging population and growing healthcare needs</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Engineering</td>
              <td className="px-2 py-3 sm:px-4">Civil, Mechanical, Electrical Engineers</td>
              <td className="px-2 py-3 sm:px-4">Strong demand in infrastructure, manufacturing, and energy sectors</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Accounting & Finance</td>
              <td className="px-2 py-3 sm:px-4">Accountant, Financial Analyst, Auditor</td>
              <td className="px-2 py-3 sm:px-4">Consistent demand, especially with CPA or CFA credentials</td>
            </tr>
            <tr className="border-t">
              <td className="px-2 py-3 sm:px-4">Trades & Skilled Work</td>
              <td className="px-2 py-3 sm:px-4">Electrician, Plumber, Welder, Chef</td>
              <td className="px-2 py-3 sm:px-4">High demand across provinces, strong salaries, and immigration pathways</td>
            </tr>
          </tbody>
        </table>
      </div>

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

export default JobProspectsSectionCanada;
