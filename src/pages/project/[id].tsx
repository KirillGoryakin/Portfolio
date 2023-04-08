import projectsJSON from '@p/projects.json';
import { Section } from '@/components/Section';
import { Project, Projects } from '@/appTypes';
import { GetStaticPaths, GetStaticProps } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import Head from 'next/head';
import { motion } from 'framer-motion';
import style from '@/styles/pages/Project.module.scss';
import { __ } from '@/utils/translate';
import { useRouter } from 'next/router';

const projects = projectsJSON as Projects;

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  type Path = { params: { id: string }, locale: string };
  const paths: Path[] = [];
  
  projects.forEach(project => {
    locales?.forEach(locale => {
      paths.push({ params: { id: project.en.id }, locale });
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const locale = context.locale || 'en';

  const project = projects.find(project => project[locale].id === id);
  
  return {
    props: {
      project: project && project[locale],
    },
  };
};

type Props = {
  project: Project | undefined;
};

const ProjectPage: React.FC<Props> = ({ project }) => {
  const { locale: l } = useRouter();

  const animationProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { delay: 0.1 },
  };
  
  if (!project) return null;
  
  return (
    <Section className={style.projectSection}>
      <Head>
        <title>{project.title} - Kirill Goryakin</title>
      </Head>

      <SectionTitle>{project.title}</SectionTitle>

      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <Image
          className={style.thumbnail}
          src={project.thumbnailUrl}
          alt='Project thumbnail'
          width={865}
          height={650}
        />
      </motion.div>

      <motion.div className={style.description} {...animationProps}>
        {project.description}
      </motion.div>

      <div className={style.lists}>
        <motion.div className={style.features} {...animationProps}>
          <h5>{__('Features', l)}</h5>
          <ul>
            {project.features.map(item => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>
        <motion.div className={style.technologies} {...animationProps}>
          <h5>{__('Technologies', l)}</h5>
          <ul>
            {project.technologies.map(item => <li key={item}>{item}</li>)}
          </ul>
        </motion.div>
      </div>

      <motion.div className={style.buttons} {...animationProps}>
        {project.demoUrl && (
          <Button
            className={style.demoButton}
            type='link'
            href={project.demoUrl}
          >
            {__('Demo', l)}
          </Button>
        )}

        {project.repositoryUrl && (
          <Button
            type='link'
            variant='outlined'
            className={style.repositoryButton}
            href={project.repositoryUrl}
            buttonProps={{
              target: '_blank',
            }}
          >
            {__('GitHub repository', l)}
          </Button>
        )}
      </motion.div>
    </Section>
  );
};

export default ProjectPage;