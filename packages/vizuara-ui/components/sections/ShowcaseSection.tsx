"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

export interface ShowcaseItem {
  src: string;
  alt: string;
  title: string;
}

export interface ShowcaseSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  items: ShowcaseItem[];
}

interface ShowcaseSectionProps {
  config: ShowcaseSectionConfig;
}

export default function ShowcaseSection({ config }: ShowcaseSectionProps) {
  return (
    <section id="showcase" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {config.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover-glow-green"
            >
              <div className="relative aspect-square overflow-hidden bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>
              <div className="border-t border-border p-4">
                <h3 className="text-center text-base font-semibold text-foreground">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
