import React, { useState } from 'react';
import {
  FileText,
  Import as Passport,
  GraduationCap,
  User,
  Award,
  Briefcase,
  Palette,
  Trophy,
  CheckCircle,
  DollarSign,
  Stethoscope,
  FileCheck,
  Eye,
  Mail
} from 'lucide-react';

const DocumentsVisaSection = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [fundsTab, setFundsTab] = useState('sources');

  const documents = [
    { icon: <Passport className="w-6 h-6 text-[#8DC63F]" />, label: "Passport", tooltip: "Valid passport with at least 6 months validity" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Academic Transcripts", tooltip: "Class X, XII, Bachelor's Marksheets or Transcripts" },
    { icon: <GraduationCap className="w-6 h-6 text-[#8DC63F]" />, label: "SOP", tooltip: "Tailored for your course and goals" },
    { icon: <User className="w-6 h-6 text-[#C1272D]" />, label: "Resume", tooltip: "Updated CV with relevant experience" },
    { icon: <Award className="w-6 h-6 text-[#8DC63F]" />, label: "LORs", tooltip: "2 academic + 1 professional (if applicable)" },
    { icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, label: "English proficiency", tooltip: "Test scores or waiver eligibility" },
    { icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, label: "Work experience", tooltip: "If applicable for your course" },
    { icon: <Palette className="w-6 h-6 text-[#C1272D]" />, label: "Portfolio", tooltip: "Mandatory for Art, Architecture & Design" },
    { icon: <Trophy className="w-6 h-6 text-[#8DC63F]" />, label: "Extracurriculars", tooltip: "State/National achievements, certifications" }
  ];

  const visaSteps = [
    { step: 1, title: "Get your CAS Letter", subtitle: "Confirmation of Acceptance for Study", icon: <FileText className="w-6 h-6 text-[#8DC63F]" />, points: "50 points", description: "University issues CAS after accepting your application and receiving deposit" },
    { step: 2, title: "Show Financial Proof", subtitle: "28 days of maturity, no large recent deposits", icon: <DollarSign className="w-6 h-6 text-[#C1272D]" />, points: "10 points", description: "Demonstrate sufficient funds for tuition and living expenses" },
    { step: 3, title: "Medical Examination", subtitle: "UK approved clinics only", icon: <Stethoscope className="w-6 h-6 text-[#8DC63F]" />, points: "10 points", description: "Health check from approved medical centers" },
    { step: 4, title: "Submit Tier 4 Visa Application", subtitle: "Online application with supporting documents", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, points: "", description: "Complete online form and upload required documents" },
    { step: 5, title: "Pay Immigration Health Surcharge", subtitle: "Access to NHS services", icon: <DollarSign className="w-6 h-6 text-[#8DC63F]" />, points: "", description: "Annual fee for healthcare access during your stay" },
    { step: 6, title: "Attend Biometrics", subtitle: "Fingerprints and photograph", icon: <Eye className="w-6 h-6 text-[#C1272D]" />, points: "", description: "Visit visa application center for biometric data" },
    { step: 7, title: "Get Decision", subtitle: "Within 2-3 weeks", icon: <Mail className="w-6 h-6 text-[#8DC63F]" />, points: "", description: "Receive visa decision and passport with visa" }
  ];

  const fundingSources = [
    { name: "Savings Account", accepted: true },
    { name: "Fixed Deposits/Term Deposits", note: "without any lien on it", accepted: true },
    { name: "Education Loan", accepted: true },
    { name: "Stocks/Mutual Funds", accepted: false },
    { name: "Property/Assets", accepted: false }
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Documents & UK Student Visa Process</h2>
          <p className="text-xl max-w-3xl mx-auto">Seamless support from application to arrival</p>
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
          <div className="space-y-6 mt-8">
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
                      <p className="text-sm text-[#666]">{step.subtitle}</p>
                    </div>
                  </div>
                  {step.points && (
                    <div className="text-sm bg-[#E6FFE6] text-[#2C2C2C] px-3 py-1 rounded-full font-semibold">
                      {step.points}
                    </div>
                  )}
                </button>
                {expandedStep === idx && (
                  <div className="p-4 bg-[#F9F9F9] text-[#444]">{step.description}</div>
                )}
              </div>
            ))}
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

export default DocumentsVisaSection;
