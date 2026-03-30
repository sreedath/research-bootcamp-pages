"use client";

import { motion } from "framer-motion";
import { resolveIcon } from "../../utils/icon-resolver";
import type { VideoConfig } from "../../types/bootcamp";

interface VideoSectionProps {
  config: VideoConfig;
}

export default function VideoSection({ config }: VideoSectionProps) {
  const BadgeIcon = config.badgeIconName ? resolveIcon(config.badgeIconName) : null;

  return (
    <section id="video" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6">
        {config.badge && (
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
              {config.badge}
            </span>
          </motion.div>
        )}

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
            {config.label}
          </div>
          <h2
            className="text-3xl font-normal italic md:text-4xl text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {config.heading}{" "}
            <span className="gradient-text">{config.headingHighlight}</span>
            {config.headingSuffix}
          </h2>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={config.youtubeUrl}
              title={config.youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
