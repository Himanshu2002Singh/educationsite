import React from 'react';
import {
  FileText,
  Info,
  Send
} from 'lucide-react';

const EnglishTestSectionCanada = () => {
  const countryData = [
    {
      country: "Canada",
      bgColor: "bg-[#f0f8ff]",
      borderColor: "border-blue-100",
      accentColor: "#0077b6",
      exams: [
        { test: 'IELTS Academic', ug: 'Overall 6.5 (no band < 6.0)', pg: '6.5–7.0 (no band < 6.0/6.5)', max: '9.0' },
        { test: 'Diploma Programs', ug: 'Overall 6.0 (no band < 5.5)', pg: '-', max: '-' },
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            English Language {" "}<span className="text-[#8cc63f]"> Requirements –</span> Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Understand accepted tests, score ranges, and waiver options for studying in Canada.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-3xl w-full">
            {countryData.map((country, idx) => (
              <div
                key={idx}
                className={`${country.bgColor} rounded-xl p-5 shadow-2xl border ${country.borderColor} text-center`}
              >
                {/* Header */}
                <div className="flex flex-col items-center mb-6">
                  <div
                    className="p-3 rounded-full mb-3"
                    style={{ backgroundColor: country.accentColor }}
                  >
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C]">
                    Accepted English Proficiency Exams – {country.country}
                  </h3>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block">
                  <table className="min-w-full border border-gray-300 text-center text-sm mx-auto">
                    <thead style={{ backgroundColor: country.accentColor }} className="text-white">
                      <tr>
                        <th className="p-3 border">Test Name</th>
                        <th className="p-3 border">Undergraduate (UG)</th>
                        <th className="p-3 border">Postgraduate (PG)</th>
                        <th className="p-3 border">Max Score</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      {country.exams.map((exam, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 border">{exam.test}</td>
                          <td className="p-3 border">{exam.ug}</td>
                          <td className="p-3 border">{exam.pg}</td>
                          <td className="p-3 border">{exam.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Cards */}
                <div className="block md:hidden space-y-4">
                  {country.exams.map((exam, i) => (
                    <div
                      key={i}
                      className="border border-gray-300 rounded-lg p-4 bg-white shadow text-sm text-center"
                    >
                      <p className="font-semibold text-[#2C2C2C]">
                        Test: <span className="font-normal">{exam.test}</span>
                      </p>
                      <p className="font-semibold text-[#2C2C2C]">
                        UG: <span className="font-normal">{exam.ug}</span>
                      </p>
                      <p className="font-semibold text-[#2C2C2C]">
                        PG: <span className="font-normal">{exam.pg}</span>
                      </p>
                      <p className="font-semibold text-[#2C2C2C]">
                        Max Score: <span className="font-normal">{exam.max}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Info Note */}
                <p className="mt-4 text-sm text-gray-700">
                  <Info
                    className="inline-block w-4 h-4 mr-1 mb-1"
                    style={{ color: country.accentColor }}
                  />
                  Score ranges vary by college and program — always confirm with your chosen institution.
                </p>

                {/* Waiver Options */}
                <div className="mt-6 text-center">
                  <p className="font-semibold text-[#2C2C2C]">English Test Waiver Options:</p>
                  <ul className="list-disc pl-5 mt-2 text-sm inline-block text-left">
                    <li>Studied in an English-medium school for 3+ years</li>
                    <li>Provide a Medium of Instruction (MOI) certificate</li>
                    <li>From a country on the English-proficient exemption list</li>
                    <li>Hold a prior UG or PG degree from an English-speaking country</li>
                  </ul>
                </div>
              </div>
            ))}
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

export default EnglishTestSectionCanada;
