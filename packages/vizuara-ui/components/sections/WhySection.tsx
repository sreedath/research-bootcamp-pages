"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icon-resolver";
import type { WhySectionConfig } from "../../types/bootcamp";

interface WhySectionProps {
  config: WhySectionConfig;
}

export default function WhySection({ config }: WhySectionProps) {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {config.items.map((point, index) => {
            const Icon = resolveIcon(point.iconName);
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div
                    className={`mb-4 inline-flex rounded-lg border border-border bg-muted p-3 ${point.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
