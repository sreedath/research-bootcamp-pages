"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SIZE = 460;
const CENTER = SIZE / 2;
const RING_R = 150;

const domains = [
  { label: "Physics",   application: "Solving PDEs 100x faster than FEA" },
  { label: "Biology",   application: "Tumor growth modeling with UDEs" },
  { label: "Medicine",  application: "MRI reconstruction, 40% faster scans" },
  { label: "Climate",   application: "High-resolution weather forecasting" },
  { label: "Materials", application: "Polymer & semiconductor discovery" },
  { label: "Finance",   application: "Option pricing via Neural SDEs" },
  { label: "Aerospace", application: "Hypersonic flow & heat transfer" },
  { label: "Energy",    application: "Grid optimization & renewables" },
  { label: "Pharma",    application: "Pharmacokinetic digital twins" },
  { label: "Earth Sci.", application: "Seismic inversion & geophysics" },
];

const pillars = ["PINNs", "Neural ODEs", "UDEs"];

const polar = (i: number, n: number, r: number) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / n;
  return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
};

export default function SciMLBridgeViz() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % domains.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  const current = domains[active];
  const target = polar(active, domains.length, RING_R);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* ========== Circular visualization ========== */}
      <div
        className="relative"
        style={{ width: SIZE, height: SIZE }}
      >
        {/* Static dashed outer ring */}
        <motion.div
          className="absolute inset-4 rounded-full border border-dashed border-primary/25"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        {/* Inner ring (rotating subtly) */}
        <motion.div
          className="absolute rounded-full border border-primary/10"
          style={{
            inset: SIZE / 2 - RING_R + 20,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        />
        {/* Innermost ghost ring */}
        <div
          className="absolute rounded-full border border-primary/5"
          style={{
            inset: SIZE / 2 - 70,
          }}
        />

        {/* SVG layer for beam + node dots — shares coordinate space with HTML labels */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          <defs>
            <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="var(--primary)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Static faint spokes to every domain (very subtle) */}
          {domains.map((_, i) => {
            const p = polar(i, domains.length, RING_R);
            return (
              <line
                key={i}
                x1={CENTER}
                y1={CENTER}
                x2={CENTER + p.x}
                y2={CENTER + p.y}
                stroke="var(--primary)"
                strokeOpacity={0.06}
                strokeWidth={1}
                strokeDasharray="2 4"
              />
            );
          })}

          {/* Focused beam: animates between active domains */}
          <motion.line
            x1={CENTER}
            y1={CENTER}
            stroke="url(#beamGrad)"
            strokeWidth={2}
            strokeLinecap="round"
            animate={{ x2: CENTER + target.x, y2: CENTER + target.y }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />

          {/* Travelling pulse along the beam */}
          <motion.circle
            r={4}
            fill="var(--primary)"
            key={`pulse-${active}`}
            initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
            animate={{
              cx: [CENTER, CENTER + target.x],
              cy: [CENTER, CENTER + target.y],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />

          {/* Glow halo at active domain */}
          <motion.circle
            r={26}
            fill="url(#nodeGlow)"
            key={`halo-${active}`}
            initial={{ cx: CENTER + target.x, cy: CENTER + target.y, opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.9, 0.5], scale: [0.6, 1.1, 1] }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Small node dot for each domain on the ring */}
          {domains.map((_, i) => {
            const p = polar(i, domains.length, RING_R);
            const isActive = i === active;
            return (
              <circle
                key={`dot-${i}`}
                cx={CENTER + p.x}
                cy={CENTER + p.y}
                r={isActive ? 5 : 3}
                fill={isActive ? "var(--primary)" : "var(--card)"}
                stroke="var(--primary)"
                strokeWidth={isActive ? 0 : 1.2}
                style={{ transition: "all 0.5s" }}
              />
            );
          })}
        </svg>

        {/* Domain labels — positioned OUTSIDE the ring along the same polar angle as the dot */}
        {domains.map((d, i) => {
          const pLabel = polar(i, domains.length, RING_R + 52);
          const isActive = i === active;
          return (
            <div
              key={d.label}
              className="absolute"
              style={{
                left: CENTER + pLabel.x,
                top: CENTER + pLabel.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span
                className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium shadow-sm transition-all duration-500 ${
                  isActive
                    ? "scale-110 border-primary/70 bg-primary text-white shadow-primary/30"
                    : "border-primary/20 bg-card text-muted-foreground"
                }`}
              >
                {d.label}
              </span>
            </div>
          );
        })}

        {/* Center SciML core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-primary/10"
            animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.1, 0.35] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-card shadow-lg">
            <span
              className="text-xl font-bold gradient-text"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SciML
            </span>
          </div>
        </div>
      </div>

      {/* ========== Pillars row ========== */}
      <div className="flex gap-2">
        {pillars.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
            className="rounded-md border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-semibold text-secondary"
          >
            {p}
          </motion.div>
        ))}
      </div>

      {/* ========== Cycling application caption (outside the ring) ========== */}
      <div className="relative h-14 w-[340px] max-w-full overflow-hidden rounded-xl border border-primary/25 bg-card/80 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -18, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              {current.label}
            </span>
            <span className="text-[12px] leading-snug text-foreground">
              {current.application}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
