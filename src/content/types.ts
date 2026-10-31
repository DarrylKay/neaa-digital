export type EmploymentType = "contract" | "permanent" | "freelance";

export interface CompanyDetails {
  legalName: string;
  companyNumber: string;
  vatNumber: string;
  registeredIn: string;
  copyrightYear: number;
}

export interface ServiceOffering {
  title: string;
  detail: string;
}

export interface FeaturedCompany {
  name: string;
  href: string;
  logoSrc: string;
  logoAlt: string;
}

export interface Profile {
  name: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  title: string;
  email: string;
  location: string;
  linkedInUrl?: string;
  company: CompanyDetails;
  homeIntro: string[];
  services: ServiceOffering[];
  featuredCompanies: FeaturedCompany[];
  portraitAlt: string;
}

export interface CvRole {
  id: string;
  company: string;
  employmentType: EmploymentType;
  title: string;
  dateRange: string;
  context?: string;
  summary?: string;
  highlights?: string[];
  technologies?: string[];
  logoSrc?: string;
  logoAlt?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CvContent {
  sectionLabel: string;
  focus: string;
  summary: string[];
  roles: CvRole[];
  skillsSectionLabel: string;
  skillGroups: SkillGroup[];
}
