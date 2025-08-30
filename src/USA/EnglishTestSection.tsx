import React, { useState } from 'react';
import {
  FileText,
  Award,
  Info,
  Send
} from 'lucide-react';
// import usaMap from '../../assets/usaimage.png'; // update image path as needed

const EnglishTestSectionUSA = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${''})` }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3 ">
            English Language <span className="text-[#8cc63f]">Requirements</span>
          </h2>
            <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understand accepted tests and score ranges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative">
          {/* English Test Requirements */}
          <div className="bg-[#f5fff0] rounded-xl p-5 shadow-2xl border border-green-100 col-span-1 lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#8DC63F] rounded-full mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-1rem font-bold text-[#2C2C2C]">Accepted English Proficiency Exams</h3>
            </div>

            {/* Desktop Table */}
            <div className="text-sm">
              <div className="hidden md:block">
                <table className="min-w-full border border-gray-300 text-left">
                  <thead className="bg-[#8DC63F] text-white">
                    <tr>
                      <th className="p-3 border">Test Name</th>
                      <th className="p-3 border">Undergraduate (UG)</th>
                      <th className="p-3 border">Postgraduate (PG)</th>
                      <th className="p-3 border">Max Score</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr className="bg-white border-t">
                      <td className="p-3 border">IELTS Academic</td>
                      <td className="p-3 border">6.0 – 6.5</td>
                      <td className="p-3 border">6.5 – 7.5</td>
                      <td className="p-3 border">9.0</td>
                    </tr>
                    <tr className="bg-gray-50 border-t">
                      <td className="p-3 border">TOEFL iBT</td>
                      <td className="p-3 border">70 – 80</td>
                      <td className="p-3 border">80 – 100</td>
                      <td className="p-3 border">120</td>
                    </tr>
                    <tr className="bg-white border-t">
                      <td className="p-3 border">PTE Academic</td>
                      <td className="p-3 border">50 – 58</td>
                      <td className="p-3 border">58 – 65+</td>
                      <td className="p-3 border">90</td>
                    </tr>
                    <tr className="bg-gray-50 border-t">
                      <td className="p-3 border">Duolingo English Test (DET)</td>
                      <td className="p-3 border">95 – 105</td>
                      <td className="p-3 border">110 – 120</td>
                      <td className="p-3 border">160</td>
                    </tr>
                    {/* <tr className="bg-white border-t">
                      <td className="p-3 border">Cambridge English (CAE/C1 Advanced)</td>
                      <td className="p-3 border">169 – 175</td>
                      <td className="p-3 border">180+</td>
                      <td className="p-3 border">210</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="block md:hidden space-y-4">
                {[
                  { test: 'IELTS Academic', ug: '6.0 – 6.5', pg: '6.5 – 7.5', max: '9.0' },
                  { test: 'TOEFL iBT', ug: '70 – 80', pg: '80 – 100', max: '120' },
                  { test: 'PTE Academic', ug: '50 – 58', pg: '58 – 65+', max: '90' },
                  { test: 'Duolingo English Test (DET)', ug: '95 – 105', pg: '110 – 120', max: '160' },
                  { test: 'Cambridge English (CAE/C1 Advanced)', ug: '169 – 175', pg: '180+', max: '210' }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-300 rounded-lg p-4 bg-white shadow">
                    <p className="font-semibold text-[#2C2C2C] mb-1">Test: <span className="font-normal">{item.test}</span></p>
                    <p className="font-semibold text-[#2C2C2C] mb-1">UG: <span className="font-normal">{item.ug}</span></p>
                    <p className="font-semibold text-[#2C2C2C] mb-1">PG: <span className="font-normal">{item.pg}</span></p>
                    <p className="font-semibold text-[#2C2C2C]">Max Score: <span className="font-normal">{item.max}</span></p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-gray-700">
                <Info className="inline-block w-4 h-4 mr-1 mb-1 text-[#8DC63F]" />
                Score ranges vary by university and program — always confirm with your chosen school.
              </p>
            </div>
          </div>

          {/* Other Required Exams */}
          <div className="bg-[#f9f9ff] rounded-xl p-5 shadow-2xl border border-violet-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-violet-200 rounded-full mr-4">
                <Award className="w-8 h-8 text-violet-700" />
              </div>
              <h3 className="text-2rem font-bold text-[#2C2C2C]">Other Commonly Required Exams</h3>
            </div>

            <div className="text-sm space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">SAT / ACT</p>
                <p>For undergraduate admissions</p>
              </div>
              <div>
                <p className="font-semibold">GRE</p>
                <p>Required for select PG programs (STEM, Psychology, etc.)</p>
              </div>
              <div>
                <p className="font-semibold">GMAT</p>
                <p>Required for MBA & business-related PG programs</p>
              </div>
            </div>

            {/* <div className="mt-6">
              <p className="font-semibold text-[#2C2C2C]">English Test Waiver Options:</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Studied in an English-medium school for 3+ years</li>
                <li>Provide a Medium of Instruction (MOI) certificate</li>
                <li>From a country on the English-proficient exemption list</li>
                <li>Hold a prior UG or PG degree from an English-speaking country</li>
              </ul>
            </div> */}

            {/* <div className="mt-6">
              <p className="font-semibold text-[#2C2C2C]">Score Recommendations by Tier:</p>
              <ul className="list-disc pl-5 mt-2 text-sm">
                <li>Top 50: IELTS 7.0–7.5 / TOEFL 100+ / Duolingo 120+</li>
                <li>Mid-range (Top 100–200): IELTS 6.5 / TOEFL 85–100 / Duolingo 110–120</li>
                <li>Pathway/Bridge: IELTS 5.5–6.0 / TOEFL 65–79 / Duolingo 95–105</li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#8DC63F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#7cb532] transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
            Prepare with us <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnglishTestSectionUSA;
