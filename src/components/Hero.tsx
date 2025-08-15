import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/CommunityStudentsIamge.webp";
import GraduationCap from "../../assets/cap.png";
import Send from "../../assets/arrow.png";
import globa from "../../assets/globe.png";

const Hero: React.FC = () => {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudentCount((prev) => (prev >= 10000 ? 10000 : prev + 100));
    }, 10);
    return () => clearInterval(studentInterval);
  }, []);

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

  const rotateAnimation = {
    rotate: [0, 5, -5, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      id="hero"
      className="relative pb-20 py-5 bg-[#e6f5e1] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Floating Graduation Cap */}
        <motion.div
          className="absolute top-4 right-2 md:top-14 md:right-16"
          animate={floatAnimation}
        >
          <img
            src={GraduationCap}
            className="w-10 h-10 md:w-14 md:h-14 drop-shadow-lg"
          />
        </motion.div>

        {/* Paper Plane */}
        <motion.div
          className="absolute top-24 right-24 md:top-16 md:right-96"
          animate={rotateAnimation}
        >
          <img src={Send} className="w-14 h-14 md:w-24 md:h-auto" />
        </motion.div>

        {/* Globe */}
        <motion.div
          className="absolute -bottom-10 left-14 md:bottom-4 md:left-24"
          animate={floatAnimation}
        >
          <img src={globa} alt="Globe" className="w-14 h-14 md:w-28 md:h-auto" />
        </motion.div>

        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
          }}
          className="flex flex-col items-center text-center justify-center"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-snug max-w-2xl px-3"
          >
            Study Abroad can be simpler{" "}
            <span className="text-[#2d6a4f]">than you think</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.2 },
            }}
            className="mt-4 text-lg md:text-xl text-[#2C2C2C] max-w-xl"
          >
            Simplifying global education with trusted guidance for over 24 years
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.4 },
            }}
            className="mt-6 md:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#8cc63f] hover:bg-[#7cb532] text-white text-sm md:text-base font-medium px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#8DC63F]/50"
            >
              TAKE THE FIRST STEP
            </motion.button>
          </motion.div>

          {/* Student Count */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
            }}
            className="flex items-center gap-4 mt-6"
          >
            <div className="flex -space-x-3">
              <img
                src={img1}
                alt="Student"
                className="w-full h-auto md:w-full md:h-full rounded-full border-2 border-white shadow-md object-cover"
              />
            </div>
            <p className="text-base md:text-lg text-[#0d0d0d] font-semibold">
              {studentCount.toLocaleString()}+ students have trusted us with
              their dreams
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
    </section>
  );
};

export default Hero;
