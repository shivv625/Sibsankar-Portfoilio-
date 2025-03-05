import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-slate-100 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="text-sky-500" size={18} />
                <a 
                  href="tel:+918144258284" 
                  className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                >
                  +91 81442 58284
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-sky-500" size={18} />
                <a 
                  href="mailto:work.sibsankar@gmail.com" 
                  className="text-slate-400 hover:text-sky-500 transition-colors duration-300"
                >
                  work.sibsankar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-sky-500" size={18} />
                <span className="text-slate-400">
                  Odisha, India ~756101
                </span>
              </li>
            </ul>
          </div>
          
          {/* Designed By */}
          <div className="flex flex-col items-start md:items-end">
            <motion.a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent hover:tracking-wider transition-all duration-300 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Sh!v
            </motion.a>
            <p className="text-slate-400 flex items-center gap-2">
              Designed with <Heart className="text-green-500" size={16} fill="currentColor" /> by Sibsankar
            </p>
            <p className="text-slate-500 text-sm mt-4">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};