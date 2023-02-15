import style from './style.module.scss';

type Props = {
  children: string;
  className?: string;
  [key: string]: any;
};

const SectionTitle: React.FC<Props> = ({ children, className, ...other }) => 
  <h1
    className={`${style.sectionTitle} ${className}`}
    {...other}
  >
    {children}
  </h1>;

export { SectionTitle };