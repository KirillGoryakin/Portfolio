import { Button } from '@/components/Button';
import { motion, Variants } from 'framer-motion';
import { __ } from '@/utils/translate';
import style from './style.module.scss';
import { useRouter } from 'next/router';

const WelcomeSection = () => {
  const { locale: l } = useRouter();
  
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
        {__('Hi, my name is', l)} <span>{__('Kirill', l)}</span>
      </motion.div>
      <motion.div
        className={`${style.text} ${style.text2}`}
        {...getAnimationProps(0.4)}
      >
        {__('a frontend developer', l)}
      </motion.div>
      <motion.div
        className={`${style.text} ${style.text3}`}
        {...getAnimationProps(0.6)}
      >
        {__('with passion for learning and creating', l)}
      </motion.div>

      <motion.div
        className={style.downloadCV}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          type='link'
          href={`/pdf/cv${l !== 'en' ? `_${l}` : ''}.pdf`}
          buttonProps={{
            download: 'KirillGoryakin-CV.pdf',
            locale: false,
          }}
        >
          {__('Download CV', l)}
        </Button>
      </motion.div>
    </section>
  );
};

export { WelcomeSection };