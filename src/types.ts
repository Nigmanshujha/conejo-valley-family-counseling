export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface TeamMember {
  name: string;
  title: string;
  href: string;
  credentials?: string;
  bio?: string;
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OfficeFeature {
  title: string;
  description: string;
  image: string;
  tag: string;
}
