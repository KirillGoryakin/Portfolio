import { ProjectsSection } from '@/page-components/Home/ProjectsSection';
import { SkillsSection } from '@/page-components/Home/SkillsSection';
import { WelcomeSection } from '@/page-components/Home/WelcomeSection';

const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      
      <ProjectsSection />

      <SkillsSection />
    </>
  );
};

export default HomePage;