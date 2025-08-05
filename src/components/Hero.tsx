import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import img1 from "../../assets/CommunityStudentsIamge.webp";
import PopupFormWithRotatingFlags from './PopupFormWithRotatingFlags';

const Hero: React.FC = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudentCount(prev => (prev >= 10000 ? 10000 : prev + 100));
    }, 10);
    return () => clearInterval(studentInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const userImages = [img1];

  return (
    <section
      id="hero"
      className="relative -pt-15 pb-20 md:py-36 bg-[linear-gradient(270deg,#e6f7ea,#f0f7f4,#d8f3dc)] bg-[length:400%_400%] animate-[gradient-x_10s_ease_infinite]"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center justify-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight max-w-3xl"
          >
            Study Abroad can be simpler <span className="text-[#2d6a4f]">than you think</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-[#2C2C2C] max-w-xl"
          >
            Simplifying Global education with trusted guidance for over 24 years
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-[#8DC63F] hover:bg-[#7cb532] text-white font-medium px-8 py-3 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#8DC63F]/50"
            >
              TAKE THE FIRST STEP
              {/* <ArrowRight className="w-4 h-4" /> */}
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white font-medium px-8 py-3 rounded-md transition-all shadow-md"
            >
              Explore More
            </motion.button> */}
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center space-x-3 mt-6">
            <div className="flex -space-x-4">
              {userImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`User ${index + 1}`}
                  className="w-15 h-15 rounded-full border-2 border-white shadow-md object-cover"
                />
              ))}
            </div>

            <p className="text-md md:text-lg text-[#0d0d0d] font-semibold">
              {studentCount.toLocaleString()}+ students have trusted us with their dreams
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background SVG Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-16 md:h-24 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
              82.39-16.72,168.19-17.73,250.45-.39,
              C823.78,31,906.67,72,985.66,92.83,
              c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35,
              A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && <PopupFormWithRotatingFlags onClose={() => setShowForm(false)} />}
      </AnimatePresence>

      {/* Gradient animation keyframes (inline for Tailwind) */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;