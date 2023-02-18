import { Project } from '@/appTypes';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.scss';

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const cardVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  return (
    <motion.div
      className={style.projectCard}
      variants={cardVariants}
      whileHover={{ scale: 1.08 }}
    >
      <Link href={`/project/${project.id}`}>
        <Image
          className={style.thumbnail}
          src={project.thumbnailUrl}
          alt='Thumbnail'
          width={865}
          height={650}
        />

        <div className={style.projectTitle}>
          <span>{project.title}</span>
        </div>
      </Link>
    </motion.div>
  );
};

export { ProjectCard };