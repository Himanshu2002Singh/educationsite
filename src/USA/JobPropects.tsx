import React, { useState } from "react";
import { Cpu, HeartPulse, BarChart2, Activity } from "lucide-react";

const JobOpportunitiesUSA = () => {
  const [activeTab, setActiveTab] = useState("during");

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            💼 Job Opportunities for International Students
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
        </div>

        {/* Tabs (Toggle Buttons like Visa Code) */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-2xl p-2 max-w-md mx-auto">
          {["during", "after"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab
                  ? "bg-[#8DC63F] text-white"
                  : "text-[#2C2C2C] hover:text-white hover:bg-[#C1272D]"
              }`}
            >
              {tab === "during" ? "During Studies" : "After Graduation"}
            </button>
          ))}
        </div>

        {/* Content for During Studies */}
        {activeTab === "during" && (
          <div className="bg-white border-2 border-[#D0D0D0] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4">
              1. During Studies (F-1 Visa Work Rights)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-[#444]">
              <li>
                ✅ On-Campus Jobs (20 hrs/week) – Teaching/Research Assistant,
                Library Staff
              </li>
              <li>
                ✅ CPT (Curricular Practical Training) – Paid internships related
                to your field
              </li>
            </ul>
          </div>
        )}

        {/* Content for After Graduation */}
        {activeTab === "after" && (
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#D0D0D0] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">
                2. After Graduation (Post-Study Work Options)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm text-left">
                  <thead className="bg-[#8DC63F] text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Work Visa
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Duration
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Eligibility
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Employer Sponsorship Needed?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">OPT</td>
                      <td className="border px-4 py-2">12 months</td>
                      <td className="border px-4 py-2">All F-1 graduates</td>
                      <td className="border px-4 py-2">No</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">STEM OPT Extension</td>
                      <td className="border px-4 py-2">+24 months</td>
                      <td className="border px-4 py-2">STEM degree holders</td>
                      <td className="border px-4 py-2">Yes (E-Verify employer)</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">H-1B Visa</td>
                      <td className="border px-4 py-2">3+ years</td>
                      <td className="border px-4 py-2">Specialty occupation</td>
                      <td className="border px-4 py-2">Yes (Lottery-based)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border-2 border-[#D0D0D0] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4">
                📅 Post-Study Work Timeline
              </h3>
              <ul className="list-decimal pl-5 space-y-2 text-[#444]">
                <li>
                  Before Graduation: Apply for OPT (takes 90+ days to process)
                </li>
                <li>During OPT: Find an H-1B sponsor (April lottery deadline)</li>
                <li>
                  After OPT: STEM extension or switch to other visa categories
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-[#8DC63F] hover:bg-[#C1272D] text-white transition-all duration-300 shadow-md hover:shadow-xl">
            {activeTab === "during"
              ? "Explore Student Job Guidance"
              : "Get Post-Study Work Guidance"}
          </button>
        </div> */}

        {/* Career Prospects Section */}
        <div className="mt-16 mb-12">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
            📌 Career Prospects in Key Sectors
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Cpu size={28} className="text-[#8DC63F]" />,
                title: "Technology",
                desc: "Software engineers, data scientists (H-1B demand: 70%)",
              },
              {
                icon: <HeartPulse size={28} className="text-[#8DC63F]" />,
                title: "Healthcare",
                desc: "Nurses, medical researchers (STEM OPT common)",
              },
              {
                icon: <BarChart2 size={28} className="text-[#8DC63F]" />,
                title: "Finance & Consulting",
                desc: "Analysts, accountants (OPT-friendly)",
              },
              {
                icon: <Activity size={28} className="text-[#8DC63F]" />,
                title: "Engineering",
                desc: "Civil, mechanical, electrical (STEM-heavy)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#8DC63F]/10 p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-semibold text-[#2C2C2C] mb-1">
                  {item.title}
                </h4>
                <p className="text-[#444] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunitiesUSA;
