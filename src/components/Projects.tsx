import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  image: string;
  summary: string;
  codeUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    title: "AI Chatbot",
    image: "https://res.cloudinary.com/dvmsikesd/image/upload/v1741154963/kaunnyfybj0semklolom.svg",
    summary: "it works using NLP and answers the Questions efficiently (upgrading).",
    codeUrl: "https://github.com/shivv625/Alternex-GPT",
    liveUrl: "https://alternexgpt.streamlit.app/"
  },
  {
    title: "Hand Gesture Recognisation",
    image: "https://res.cloudinary.com/dvmsikesd/image/upload/v1741156222/upwrqbxbt1sp83bm41js.jpg",
    summary: "Currently working on it",
    codeUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    image: "https://res.cloudinary.com/dvmsikesd/image/upload/v1741156733/zndkraqyh9oqa0nyracx.png",
    summary: "A modern portfolio website showcasing my projects and skills, built with React and Framer Motion for smooth animations.",
    codeUrl: "https://github.com",
    liveUrl: "https://demo.com"
  }
  
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative group rounded-lg overflow-hidden bg-surface/40 hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:border-sky-500 border border-transparent"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 font-medium">{project.summary}</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ 
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="flex items-center gap-4 relative z-10"
        >
          <motion.a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-400 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} />
            Code
          </motion.a>
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(71,85,105,0.3)] hover:translate-y-[-2px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            Visit
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.8 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

export const Projects = () => {
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
    <section id="projects" className="min-h-screen py-20 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent mb-6">
            Projects Made
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            A showcase of my recent projects, demonstrating my expertise in AI, machine learning,
            and full-stack development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};