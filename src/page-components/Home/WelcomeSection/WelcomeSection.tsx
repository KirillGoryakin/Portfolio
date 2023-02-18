import { Button } from '@/components/Button';
import { motion, Variants } from 'framer-motion';
import style from './style.module.scss';

const WelcomeSection = () => {
  const variants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getAnimationProps = (delay: number) => ({
    variants,
    initial: 'hidden',
    animate: 'visible',
    transition: { delay },
  });
  
  return (
    <section className={style.welcomeSection}>
      <motion.div
        className={style.background}
        initial={{ x: '-50%', y: '-150%' }}
        animate={{ x: '-50%', y: '-50%' }}
      />

      <motion.div
        className={`${style.text} ${style.text1}`}
        {...getAnimationProps(0.2)}
      >
        Hi, my name is <span>Kirill</span>
      </motion.div>
      <motion.div
        className={`${style.text} ${style.text2}`}
        {...getAnimationProps(0.4)}
      >
        a frontend developer
      </motion.div>
      <motion.div
        className={`${style.text} ${style.text3}`}
        {...getAnimationProps(0.6)}
      >
        with passion for learning and creating.
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          type='link'
          className={style.downloadCV}
          href='/pdf/cv.pdf'
          buttonProps={{
            download: 'KirillGoryakin-CV.pdf',
          }}
        >
          Download CV
        </Button>
      </motion.div>
    </section>
  );
};

export { WelcomeSection };