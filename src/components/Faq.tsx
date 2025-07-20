import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What are the steps of the study abroad journey with EduKonnect?',
    answer:
      'We follow a clear, personalized path:\n1. Profile evaluation\n2. Course & country selection\n3. Test preparation (if needed)\n4. Application & documentation\n5. Visa assistance\n6. Pre-departure guidance\nWe support you at every step!',
  },
  {
    question: 'What are the pricing plans?',
    answer:
      'Pricing depends on the country and course you choose. We recommend booking a 1:1 session with our experts so we can understand your goals and budget, and guide you accordingly.',
  },
  {
    question: 'Can I get IELTS or other exam preparation support?',
    answer:
      'Absolutely! We offer specialized guidance and prep for IELTS, TOEFL, GRE, GMAT, and more — tailored to your target universities and countries.',
  },
  {
    question: 'How can I reach out to EduKonnect?',
    answer:
      'You can contact us directly via:\n📞 Phone Call\n📸 Instagram DM\nOr schedule a 1:1 consultation with our team — we’re here to help you begin your global journey.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (event: React.MouseEvent, index: number) => {
    event.stopPropagation();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6 md:p-10 bg-gradient-to-br from-white via-slate-100 to-white rounded-3xl shadow-lg max-w-8xl mx-auto mt-6">
      <h2 className="text-4xl font-bold text-[#2C2C2C] mb-12 text-center drop-shadow-md">
        EduKonnect - Study Abroad FAQs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#8DC63F] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-between cursor-pointer" onClick={(e) => toggleAnswer(e, index)}>
              <h3 className="text-lg font-bold text-[#2C2C2C] group-hover:underline">
                {faq.question}
              </h3>
              <ArrowUpRight
                className={`text-[#C1272D] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
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
