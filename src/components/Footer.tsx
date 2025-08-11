// Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {  Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from './Link';
import logo from '../../assets/2.png'

const Footer: React.FC = () => {

  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { name: "About Us", href: "#about" },
        { name: "Our Programs", href: "#programs" },
        { name: "Success Stories", href: "#testimonials" },
        { name: "Contact Us", href: "#contact" }
      ]
    },
    {
      title: "Study Destinations",
      items: [
        { name: "UK", href: "#" },
        { name: "USA", href: "#" },
        { name: "Canada", href: "#" },
        { name: "Ireland", href: "#" },
        { name: "Germany", href: "#" },
        { name: "Australia", href: "#" },
        { name: "New Zealand", href: "#" },
        { name: "UAE", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Logo and Social */}
          <div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center mb-6"
            >
              <img src={logo} alt="EduKonnect Logo" className="h-20 w-auto mr-3" />
              
            </motion.div>
            <p className="mb-6 text-gray-200 text-lg leading-relaxed">
              Your trusted partner for global education opportunities. We connect ambitious students with prestigious universities worldwide.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white hover:text-[#e76f51] transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
       {footerLinks.map((section, index) => (
  <div key={index}>
    <h3 className="text-xl font-semibold mb-6 text-white">{section.title}</h3>

    {section.title === "Study Destinations" ? (
      <div className="grid grid-cols-2 gap-4">
        {section.items.map((item, itemIndex) => (
          <motion.div 
            key={itemIndex}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              href={item.href} 
              className="text-gray-200 hover:text-white text-lg transition-colors block"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
    ) : (
      <ul className="space-y-3">
        {section.items.map((item, itemIndex) => (
          <motion.li 
            key={itemIndex}
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link
              href={item.href} 
              className="text-gray-200 hover:text-white text-lg transition-colors"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    )}
  </div>
))}

          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <MapPin className="flex-shrink-0 h-6 w-6 mt-1 text-[#e76f51]" />
                <span className="ml-3 text-gray-200 text-lg">Borivali (W) : 9th Floor, Express Tower, L.T. Rd, Mumbai, 400092</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <Mail className="flex-shrink-0 h-6 w-6 mt-1 text-[#e76f51]" />
                <span className="ml-3 text-gray-200 text-lg">info@edukonnect.com</span>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <Phone className="flex-shrink-0 h-6 w-6 mt-1 text-[#e76f51]" />
                <span className="ml-3 text-gray-200 text-lg">+91 98765 43210</span>
              </motion.li>
            </ul>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-[#4c956c] flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-200 text-center md:text-left text-lg">
            &copy; {new Date().getFullYear()} EduKonnect. All rights reserved.
          </p>
           
           <p className="text-gray-200 text-center md:text-left text-sm">
             Design & Development by <a href="www.trustingbrains.com" className="text-white hover:underline">Trusting Brains</a> 
          </p>
          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;