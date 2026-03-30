"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icon-resolver";
import type { DeliverablesSectionConfig } from "../../types/bootcamp";
import type { ReactNode } from "react";

interface DeliverablesSectionProps {
  config: DeliverablesSectionConfig;
  agentArchViz?: ReactNode;
}

export default function DeliverablesSection({ config, agentArchViz }: DeliverablesSectionProps) {
  return (
    <section className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        {config.showAgentArchViz && agentArchViz && (
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {agentArchViz}
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {config.items.map((item, index) => {
            const Icon = resolveIcon(item.iconName);
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30"
              >
                <div
                  className={`mb-6 inline-flex rounded-lg bg-gradient-to-r ${item.gradient} p-3`}
                >
                  <Icon className="h-7 w-7 text-background" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
