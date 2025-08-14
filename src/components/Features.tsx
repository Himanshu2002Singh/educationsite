import React from 'react';
import { motion } from 'framer-motion';

import experince from '../../assets/experience/1.png';
import education from '../../assets/experience/3.png';
import mentornship from '../../assets/experience/2.png';
import vis from '../../assets/experience/4.png';
import { desc } from 'framer-motion/client';

const features = [
  {
    id: 1,
    title: "24+ Years ",
    desc: "of Experience",
    image: experince
  },
  {
    id: 2,
    title: "Tech-Driven ",
    desc: "Transparency",
    image: education
  },
  {
    id: 3,
    title: "1:1 Personalized Mentorship & Tailored Guidance",
    desc: "",
    image: mentornship
  },
  {
    id: 4,
    title: "Visa Success that Sets Us Apart",
    desc: "",
    image: vis
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Our <span className="text-[#8DC63F]">Experience</span>
          </h2>
          <div className="w-16 h-[3px] bg-[#8DC63F] mx-auto mt-2"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md flex flex-col items-center p-6 text-center min-h-[180px]"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-14 h-14 object-contain mb-4"
              />
              <p className="text-black text-base font-bold">{feature.title}</p>
              <p className="text-base text-black mt-1 font-bold">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
