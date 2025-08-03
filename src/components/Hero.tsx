import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
// import rating from '../../assets/rating.gif'; // Ensure this exists
// import studentImage from '../../hero.jpg'; // Ensure this exists

import img1 from "../../assets/CommunityStudentsIamge.webp";

import PopupFormWithRotatingFlags from './PopupFormWithRotatingFlags'; // Adjust the path as needed


const Hero: React.FC = () => {
  const [studentCount, setStudentCount] = useState(0);
  // const [countryCount, setCountryCount] = useState(0);
  // const badgeVariants = {
  //   hover: { scale: 1.05, transition: { duration: 0.3 } },
  //   tap: { scale: 0.95 }
  // };

  const [showForm, setShowForm] = useState(false);
  
  
  // Count animation effects
  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudentCount(prev => prev >= 10000 ? 10000 : prev + 100);
    }, 10);
    const countryInterval = setInterval(() => {
      setCountryCount(prev => prev >= 25 ? 25 : prev + 1);
    }, 50);
    return () => {
      clearInterval(studentInterval);
      clearInterval(countryInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  // useEffect(() => {
  //   const studentInterval = setInterval(() => {
  //     setStudentCount(prev => prev >= 10000 ? 10000 : prev + 100);
  //   }, 10);
  //   const countryInterval = setInterval(() => {
  //     setCountryCount(prev => prev >= 25 ? 25 : prev + 1);
  //   }, 50);
  //   return () => {
  //     clearInterval(studentInterval);
  //     clearInterval(countryInterval);
  //   };
  // }, []);

 
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

//   const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };


  const userImages = [img1];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-r from-[#e6f7ea] to-[#f0f7f4]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column */}
          <div>
            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight">
             Study Abroad can be simpler  <span className="text-[#2d6a4f]">than you think</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 text-lg md:text-xl text-[#2C2C2C] max-w-xl">
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
                <ArrowRight className="w-4 h-4" />
               
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#2d6a4f] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white font-medium px-8 py-3 rounded-md transition-all shadow-md"
              >
                Explore More
              </motion.button>
            </motion.div>

           <motion.div
      variants={itemVariants}
      className="flex items-center space-x-3 mt-6"
    >
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
          </div>

          {/* Right Column - Image with Badges */}
         {/* Right Column - Stats Cards (Desktop Only) */}
<div className="hidden md:grid grid-cols-2 gap-4">
  {[
    { title: "10,000+", subtitle: "Students" },
    { title: "24+", subtitle: "Years of Experience" },
    { title: "25+", subtitle: "Countries" },
    { title: "4.8/5", subtitle: "Rating" },
    { title: "95%", subtitle: "Visa Success" },
    { title: "800+", subtitle: "University Representation" },
  ].map((card, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white border-2 border-[#8DC63F] rounded-lg p-5 shadow-lg flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
    >
      <h3 className="text-2xl font-bold text-[#2d6a4f]">{card.title}</h3>
      <p className="text-sm text-gray-700 mt-1">{card.subtitle}</p>
    </motion.div>
  ))}
</div>

        </motion.div>
      </div>

    

      {/* Background SVG */}
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
      
      {/* Modal: Form */}
      <AnimatePresence>
      {showForm && <PopupFormWithRotatingFlags onClose={() => setShowForm(false)} />}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
