"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Calendar } from "lucide-react";

export interface NextCohortPopupConfig {
  /** ISO date (YYYY-MM-DD) of the first intake. Rolls forward by `cadenceDays` once past. */
  startDate?: string;
  /** Days between intakes. Defaults to 15. */
  cadenceDays?: number;
  /** Legacy: fixed date string. Used only if `startDate` isn't set. */
  date?: string;
  message?: string;
  ctaLabel?: string;
  ctaHref: string;
  delayMs?: number;
}

interface NextCohortPopupProps {
  config: NextCohortPopupConfig;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function formatIntakeDate(d: Date) {
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function computeNextIntake(startDate: string, cadenceDays: number) {
  const [y, m, day] = startDate.split("-").map(Number);
  const base = new Date(y, (m ?? 1) - 1, day ?? 1);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (base >= today) return base;
  const dayMs = 86400000;
  const daysSince = Math.floor((today.getTime() - base.getTime()) / dayMs);
  const steps = Math.ceil(daysSince / cadenceDays) || 1;
  return new Date(base.getTime() + steps * cadenceDays * dayMs);
}

export default function NextCohortPopup({ config }: NextCohortPopupProps) {
  const [open, setOpen] = useState(false);
  const [intakeLabel, setIntakeLabel] = useState<string>(config.date ?? "");

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), config.delayMs ?? 2500);
    return () => clearTimeout(t);
  }, [config.delayMs]);

  useEffect(() => {
    if (config.startDate) {
      const next = computeNextIntake(config.startDate, config.cadenceDays ?? 15);
      setIntakeLabel(formatIntakeDate(next));
    } else if (config.date) {
      setIntakeLabel(config.date);
    }
  }, [config.startDate, config.cadenceDays, config.date]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-6 right-6 z-50 w-[330px] max-w-[calc(100vw-2rem)] rounded-2xl border border-primary/30 bg-card p-5 shadow-2xl shadow-primary/20"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Next Cohort
          </div>

          <h3
            className="text-xl font-normal italic leading-snug text-foreground"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {config.message || "Join the next batch of the SciML Research Bootcamp"}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 text-secondary" />
            <span>
              Next Intake: <span className="font-semibold text-foreground">{intakeLabel}</span>
            </span>
          </div>

          <a
            href={config.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
          >
            {config.ctaLabel || "Enroll Now"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
