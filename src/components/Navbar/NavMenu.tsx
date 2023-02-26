import { useWindowSize } from '@/hooks/windowSize';
import { __ } from '@/utils/translate';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from './NavLink';
import style from './style.module.scss';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NavMenu: React.FC<Props> = ({ open, setOpen }) => {
  const { locale: l } = useRouter();
  const { width } = useWindowSize();
  const mobile = width ? width <= 767 : false;

  const mobileNavVatiants: Variants = {
    hidden: { scaleY: mobile ? 0 : 1 },
    show: { scaleY: 1 },
  };

  return (
    <>
      <motion.nav
        className={style.nav}
        variants={mobileNavVatiants}
        initial='hidden'
        animate={open ? 'show' : 'hidden'}
        transition={{ duration: 0.2 }}
      >
        <NavLink
          href='/'
          anchorId='projects'
          onClick={() => setOpen(false)}
        >
          {__('Projects', l)}
        </NavLink>
        <NavLink
          href='/'
          anchorId='skills'
          onClick={() => setOpen(false)}
        >
          {__('Skills', l)}
        </NavLink>
        <NavLink
          href='/'
          anchorId='contacts'
          onClick={() => setOpen(false)}
        >
          {__('Contacts', l)}
        </NavLink>
      </motion.nav>

      {mobile && (
        <button
          className={style.mobileButton}
          onClick={() => setOpen(prev => !prev)}
        >
          <Image
            src='/images/menu.svg'
            alt='Menu'
            width={32}
            height={32}
          />
        </button>
      )}
    </>
  );
};

export { NavMenu };