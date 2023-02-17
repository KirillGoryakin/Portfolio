import projectsJSON from '@p/projects.json';
import style from '@/styles/pages/Project.module.scss';
import { Section } from '@/components/Section';
import { Project } from '@/appTypes';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import Head from 'next/head';

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
  
  return (
    <Section className={style.projectSection}>
      <Head>
        <title>{project ? project.title : 'Not Found'} - Kirill Goryakin</title>
      </Head>
      
      {!project
        ? (<SectionTitle>Not Found</SectionTitle>)
        : (<>
          <SectionTitle>{project.title}</SectionTitle>

          <Image
            className={style.thumbnail}
            src={project.thumbnailUrl}
            alt='Project thumbnail'
            width={865}
            height={650}
          />

          <div className={style.description}>{project.description}</div>

          <div className={style.lists}>
            <div className={style.features}>
              <h5>Features</h5>
              <ul>
                {project.features.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={style.technologies}>
              <h5>Technologies</h5>
              <ul>
                {project.technologies.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className={style.buttons}>
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
          </div>
        </>)}
    </Section>
  );
};

export default ProjectPage;