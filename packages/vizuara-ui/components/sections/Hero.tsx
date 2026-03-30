"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import { resolveIcon } from "../../utils/icon-resolver";
import type { HeroConfig } from "../../types/bootcamp";
import type { ReactNode } from "react";

interface HeroProps {
  config: HeroConfig;
  visualization?: ReactNode;
}

export default function Hero({ config, visualization }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20">
        <div className={`grid ${visualization ? "lg:grid-cols-2" : ""} gap-16 items-center`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {config.badge}
            </motion.div>

            <h1
              className="max-w-2xl text-5xl font-normal italic leading-tight md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {config.headline}{" "}
              <span className="gradient-text">{config.headlineHighlight}</span>{" "}
              {config.headlineSuffix}
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              {config.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              {config.scheduleItems.map((item) => {
                const Icon = resolveIcon(item.iconName);
                return (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5"
                  >
                    <Icon className={`h-4 w-4 ${item.color || "text-primary"}`} />
                    {item.text}
                  </span>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Button href={config.ctaPrimary.href} size="lg">
                {config.ctaPrimary.label} <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href={config.ctaSecondary.href} variant="secondary" size="lg">
                <Play className="h-5 w-5" /> {config.ctaSecondary.label}
              </Button>
            </div>

            <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              {config.modelLogos && config.modelLogos.length > 0 && (
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                    {config.modelLogosLabel || "Build with"}
                  </p>
                  <div className="flex items-center gap-5">
                    {config.modelLogos.map((logo) => (
                      <div
                        key={logo.alt}
                        className="flex items-center justify-center rounded-md border border-border bg-white p-2.5 backdrop-blur-sm shadow-sm transition-all hover:bg-white hover:border-primary/20"
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height || 32}
                          className="h-7 w-7 object-contain opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {config.modelLogos && config.modelLogos.length > 0 && (
                <div className="hidden sm:block h-12 w-px bg-border" />
              )}

              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/50">
                  {config.universityLabel}
                </p>
                <div className="flex items-center gap-4">
                  {config.universityLogos.map((logo) => (
                    <div
                      key={logo.alt}
                      className="flex items-center justify-center rounded-md border border-border bg-white p-2 shadow-sm backdrop-blur-sm"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height || 36}
                        className="h-8 w-auto object-contain opacity-70"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {visualization && (
            <motion.div
              className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {visualization}
            </motion.div>
          )}
        </div>

        <motion.div
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {config.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
