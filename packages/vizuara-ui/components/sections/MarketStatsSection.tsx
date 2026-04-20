"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icon-resolver";

export interface MarketStatItem {
  iconName: string;
  value: string;
  description: string;
  source?: string;
  sourceHref?: string;
  /** Optional logo shown alongside the title (e.g. partner/company logo). */
  logo?: string;
}

export interface MarketStatsSectionConfig {
  label?: string;
  title?: string;
  subtitle?: string;
  items: MarketStatItem[];
}

interface MarketStatsSectionProps {
  config: MarketStatsSectionConfig;
}

export default function MarketStatsSection({ config }: MarketStatsSectionProps) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label || "The SciML Boom"}
          title={config.title || "Why SciML, Why Now"}
          subtitle={config.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {config.items.map((item, index) => {
            const Icon = resolveIcon(item.iconName);
            return (
              <motion.div
                key={item.value + index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <Card className="h-full">
                  <div className="mb-4 inline-flex rounded-lg border border-border bg-muted p-3 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {item.value}
                  </h3>
                  {item.logo && (
                    <div className="mb-3 flex h-10 items-center">
                      <img
                        src={item.logo}
                        alt={item.value}
                        className="h-8 max-w-[160px] object-contain"
                      />
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {item.source && (
                    <a
                      href={item.sourceHref || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm font-medium text-secondary hover:text-primary transition-colors"
                    >
                      {item.source} ›
                    </a>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
