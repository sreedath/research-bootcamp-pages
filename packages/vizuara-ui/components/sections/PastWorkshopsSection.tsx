"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import type { PastWorkshopsSectionConfig } from "../../types/bootcamp";

interface PastWorkshopsSectionProps {
  config: PastWorkshopsSectionConfig;
}

export default function PastWorkshopsSection({ config }: PastWorkshopsSectionProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.items.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover-glow-green"
            >
              <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-foreground leading-snug">
                {name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
