import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-semibold text-slate-100">Contact Information</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4 p-4 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-sky-500/10 hover:border-sky-500 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Mail className="text-sky-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Email</h4>
                  <a href="mailto:work.sibsankar@gmail.com" className="text-slate-400 hover:text-sky-500 transition-colors">
                    work.sibsankar@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-sky-500/10 hover:border-sky-500 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <Phone className="text-sky-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Phone</h4>
                  <a href="tel:+918144258284" className="text-slate-400 hover:text-sky-500 transition-colors">
                    +91 81442 58284
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-sky-500/10 hover:border-sky-500 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <div className="p-3 bg-sky-500/10 rounded-lg">
                  <MapPin className="text-sky-500" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Location</h4>
                  <p className="text-slate-400">
                    Odisha, India ~751002
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-surface/40 rounded-lg p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold text-slate-100 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-lg hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Send size={20} />
                  Submit Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};