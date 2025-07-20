// About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { id: 1, value: "2,000+", label: "Students Placed Abroad", icon: GraduationCap },
    { id: 2, value: "500", label: "Partner Universities", icon: Globe },
    { id: 3, value: "95%", label: "Visa Success Rate", icon: Award },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white ">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: About Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-6">
              About <span className="text-[#2d6a4f]">EduKonnect</span>
            </h2>
            <div className="w-16 h-1 bg-[#e76f51] mb-6"></div>
            <p className="text-lg text-[#2C2C2C] leading-relaxed mb-6">
              We're here to help you embark on the educational adventure of studying abroad with our expertise. 
              From choosing the right course to visa assistance, we're with you every step of the way.
            </p>
            <p className="text-lg text-[#2C2C2C] leading-relaxed">
              Our team of experienced counselors has helped thousands of students achieve their dreams of 
              international education at top universities around the world.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${stat.id === 3 ? 'col-span-2' : ''} 
                  from-[#e6f7ea] to-[#d0ede0] p-6 rounded-xl shadow-sm text-center`}
              >
                <stat.icon className="h-10 w-10 text-[#2d6a4f] mx-auto mb-3" />
                <h3 className="text-3xl font-bold text-[#1c1c1c]">{stat.value}</h3>
                <p className="text-lg text-[#2C2C2C] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;