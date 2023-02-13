import styles from '@/styles/Navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>
        <b>Developer</b> portfolio
      </h2>

      <nav className={styles.nav}>
        <Link href='#projects'>Projects</Link>
        <Link href='#skills'>Skills</Link>
        <Link href='#contacts'>Contacts</Link>
      </nav>
    </header>
  );
};

export { Navbar };