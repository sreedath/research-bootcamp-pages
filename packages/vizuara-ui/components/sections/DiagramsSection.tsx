"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import type { DiagramsSectionConfig } from "../../types/bootcamp";
import type { ReactNode } from "react";

interface DiagramsSectionProps {
  config: DiagramsSectionConfig;
  contextWindowViz?: ReactNode;
}

export default function DiagramsSection({ config, contextWindowViz }: DiagramsSectionProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="space-y-20">
          {config.diagrams.map((diagram) => (
            <motion.div
              key={diagram.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 text-center">
                <h3
                  className="text-2xl font-normal italic text-foreground md:text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {diagram.title}
                </h3>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                  {diagram.description}
                </p>
              </div>

              <motion.div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-white p-4 md:p-6 transition-colors duration-300 hover:border-primary/30">
                <Image
                  src={diagram.src}
                  alt={diagram.alt}
                  width={1400}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {config.showContextWindowViz && contextWindowViz && (
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 text-center">
              <h3
                className="text-2xl font-normal italic text-foreground md:text-3xl"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Token Budget Allocation
              </h3>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                How production applications allocate their context window across
                different types of context.
              </p>
            </div>
            {contextWindowViz}
          </motion.div>
        )}
      </div>
    </section>
  );
}
