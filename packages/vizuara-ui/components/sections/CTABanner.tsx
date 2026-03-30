"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import type { CTAConfig } from "../../types/bootcamp";

interface CTABannerProps {
  config: CTAConfig;
}

export default function CTABanner({ config }: CTABannerProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[160px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-4xl font-normal italic md:text-5xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {config.heading}{" "}
          <span className="gradient-text">{config.headingHighlight}</span>
          {config.headingSuffix ? ` ${config.headingSuffix}` : ""}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {config.subtitle}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={config.ctaPrimary.href} size="lg">
            {config.ctaPrimary.label} <ArrowRight className="h-5 w-5" />
          </Button>
          <Button href={config.ctaSecondary.href} variant="secondary" size="lg">
            {config.ctaSecondary.label}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
