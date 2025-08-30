import React from 'react';
import { Search, FileText, CheckCircle, ClipboardCheck } from 'lucide-react';

const AdmissionProcessSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-sky-600" />,
      title: "Research & Choose Program",
      description:
        "Identify NZQA-accredited institutions and courses; review entry requirements (academic transcripts, English-language scores).",
      bg: "bg-sky-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Prepare Your Application",
      description:
        "Gather Marksheets and transcripts, English test results, CV/portfolio, statement of purpose.",
      bg: "bg-purple-50",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-[#8cc63f]" />,
      title: "Receive Offer of Place",
      description:
        "Receive conditional or unconditional offer from the institution.",
      bg: "bg-green-50",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-yellow-600" />,
      title: "Confirm Your Place",
      description:
        "Sign and return the Offer Acceptance Form, pay first year tuition fee and obtain payment confirmation receipt.",
      bg: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
          <span className="text-[#8cc63f]">Admission</span> Process
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guide to your New Zealand education journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bg} border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcessSection;
