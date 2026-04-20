"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export interface VenueItem {
  name: string;
  detail?: string;
  /** Path to a logo image (png preferred). When set, the logo is shown in place of the text name. */
  logo?: string;
  /** Set true for logos with a dark/black baked-in background — the card will use a white tile so the logo stays readable. */
  darkLogo?: boolean;
}

export interface VenuesMarqueeConfig {
  label?: string;
  title?: string;
  subtitle?: string;
  venues: VenueItem[];
}

interface VenuesMarqueeProps {
  config: VenuesMarqueeConfig;
}

export default function VenuesMarquee({ config }: VenuesMarqueeProps) {
  const loop = [...config.venues, ...config.venues];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {(config.label || config.title) && (
          <SectionHeading
            label={config.label || "Accepted Venues"}
            title={config.title || "Where Our Researchers Have Published & Presented"}
            subtitle={config.subtitle}
          />
        )}

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loop.map((venue, idx) => (
                <div
                  key={`${venue.name}-${idx}`}
                  title={venue.name}
                  className={`flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-border transition-all hover:border-primary/40 hover-glow-green ${
                    venue.darkLogo ? "bg-neutral-900" : "bg-card"
                  }`}
                >
                  {venue.logo ? (
                    <img
                      src={venue.logo}
                      alt={venue.name}
                      className="max-h-14 max-w-[170px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center px-4 text-center">
                      <span
                        className="text-2xl font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                      >
                        {venue.name}
                      </span>
                      {venue.detail && (
                        <span className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                          {venue.detail}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
