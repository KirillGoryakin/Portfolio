import projectsJSON from '@p/projects.json';
import { Section } from '@/components/Section';
import { Project } from '@/appTypes';
import { GetStaticProps } from 'next';
import { SectionTitle } from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import Head from 'next/head';
import { motion } from 'framer-motion';
import style from '@/styles/pages/Project.module.scss';

const projects = projectsJSON as Project[];

export const getStaticPaths = async () => {
  type Path = { params: { id: string } };
  const paths: Path[] = [];
  
  projects.forEach(project => {
    paths.push({ params: { id: project.id } });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const project = projects.find(project => project.id === id);
  
  return {
    props: {
      project,
    },
  };
};

type Props = {
  project: Project | undefined;
};

const ProjectPage: React.FC<Props> = ({ project }) => {
  const animationProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { delay: 0.1 },
  };
  
  return (
    <Section className={style.projectSection}>
      <Head>
        <title>{project ? project.title : 'Not Found'} - Kirill Goryakin</title>
      </Head>
      
      {!project
        ? (<SectionTitle>Not Found</SectionTitle>)
        : (<>
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
              <h5>Features</h5>
              <ul>
                {project.features.map(item => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
            <motion.div className={style.technologies} {...animationProps}>
              <h5>Technologies</h5>
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
                Demo
              </Button>
            )}

            {project.repositoryUrl && (
              <Link
                className={style.repositoryButton}
                href={project.repositoryUrl}
                target='_blank'
              >
                <span>GitHub repository</span>
              </Link>
            )}
          </motion.div>
        </>)}
    </Section>
  );
};

export default ProjectPage;