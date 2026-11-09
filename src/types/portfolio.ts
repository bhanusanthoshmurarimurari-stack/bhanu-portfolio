export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location?: string;
  statusText: string;
  availability: string;
  github: string;
  linkedin: string;
  headline: string;
  heroIntro: string;
  aboutIntro: string;
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools';
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  architectureHighlights: string[];
  technologies: string[];
  isPlaceholder?: boolean;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  accentColor?: string;
  mockupType: 'browser' | 'code' | 'dashboard';
}

export interface EducationItem {
  institution: string;
  year: string;
  location?: string;
  description: string;
  highlights?: string[];
  isRecent?: boolean;
}

export interface PhilosophyPillar {
  title: string;
  principle: string;
  description: string;
}

