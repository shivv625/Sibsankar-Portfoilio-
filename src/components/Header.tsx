import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
        isScrolled ? 'bg-[rgba(15,23,42,0.95)] backdrop-blur-lg border-b border-[rgba(51,65,85,0.4)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent hover:tracking-wider transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Sh!v
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className={`relative text-slate-300 hover:text-sky-500 transition-colors duration-300 py-2 group ${
                    activeSection === item.href.substring(1) ? 'text-sky-500' : ''
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    activeSection === item.href.substring(1) ? 'scale-x-100' : ''
                  }`}></span>
                </a>
                {index < navItems.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-900 absolute top-full left-0 right-0 border-b border-slate-800"
        >
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`py-3 text-slate-300 hover:text-sky-500 transition-colors duration-300 ${
                  activeSection === item.href.substring(1) ? 'text-sky-500' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};