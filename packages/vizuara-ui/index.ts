// UI Components
export { default as Button } from "./components/ui/Button";
export { default as Card } from "./components/ui/Card";
export { default as SectionHeading } from "./components/ui/SectionHeading";
export { default as Accordion } from "./components/ui/Accordion";

// Section Components
export { default as Navbar } from "./components/sections/Navbar";
export { default as Hero } from "./components/sections/Hero";
export { default as VideoSection } from "./components/sections/VideoSection";
export { default as WhySection } from "./components/sections/WhySection";
export { default as DiagramsSection } from "./components/sections/DiagramsSection";
export { default as AudienceSection } from "./components/sections/AudienceSection";
export { default as CurriculumSection } from "./components/sections/CurriculumSection";
export { default as DeliverablesSection } from "./components/sections/DeliverablesSection";
export { default as InstructorSection } from "./components/sections/InstructorSection";
export { default as PastWorkshopsSection } from "./components/sections/PastWorkshopsSection";
export { default as ResearchPapersSection } from "./components/sections/ResearchPapersSection";
export { default as ShowcaseSection } from "./components/sections/ShowcaseSection";
export type { ShowcaseSectionConfig } from "./components/sections/ShowcaseSection";
export { default as CertificateSection } from "./components/sections/CertificateSection";
export type { CertificateSectionConfig } from "./components/sections/CertificateSection";
export { default as TestimonialsSection } from "./components/sections/TestimonialsSection";
export { default as PricingSection } from "./components/sections/PricingSection";
export { default as FAQSection } from "./components/sections/FAQSection";
export { default as CTABanner } from "./components/sections/CTABanner";
export { default as Footer } from "./components/sections/Footer";
export { default as VenuesMarquee } from "./components/sections/VenuesMarquee";
export type { VenuesMarqueeConfig, VenueItem } from "./components/sections/VenuesMarquee";
export { default as MarketStatsSection } from "./components/sections/MarketStatsSection";
export type { MarketStatsSectionConfig, MarketStatItem } from "./components/sections/MarketStatsSection";
export { default as NextCohortPopup } from "./components/sections/NextCohortPopup";
export type { NextCohortPopupConfig } from "./components/sections/NextCohortPopup";
export { default as ContactSection } from "./components/sections/ContactSection";
export type { ContactSectionConfig } from "./components/sections/ContactSection";

// Theme
export { default as ThemeProvider, useTheme } from "./components/ThemeProvider";

// Utilities
export { resolveIcon } from "./utils/icon-resolver";

// Types
export type * from "./types/bootcamp";

// Shared Data
export {
  INSTRUCTOR_SREEDATH,
  INSTRUCTOR_RAJ,
  INSTRUCTOR_RAJAT,
  DEEPSEEK_BOOK,
} from "./data/instructors";
