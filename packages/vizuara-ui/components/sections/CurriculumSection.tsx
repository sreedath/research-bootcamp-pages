"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icon-resolver";
import type { CurriculumSectionConfig } from "../../types/bootcamp";

interface CurriculumSectionProps {
  config: CurriculumSectionConfig;
}

export default function CurriculumSection({ config }: CurriculumSectionProps) {
  const weeks = [...new Set(config.days.map((d) => d.week))].sort();

  const defaultWeekLabels: Record<number, { label: string; sessions: string }> = {};
  weeks.forEach((w) => {
    const weekDays = config.days.filter((d) => d.week === w);
    const hasMega = weekDays.some((d) => d.mega);
    const first = weekDays[0].day;
    const last = weekDays[weekDays.length - 1].day;
    defaultWeekLabels[w] = {
      label: hasMega ? "Mega Build Week" : `Week ${w}`,
      sessions: hasMega
        ? `Sessions ${first}–${last} · 3 hrs each`
        : `Sessions ${first}–${last}`,
    };
  });

  const weekLabels = config.weekLabels || defaultWeekLabels;

  return (
    <section id="curriculum" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label={config.label}
          title={config.title}
          subtitle={config.subtitle}
        />

        {config.overviewImage && (
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <Image
                src={config.overviewImage}
                alt={config.overviewImageAlt || "Curriculum overview"}
                width={700}
                height={700}
                className="h-auto w-full max-w-[700px]"
                unoptimized
              />
            </div>
          </motion.div>
        )}

        <div className="space-y-16">
          {weeks.map((week) => {
            const wl = weekLabels[week] || defaultWeekLabels[week];
            const hasMega = config.days.filter((d) => d.week === week).some((d) => d.mega);

            return (
              <div key={week}>
                <motion.div
                  className="mb-6 flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {hasMega ? (
                    <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm font-bold text-amber-600">
                      {wl.label}
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                      {wl.label}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {wl.sessions}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                  {config.days
                    .filter((d) => d.week === week)
                    .map((day, index) => {
                      const isMega = day.mega;
                      const isAmber = day.accentColor === "amber";
                      const isViolet = day.accentColor === "violet";
                      const Icon = resolveIcon(day.iconName);

                      return (
                        <motion.div
                          key={day.day}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className={`group rounded-xl border p-6 transition-all duration-300 ${
                            isAmber
                              ? "border-amber-400/50 bg-amber-50/50 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                              : isViolet
                              ? "border-violet-400/50 bg-violet-50/50 hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                              : "border-border bg-card hover:border-primary/30 hover-glow-green"
                          }`}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <span
                              className={`inline-flex items-center justify-center h-10 w-10 rounded-lg transition-colors ${
                                isAmber
                                  ? "bg-amber-500/15 text-amber-600 group-hover:bg-amber-500/25"
                                  : isViolet
                                  ? "bg-violet-500/15 text-violet-600 group-hover:bg-violet-500/25"
                                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-xs font-medium ${
                                    isAmber
                                      ? "text-amber-600"
                                      : isViolet
                                      ? "text-violet-600"
                                      : "text-primary"
                                  }`}
                                >
                                  Session {day.day}
                                </span>
                                {isMega && (
                                  <span
                                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white ${
                                      isAmber ? "bg-amber-500" : "bg-violet-500"
                                    }`}
                                  >
                                    3-Hour Mega Project
                                  </span>
                                )}
                              </div>
                              <h3 className="text-lg font-semibold text-foreground">
                                {day.title}
                              </h3>
                            </div>
                          </div>

                          <p className={`mb-3 text-sm font-medium ${
                            isAmber
                              ? "text-amber-600"
                              : isViolet
                              ? "text-violet-600"
                              : "text-primary/70"
                          }`}>
                            Led by {day.instructor}
                          </p>

                          <ul className="mb-4 space-y-2">
                            {day.topics.map((topic) => (
                              <li
                                key={topic}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <span
                                  className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                                    isAmber
                                      ? "bg-amber-500/60"
                                      : isViolet
                                      ? "bg-violet-500/60"
                                      : "bg-primary/60"
                                  }`}
                                />
                                {topic}
                              </li>
                            ))}
                          </ul>

                          <div
                            className={`rounded-lg border px-4 py-2.5 ${
                              isAmber
                                ? "border-amber-400/30 bg-amber-500/10"
                                : isViolet
                                ? "border-violet-400/30 bg-violet-500/10"
                                : "border-secondary/20 bg-secondary/5"
                            }`}
                          >
                            <span
                              className={`text-xs font-medium ${
                                isAmber
                                  ? "text-amber-600"
                                  : isViolet
                                  ? "text-violet-600"
                                  : "text-secondary"
                              }`}
                            >
                              {isMega ? "MEGA PROJECT: " : "EXERCISE: "}
                            </span>
                            <span className="text-sm text-foreground">
                              {day.exercise}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
