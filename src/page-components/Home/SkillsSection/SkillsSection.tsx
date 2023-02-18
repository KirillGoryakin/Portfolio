import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { Skill } from './Skill';
import { motion, Variants } from 'framer-motion';
import style from './style.module.scss';

const SkillsSection = () => {
  const skillsVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  return (
    <Section id='skills' className={style.skillsSection}>
      <SectionTitle>Skills</SectionTitle>
      
      <motion.div
        variants={skillsVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className={style.title}>
          Frontend
        </div>
        <div className={style.skills}>
          <Skill src='/images/skills/html.svg'>HTML</Skill>
          <Skill src='/images/skills/css.svg'>CSS</Skill>
          <Skill src='/images/skills/js.svg'>JavaScript</Skill>
          <Skill src='/images/skills/ts.svg'>TypeScript</Skill>
        </div>
        <div className={style.skills}>
          <Skill src='/images/skills/react.svg'>ReactJS</Skill>
          <Skill src='/images/skills/next.svg'>NextJS</Skill>
          <Skill src='/images/skills/redux.svg'>Redux</Skill>
          <Skill src='/images/skills/mobx.svg'>MobX</Skill>
        </div>
        <div className={style.skills}>
          <Skill src='/images/skills/bootstrap.svg'>Bootstrap</Skill>
          <Skill src='/images/skills/materialui.svg'>MaterialUI</Skill>
          <Skill src='/images/skills/chakraui.svg'>ChakraUI</Skill>
          <Skill src='/images/skills/framer.svg'>Framer Motion</Skill>
        </div>
        <div className={style.skills}>
          <Skill src='/images/skills/graphql.svg'>GraphQL</Skill>
          <Skill src='/images/skills/jest.svg'>Jest</Skill>
          <Skill src='/images/skills/cypress.svg'>Cypress</Skill>
        </div>

        <div className={style.title}>
          Other
        </div>
        <div className={style.skills}>
          <Skill src='/images/skills/nodejs.svg'>NodeJS</Skill>
          <Skill src='/images/skills/webpack.svg'>Webpack</Skill>
          <Skill src='/images/skills/eslint.svg'>ESLint</Skill>
          <Skill src='/images/skills/mongodb.svg'>MongoDB</Skill>
          <Skill src='/images/skills/docker.svg'>Docker</Skill>
        </div>
      </motion.div>
    </Section>
  );
};

export { SkillsSection };