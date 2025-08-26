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

const DocumentsVisaSectionCanada = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const documents = [
    { icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, label: "Academic Transcripts", tooltip: "Marksheets from 10th, 12th, and/or bachelor's degree" },
    { icon: <BiIdCard className="w-6 h-6 text-[#8DC63F]" />, label: "Passport", tooltip: "Valid for at least 6 months before application" },
    { icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, label: "English Language Test Scores", tooltip: "IELTS / TOEFL / PTE – varies by institution & program" },
    { icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, label: "Statement of Purpose (SOP)", tooltip: "Explains study goals, background, and career plans" },
    { icon: <User className="w-6 h-6 text-[#C1272D]" />, label: "Letters of Recommendation (LORs)", tooltip: "1–2 letters from teachers, professors, or employers" },
    { icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, label: "Resume / CV", tooltip: "Academic & work experience summary (for PG programs)" },
    { icon: <Image className="w-6 h-6 text-[#C1272D]" />, label: "Portfolio", tooltip: "For design, architecture, animation, etc. (if applicable)" },
    { icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, label: "Work Experience Documents", tooltip: "Required for MBA/PG diploma applicants with job history" },
    { icon: <Award className="w-6 h-6 text-[#C1272D]" />, label: "Backlog Summary", tooltip: "Required to determine the number of backlogs" },
  ];

  const visaSteps = [
    { step: 1, title: "Apply to a DLI and get LOA", icon: <CheckCircle className="w-6 h-6 text-[#8DC63F]" />, description: "Receive Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)" },
    { step: 2, title: "Obtain Provincial Attestation Letter (PAL)", icon: <Globe className="w-6 h-6 text-[#C1272D]" />, description: "Required for most provinces except Quebec" },
    { step: 3, title: "If applying to Quebec: Get CAQ", icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, description: "Certificat d’acceptation du Québec (CAQ) is mandatory before visa application" },
    { step: 4, title: "Pay Tuition Fee", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, description: "Pay at least 1 year of tuition and get official payment receipt" },
    { step: 5, title: "Open GIC Account & Transfer Funds", icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, description: "CAD 22,895 for living expenses" },
    { step: 6, title: "Gather Required Documents", icon: <Award className="w-6 h-6 text-[#C1272D]" />, description: "Passport, LOA, PAL/CAQ, GIC, tuition receipt, IELTS/PTE, SOP, etc." },
    { step: 7, title: "Medical Exam (if applicable)", icon: <Stethoscope className="w-6 h-6 text-[#8DC63F]" />, description: "Done through an IRCC-approved panel physician" },
    { step: 8, title: "Apply for Study Permit", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, description: "Submit IMM 1294 form via IRCC portal, upload documents, pay CAD 150" },
    { step: 9, title: "Give Biometrics", icon: <User className="w-6 h-6 text-[#8DC63F]" />, description: "At nearest Visa Application Centre (VAC), Biometric Fee: CAD 85" },
    { step: 10, title: "Visa Processing & Approval", icon: <Award className="w-6 h-6 text-[#C1272D]" />, description: "Processing time varies from days to a few weeks" },
    { step: 11, title: "Receive Port of Entry (POE) Letter", icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, description: "Letter to present at Canadian airport" },
    { step: 12, title: "Travel to Canada", icon: <Globe className="w-6 h-6 text-[#C1272D]" />, description: "Carry original docs: LOA, PAL/CAQ, GIC, tuition receipt, POE Letter" },
    { step: 13, title: "Get Study Permit at Border", icon: <CheckCircle className="w-6 h-6 text-[#8DC63F]" />, description: "Issued by a Canada Border Services Officer on arrival" },
  ];

  const fundsRequired = [
    "Tuition Fee: Minimum 1 year paid",
    "Living Expenses: CAD 22,895 for a year",
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
          {" "}<span className="text-[#8cc63f]"> Admission</span> Documents & Visa Process – Canada
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
          <p className="text-xl max-w-3xl mx-auto">
            All required documentation for applying to Canadian universities and securing your student visa.
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <h4 className="text-lg font-bold">{step.title}</h4>
                    </div>
                  </button>
                  {expandedStep === idx && (
                    <div className="p-4 bg-[#F9F9F9] text-[#444]">{step.description}</div>
                  )}
                </div>
              ))}
            </div>

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

export default DocumentsVisaSectionCanada;
