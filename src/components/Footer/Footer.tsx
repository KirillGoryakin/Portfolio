import { Socials } from './Socials';
import style from './style.module.scss';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Socials />

      <div className={style.credits}>
        Kirill Goryakin
      </div>
    </footer>
  );
};

export { Footer };