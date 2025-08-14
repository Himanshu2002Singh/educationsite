import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Send } from 'lucide-react';
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

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section
      id="hero"
      className="relative  pb-20 py-5  bg-[#e6f5e1] bg-[#e6f5e1] animate-[gradient-x_10s_ease_infinite] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Floating Graduation Cap */}
        <motion.div
          className="absolute top-10 right-6 md:top-14 md:right-12 text-[#2d6a4f]"
          animate={floatAnimation}
        >
          <GraduationCap size={48} className="w-10 h-10 md:w-12 md:h-12" />
        </motion.div>

        {/* Paper Plane with Path */}
        <motion.div
          className="absolute top-24 right-20 md:top-28 md:right-36 text-[#2d6a4f]"
          animate={rotateAnimation}
        >
          <Send size={40} className="w-8 h-8 md:w-10 md:h-10" />
        </motion.div>
        <svg
          className="absolute top-28 right-16 md:top-32 md:right-32 w-24 h-24"
          viewBox="0 0 200 200"
        >
          <path
            d="M10,150 C60,100 140,200 190,50"
            stroke="#2d6a4f"
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
          />
        </svg>

        {/* Globe Bottom Left */}
        <motion.div
          className="absolute bottom-16 left-6 md:bottom-20 md:left-12 text-[#2d6a4f]"
          animate={floatAnimation}
        >
          🌍
        </motion.div>

        {/* Text & Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }}
          className="flex flex-col items-center text-center justify-center"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D0D0D] leading-tight max-w-xl p-3 "
          >
            Study Abroad can be simpler
             <span className="text-[#2d6a4f]"> than you think</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }}
            className="mt-3 text-lg md:text-xl text-[#2C2C2C] max-w-xl"
          >
            Simplifying Global education with trusted guidance for over 24 years
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } }}
            className="mt-5 md:mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="bg-[#8cc63f]  hover:bg-[#7cb532] text-white text-[14px] font-medium p-2 md:px-8 md:py-3 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#8DC63F]/50"
            >
              TAKE THE FIRST STEP
            </motion.button>
          </motion.div>

          {/* Student Count */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.6 } }}
            className="flex items-center space-x-3 mt-6"
          >
            <div className="flex -space-x-4">
              <img
                src={img1}
                alt="Student"
                className="w-15 h-15 md:w-15 md:h-12 rounded-full border-2 border-white shadow-md object-cover"
              />
            </div>
            <p className="text-sm md:text-lg text-[#0d0d0d] font-semibold mb:12 md:mb-0 text-left">
              {studentCount.toLocaleString()}+ students have trusted us with their dreams
            </p>

            <p className="md:pb-20">
              
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
         <svg
          className="w-full h-16 md:h-24 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
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

      {/* Popup Form */}
      <AnimatePresence>
        {showForm && <PopupFormWithRotatingFlags onClose={() => setShowForm(false)} />}
      </AnimatePresence>

      {/* Gradient animation keyframes */}
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
