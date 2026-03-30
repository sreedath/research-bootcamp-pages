"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, GraduationCap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import type { InstructorsSectionConfig } from "../../types/bootcamp";

interface InstructorSectionProps {
  config: InstructorsSectionConfig;
}

export default function InstructorSection({ config }: InstructorSectionProps) {
  return (
    <section id="instructor" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {config.items.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="h-40 w-40 overflow-hidden rounded-2xl border-2 border-primary/20">
                    <Image
                      src={instructor.photo}
                      alt={instructor.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {instructor.badge}
                  </div>
                </div>

                <span className="mt-4 inline-block rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  {instructor.session}
                </span>

                <h3 className="mt-3 text-xl font-bold text-foreground">
                  {instructor.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {instructor.role}
                </p>
              </div>

              <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-center">
                {instructor.bio}
              </p>

              <div className="mt-5 flex items-center justify-center gap-4">
                {instructor.universities.map((uni) => (
                  <div
                    key={uni.alt}
                    className="flex items-center justify-center rounded-md border border-border bg-white px-3 py-2 shadow-sm"
                  >
                    <Image
                      src={uni.src}
                      alt={uni.alt}
                      width={uni.width}
                      height={36}
                      className="h-8 w-auto object-contain opacity-80"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5 flex items-center justify-center gap-3">
                <a
                  href={instructor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                <a
                  href={instructor.scholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-primary/30"
                >
                  <GraduationCap className="h-3.5 w-3.5" /> Scholar
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {config.bookCallout && (
          <motion.a
            href={config.bookCallout.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-10 flex max-w-3xl items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="flex-shrink-0 h-20 w-16 overflow-hidden rounded-md shadow-md">
              <Image
                src={config.bookCallout.image}
                alt={config.bookCallout.imageAlt}
                width={64}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground">
                {config.bookCallout.topLabel}
              </p>
              <p className="text-base font-bold text-primary leading-tight">
                {config.bookCallout.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground truncate">
                {config.bookCallout.authors}
              </p>
            </div>
            <span className="hidden sm:inline-flex flex-shrink-0 items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              View
            </span>
          </motion.a>
        )}
      </div>
    </section>
  );
}
