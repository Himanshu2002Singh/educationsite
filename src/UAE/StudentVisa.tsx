import React, { useState } from 'react';
import {
  FileText,
  Import as Passport,
  GraduationCap,
  User,
  Award,
  Briefcase,
  Image,
  FileCheck,
  Mail,
  Globe,
  CheckCircle,
  Stethoscope,
  
} from 'lucide-react';
import { BiIdCard } from 'react-icons/bi';

const DocumentsVisaSectionUAE = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const documents = [
    { icon: <Passport className="w-6 h-6 text-[#8DC63F]" />, label: "Passport Copy", tooltip: "Colored, scanned copy with at least 6 months validity" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Academic Transcripts/Mark Sheets", tooltip: "10th, 12th, and Bachelor’s (if applicable)" },
    { icon: <GraduationCap className="w-6 h-6 text-[#8DC63F]" />, label: "Degree Certificate", tooltip: "Attested copy (if applying for PG)" },
    { icon: <Image className="w-6 h-6 text-[#C1272D]" />, label: "Passport-size Photographs", tooltip: "White background (digital and print)" },
    { icon: <FileCheck className="w-6 h-6 text-[#8DC63F]" />, label: "English Language Proficiency", tooltip: "IELTS/TOEFL/Duolingo – required by most universities" },
    { icon: <FileText className="w-6 h-6 text-[#C1272D]" />, label: "Statement of Purpose (SOP)", tooltip: "For select postgraduate programs" },
    { icon: <Award className="w-6 h-6 text-[#8DC63F]" />, label: "Letters of Recommendation (LORs)", tooltip: "Optional, for master’s programs" },
    { icon: <User className="w-6 h-6 text-[#C1272D]" />, label: "CV/Resume", tooltip: "Required for MBA or master’s applicants" },
    { icon: <Briefcase className="w-6 h-6 text-[#8DC63F]" />, label: "Work Experience Letters", tooltip: "Especially for MBA or Executive Programs" }
  ];

  const visaSteps = [
    { step: 1, title: "Receive Admission Offer", subtitle: "Official offer letter from the university", icon: <Mail className="w-6 h-6 text-[#8DC63F]" />, description: "Get your official offer letter after successful application." },
    { step: 2, title: "Submit Visa Documents", subtitle: "To university’s visa processing team", icon: <FileCheck className="w-6 h-6 text-[#C1272D]" />, description: "Upload or email the required visa documents." },
    { step: 3, title: "University Applies for Entry Permit", subtitle: "Application to UAE immigration", icon: <Globe className="w-6 h-6 text-[#8DC63F]" />, description: "University submits your visa request to the authorities." },
    { step: 4, title: "Receive Entry Permit (e-Visa)", subtitle: "Processing: 7–14 working days", icon: <CheckCircle className="w-6 h-6 text-[#C1272D]" />, description: "This document allows you to travel to Dubai." },
    { step: 5, title: "Travel to Dubai", subtitle: "Enter UAE using entry permit", icon: <Globe className="w-6 h-6 text-[#8DC63F]" />, description: "Begin onboarding at the university." },
    { step: 6, title: "Medical Test & Emirates ID", subtitle: "Mandatory health check", icon: <Stethoscope className="w-6 h-6 text-[#C1272D]" />, description: "Complete medical fitness test and Emirates ID application." },
    { step: 7, title: "Student Visa Stamped", subtitle: "Valid for 1 year", icon: <BiIdCard className="w-6 h-6 text-[#8DC63F]" />, description: "Visa stamped in your passport after approvals. Fee: AED 3,000–5,000." }
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-black">Documents & UAE Student <span className="text-[#8cc63f]">Visa</span> Process</h2>
          <div className="w-16 h-[3px] bg-[#8cc63f] mx-auto mb-3"></div>
          <p className="text-xl max-w-3xl mx-auto">From application to arrival in Dubai – step by step</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default DocumentsVisaSectionUAE;
