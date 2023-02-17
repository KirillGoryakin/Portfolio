import { MouseEvent } from 'react';

type GetAnchorHandler =
  (anchorId: string) => (e: MouseEvent) => void; 

export const getAnchorHandler: GetAnchorHandler = (anchorId) => {
  return e => {
    const anchor = document.getElementById(anchorId);
    e.preventDefault();
    anchor?.scrollIntoView({ behavior: 'smooth' });
  };
};