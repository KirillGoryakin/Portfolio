import style from './style.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={style.header}>
      <h2 className={style.logo}>
        <b>Developer</b> portfolio
      </h2>

      <nav className={style.nav}>
        <Link href='#projects'>Projects</Link>
        <Link href='#skills'>Skills</Link>
        <Link href='#contacts'>Contacts</Link>
      </nav>
    </header>
  );
};

export { Navbar };