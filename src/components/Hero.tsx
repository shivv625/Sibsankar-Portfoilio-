import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { TypeAnimation } from 'react-type-animation';

export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(30,41,59,0.3)_30%,rgba(14,165,233,0.15)_100%)]" />
      <ParticleField />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div 
          variants={item}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-sky-400 rounded-full blur-2xl opacity-20"></div>
          <motion.div
            className="relative rounded-full overflow-hidden border-4 border-sky-500/50 shadow-[0_0_20px_rgba(14,165,233,0.3)] w-[200px] h-[200px] mx-auto"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://res.cloudinary.com/dvmsikesd/image/upload/v1741010722/filf2w0nqdtzv2dqu5t3.jpg"
              alt="Shiv's Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="max-w-3xl">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent tracking-tight"
          >
            <TypeAnimation
              sequence={[
                'Sibsankar Samal',
                1000,
                'AI & ML Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.h1>

          <motion.p
            variants={item}
            className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed font-medium"
          >
            "Aspiring AI and ML developer, learning and building my way through the world of technology."
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-lg flex items-center gap-2 hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              Get in touch <ArrowRight size={20} />
            </motion.a>

            <motion.div variants={item} className="flex items-center gap-4">
              <motion.a
                href="https://github.com/shivv625"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sibsankarsamal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:work.sibsankar@gmail.com"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/ft.shivv?igsh=MTRob3hzaXMzcXU1eA=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-slate-700 rounded-lg hover:border-sky-500 hover:text-sky-500 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};