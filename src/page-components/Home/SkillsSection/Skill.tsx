import Image from 'next/image';
import style from './style.module.scss';

type Props = {
  children: string;
  src: string;
};

const Skill: React.FC<Props> = ({ children, src }) => {
  return (
    <div className={style.skill}>
      <Image
        className={style.image}
        src={src}
        alt={children}
        width={64}
        height={64}
      />

      <div className={style.text}>{children}</div>
    </div>
  );
};

export { Skill };