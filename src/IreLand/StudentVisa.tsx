import React, { useState } from 'react';
import {
  FileText,
  GraduationCap,
  User,
  Award,
  Briefcase,
  Image,
  FileCheck,
  Globe,
  CheckCircle,
  Stethoscope,
} from 'lucide-react';
import { BiIdCard } from 'react-icons/bi';

const DocumentsVisaSectionIreland = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const documents = [
    { icon: <BiIdCard className="w-6 h-6 text-[#8DC63F]" />, label: "Passport", tooltip: "Valid passport – must be valid for the entire study period" },
    { icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, label: "Academic Transcripts", tooltip: "Class X, XII, Bachelor's marksheets or transcripts" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Statement of Purpose (SOP)", tooltip: "Tailored for your course and career goals" },
    { icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, label: "Resume/CV", tooltip: "Highlight academic and work achievements" },
    { icon: <User className="w-6 h-6 text-[#C1272D]" />, label: "Letters of Recommendation (LORs)", tooltip: "2 academic + 1 professional (if applicable)" },
    { icon: <FileCheck className="w-6 h-6 text-[#8DC63F]" />, label: "English Proficiency Test Scores", tooltip: "IELTS, TOEFL, or equivalent" },
    { icon: <Briefcase className="w-6 h-6 text-[#C1272D]" />, label: "Work Experience", tooltip: "If applicable – with official letters" },
    { icon: <Image className="w-6 h-6 text-[#8DC63F]" />, label: "Portfolio", tooltip: "Mandatory for Art, Architecture & Design courses" },
    { icon: <Award className="w-6 h-6 text-[#C1272D]" />, label: "Extracurriculars", tooltip: "State/National achievements, certifications" },
  ];

  const visaSteps = [
    { step: 1, title: "Get your Letter of Admission", icon: <CheckCircle className="w-6 h-6 text-[#8DC63F]" />, description: "Receive an official offer from an Irish institution" },
    { step: 2, title: "Show Financial Proof", icon: <Globe className="w-6 h-6 text-[#C1272D]" />, description: "6 months old funds, no large recent deposits" },
    { step: 3, title: "PCC & Medical Insurance", icon: <Stethoscope className="w-6 h-6 text-[#8DC63F]" />, description: "Obtain Police Clearance Certificate and arrange health coverage" },
    { step: 4, title: "Submit your Visa Application", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, description: "Apply online via the Irish Naturalisation and Immigration Service" },
    { step: 5, title: "Attend Biometrics", icon: <User className="w-6 h-6 text-[#8DC63F]" />, description: "Provide fingerprints and photographs" },
    { step: 6, title: "Get Decision", icon: <Award className="w-6 h-6 text-[#C1272D]" />, description: "Visa decision typically within 2–3 weeks" },
  ];

  const fundsRequired = [
    "Tuition Fee (1 year to be paid)",
    "Living Expenses: €10,000 – €12,000 per year",
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-3">
            <span className="text-[#8cc63f]">Admission</span> Documents & Visa Process – Ireland
          </h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl max-w-3xl mx-auto">
            All required documentation for applying to Irish universities and securing your student visa.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-full p-2 max-w-md mx-auto">
          {['documents', 'visa'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-white'
                  : 'text-[#2C2C2C] hover:text-white hover:bg-[#C1272D]'
              }`}
            >
              {tab === 'documents' ? 'Documents' : 'Visa Process'}
            </button>
          ))}
        </div>

        {activeTab === 'documents' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#D0D0D0] rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-4 bg-[#F2F2F2]">{doc.icon}</div>
                  <h4 className="text-lg font-bold">{doc.label}</h4>
                </div>
                <p className="text-sm text-[#555]">{doc.tooltip}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'visa' && (
          <div>
            {/* Visa Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {visaSteps.map((step, idx) => (
                <div key={idx} className="border-2 border-[#E0E0E0] rounded-xl overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-[#F7F7F7]"
                    onClick={() => setExpandedStep(expandedStep === idx ? null : idx)}
                  >
                    <div className="flex items-center">
                      <div className="bg-[#8DC63F] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">
                        {step.step}
                      </div>
                      <div className="mr-4">{step.icon}</div>
                      <div>
                        <h4 className="text-lg font-bold">{step.title}</h4>
                      </div>
                    </div>
                  </button>
                  {expandedStep === idx && (
                    <div className="p-4 bg-[#F9F9F9] text-[#444]">{step.description}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Funds Required */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">🧾 Funds Required</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#555]">
                {fundsRequired.map((fund, i) => (
                  <li key={i}>{fund}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-[#8DC63F] hover:bg-[#C1272D] text-white transition-all duration-300 shadow-md hover:shadow-xl">
            {activeTab === 'documents' ? 'Talk to an Expert Advisor' : 'Get Visa Guidance Now'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsVisaSectionIreland;
