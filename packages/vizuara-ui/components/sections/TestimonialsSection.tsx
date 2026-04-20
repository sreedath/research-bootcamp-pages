"use client";

import { motion } from "framer-motion";
import { Linkedin, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import type { TestimonialItem, TestimonialsSectionConfig } from "../../types/bootcamp";

interface TestimonialsSectionProps {
  config: TestimonialsSectionConfig;
}

function LinkedInEmbed({ item }: { item: TestimonialItem }) {
  return (
    <div className="h-[500px] rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-[#0a66c2]/30 hover:-translate-y-0.5">
      <iframe
        src={item.embedUrl}
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
        title={`LinkedIn post by ${item.name}`}
        className="w-full h-full"
        loading="lazy"
      />
    </div>
  );
}

function TextCard({ item }: { item: TestimonialItem }) {
  const text = item.fullPost ?? item.quote ?? "";
  const isLinkedIn = Boolean(item.linkedinUrl);

  return (
    <div className="group relative flex h-[500px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#0a66c2]/40 hover:shadow-lg hover:shadow-[#0a66c2]/10">
      <div className="absolute right-4 top-4 z-10">
        {isLinkedIn ? (
          <a
            href={item.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.name} on LinkedIn`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0a66c2] text-white shadow-sm transition-all hover:bg-[#084d99] hover:scale-105"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        ) : (
          <Quote className="h-5 w-5 text-primary/40" />
        )}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-2 [scrollbar-width:thin]">
        <p className="whitespace-pre-line pr-8 text-sm leading-relaxed text-foreground/90">
          {text}
        </p>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-border pt-3">
        <div>
          <p className="text-sm font-semibold text-foreground">{item.name}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ config }: TestimonialsSectionProps) {
  const embedItems = config.items.filter((t) => t.embedUrl);
  const textItems = config.items.filter((t) => !t.embedUrl);

  return (
    <section className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {embedItems.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(i * 0.08, 0.3), duration: 0.45 }}
            >
              <LinkedInEmbed item={t} />
            </motion.div>
          ))}
          {textItems.map((t, i) => (
            <motion.div
              key={t.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min((embedItems.length + i) * 0.08, 0.3), duration: 0.45 }}
            >
              <TextCard item={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
