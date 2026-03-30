"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ExternalLink,
  Github,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="research" className="relative py-24">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        <div className="space-y-4">
          {config.papers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover-glow-green"
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="flex w-full items-start gap-4 text-left cursor-pointer"
              >
                {paper.thumbnail ? (
                  <div className="mt-0.5 h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                    <Image
                      src={paper.thumbnail}
                      alt={paper.title}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <FileText className="h-5 w-5" />
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {paper.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {paper.authors}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-primary">
                      {paper.venue} ({paper.year})
                    </span>
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ChevronDown
                  className={`mt-2 h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className={`mt-4 border-t border-border pt-4 ${paper.thumbnail ? "ml-20" : "ml-14"}`}>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {paper.abstract}
                      </p>
                      <div className="mt-4 flex gap-3">
                        {paper.arxivUrl && (
                          <a
                            href={paper.arxivUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            arXiv
                          </a>
                        )}
                        {paper.codeUrl && (
                          <a
                            href={paper.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
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
