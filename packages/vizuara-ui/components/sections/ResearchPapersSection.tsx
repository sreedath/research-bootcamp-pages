"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, FileText } from "lucide-react";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import type { ResearchPapersSectionConfig } from "../../types/bootcamp";

interface ResearchPapersSectionProps {
  config: ResearchPapersSectionConfig;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function ResearchPapersSection({
  config,
  viewAllHref,
  viewAllLabel,
}: ResearchPapersSectionProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="research" className="relative py-24">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        {/* Slider */}
        <div className="relative -mx-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-background to-transparent" />

          {/* Floating arrow controls — vertically centered over the cards */}
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canLeft}
            aria-label="Previous"
            className="absolute left-3 top-[40%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/50 hover:bg-white hover:text-primary disabled:pointer-events-none disabled:scale-90 disabled:opacity-0 md:flex"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={!canRight}
            aria-label="Next"
            className="absolute right-3 top-[40%] z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-foreground shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:border-primary/50 hover:bg-white hover:text-primary disabled:pointer-events-none disabled:scale-90 disabled:opacity-0 md:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-6 pb-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {config.papers.map((paper, index) => {
              const href = paper.arxivUrl || paper.codeUrl;
              const inner = (
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
                    {paper.thumbnail ? (
                      <Image
                        src={paper.thumbnail}
                        alt={paper.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-primary/40">
                        <FileText className="h-12 w-12" />
                      </div>
                    )}
                    {paper.badge && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-amber-500/30 ring-1 ring-white/50">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6L12 2z"/>
                        </svg>
                        {paper.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-3">
                      {paper.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {paper.authors}
                    </p>

                    {paper.tags && paper.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {paper.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex-1" />

                    <div className="flex items-end justify-between border-t border-border pt-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/70">
                          Accepted at
                        </span>
                        <span className="text-xs font-semibold text-primary">
                          {paper.venue}
                          {paper.year ? ` · ${paper.year}` : ""}
                        </span>
                      </div>
                      {href && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-foreground/70 transition-colors group-hover:text-primary">
                          Learn more
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.article
                  key={paper.title}
                  data-card
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group w-[85%] flex-shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
                >
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>

        {viewAllHref && (
          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button href={viewAllHref} variant="secondary" size="md">
              {viewAllLabel || "View All Publications"}{" "}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
