import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code2, Database, Network, FileDown, Mail, Phone } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.2,
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
    <section id="about" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed font-medium">
          "Hi, I’m Sibsankar! A first-year BTech CSE (AI & ML) student passionate about machine learning, Artificial Intelligence, and their real-world potential. Building my skills in Data Structures, Algorithms, and coding projects, I enjoy exploring AI tools/software to innovate. Keen to grow, collaborate, and contribute to impactful tech solutions while staying connected to the AI community."
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <Brain className="text-sky-500" size={20} />
              <span>Machine Learning </span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <Code2 className="text-sky-500" size={20} />
              <span>Python & Java</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <Database className="text-sky-500" size={20} />
              <span>Data Structure & Algorithm</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <Network className="text-sky-500" size={20} />
              <span>AI Tools & Softwares</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <motion.a 
              href="mailto:work.sibsankar@gmail.com"
              className="flex items-center gap-3 p-3 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-sky-500/10 hover:border-sky-500 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="p-2 bg-sky-500/10 rounded-md">
                <Mail className="text-sky-500" size={20} />
              </div>
              <span className="text-slate-300 font-medium">work.sibsankar@gmail.com</span>
            </motion.a>
            
            <motion.a 
              href="tel:+918144258284"
              className="flex items-center gap-3 p-3 bg-slate-800/80 border border-slate-700 rounded-lg hover:bg-sky-500/10 hover:border-sky-500 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="p-2 bg-sky-500/10 rounded-md">
                <Phone className="text-sky-500" size={20} />
              </div>
              <span className="text-slate-300 font-medium">+91 81442 58284</span>
            </motion.a>
          </div>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-400 text-white rounded-lg hover:translate-y-[-5px] hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            <FileDown size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-sky-400 rounded-lg blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://res.cloudinary.com/dvmsikesd/image/upload/v1741151798/uogqkmiuyqeavtzlr3ye.webp"
              alt="AI Development Workspace"
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};