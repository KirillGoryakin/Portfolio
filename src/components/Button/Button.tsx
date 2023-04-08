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
  variant?: 'contained' | 'outlined';
  className?: string;
  onClick?: React.MouseEventHandler;
};

const Button: React.FC<Props> = (props) => {
  const {
    children,
    variant = 'contained',
    className,
    onClick = () => {},
  } = props;

  const cls = `${style.button} ${className} ${style[variant]}`;
  
  if (props.type === 'link') {
    return (
      <Link
        className={cls}
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
      className={cls}
      onClick={onClick}
      {...props.buttonProps}
    >
      <span>{children}</span>
    </button>
  );
};

export { Button };