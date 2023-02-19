import style from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { NavMenu } from './NavMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <header className={style.header}>
        <h2 className={style.logo}>
          <Link href='/'>
            <b>Developer</b> portfolio
          </Link>
        </h2>

        <NavMenu open={open} setOpen={setOpen} />
      </header>
    </ClickAwayListener>
  );
};

export { Navbar };