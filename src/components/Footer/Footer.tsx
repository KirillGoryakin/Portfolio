import Link from 'next/link';
import { Socials } from './Socials';
import style from './style.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.title}>Contacts</div>
      
      <Socials />

      <Link
        className={style.email}
        href='mailto:kirillgoryakin.dev@gmail.com'
      >
        kirillgoryakin.dev@gmail.com
      </Link>
    </footer>
  );
};

export { Footer };