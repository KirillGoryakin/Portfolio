import { __ } from '@/utils/translate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Socials } from './Socials';
import style from './style.module.scss';

const Footer = () => {
  const { locale: l } = useRouter();
  
  return (
    <footer id='contacts' className={style.footer}>
      <div className={style.title}>{__('Contacts', l)}</div>
      
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