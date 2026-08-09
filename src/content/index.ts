import heroJson from "./data/hero.json";
import aboutJson from "./data/about.json";
import experienceJson from "./data/experience.json";
import projectsJson from "./data/projects.json";
import skillsJson from "./data/skills.json";
import socialLinksJson from "./data/social-links.json";
import navJson from "./data/nav.json";
import metaJson from "./data/meta.json";

export interface HeroContent {
  greeting: string;
  name: string;
  title: string;
  tagLine: string;
  description: string;
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  resumeHref: string;
}

export interface NavItem {
  label: string;
  value: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  icon: string;
  link: string;
}

export interface Skill {
  name: string;
  rate: number;
}

export interface Experience {
  title: string;
  company: string;
  link: string | boolean;
  employment_type: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  technologies: string[];
  playstore_link: string | null;
  github_link: string;
  website_link: string;
}

export interface MetaTagConfig {
  title: string;
  description: string;
  url: string;
  twitter: {
    card: string;
    site: string;
    creator: string;
    description: string;
  };
}

export const HERO: HeroContent = heroJson;
export const ABOUT: AboutContent = aboutJson;
export const EXPERIENCE: Experience[] = experienceJson as Experience[];
export const projects: Project[] = projectsJson as Project[];
export const skills: Skill[] = skillsJson;
export const SOCIAL_LINKS: Record<string, SocialLink> = socialLinksJson;
export const MENU_ITEM: NavItem[] = navJson;
export const META_TAGS: MetaTagConfig = metaJson;
