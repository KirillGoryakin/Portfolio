import { Project } from '@/appTypes';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      className={style.projectCard}
      href={`/project/${project.id}`}
    >
      <Image
        className={style.thumbnail}
        src={project.thumbnailUrl}
        alt='Thumbnail'
        width={370}
        height={280}
      />

      <div className={style.projectTitle}>
        <span>{project.title}</span>
      </div>
    </Link>
  );
};

export { ProjectCard };