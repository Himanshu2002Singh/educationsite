import React from 'react';
import { motion } from 'framer-motion';
import experince from '../../assets/experience/1.png'; // Ensure this exists
import education from '../../assets/experience/3.png'; // Ensure this exists

import mentornship from '../../assets/experience/2.png'; // Ensure this exists
import vis from '../../assets/experience/4.png'; // Ensure this exists



const features = [
  {
    id: 1,
    title: "",
    subtitle: "24+ Year of Experience",
    image: experince // Replace with your image path
  },
  {
    id: 2,
    title: "Tech-Driven Transparency",
    subtitle: "Full visibility at every step",
    image: education // Replace with your image path
  },
  {
    id: 3,
    title: "1.1 Personalized Mentorship",
    subtitle: "Tailored Guidance for every student ",
    image: mentornship // Replace with your image path
  },
  {
    id: 4,
    title: "",
    subtitle: "98% Visa Success Rate",
    image: vis // Replace with your image path
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">Our <span className="text-[#8DC63F]">Experience</span></h2>
          <div className="w-16 h-1 bg-[#8DC63F] mx-auto mt-3 mb-1"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-44 h-23 mb-2">
                <img 
                  src={feature.image} 
                  alt={feature.subtitle}
                  className="w-full h-20 object-contain"
                />
              </div>
              {/* <h3 className="text-3xl font-bold text-[#8DC63F] mb-2">{feature.title}</h3> */}
              <p className="text-lg">{feature.title}</p>
              <p className="text-lg">{feature.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;