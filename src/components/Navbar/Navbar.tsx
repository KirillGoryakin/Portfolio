import style from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState, MouseEvent } from 'react';
import { getAnchorHandler } from '@/utils/getAnchorHandler';
import { useWindowSize } from '@/hooks/windowSize';
import ClickAwayListener from 'react-click-away-listener';

const Navbar = () => {
  const { width } = useWindowSize();
  const mobile = width ? width <= 767 : false;

  const [open, setOpen] = useState(false);

  const mobileNavVatiants: Variants = {
    hidden: { scaleY: 0 },
    show: { scaleY: 1 },
  };

  const getClickHandler = (id: string) => {
    const handleAnchor = getAnchorHandler(id);

    return (e: MouseEvent) => {
      handleAnchor(e);
      setOpen(false);
    };
  };
  
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <header className={style.header}>
        <h2 className={style.logo}>
          <Link href='/'>
            <b>Developer</b> portfolio
          </Link>
        </h2>

        <motion.nav
          className={style.nav}
          variants={mobileNavVatiants}
          initial='hidden'
          animate={open ? 'show' : 'hidden'}
          transition={{ duration: 0.2 }}
        >
          <Link href='/' onClick={getClickHandler('projects')}>Projects</Link>
          <Link href='/' onClick={getClickHandler('skills')}>Skills</Link>
          <Link href='/' onClick={getClickHandler('contacts')}>Contacts</Link>
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
      </header>
    </ClickAwayListener>
  );
};

export { Navbar };