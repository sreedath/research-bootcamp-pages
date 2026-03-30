"use client";

import { motion } from "framer-motion";

/**
 * An animated context window visualization showing how different types of
 * context fill the token budget. Rendered as a stacked bar chart with live animation.
 */

const segments = [
  {
    label: "System Instructions",
    pct: 15,
    color: "bg-primary",
    glow: "rgba(0,212,106,0.3)",
  },
  {
    label: "Few-Shot Examples",
    pct: 10,
    color: "bg-emerald-500",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    label: "RAG Context",
    pct: 35,
    color: "bg-secondary",
    glow: "rgba(0,200,230,0.3)",
  },
  {
    label: "Tool Results",
    pct: 15,
    color: "bg-purple-500",
    glow: "rgba(168,85,247,0.3)",
  },
  {
    label: "Conversation History",
    pct: 15,
    color: "bg-orange-500",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    label: "Available for Response",
    pct: 10,
    color: "bg-muted-foreground/20",
    glow: "transparent",
  },
];

export default function ContextWindowViz() {
  return (
    <div className="mx-auto max-w-3xl">
      {/* Window header */}
      <div className="rounded-t-xl border border-b-0 border-border bg-card px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/60" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
          <div className="h-3 w-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-xs font-mono text-muted-foreground">
          context_window: 128K tokens
        </span>
        <div className="w-12" />
      </div>

      {/* Stacked bar */}
      <div className="rounded-b-xl border border-border bg-card/50 p-6">
        <div className="flex h-14 w-full overflow-hidden rounded-lg border border-border">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              className={`${seg.color} relative flex items-center justify-center overflow-hidden`}
              initial={{ width: 0 }}
              whileInView={{ width: `${seg.pct}%` }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ boxShadow: `inset 0 0 20px ${seg.glow}` }}
            >
              {/* Shimmer animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              />
              {seg.pct >= 15 && (
                <span className="relative text-[10px] font-bold text-white/90 drop-shadow-sm">
                  {seg.pct}%
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center gap-2">
              <div className={`h-2.5 w-2.5 rounded-sm ${seg.color}`} />
              <span className="text-xs text-muted-foreground">{seg.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
