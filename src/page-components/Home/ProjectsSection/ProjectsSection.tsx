import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { motion, Variants } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import style from './style.module.scss';
import { useRouter } from 'next/router';
import { getProjects } from '@/utils/getProjects';
import { __ } from '@/utils/translate';

const ProjectsSection = () => {
  const { locale: l } = useRouter();
  
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
      <SectionTitle>{__('Projects', l)}</SectionTitle>

      <motion.div
        className={style.projects}
        variants={cardListVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        {getProjects(l).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </Section>
  );
};

export { ProjectsSection };