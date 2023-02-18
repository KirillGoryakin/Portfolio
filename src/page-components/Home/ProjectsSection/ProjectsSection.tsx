import { Project } from '@/appTypes';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { motion, Variants } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import projects from '@p/projects.json';
import style from './style.module.scss';

const ProjectsSection = () => {
  const cardListVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  return (
    <Section id='projects' className={style.projectsSection}>
      <SectionTitle>Projects</SectionTitle>

      <motion.div
        className={style.projects}
        variants={cardListVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {(projects as Project[]).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export { ProjectsSection };