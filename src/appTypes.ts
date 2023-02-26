
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  features: string[];
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
}

export type Projects = { [locale: string]: Project }[];