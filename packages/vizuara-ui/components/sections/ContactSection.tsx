"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, CalendarClock, ArrowRight } from "lucide-react";

export interface LeadScientistConfig {
  name: string;
  title: string;
  bio: string;
  photo: string;
  intro?: string;
  calendlyUrl?: string;
  calendlyLabel?: string;
}

export interface ContactSectionConfig {
  heading?: string;
  subtitle?: string;
  email: string;
  calendlyUrl?: string;
  calendlyLabel?: string;
  /** When set, replaces the generic calendly CTA with a gated 1-on-1 block about the lead scientist. */
  leadScientist?: LeadScientistConfig;
}

interface ContactSectionProps {
  config: ContactSectionConfig;
}

export default function ContactSection({ config }: ContactSectionProps) {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 md:p-12"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-5 text-center">
            <h3
              className="max-w-2xl text-3xl font-normal italic leading-tight md:text-4xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {config.heading || "Have more queries?"}
            </h3>

            {config.subtitle && (
              <p className="max-w-xl text-sm text-muted-foreground md:text-base">
                {config.subtitle}
              </p>
            )}

            <a
              href={`mailto:${config.email}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
            >
              <Mail className="h-4 w-4 text-primary" />
              {config.email}
            </a>

            {config.leadScientist ? (
              <div className="mt-8 w-full max-w-3xl">
                <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card/60 p-6 text-left backdrop-blur-sm md:flex-row md:items-start md:p-7">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-border md:h-32 md:w-32">
                    <Image
                      src={config.leadScientist.photo}
                      alt={config.leadScientist.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="flex-1">
                    {config.leadScientist.intro && (
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {config.leadScientist.intro}
                      </p>
                    )}
                    <p className="mt-3 text-base font-semibold text-foreground">
                      {config.leadScientist.name}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">
                      {config.leadScientist.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {config.leadScientist.bio}
                    </p>

                    {config.leadScientist.calendlyUrl && (
                      <a
                        href={config.leadScientist.calendlyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90"
                      >
                        <CalendarClock className="h-4 w-4" />
                        {config.leadScientist.calendlyLabel ||
                          "Book a 15-min call with Prathamesh"}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              config.calendlyUrl && (
                <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground/70 sm:px-2">
                    or
                  </span>
                  <a
                    href={config.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/40"
                  >
                    <CalendarClock className="h-4 w-4" />
                    {config.calendlyLabel ||
                      "Book a 1-on-1 with a Vizuara AI Research Scientist"}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
