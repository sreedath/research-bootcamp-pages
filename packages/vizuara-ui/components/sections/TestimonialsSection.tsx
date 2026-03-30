"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import type { TestimonialsSectionConfig } from "../../types/bootcamp";

interface TestimonialsSectionProps {
  config: TestimonialsSectionConfig;
}

export default function TestimonialsSection({ config }: TestimonialsSectionProps) {
  return (
    <section className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
