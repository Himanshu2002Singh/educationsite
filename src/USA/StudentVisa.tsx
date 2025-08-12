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

const DocumentsVisaSectionUSA = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const documents = [
    { icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, label: "Academic Transcripts", tooltip: "Official records from high school/college – must be in English (certified translation if needed)" },
    { icon: <GraduationCap className="w-6 h-6 text-[#C1272D]" />, label: "Degree Certificates", tooltip: "Diploma/Degree proof – notarized copies for some universities" },
    { icon: <BiIdCard className="w-6 h-6 text-[#8DC63F]" />, label: "Passport Copy", tooltip: "Bio page – valid for at least 6 months, ensure a clear scan" },
    { icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, label: "English Test Scores", tooltip: "TOEFL (80+) / IELTS (6.5+) – some waivers for English-medium graduates" },
    { icon: <Award className="w-6 h-6 text-[#8DC63F]" />, label: "Standardized Tests", tooltip: "SAT for UG / GRE or GMAT for PG – check if your program is test-optional" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Statement of Purpose (SOP)", tooltip: "500–1000 words – tailor to each university" },
    { icon: <User className="w-6 h-6 text-[#8DC63F]" />, label: "Letters of Recommendation (LORs)", tooltip: "2–3 academic/professional – from professors who know you well" },
    { icon: <Briefcase className="w-6 h-6 text-[#C1272D]" />, label: "Resume/CV", tooltip: "Academic & work highlights – max 2 pages for UG, detailed for PG" },
    { icon: <Image className="w-6 h-6 text-[#8DC63F]" />, label: "Portfolio", tooltip: "For Art, Design, or Architecture programs" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Writing Samples", tooltip: "For Humanities or Research fields" },
    { icon: <Globe className="w-6 h-6 text-[#8DC63F]" />, label: "Proof of Funds", tooltip: "Bank statements/sponsor letters – $50,000+ for I-20 issuance" },
    { icon: <Stethoscope className="w-6 h-6 text-[#C1272D]" />, label: "Health Records", tooltip: "Vaccination proof (required in some states)" },
  ];

  const timelineSteps = [
    { step: 1, title: "6–12 Months Before", subtitle: "Early Preparation", icon: <CheckCircle className="w-6 h-6 text-[#8DC63F]" />, description: "Gather transcripts and contact recommenders." },
    { step: 2, title: "3–6 Months Before", subtitle: "Testing & Drafts", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, description: "Take TOEFL/GRE and draft your SOP." },
    { step: 3, title: "1–3 Months Before", subtitle: "Finalize Documents", icon: <Globe className="w-6 h-6 text-[#8DC63F]" />, description: "Finalize LORs and proofread all essays." },
    { step: 4, title: "Deadline Week", subtitle: "Final Review", icon: <Award className="w-6 h-6 text-[#C1272D]" />, description: "Triple-check requirements – some universities require mailed copies." },
  ];

  const commonMistakes = [
    "Missing document notarization/translation",
    "Generic SOPs/LORs (always customize!)",
    "Last-minute test score submissions (scores take 2–4 weeks to reach universities)",
  ];

  const eduKonnectHelp = [
    "Document Audit – Ensure nothing is missing",
    "SOP/LOR Editing – From draft to polished version",
    "Application Proofreading – Avoid costly errors",
    "Courier Services – Send physical documents securely",
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
             Documents Needed for US University Admissions
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            From gathering transcripts to submitting applications – everything you need, step by step
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-full p-2 max-w-md mx-auto">
          {['documents', 'timeline'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 mx-1 ${
                activeTab === tab
                  ? 'bg-[#8DC63F] text-white'
                  : 'text-[#2C2C2C] hover:text-white hover:bg-[#C1272D]'
              }`}
            >
              {tab === 'documents' ? 'Documents' : 'Timeline'}
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

        {activeTab === 'timeline' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {timelineSteps.map((step, idx) => (
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
                        <p className="text-sm text-[#666]">{step.subtitle}</p>
                      </div>
                    </div>
                  </button>
                  {expandedStep === idx && (
                    <div className="p-4 bg-[#F9F9F9] text-[#444]">{step.description}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Common Mistakes */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">❌ Common Mistakes to Avoid</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#555]">
                {commonMistakes.map((mistake, i) => (
                  <li key={i}>{mistake}</li>
                ))}
              </ul>
            </div>

            {/* EduKonnect Help */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-4">🛠️ How EduKonnect Helps?</h3>
              <ul className="list-disc pl-5 space-y-2 text-[#555]">
                {eduKonnectHelp.map((help, i) => (
                  <li key={i}>{help}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full font-bold text-lg bg-[#8DC63F] hover:bg-[#C1272D] text-white transition-all duration-300 shadow-md hover:shadow-xl">
            {activeTab === 'documents' ? 'Talk to an Expert Advisor' : 'Get Timeline Guidance Now'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default DocumentsVisaSectionUSA;
