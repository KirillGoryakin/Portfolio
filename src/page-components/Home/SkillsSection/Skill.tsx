import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import style from './style.module.scss';

type Props = {
  children: string;
  src: string;
};

const Skill: React.FC<Props> = ({ children, src }) => {
  const skillVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  return (
    <motion.div
      className={style.skill}
      variants={skillVariants}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        className={style.image}
        src={src}
        alt={children}
        width={64}
        height={64}
      />

      <div className={style.text}>{children}</div>
    </motion.div>
  );
};

export { Skill };