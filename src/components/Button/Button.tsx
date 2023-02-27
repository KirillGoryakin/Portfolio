import style from './style.module.scss';
import Link from 'next/link';

type LinkProps = {
  type: 'link';
  href: string;
  buttonProps?: React.ComponentProps<typeof Link> | {};
};

type ButtonProps = {
  type: 'button';
  buttonProps?: React.ComponentProps<'button'>;
};

type Props = (LinkProps | ButtonProps) & {
  children: string;
  className?: string;
  onClick?: React.MouseEventHandler;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    className,
    onClick = () => {},
  } = props;
  
  if (props.type === 'link') {
    return (
      <Link
        className={`${style.button} ${className}`}
        onClick={onClick}
        href={props.href}
        target='_blank'
        {...props.buttonProps}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={`${style.button} ${className}`}
      onClick={onClick}
      {...props.buttonProps}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };