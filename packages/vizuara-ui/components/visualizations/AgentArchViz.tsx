"use client";

import { motion } from "framer-motion";
import { Brain, Database, Wrench, MessageSquare, Shield, BarChart3 } from "lucide-react";

/**
 * Interactive agent architecture diagram showing the capstone agent
 * with RAG + Tools + Memory integration in a hub-and-spoke layout.
 *
 * Fully responsive: uses percentage-based positioning inside an
 * aspect-ratio container so it scales naturally on all screen sizes.
 */

const spokes = [
  {
    icon: MessageSquare,
    label: "Instructions",
    angle: 0,
    color: "text-primary",
    border: "border-primary/40",
    bg: "bg-primary/10",
    glowColor: "0,212,106",
  },
  {
    icon: Database,
    label: "RAG",
    angle: 60,
    color: "text-secondary",
    border: "border-secondary/40",
    bg: "bg-secondary/10",
    glowColor: "0,200,230",
  },
  {
    icon: Wrench,
    label: "MCP Tools",
    angle: 120,
    color: "text-purple-500 dark:text-purple-400",
    border: "border-purple-500/40 dark:border-purple-400/40",
    bg: "bg-purple-500/10 dark:bg-purple-400/10",
    glowColor: "168,85,247",
  },
  {
    icon: Brain,
    label: "Memory",
    angle: 180,
    color: "text-orange-500 dark:text-orange-400",
    border: "border-orange-500/40 dark:border-orange-400/40",
    bg: "bg-orange-500/10 dark:bg-orange-400/10",
    glowColor: "249,115,22",
  },
  {
    icon: Shield,
    label: "Guardrails",
    angle: 240,
    color: "text-red-500 dark:text-red-400",
    border: "border-red-500/40 dark:border-red-400/40",
    bg: "bg-red-500/10 dark:bg-red-400/10",
    glowColor: "248,113,113",
  },
  {
    icon: BarChart3,
    label: "Observability",
    angle: 300,
    color: "text-amber-600 dark:text-yellow-400",
    border: "border-amber-600/40 dark:border-yellow-400/40",
    bg: "bg-amber-600/10 dark:bg-yellow-400/10",
    glowColor: "250,204,21",
  },
];

// All values as percentages of the container (original 440px base)
const CENTER = 50; // 220/440
const RADIUS = 37.5; // 165/440
const NODE_W = 20; // 88/440
const NODE_H = 16.36; // 72/440
const HUB_SIZE = 27.27; // 120/440

export default function AgentArchViz() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Connection lines from center to each spoke */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {spokes.map((spoke, i) => {
          const rad = (spoke.angle * Math.PI) / 180;
          const x = CENTER + RADIUS * Math.sin(rad);
          const y = CENTER - RADIUS * Math.cos(rad);
          return (
            <g key={i}>
              <line
                x1={CENTER}
                y1={CENTER}
                x2={x}
                y2={y}
                stroke="currentColor"
                strokeWidth="0.25"
                className="text-border"
              />
              <motion.circle
                r="0.7"
                className="text-primary"
                fill="currentColor"
                animate={{
                  cx: [CENTER, x],
                  cy: [CENTER, y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Spoke nodes */}
      {spokes.map((spoke, i) => {
        const rad = (spoke.angle * Math.PI) / 180;
        const x = CENTER + RADIUS * Math.sin(rad);
        const y = CENTER - RADIUS * Math.cos(rad);
        return (
          <motion.div
            key={spoke.label}
            className={`absolute flex flex-col items-center justify-center gap-1 rounded-xl border ${spoke.border} ${spoke.bg}`}
            style={{
              width: `${NODE_W}%`,
              height: `${NODE_H}%`,
              left: `${x - NODE_W / 2}%`,
              top: `${y - NODE_H / 2}%`,
              boxShadow: `0 0 20px rgba(${spoke.glowColor}, var(--glow-opacity))`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
          >
            <spoke.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${spoke.color}`} />
            <span
              className={`text-[8px] sm:text-[10px] leading-tight font-medium text-center ${spoke.color}`}
            >
              {spoke.label}
            </span>
          </motion.div>
        );
      })}

      {/* Center hub */}
      <motion.div
        className="absolute flex flex-col items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-secondary/15 to-purple-500/20 border-2 border-primary/40 glow-green"
        style={{
          width: `${HUB_SIZE}%`,
          height: `${HUB_SIZE}%`,
          left: `${CENTER - HUB_SIZE / 2}%`,
          top: `${CENTER - HUB_SIZE / 2}%`,
        }}
      >
        <span className="text-sm sm:text-lg font-bold gradient-text">Agent</span>
        <span className="text-[8px] sm:text-[10px] text-muted-foreground">Context Engine</span>
      </motion.div>
    </div>
  );
}
