import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../edukoinnect.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 1, name: 'About Us', href: '/about' },
    { id: 2, name: 'Services', href: '/services' },
    {
      id: 3,
      name: 'Study Destinations',
      href: '#',
      dropdown: [
        { name: 'UK', href: '/uk' },
        { name: 'Canada', href: '/canada' },
      ],
    },
    { id: 4, name: 'Latest Blogs', href: '/blogs' },
    { id: 5, name: 'Contact Us', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={false}
      animate={{ y: isScrolled ? 0 : 0 }}
      transition={{ duration: 0.3 }}
      className={`top-1 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="flex items-center justify-between max-w-8xl mx-auto">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
          <img src={logo} alt="EduKonnect Logo" className="h-20 w-auto" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.id} className="relative group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center text-[#2d6a4f] hover:text-[#e76f51] transition-colors cursor-pointer"
                >
                  {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
                  {item.dropdown.map((subItem, i) => (
                    <Link
                      key={i}
                      to={subItem.href}
                      className="block px-4 py-2 text-sm text-[#2d6a4f] hover:bg-gray-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.href}
                  className="text-[#2d6a4f] hover:text-[#e76f51] transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            )
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#8DC63F] text-white px-4 py-2 rounded-md hover:bg-[#C1272D] transition-colors"
          >
            Free Consultation
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-[#2d6a4f] focus:outline-none"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 flex flex-col items-center space-y-4 md:hidden bg-white p-4 rounded-lg shadow-lg"
          >
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex justify-between items-center text-[#2d6a4f] py-2 px-4 hover:text-[#e76f51]"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen &&
                      item.dropdown.map((subItem, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-6 text-sm py-1 text-left w-full"
                        >
                          <Link
                            to={subItem.href}
                            onClick={() => {
                              setMenuOpen(false);
                              setDropdownOpen(false);
                            }}
                            className="text-[#2d6a4f] hover:text-[#e76f51] block"
                          >
                            {subItem.name}
                          </Link>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#2d6a4f] hover:text-[#e76f51] transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
            <button className="bg-[#8DC63F] text-white px-4 py-2 rounded-md hover:bg-[#C1272D] transition-colors w-full">
              Free Consultation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
