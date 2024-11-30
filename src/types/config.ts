export interface TeamMember {
  image: string;
  name: string;
  position: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  completion: string;
  client: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  content: string;
  rating: number;
  project: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  social: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

export interface SiteConfig {
  company: CompanyInfo;
  team: TeamMember[];
  milestones: Milestone[];
  projects: Project[];
  testimonials: Testimonial[];
}