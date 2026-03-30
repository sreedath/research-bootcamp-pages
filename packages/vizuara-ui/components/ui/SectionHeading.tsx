"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {label && (
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          {label}
        </span>
      )}
      <h2
        className="mt-4 text-4xl font-normal italic md:text-5xl"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
