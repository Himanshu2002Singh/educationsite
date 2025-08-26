import React, { useState } from 'react';
import {
  FileText,
  Award,
  BookOpen,
  Info,
  ChevronDown,
  ChevronUp,
  Send
} from 'lucide-react';
import ukMap from '../../assets/ukimage.png'; // make sure this is the map image

const EnglishTestSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const acceptedTests = [
    { name: 'IELTS Academic', note: 'UKVI-approved test centers required', popular: true },
    { name: 'PTE Academic', note: 'Widely accepted', popular: true },
    { name: 'TOEFL iBT', note: 'Traditional choice', popular: true },
    { name: 'Duolingo English Test', note: 'Select universities only', popular: false },
    { name: 'Other SELTs', note: 'UKVI approved', popular: false },
  ];

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section
      className="py-12 sm:py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${ukMap})` }}
    >
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] sm:mb-4">
            English Language{" "}<span className="text-[#8cc63f]">  Requirements</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Understand eligibility, accepted tests, and waiver options
          </p>
        </div>

        {/* Main Grid */}
    <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 z-10 max-w-5xl w-full">

            {/* Accepted Tests */}
            <div className="bg-white bg-opacity-90 rounded-xl p-5 sm:p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-[#8cc63f]" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#2C2C2C]">Accepted Tests</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {acceptedTests.map((test, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border transition-all duration-200 ${
                      test.popular ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-gray-800">{test.name}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{test.note}</p>
                      </div>
                      {test.popular && (
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs font-bold">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Waivers & Alternatives */}
            <div className="bg-white bg-opacity-90 rounded-xl p-5 sm:p-8 shadow-2xl border border-gray-200">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-purple-100 rounded-full mr-3 sm:mr-4">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#2C2C2C]">Waivers & Alternatives</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* IELTS Waiver */}
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('waiver')}
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-800">
                      🎓 IELTS Waiver Eligibility
                    </span>
                    {expandedSection === 'waiver' ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedSection === 'waiver' && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600">
                      Many universities waive the English language requirement based on Year 12
                      English scores and medium of instruction.
                    </div>
                  )}
                </div>

                {/* Pre-Sessional English */}
                <div className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleSection('presessional')}
                    className="w-full p-3 sm:p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-gray-800">
                      📚 Pre-Sessional English
                    </span>
                    {expandedSection === 'presessional' ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedSection === 'presessional' && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600">
                      Offered to students who don't meet minimum IELTS scores. Conducted before
                      course commencement to improve English proficiency.
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button className="bg-[#8DC63F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#74b236] transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
            Prepare with us <Send className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnglishTestSection;
