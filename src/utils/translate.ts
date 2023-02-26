import linesJSON from '@p/lines.json';

type Lines = {
  [line: string]: {
    [locale: string]: string;
  };
};

const lines = linesJSON as Lines;

export const __ = (str: string, locale?: string): string =>
  (lines[str] && locale && lines[str][locale]) ? lines[str][locale] : str;