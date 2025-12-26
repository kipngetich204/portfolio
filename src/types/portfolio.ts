/* =======================
   Core Portfolio Data
======================= */

export interface Personal {
  name: string;
  title: string;
  brandName: string;
  location: string;
  avatar: string; // Tailwind gradient or image URL
  profileImage?: string; // URL to profile image
  hobbies?: string[]; // List of hobbies/interests
}

export interface CtaButton {
  text: string;
  target: string; // section id
  primary?: boolean;
}

export interface Hero {
  greeting: string;
  ctaButtons: CtaButton[];
}

export interface About {
  title: string;
  paragraphs: string[];
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  title: string;
  categories: SkillCategory[];
}

export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'backend'
  | 'design'
  | 'other';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category?: ProjectCategory;
  image?: string;
  gradient?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface Projects {
  title: string;
  items: Project[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
  rows?: number;
}

export interface Contact {
  title: string;
  description: string;
  fields: FormField[];
  submitLabel: string;
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'email';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
}

export interface Footer {
  copyright: string;
}

// types/stats.types.ts

export interface Stats {
  visitors: number;
  contacts: number;
}


/* =======================
   Root Data Shape
======================= */

export interface PortfolioData {
  personal: Personal;
  hero: Hero;
  about: About;
  skills: Skills;
  projects: Projects;
  contact: Contact;
  social: SocialLink[];
  footer: Footer;
  stats: Stats;
}
