import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
 { question: "Is there a consultation fee to start with EduKonnect?", answer: "No, we offer a free consultation to understand your goals and guide you accordingly.", }, { question: "How is EduKonnect different from other study abroad consultants?", answer: "With 24+ years of experience, we combine honest mentorship, personalized support, and a student-first approach to deliver real results.", }, { question: "What services does EduKonnect offer for studying abroad?", answer: "We help with profile evaluation, university shortlisting, SOPs, scholarships, visa guidance, and more.", }, { question: "Do you help with accommodation abroad?", answer: "Yes, we guide students in finding safe, budget-friendly housing.", }, { question: "How do I choose the right country and university for my profile?", answer: "Our team matches your academic background, interests, and goals with the best-fit options globally.", }, { question: "Do you help with SOPs and application documents?", answer: "Yes! We provide expert SOP guidance, plus help with LORs, CVs, and admission essays.", }, { question: "Can EduKonnect help with scholarships and education loans?", answer: "Definitely. We connect you to scholarship opportunities and trusted loan partners.", }, { question: "Do you support undergraduate, postgraduate, and MBA applicants?", answer: "Yes, we work with students across all levels—UG, PG, MBA, and more.", }, { question: "Can I apply to multiple countries at once through EduKonnect?", answer: "Absolutely! We help you explore and apply across popular study destinations.", }, { question: "How can I get in touch with EduKonnect?", answer: "You can book a free consultation through our website or contact us via call or WhatsApp.", }, ];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-10 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center text-black mb-8">
        Study Abroad <span className="text-[#8cc63f]">FAQs</span>
        <div className="w-14 h-1 bg-[#8cc63f] mx-auto mt-1"></div>
      </h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-2 p-5">
        {visibleFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#F0FAEC] border border-[#C6E5B0] rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>

              <ChevronDown
                className={`w-[40px] h-[20px] text-right  text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 pb-4 pt-4 text-left text-sm text-gray-700 border-t border-[#C6E5B0]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#8DC63F] hover:bg-[#7bb233] text-white font-semibold py-2 px-6 rounded-md"
          >
            View All FAQs
          </button>
        </div>
      )}
    </section>
  );
}
