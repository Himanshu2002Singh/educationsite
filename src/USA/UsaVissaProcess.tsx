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

const UsaF1VisaProcess = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  // A. Documents Required
  const documents = [
    {
      section: "Mandatory Documents",
      items: [
        "Valid Passport (must be valid for at least 6 months beyond intended stay)",
        "Form I-20 (issued by the US university, signed by you and the university official)",
        "SEVIS Fee payment receipt",
        "DS-160 confirmation page",
        "Visa appointment confirmation",
        "Visa application fee receipt",
      ],
    },
    {
      section: "Academic Documents",
      items: [
        "Original admission/acceptance letter",
        "Transcripts & mark sheets (10th, 12th, bachelor’s/master’s if applicable)",
        "Standardized test scores (TOEFL, IELTS, GRE, GMAT, SAT, etc.)",
        "Resume/CV",
        "Statement of Purpose (SOP) & Letters of Recommendation (if available)",
      ],
    },
    {
      section: "Financial Documents",
      items: [
        "Bank statements/ Balance Certificate",
        "Affidavit of Support (Form I-134, if applicable)",
        "Proof of funding (loan sanction letter, fixed deposits, scholarships, assistantship letters, etc.)",
        "Income proof of parents/sponsors (ITR, Form 16, salary slips, business documents)",
      ],
    },
    {
      section: "Other Supporting Documents",
      items: [
        "Recent passport-size photographs (per US visa specifications)",
        "Scholarship/assistantship letters (if any)",
        "Proof of ties to home country (property, family, employment documents – to show intent to return after studies)",
      ],
    },
  ];

  // B. Steps to Apply for USA F1 Student Visa
  const visaSteps = [
    { 
      step: 1, 
      title: "Get Admission & I-20 Form", 
      description: [
        "Apply to a SEVP-approved US university/college.",
        "Once admitted, the university issues you Form I-20 (Certificate of Eligibility for Non-immigrant Student Status)."
      ]
    },
    { 
      step: 2, 
      title: "Pay SEVIS Fee", 
      description: [
        "Pay the SEVIS I-901 fee (about $350).",
        "Keep the payment confirmation for your visa interview."
      ]
    },
    { 
      step: 3, 
      title: "Complete DS-160 Form", 
      description: [
        "Fill the DS-160 Online Non-immigrant Visa Application Form.",
        "Upload a valid passport-size photo.",
        "Save and print the DS-160 confirmation page with barcode."
      ]
    },
    { 
      step: 4, 
      title: "Pay Visa Application Fee (MRV Fee)", 
      description: [
        "Pay the non-refundable visa fee (about $185).",
        "Keep the receipt."
      ]
    },
    { 
      step: 5, 
      title: "Schedule Visa Interview", 
      description: [
        "Book an appointment at a US Embassy/Consulate.",
        "Two appointments required: biometrics at Visa Application Centre + visa interview."
      ]
    },
    { 
      step: 6, 
      title: "Attend Visa Biometrics Appointment (VAC)", 
      description: [
        "Provide fingerprints and photo at the Visa Application Centre."
      ]
    },
    { 
      step: 7, 
      title: "Attend F1 Visa Interview", 
      description: [
        "Appear at the US Embassy/Consulate.",
        "Carry all required documents.",
        "Be prepared to answer questions about your university, course, finances, and future plans."
      ]
    },
    { 
      step: 8, 
      title: "Visa Decision & Passport Collection", 
      description: [
        "If approved, the visa will be stamped on your passport.",
        "Collect your passport from the designated location or receive it by courier."
      ]
    },
  ];

  return (
    <section className="py-16 bg-white text-[#2C2C2C]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0D0D0D] sm:mb-3">
            <span className="text-[#8cc63f]">Admission & Visa - </span>Documents and Process for Studying in USA
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mb-3"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 bg-[#DFF5E3] rounded-2xl p-2 max-w-md mx-auto">
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
          <div className="space-y-8">
            {documents.map((docSection, idx) => (
              <div key={idx} className="bg-white border-2 border-[#D0D0D0] rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#8DC63F] mb-4">{docSection.section}</h3>
                <ul className="list-disc pl-5 space-y-2 text-[#555]">
                  {docSection.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'visa' && (
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
                    <h4 className="text-lg font-bold">{step.title}</h4>
                  </div>
                </button>
                {expandedStep === idx && (
                  <div className="p-4 bg-[#F9F9F9] text-[#444]">
                    <ul className="list-disc pl-5 space-y-2">
                      {step.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
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

export default UsaF1VisaProcess;
