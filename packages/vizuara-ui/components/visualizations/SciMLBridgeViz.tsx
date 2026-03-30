"use client";

import { motion } from "framer-motion";

const domains = [
  { label: "Physics", angle: 0, delay: 0 },
  { label: "Biology", angle: 45, delay: 0.1 },
  { label: "Economics", angle: 90, delay: 0.2 },
  { label: "Engineering", angle: 135, delay: 0.3 },
  { label: "Climate", angle: 180, delay: 0.4 },
  { label: "Chemistry", angle: 225, delay: 0.5 },
  { label: "Ecology", angle: 270, delay: 0.6 },
  { label: "Medicine", angle: 315, delay: 0.7 },
];

const pillars = [
  { label: "PINNs", x: -80, delay: 0.3 },
  { label: "Neural ODEs", x: 0, delay: 0.5 },
  { label: "UDEs", x: 80, delay: 0.7 },
];

export default function SciMLBridgeViz() {
  const r = 155;

  return (
    <div className="relative h-[420px] w-[420px]">
      {/* Outer orbit ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-dashed border-primary/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Spinning subtle ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Domain nodes orbiting */}
      {domains.map((d) => {
        const rad = (d.angle * Math.PI) / 180;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;

        return (
          <motion.div
            key={d.label}
            className="absolute left-1/2 top-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + d.delay, duration: 0.5 }}
          >
            {/* Connection line to center */}
            <motion.div
              className="absolute"
              style={{
                width: r,
                height: "1px",
                left: 0,
                top: 0,
                transformOrigin: "0 0",
                transform: `rotate(${d.angle}deg)`,
                background: `linear-gradient(90deg, var(--primary) 0%, transparent 100%)`,
                opacity: 0.15,
              }}
              animate={{ opacity: [0.08, 0.2, 0.08] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: d.delay,
              }}
            />

            {/* Domain label */}
            <motion.div
              className="absolute flex items-center justify-center"
              style={{
                left: x - 38,
                top: y - 14,
              }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 3 + d.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="rounded-full border border-primary/25 bg-card px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-sm whitespace-nowrap">
                {d.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center hub: SciML */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Pulsing glow */}
        <motion.div
          className="absolute h-28 w-28 rounded-full bg-primary/10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Core circle */}
        <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/40 bg-card shadow-lg">
          <div className="text-center">
            <div
              className="text-lg font-bold gradient-text"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              SciML
            </div>
          </div>
        </div>

        {/* Three pillars below */}
        <div className="mt-5 flex gap-2">
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + p.delay, duration: 0.4 }}
              className="rounded-md border border-secondary/30 bg-secondary/10 px-2.5 py-1 text-[10px] font-semibold text-secondary"
            >
              {p.label}
            </motion.div>
          ))}
        </div>

        {/* Arrow label below */}
        <motion.div
          className="mt-4 flex items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="h-px w-6 bg-primary/30" />
          <span className="text-[10px] text-muted-foreground whitespace-nowrap">
            Any domain into ML
          </span>
          <div className="h-px w-6 bg-primary/30" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}
