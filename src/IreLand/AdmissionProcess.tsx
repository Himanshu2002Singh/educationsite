import React from 'react';
import { Search, FileText, CheckCircle, ClipboardCheck, Globe, FileUp, Mail } from 'lucide-react';

const UAEAdmissionProcessSection = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-sky-600" />,
      title: "Choose a Program & University",
      description:
        "Shortlist the course and institution in the UAE that best suits your career and personal goals.",
      bg: "bg-sky-50",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Submit Your Application",
      description:
        "Apply directly through the university portal or via an authorized education consultant.",
      bg: "bg-purple-50",
    },
    {
      icon: <FileUp className="w-8 h-8 text-green-600" />,
      title: "Upload Required Documents",
      description:
        "Scan and submit your academic transcripts, identification documents, and other required paperwork.",
      bg: "bg-green-50",
    },
    {
      icon: <Mail className="w-8 h-8 text-yellow-600" />,
      title: "Receive Conditional Offer Letter",
      description:
        "If eligible, you’ll get a provisional offer pending fee payment or additional document submission.",
      bg: "bg-yellow-50",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Accept Offer & Pay Initial Fee",
      description:
        "Secure your seat by paying the deposit or first installment of your tuition fee.",
      bg: "bg-teal-50",
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-600" />,
      title: "Apply for UAE Student Visa",
      description:
        "The university or its visa team will assist you through the UAE student visa process.",
      bg: "bg-pink-50",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-indigo-600" />,
      title: "Receive Final Admission Letter & Visa",
      description:
        "Once approved, get ready for travel, accommodation arrangements, and university onboarding.",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-british-navy mb-4 font-serif">
            UAE Admission Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Step-by-step guide to securing admission in a UAE university
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

export default UAEAdmissionProcessSection;
