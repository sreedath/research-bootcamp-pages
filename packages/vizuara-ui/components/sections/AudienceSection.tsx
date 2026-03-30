"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icon-resolver";
import type { AudienceSectionConfig } from "../../types/bootcamp";

interface AudienceSectionProps {
  config: AudienceSectionConfig;
}

export default function AudienceSection({ config }: AudienceSectionProps) {
  return (
    <section className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {config.items.map((audience, index) => {
            const Icon = resolveIcon(audience.iconName);
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="mb-4 inline-flex rounded-lg border border-primary/20 bg-primary/10 p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {audience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
