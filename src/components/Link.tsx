// Link.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, onClick, className = '' }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
    
    if (onClick) onClick();
  };

  return (
    <motion.a 
      href={href} 
      onClick={handleClick}
      className={`text-[#2d6a4f] hover:text-[#e76f51] font-medium transition-colors duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};