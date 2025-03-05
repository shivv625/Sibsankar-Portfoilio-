import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface Education {
  instituteName: string;
  image: string;
  degree: string;
  year: string;
  grade: string;
}

const educations: Education[] = [
  {
    instituteName: "GITA Autonomous College",
    image: "https://res.cloudinary.com/dvmsikesd/image/upload/v1741155660/h2xjalniekx0eran9w4h.jpg",
    degree: "Bachelor of Technology in Computer Science",
    year: "2024-2028",
    grade: "Continuing"
  },
  {
    instituteName: "SBD International School",
    image: "https://res.cloudinary.com/dvmsikesd/image/upload/v1741156385/inlkjurluhk9zjfnopc7.avif",
    degree: "Higher Secondary Education",
    year: "2022-2024",
    grade: "8.9/10"
  }
];

const EducationCard = ({ education }: { education: Education }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden bg-surface/40 hover:translate-y-[-8px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:border-sky-500 border border-transparent"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg">
        <img
          src={education.image}
          alt={education.instituteName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-slate-100 text-center">{education.instituteName}</h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-slate-300">
            <GraduationCap className="text-sky-500 flex-shrink-0" size={20} />
            <span className="text-slate-300 font-medium">{education.degree}</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300">
            <Calendar className="text-sky-500 flex-shrink-0" size={20} />
            <span className="text-slate-400 font-medium">{education.year}</span>
          </div>
          
          <div className="flex items-center gap-3 text-slate-300">
            <Award className="text-sky-500 flex-shrink-0" size={20} />
            <span className="text-slate-400 font-medium">Grade: {education.grade}</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-sky-500 pointer-events-none"
      />
    </motion.div>
  );
};

export const Education = () => {
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
    <section id="education" className="min-h-screen py-20 px-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-50 to-sky-500 bg-clip-text text-transparent mb-6">
            My Education
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            My academic journey that has shaped my knowledge and expertise in computer science and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <motion.div key={index} variants={itemVariants}>
              <EducationCard education={education} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};