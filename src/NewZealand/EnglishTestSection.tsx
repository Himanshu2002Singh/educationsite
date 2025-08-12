import React, { useState } from 'react';
import {
  FileText,
  Award,
  Info,
  Send
} from 'lucide-react';
import ukMap from '../../assets/ukimage.png';

const EnglishTestSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${ukMap})` }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C] mb-4 font-serif">
            English Language Requirements
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understand eligibility, accepted tests, and waiver options
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative">
          {/* English Test Requirements */}
          <div className="bg-[#f5fff0] rounded-xl p-5 shadow-2xl border border-green-100 col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#8DC63F] rounded-full mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-1rem font-bold text-[#2C2C2C]">English Test Requirements</h3>
            </div>

            {/* Responsive Table */}
            <div className="text-sm">
              {/* Desktop View */}
              <div className="hidden md:block">
                <table className="min-w-full border border-gray-300 text-left">
                  <thead className="bg-[#8DC63F] text-white">
                    <tr>
                      <th className="p-3 border">Test</th>
                      <th className="p-3 border">Undergraduate Requirement</th>
                      <th className="p-3 border">Postgraduate Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="bg-white border-t">
                      <td className="p-3 border">IELTS (Academic)</td>
                      <td className="p-3 border">Overall 6.0 (no band &lt;5.5)</td>
                      <td className="p-3 border">Overall 6.5 (no band &lt;6.0)</td>
                    </tr>
                    <tr className="bg-gray-50 border-t">
                      <td className="p-3 border">TOEFL iBT</td>
                      <td className="p-3 border">Overall 79 (min 18 per skill)</td>
                      <td className="p-3 border">Overall 90 (min 20 per skill)</td>
                    </tr>
                    <tr className="bg-white border-t">
                      <td className="p-3 border">PTE Academic</td>
                      <td className="p-3 border">Overall 58 (min 50 per skill)</td>
                      <td className="p-3 border">Overall 65 (min 58 per skill)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile View */}
              <div className="block md:hidden space-y-4">
                {[
                  {
                    test: 'IELTS (Academic)',
                    ug: 'Overall 6.0 (no band <5.5)',
                    pg: 'Overall 6.5 (no band <6.0)'
                  },
                  {
                    test: 'TOEFL iBT',
                    ug: 'Overall 79 (min 18 per skill)',
                    pg: 'Overall 90 (min 20 per skill)'
                  },
                  {
                    test: 'PTE Academic',
                    ug: 'Overall 58 (min 50 per skill)',
                    pg: 'Overall 65 (min 58 per skill)'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg p-4 bg-white shadow"
                  >
                    <p className="font-semibold text-[#2C2C2C] mb-1">Test: <span className="font-normal">{item.test}</span></p>
                    <p className="font-semibold text-[#2C2C2C] mb-1">UG Requirement: <span className="font-normal">{item.ug}</span></p>
                    <p className="font-semibold text-[#2C2C2C]">PG Requirement: <span className="font-normal">{item.pg}</span></p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-700">
                <Info className="inline-block w-4 h-4 mr-1 mb-1 text-[#8DC63F]" />
                Some programs—especially research degrees—may require IELTS 6.5 (no band &lt;6.5) or higher.
              </p>
            </div>
          </div>

          {/* Academic Requirements */}
          <div className="bg-[#f9f9ff] rounded-xl p-5 shadow-2xl border border-violet-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-violet-200 rounded-full mr-4">
                <Award className="w-8 h-8 text-violet-700" />
              </div>
              <h3 className="text-2rem font-bold text-[#2C2C2C]">Academic Requirements</h3>
            </div>

            <div className="text-sm space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-[#2C2C2C]">Undergraduate</p>
                <p>Completion of secondary school (e.g. Year 12 Certificate) with ≥ 60% overall (or equivalent)</p>
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C]">Postgraduate</p>
                <p>Bachelor’s degree with at least a Second Class Upper (or CGPA ≥ 5.0/7, or ≥ 65%)</p>
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C]">Doctoral (PhD)</p>
                <p>Master’s degree with First Class Honours (or CGPA ≥ 6.0/7, or equivalent research experience)</p>
              </div>
              <div>
                <p className="font-semibold text-[#2C2C2C]">MBA</p>
                <p>Bachelor’s degree + ≥ 2 years relevant work experience; GMAT ≥ 600 may be required</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-[#8DC63F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7cb532] transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
            Prepare with us <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnglishTestSection;
