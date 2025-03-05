import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const ContactIcon = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <motion.button
        onClick={scrollToContact}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-400 text-white shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Contact me"
        title="Contact me"
      >
        <MessageCircle size={24} />
      </motion.button>
    </motion.div>
  );
};