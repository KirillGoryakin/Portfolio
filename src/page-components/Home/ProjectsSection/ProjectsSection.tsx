import { Project } from '@/appTypes';
import projects from '@p/projects.json';
import { ProjectCard } from './ProjectCard';
import style from './style.module.scss';

const ProjectsSection = () => {
  return (
    <section className={style.projectsSection}>
      <h1 className={style.title}>Projects</h1>

      <div className={style.projects}>
        {(projects as Project[]).map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export { ProjectsSection };