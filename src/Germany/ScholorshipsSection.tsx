import React from 'react';
import {
  Building, Flag, Users, ChevronRight,
} from 'lucide-react';

const ScholarshipsSection = () => {
  const scholarshipTypes = [
    {
      icon: <Flag className="w-6 h-6 text-[#C1272D]" />,
      type: 'Government Scholarships',
      description:
        'DAAD, BMBF, and other government bodies offering scholarships for international students pursuing masters and doctoral degrees.',
      amount: 'Varies by scholarship',
      details: [
        'DAAD Scholarships: The German Academic Exchange Service offers various scholarships for international students.',
        'Government Scholarships: German government scholarships especially for master’s and doctoral degrees.',
        'Federal Ministry of Education and Research (BMBF) Scholarship: Scholarships for master’s or doctoral degrees.',
      ],
    },
    {
      icon: <Building className="w-6 h-6 text-[#C1272D]" />,
      type: 'University Scholarships',
      description:
        'Offered by German universities like TUM, University of Berlin, RWTH Aachen, and more for international students.',
      amount: 'Varies by university',
      details: [
        'BSBI (Berlin School of Business and Innovation) Scholarship',
        'SRH Scholarship',
        'GISMA (GISMA Business School) Scholarship',
        'IU (International University of Applied Sciences) Scholarship',
        'EU (European University) Scholarship',
        'Technical University of Munich (TUM) Scholarship',
        'University of Berlin Scholarship',
        'RWTH Aachen University Scholarship',
      ],
    },
    {
      icon: <Users className="w-6 h-6 text-[#C1272D]" />,
      type: 'Private Scholarships',
      description:
        'Merit-based scholarships such as Deutschlandstipendium, Friedrich Ebert Foundation, and Konrad-Adenauer-Stiftung.',
      amount: '€300/month or varies',
      details: [
        'Deutschlandstipendium: Merit-based, €300 per month for bachelor’s and master’s students.',
        'Friedrich Ebert Foundation Scholarship: For bachelor’s, master’s, or doctoral students.',
        'Konrad-Adenauer-Stiftung Scholarship: For bachelor’s, master’s, or doctoral students.',
      ],
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#2C2C2C] mb-3 text-center">
          Scholarships in Germany
        </h2>
        <p className="text-sm sm:text-lg text-[#2C2C2C] text-center mb-8 sm:mb-10 max-w-3xl mx-auto">
          Germany offers various scholarships for international students to support their studies. Apply early and tailor your applications to increase your chances.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {scholarshipTypes.map((sch, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] border border-gray-200 p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col justify-between h-[460px]"
            >
              <div>
                <div className="flex items-center mb-4 gap-3">
                  <div className="bg-white p-2 rounded-full shadow">{sch.icon}</div>
                  <span className="text-[10px] sm:text-xs bg-[#8DC63F] text-white px-2 py-1 rounded-full font-semibold">
                    {sch.type}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#2C2C2C] mb-1">{sch.type}</h4>
                <p className="text-sm text-gray-600 mb-3">{sch.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 max-h-[120px] overflow-auto">
                  {sch.details.map((detail, idx) => (
                    <li key={idx} className="text-sm sm:text-base">{detail}</li>
                  ))}
                </ul>
                <div className="bg-white border border-[#8DC63F] p-2 sm:p-3 rounded mb-4">
                  <p className="text-sm sm:text-base text-[#2C2C2C] font-semibold">{sch.amount}</p>
                </div>
              </div>

              <button className="w-full bg-[#8DC63F] hover:bg-[#C1272D] text-white font-semibold py-2 rounded-lg transition-colors text-sm sm:text-base flex items-center justify-center">
                Apply Now
                <ChevronRight className="inline w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsSection;
