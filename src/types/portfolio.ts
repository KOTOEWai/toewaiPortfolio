export type ProjectStatus = "Completed" | "In Progress" | "Concept";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  description: string;
  contribution: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string; // Only valid if real, placeholder handled cleanly
  liveUrl?: string;   // Only valid if real
  image?: string;     // Neutral placeholder fallback provided if undefined
  keyLearnings?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface LearningMethod {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  statusBadge: string;
  shortBio: string;
  aboutParagraphs: string[];
  learningApproachIntro: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl?: string; // Optional: path to PDF or Google Drive resume link
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  navigation: NavLink[];
  skillCategories: SkillCategory[];
  projects: Project[];
  learningMethods: LearningMethod[];
}

