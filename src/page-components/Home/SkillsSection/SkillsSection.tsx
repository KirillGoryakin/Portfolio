import { Section } from '@/components/Section';
import { SectionTitle } from '@/components/SectionTitle';
import { Skill } from './Skill';
import style from './style.module.scss';

const SkillsSection = () => {
  return (
    <Section id='skills' className={style.skillsSection}>
      <SectionTitle>Skills</SectionTitle>
      
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
    </Section>
  );
};

export { SkillsSection };