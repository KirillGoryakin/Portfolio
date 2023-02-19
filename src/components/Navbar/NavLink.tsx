import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';
import { motion } from 'framer-motion';
import style from './style.module.scss';

type Props = {
  children: string;
  href: string;
  anchorId?: string;
  onClick?: (e: MouseEvent) => void;
};

const NavLink: React.FC<Props> = ({ children, href, anchorId, onClick }) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent) => {
    if (anchorId) {
      e.preventDefault();

      if (router.asPath === href) {
        const anchor = document.getElementById(anchorId);
        anchor?.scrollIntoView({ behavior: 'smooth' });
      }
      else {
        router.push(`${href}#${anchorId}`);
      }
    }

    if (onClick) onClick(e);
  };
  
  return (
    <Link
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export { NavLink };