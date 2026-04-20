"use client";

import {
  Navbar,
  InstructorSection,
  CTABanner,
  Footer,
  INSTRUCTOR_SREEDATH,
  INSTRUCTOR_RAJ,
  INSTRUCTOR_RAJAT,
  DEEPSEEK_BOOK,
} from "@vizuara/ui";
import type {
  NavbarConfig,
  InstructorsSectionConfig,
  CTAConfig,
  FooterConfig,
} from "@vizuara/ui";

import { courses } from "@/data/courses";
import { bundles } from "@/data/bundles";
import { useSearch } from "@/hooks/useSearch";
import MarketplaceHero from "@/components/MarketplaceHero";
import FeaturedBundles from "@/components/FeaturedBundles";
import TabNav from "@/components/TabNav";
import SearchAndFilter from "@/components/SearchAndFilter";
import CourseGrid from "@/components/CourseGrid";
import BundleGrid from "@/components/BundleGrid";
import ResearchGrid from "@/components/ResearchGrid";
import WhatsIncluded from "@/components/WhatsIncluded";

const navbarConfig: NavbarConfig = {
  links: [
    { label: "Courses", href: "#courses" },
    { label: "Bundles", href: "#bundles" },
    { label: "Faculty", href: "#instructor" },
  ],
  ctaLabel: "Get Started",
  ctaHref: "#courses",
};

const instructorConfig: InstructorsSectionConfig = {
  label: "Faculty",
  title: "Learn from the Best",
  subtitle:
    "Our courses are designed and taught by researchers from the world's leading institutions",
  items: [
    { ...INSTRUCTOR_RAJ, session: "GenAI, LLMs, AI Agents, RAG, SLMs" },
    {
      ...INSTRUCTOR_SREEDATH,
      session: "Computer Vision, ML Foundations, Scientific ML",
    },
    {
      ...INSTRUCTOR_RAJAT,
      session: "Reinforcement Learning, RLHF, Reasoning Models",
    },
  ],
  bookCallout: DEEPSEEK_BOOK,
};

const ctaConfig: CTAConfig = {
  heading: "Start Your",
  headingHighlight: "AI Journey",
  headingSuffix: "Today",
  subtitle:
    "Join 10,000+ students already learning with Vizuara. Self-paced courses with lifetime access.",
  ctaPrimary: { label: "Browse Courses", href: "#courses" },
  ctaSecondary: { label: "View Bundles", href: "#bundles" },
};

const footerConfig: FooterConfig = {
  tagline: "Empowering the next generation of AI researchers and engineers",
  email: "hello@vizuara.com",
  socialLinks: [
    {
      iconName: "Youtube",
      href: "https://www.youtube.com/@vizuara",
      label: "YouTube",
    },
    {
      iconName: "Linkedin",
      href: "https://www.linkedin.com/company/vizuara/",
      label: "LinkedIn",
    },
  ],
};

// Featured bundles - hand-picked best-value options
const featuredBundleIds = [
  "math-ml-dl-genai-gpt-rag-finetuning-agents-vision",
  "genai-gpt-rag-finetuning-agents-vision",
  "language-reasoning-vision-rag-finetuning-agents",
];

export default function Home() {
  const {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
    activeTab,
    setActiveTab,
    filteredCourses,
    filteredBundles,
    filteredResearch,
  } = useSearch(courses, bundles);

  const featuredBundles = bundles.filter((b) =>
    featuredBundleIds.includes(b.id)
  );

  return (
    <main>
      <Navbar config={navbarConfig} />

      <MarketplaceHero
        query={query}
        onQueryChange={setQuery}
        totalCourses={courses.length}
        totalBundles={bundles.length}
      />

      <FeaturedBundles bundles={featuredBundles} />

      {/* Course / Bundle Catalog */}
      <section className="py-16" id="courses">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
                Browse Catalog
              </h2>
              <p className="mt-2 text-muted-foreground">
                Find the perfect course or bundle for your learning goals
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <TabNav
                activeTab={activeTab}
                onTabChange={setActiveTab}
                courseCount={filteredCourses.length}
                bundleCount={filteredBundles.length}
                researchCount={filteredResearch.length}
              />
            </div>
          </div>

          <div className="mb-8">
            <SearchAndFilter
              query={query}
              onQueryChange={setQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultCount={
                activeTab === "courses"
                  ? filteredCourses.length
                  : activeTab === "bundles"
                  ? filteredBundles.length
                  : filteredResearch.length
              }
            />
          </div>

          {activeTab === "courses" ? (
            <CourseGrid courses={filteredCourses} />
          ) : activeTab === "bundles" ? (
            <BundleGrid bundles={filteredBundles} />
          ) : (
            <ResearchGrid items={filteredResearch} />
          )}
        </div>
      </section>

      <InstructorSection config={instructorConfig} />
      <WhatsIncluded />
      <CTABanner config={ctaConfig} />
      <Footer config={footerConfig} />
    </main>
  );
}
