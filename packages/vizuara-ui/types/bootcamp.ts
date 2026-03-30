export interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height?: number;
}

export interface ScheduleItem {
  iconName: string;
  text: string;
  color?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MetaConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
}

export interface NavbarConfig {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroConfig {
  badge: string;
  headline: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subtitle: string;
  scheduleItems: ScheduleItem[];
  stats: StatItem[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  modelLogos?: LogoItem[];
  modelLogosLabel?: string;
  universityLogos: LogoItem[];
  universityLabel: string;
}

export interface VideoConfig {
  badge?: string;
  badgeIconName?: string;
  label: string;
  heading: string;
  headingHighlight: string;
  headingSuffix: string;
  youtubeUrl: string;
  youtubeTitle: string;
}

export interface WhyItem {
  iconName: string;
  title: string;
  description: string;
  color: string;
}

export interface WhySectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: WhyItem[];
}

export interface DiagramItem {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export interface DiagramsSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  diagrams: DiagramItem[];
  showContextWindowViz?: boolean;
}

export interface AudienceItem {
  iconName: string;
  title: string;
  description: string;
  tags: string[];
}

export interface AudienceSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: AudienceItem[];
}

export interface CurriculumDay {
  day: number;
  week: number;
  title: string;
  iconName: string;
  topics: string[];
  exercise: string;
  instructor: string;
  mega?: boolean;
  accentColor?: "amber" | "violet";
}

export interface CurriculumSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  overviewImage?: string;
  overviewImageAlt?: string;
  days: CurriculumDay[];
  weekLabels?: Record<number, { label: string; sessions: string }>;
}

export interface DeliverableItem {
  iconName: string;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface DeliverablesSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: DeliverableItem[];
  showAgentArchViz?: boolean;
}

export interface InstructorItem {
  name: string;
  photo: string;
  role: string;
  session: string;
  bio: string;
  badge: string;
  universities: LogoItem[];
  linkedin: string;
  scholar: string;
}

export interface BookCallout {
  href: string;
  image: string;
  imageAlt: string;
  topLabel: string;
  title: string;
  authors: string;
}

export interface InstructorsSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: InstructorItem[];
  bookCallout?: BookCallout;
}

export interface PastWorkshopsSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
  popular: boolean;
  variant: "primary" | "secondary";
}

export interface EnterprisePlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  contactEmail: string;
}

export interface PricingSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  plans: PricingPlan[];
  enterprise?: EnterprisePlan;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
}

export interface ResearchPaper {
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract: string;
  arxivUrl?: string;
  codeUrl?: string;
  tags: string[];
  thumbnail?: string;
}

export interface ResearchPapersSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  papers: ResearchPaper[];
}

export interface CTAConfig {
  heading: string;
  headingHighlight: string;
  headingSuffix?: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  tagline: string;
  email: string;
  socialLinks: SocialLink[];
}

export interface BootcampConfig {
  meta: MetaConfig;
  navbar: NavbarConfig;
  hero: HeroConfig;
  video?: VideoConfig;
  why: WhySectionConfig;
  diagrams?: DiagramsSectionConfig;
  audience: AudienceSectionConfig;
  curriculum: CurriculumSectionConfig;
  deliverables?: DeliverablesSectionConfig;
  instructors: InstructorsSectionConfig;
  pastWorkshops?: PastWorkshopsSectionConfig;
  researchPapers?: ResearchPapersSectionConfig;
  testimonials: TestimonialsSectionConfig;
  pricing: PricingSectionConfig;
  faq: FAQSectionConfig;
  cta: CTAConfig;
  footer: FooterConfig;
}
