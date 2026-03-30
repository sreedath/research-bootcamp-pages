"use client";

import { motion } from "framer-motion";

/**
 * Hero visualization: An orbital diagram showing the three context layers
 * (Instructional, Knowledge, Tool) orbiting an LLM core with floating
 * data particles and pulsing connections.
 */
export default function ContextOrbitVisualization() {
  return (
    <div className="relative w-[480px] h-[480px]">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-[80px]" />

      {/* Outer orbit ring – Tool Layer */}
      <motion.div
        className="absolute inset-0 rounded-full border border-purple-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Nodes on orbit */}
        {[0, 90, 180, 270].map((deg) => (
          <motion.div
            key={`tool-${deg}`}
            className="absolute h-3 w-3 rounded-full bg-purple-500/60"
            style={{
              top: `${50 - 50 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>
      {/* Tool label */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[10px] font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wider">
        Tool Layer
      </div>

      {/* Middle orbit ring – Knowledge Layer */}
      <motion.div
        className="absolute inset-[18%] rounded-full border border-secondary/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[0, 120, 240].map((deg) => (
          <motion.div
            key={`know-${deg}`}
            className="absolute h-3.5 w-3.5 rounded-full bg-secondary/60"
            style={{
              top: `${50 - 50 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>
      {/* Knowledge label */}
      <div className="absolute top-[16%] right-0 translate-x-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[10px] font-medium text-secondary uppercase tracking-wider">
        Knowledge Layer
      </div>

      {/* Inner orbit ring – Instructional Layer */}
      <motion.div
        className="absolute inset-[35%] rounded-full border border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {[0, 180].map((deg) => (
          <motion.div
            key={`inst-${deg}`}
            className="absolute h-4 w-4 rounded-full bg-primary/60"
            style={{
              top: `${50 - 50 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </motion.div>
      {/* Instructional label */}
      <div className="absolute bottom-[32%] -left-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-medium text-primary uppercase tracking-wider">
        Instructional Layer
      </div>

      {/* Core – LLM */}
      <div className="absolute inset-[42%] flex items-center justify-center">
        <motion.div
          className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 glow-green"
        >
          <span className="text-sm font-bold gradient-text">LLM</span>
        </motion.div>
      </div>

      {/* Floating data particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute h-1 w-1 rounded-full"
          style={{
            background:
              i % 3 === 0
                ? "var(--primary)"
                : i % 3 === 1
                  ? "var(--secondary)"
                  : "#a855f7",
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            opacity: [0, 0.8, 0.4, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
