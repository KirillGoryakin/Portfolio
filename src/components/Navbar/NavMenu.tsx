import { useWindowSize } from '@/hooks/windowSize';
import { AnimateSharedLayout, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { NavLink } from './NavLink';
import style from './style.module.scss';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const NavMenu: React.FC<Props> = ({ open, setOpen }) => {
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
        <AnimateSharedLayout>
          <NavLink
            href='/'
            anchorId='projects'
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            href='/'
            anchorId='skills'
            onClick={() => setOpen(false)}
          >
            Skills
          </NavLink>
          <NavLink
            href='/'
            anchorId='contacts'
            onClick={() => setOpen(false)}
          >
            Contacts
          </NavLink>
        </AnimateSharedLayout>
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