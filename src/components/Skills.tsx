import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Coffee, Code2, FileCode2, FileJson, Cpu, Boxes, Brain, Network, Github, Github as Git } from 'lucide-react';

interface Skill {
  name: string;
  progress: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Java', progress: 50, icon: <Coffee /> },
  { name: 'C', progress: 50, icon: <Code2 /> },
  { name: 'Python', progress: 50, icon: <FileCode2 /> },
  { name: 'HTML', progress: 25, icon: <FileJson /> },
  { name: 'CSS', progress: 25, icon: <Cpu /> },
  { name: 'JavaScript', progress: 25, icon: <Boxes /> },
  { name: 'Numpy', progress: 75, icon: <Brain /> },
  { name: 'Pandas', progress: 50, icon: <Git /> },
  { name: 'Matplot', progress: 20, icon: <Git /> },
  { name: 'SckitLearn', progress: 60, icon: <Network /> },
  { name: 'GitHub', progress: 80, icon: <Github /> },
  { name: 'Git', progress: 80, icon: <Git /> },
];

const SkillCard = ({ skill, variants }: { skill: Skill; variants: any }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      className="bg-surface/40 rounded-lg p-6 group hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:border-sky-500 border border-transparent"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-slate-400 group-hover:text-sky-500 transition-colors duration-300">
          {React.cloneElement(skill.icon as React.ReactElement, { size: 32 })}
        </div>
        <h3 className="text-xl font-semibold text-slate-100">{skill.name}</h3>
      </div>
      
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.progress}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-full bg-sky-500 rounded-full"
        />
      </div>
      <div className="mt-2 text-right text-sm text-slate-400 font-medium">
        {skill.progress}%
      </div>
    </motion.div>
  );
};

export const Skills = () => {
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

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent mb-6">
            Skills & Abilities
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical expertise and proficiency levels
            across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} variants={itemVariants} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};