import style from './style.module.scss';

const WelcomeSection = () => {
  return (
    <section className={style.welcomeSection}>
      <div className={`${style.text} ${style.text1}`}>
        Hi, my name is <span>Kirill</span>
      </div>
      <div className={`${style.text} ${style.text2}`}>
        a frontend developer
      </div>
      <div className={`${style.text} ${style.text3}`}>
        with passion for learning and creating.
      </div>

      <a
        className={style.downloadCV}
        href='/pdf/cv.pdf'
        download='KirillGoryakin-CV.pdf'
      >
        Download CV
      </a>
    </section>
  );
};

export { WelcomeSection };