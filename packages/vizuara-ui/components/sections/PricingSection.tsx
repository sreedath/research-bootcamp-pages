"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Copy, CheckCheck, Mail } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import type { PricingSectionConfig } from "../../types/bootcamp";

interface PricingSectionProps {
  config: PricingSectionConfig;
}

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30 cursor-pointer"
    >
      {copied ? (
        <>
          <CheckCheck className="h-4 w-4 text-primary" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {email}
        </>
      )}
    </button>
  );
}

export default function PricingSection({ config }: PricingSectionProps) {
  const hasEnterprise = !!config.enterprise;
  const gridCols = hasEnterprise
    ? config.plans.length + 1 <= 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4"
    : config.plans.length <= 3
      ? "lg:grid-cols-3"
      : "lg:grid-cols-4";

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className={`grid items-end gap-6 md:grid-cols-2 ${gridCols}`}>
          {config.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative flex flex-col rounded-xl border p-6 ${
                plan.popular
                  ? "border-primary bg-card glow-green-strong"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Star className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <Button
                href={plan.href}
                variant={plan.variant}
                size="md"
                className="mb-6 w-full"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {config.enterprise && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {config.enterprise.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {config.enterprise.price}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {config.enterprise.description}
                </p>
              </div>

              <a
                href={`mailto:${config.enterprise.contactEmail}`}
                className="mb-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-card hover:border-primary/50 cursor-pointer"
              >
                <Mail className="h-5 w-5" /> Contact Us
              </a>

              <div className="mb-6 flex justify-center">
                <CopyEmailButton email={config.enterprise.contactEmail} />
              </div>

              <ul className="space-y-3">
                {config.enterprise.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
