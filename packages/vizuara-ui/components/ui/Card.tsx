"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "green" | "cyan" | "none";
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = "none",
}: CardProps) {
  const glowClass =
    glow === "green"
      ? "glow-green"
      : glow === "cyan"
        ? "glow-cyan"
        : "";

  return (
    <motion.div
      className={`rounded-xl border border-border bg-card p-6 ${hover ? "hover:border-primary/30" : ""} ${glowClass} ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.2 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
