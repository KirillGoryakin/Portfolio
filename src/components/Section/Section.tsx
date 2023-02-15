import style from './style.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

const Section: React.FC<Props> = ({ children, className, ...other }) =>
  <section
    className={`${style.section} ${className}`}
    {...other}
  >
    {children}
  </section>;

export { Section };