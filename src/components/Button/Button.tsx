import style from './style.module.scss';
import Link from 'next/link';

type LinkProps = {
  type: 'link';
  href: string;
};

type ButtonProps = {
  type: 'button';
};

type Props = (LinkProps | ButtonProps) & {
  children: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  buttonProps?: {
    [key: string]: any;
  };
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    className,
    onClick = () => {},
    buttonProps,
  } = props;
  
  if (props.type === 'link') {
    return (
      <Link
        className={`${style.button} ${className}`}
        onClick={onClick}
        href={props.href}
        target='_blank'
        {...buttonProps}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={`${style.button} ${className}`}
      onClick={onClick}
      {...buttonProps}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };