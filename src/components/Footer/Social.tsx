import Image from 'next/image';
import Link from 'next/link';

type Props = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

const Social: React.FC<Props> = (props) => {
  const {
    href,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
  } = props;
  
  return (
    <Link href={href} target='_blank'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </Link>
  );
};

export { Social };