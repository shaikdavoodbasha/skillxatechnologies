import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Programs', path: '/programs' },
    { name: 'About', path: '/about' },
    { name: 'Career Support', path: '/career-support' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center h-20 px-8 max-w-[1280px] mx-auto">
        <NavLink to="/" className="text-2xl font-black tracking-tighter text-red-600">
          SkillXa Technologies
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-inter antialiased text-sm font-medium transition-colors ${isActive
                  ? 'text-red-600 border-b-2 border-red-600 pb-1'
                  : 'text-gray-600 hover:text-red-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-container text-on-primary-container font-button text-button px-8 py-3 rounded-lg red-glow-hover transition-all duration-200 active:scale-95"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-900" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col items-start px-8 py-4 gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `font-inter antialiased text-lg font-medium transition-colors w-full ${isActive ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdjovDbLOmgGbHfRXDM_klJWvgXabTvGJEqoaaR9_Wh799Wqw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary-container text-on-primary-container font-button text-button px-8 py-3 rounded-lg w-full mt-4 active:scale-95"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
