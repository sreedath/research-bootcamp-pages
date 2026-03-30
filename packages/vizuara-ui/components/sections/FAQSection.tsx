"use client";

import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import type { FAQSectionConfig } from "../../types/bootcamp";

interface FAQSectionProps {
  config: FAQSectionConfig;
}

export default function FAQSection({ config }: FAQSectionProps) {
  return (
    <section id="faq" className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <Accordion items={config.items} />
      </div>
    </section>
  );
}
