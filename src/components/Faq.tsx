import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is there a consultation fee to start with EduKonnect?",
    answer: "No, we offer a free consultation to understand your goals and guide you accordingly.",
  },
  {
    question: "How is EduKonnect different from other study abroad consultants?",
    answer: "With 24+ years of experience, we combine honest mentorship, personalized support, and a student-first approach to deliver real results.",
  },
  {
    question: "What services does EduKonnect offer for studying abroad?",
    answer: "We help with profile evaluation, university shortlisting, SOPs, scholarships, visa guidance, and more.",
  },
  {
    question: "Do you help with accommodation abroad?",
    answer: "Yes, we guide students in finding safe, budget-friendly housing.",
  },
  {
    question: "How do I choose the right country and university for my profile?",
    answer: "Our team matches your academic background, interests, and goals with the best-fit options globally.",
  },
  {
    question: "Do you help with SOPs and application documents?",
    answer: "Yes! We provide expert SOP guidance, plus help with LORs, CVs, and admission essays.",
  },
  {
    question: "Can EduKonnect help with scholarships and education loans?",
    answer: "Definitely. We connect you to scholarship opportunities and trusted loan partners.",
  },
  {
    question: "Do you support undergraduate, postgraduate, and MBA applicants?",
    answer: "Yes, we work with students across all levels—UG, PG, MBA, and more.",
  },
  {
    question: "Can I apply to multiple countries at once through EduKonnect?",
    answer: "Absolutely! We help you explore and apply across popular study destinations.",
  },
  {
    question: "How can I get in touch with EduKonnect?",
    answer: "You can book a free consultation through our website or contact us via call or WhatsApp.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-10 rounded-3xl shadow-lg max-w-8xl mx-auto mt-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        EduKonnect - Study Abroad FAQs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#8DC63F] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            onClick={(e) => toggleAnswer(e, index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#2C2C2C] group-hover:underline">
                {faq.question}
              </h3>
              <ArrowUpRight
                className={`text-[#C1272D] transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}
              />
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-sm whitespace-pre-line text-gray-900"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
