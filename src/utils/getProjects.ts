import { Project, Projects } from '@/appTypes';
import projectsJSON from '@p/projects.json';

export const getProjects = (locale?: string): Project[] =>
  (projectsJSON as Projects).map(p => p[locale || 'en']);