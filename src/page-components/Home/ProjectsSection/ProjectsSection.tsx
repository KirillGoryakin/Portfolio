import { Project } from '@/appTypes';
import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import projects from '@p/projects.json';
import { ProjectCard } from './ProjectCard';
import style from './style.module.scss';

const ProjectsSection = () => {
  return (
    <Section id='projects' className={style.projectsSection}>
      <SectionTitle>Projects</SectionTitle>

      <div className={style.projects}>
        {(projects as Project[]).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export { ProjectsSection };