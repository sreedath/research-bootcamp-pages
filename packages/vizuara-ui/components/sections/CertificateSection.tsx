"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

export interface CertificateSectionConfig {
  label: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

interface CertificateSectionProps {
  config: CertificateSectionConfig;
}

export default function CertificateSection({
  config,
}: CertificateSectionProps) {
  return (
    <section id="certificate" className="relative py-24">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg glow-green">
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              width={1346}
              height={1066}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
