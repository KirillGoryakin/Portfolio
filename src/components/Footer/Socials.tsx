import { Social } from './Social';
import style from './style.module.scss';

const Socials = () => {
  return (
    <div className={style.socials}>
      <Social
        href='https://www.linkedin.com/in/kirill-goryakin-42b495265/'
        imageSrc='/images/socials/linkedin.svg'
        imageAlt='LinkedIn'
        imageWidth={38}
        imageHeight={38}
      />

      <Social
        href='https://github.com/KirillGoryakin/'
        imageSrc='/images/socials/github.svg'
        imageAlt='GitHub'
        imageWidth={38}
        imageHeight={38}
      />

      <Social
        href='https://t.me/kirillgoryakin/'
        imageSrc='/images/socials/telegram.svg'
        imageAlt='Telegram'
        imageWidth={38}
        imageHeight={38}
      />

      <Social
        href='https://twitter.com/KirillGoryakin/'
        imageSrc='/images/socials/twitter.svg'
        imageAlt='Twitter'
        imageWidth={38}
        imageHeight={38}
      />
    </div>
  );
};

export { Socials };