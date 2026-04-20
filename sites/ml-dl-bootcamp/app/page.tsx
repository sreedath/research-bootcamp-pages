"use client";

import {
  Navbar,
  Hero,
  VideoSection,
  WhySection,
  DiagramsSection,
  AudienceSection,
  CurriculumSection,
  DeliverablesSection,
  InstructorSection,
  ResearchPapersSection,
  CertificateSection,
  TestimonialsSection,
  PricingSection,
  FAQSection,
  CTABanner,
  Footer,
  VenuesMarquee,
  MarketStatsSection,
  NextCohortPopup,
  ContactSection,
} from "@vizuara/ui";
import NeuralNetViz from "@vizuara/ui/components/visualizations/NeuralNetViz";
import {
  bootcampConfig,
  certificateConfig,
  venuesConfig,
  marketStatsConfig,
  nextCohortConfig,
  contactConfig,
} from "@/data/bootcamp";

export default function Home() {
  return (
    <main>
      <Navbar config={bootcampConfig.navbar} />
      <Hero config={bootcampConfig.hero} visualization={<NeuralNetViz />} />
      <VenuesMarquee config={venuesConfig} />
      <MarketStatsSection config={marketStatsConfig} />
      {bootcampConfig.video && (
        <VideoSection config={bootcampConfig.video} />
      )}
      <WhySection config={bootcampConfig.why} />
      {bootcampConfig.diagrams && (
        <DiagramsSection config={bootcampConfig.diagrams} />
      )}
      <AudienceSection config={bootcampConfig.audience} />
      <CurriculumSection config={bootcampConfig.curriculum} />
      {bootcampConfig.deliverables && (
        <DeliverablesSection config={bootcampConfig.deliverables} />
      )}
      <InstructorSection config={bootcampConfig.instructors} />
      <CertificateSection config={certificateConfig} />
      {bootcampConfig.researchPapers && (
        <ResearchPapersSection
          config={bootcampConfig.researchPapers}
          viewAllHref="https://research.vizuara.ai/publications"
          viewAllLabel="Read More Papers"
        />
      )}
      <TestimonialsSection config={bootcampConfig.testimonials} />
      <PricingSection config={bootcampConfig.pricing} />
      <FAQSection config={bootcampConfig.faq} />
      <CTABanner config={bootcampConfig.cta} />
      <ContactSection config={contactConfig} />
      <Footer config={bootcampConfig.footer} />
      <NextCohortPopup config={nextCohortConfig} />
    </main>
  );
}
