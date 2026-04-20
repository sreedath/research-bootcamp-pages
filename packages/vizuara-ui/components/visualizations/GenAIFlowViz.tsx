"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const tokens = ["The", "model", "learns", "to", "attend", "to", "key", "tokens"];
const n = tokens.length;
const cellSize = 38;
const matrixSize = n * cellSize;
const offsetX = (420 - matrixSize) / 2;
const offsetY = 52;

// Deterministic attention pattern: each row sums roughly to 1
// Pattern mimics real self-attention: diagonal + contextual
const attentionPattern: number[][] = [
  [0.05, 0.60, 0.10, 0.05, 0.05, 0.05, 0.05, 0.05],
  [0.10, 0.15, 0.45, 0.05, 0.10, 0.05, 0.05, 0.05],
  [0.05, 0.20, 0.10, 0.05, 0.35, 0.05, 0.10, 0.10],
  [0.05, 0.05, 0.05, 0.10, 0.05, 0.60, 0.05, 0.05],
  [0.05, 0.30, 0.15, 0.05, 0.10, 0.05, 0.20, 0.10],
  [0.05, 0.05, 0.05, 0.50, 0.05, 0.10, 0.05, 0.15],
  [0.05, 0.10, 0.05, 0.05, 0.20, 0.05, 0.15, 0.35],
  [0.05, 0.15, 0.10, 0.05, 0.10, 0.05, 0.35, 0.15],
];

// Second head: different attention distribution
const attentionHead2: number[][] = [
  [0.30, 0.05, 0.05, 0.30, 0.05, 0.15, 0.05, 0.05],
  [0.05, 0.10, 0.05, 0.05, 0.05, 0.05, 0.55, 0.10],
  [0.15, 0.05, 0.30, 0.05, 0.05, 0.05, 0.05, 0.30],
  [0.05, 0.05, 0.15, 0.05, 0.45, 0.05, 0.15, 0.05],
  [0.05, 0.40, 0.05, 0.05, 0.10, 0.05, 0.05, 0.25],
  [0.10, 0.05, 0.05, 0.05, 0.05, 0.40, 0.25, 0.05],
  [0.05, 0.05, 0.25, 0.15, 0.05, 0.10, 0.10, 0.25],
  [0.35, 0.10, 0.05, 0.05, 0.15, 0.05, 0.05, 0.20],
];

function AttentionCell({
  row,
  col,
  weight1,
  weight2,
}: {
  row: number;
  col: number;
  weight1: number;
  weight2: number;
}) {
  const x = offsetX + col * cellSize;
  const y = offsetY + row * cellSize;
  const delay = row * 0.04 + col * 0.04;

  return (
    <motion.g key={`${row}-${col}`}>
      {/* Cell background */}
      <motion.rect
        x={x + 1}
        y={y + 1}
        width={cellSize - 2}
        height={cellSize - 2}
        rx={4}
        fill="var(--primary)"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [weight1 * 0.85, weight2 * 0.85, weight1 * 0.85],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut",
        }}
      />
      {/* Bright pulse on high-attention cells */}
      {weight1 > 0.3 && (
        <motion.rect
          x={x + 1}
          y={y + 1}
          width={cellSize - 2}
          height={cellSize - 2}
          rx={4}
          fill="none"
          stroke="var(--primary)"
          strokeWidth={1}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay + 1,
          }}
        />
      )}
    </motion.g>
  );
}

export default function GenAIFlowViz() {
  const cells = useMemo(() => {
    const result: { row: number; col: number; w1: number; w2: number }[] = [];
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        result.push({
          row: r,
          col: c,
          w1: attentionPattern[r][c],
          w2: attentionHead2[r][c],
        });
      }
    }
    return result;
  }, []);

  return (
    <div className="relative h-[420px] w-[420px]">
      <svg
        width="420"
        height="420"
        viewBox="0 0 420 420"
        className="overflow-visible"
      >
        {/* Subtle grid background */}
        <defs>
          <pattern
            id="gridPattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="0.3"
              opacity="0.06"
            />
          </pattern>
          {/* Glow filter for active cells */}
          <filter id="cellGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="420" height="420" fill="url(#gridPattern)" />

        {/* Title */}
        <motion.text
          x="210"
          y="30"
          textAnchor="middle"
          fill="var(--primary)"
          fontSize="14"
          fontWeight="700"
          fontFamily="var(--font-serif)"
          opacity="0.8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Self-Attention
        </motion.text>

        {/* Column labels (Key tokens) */}
        {tokens.map((token, i) => (
          <motion.text
            key={`col-${i}`}
            x={offsetX + i * cellSize + cellSize / 2}
            y={offsetY - 6}
            textAnchor="middle"
            fill="var(--secondary)"
            fontSize="9"
            fontWeight="600"
            fontFamily="monospace"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
          >
            {token}
          </motion.text>
        ))}

        {/* Row labels (Query tokens) */}
        {tokens.map((token, i) => (
          <motion.text
            key={`row-${i}`}
            x={offsetX - 6}
            y={offsetY + i * cellSize + cellSize / 2 + 3}
            textAnchor="end"
            fill="var(--secondary)"
            fontSize="9"
            fontWeight="600"
            fontFamily="monospace"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
          >
            {token}
          </motion.text>
        ))}

        {/* Matrix border */}
        <motion.rect
          x={offsetX}
          y={offsetY}
          width={matrixSize}
          height={matrixSize}
          rx={6}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1"
          opacity="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />

        {/* Attention cells */}
        {cells.map((c) => (
          <AttentionCell
            key={`${c.row}-${c.col}`}
            row={c.row}
            col={c.col}
            weight1={c.w1}
            weight2={c.w2}
          />
        ))}

        {/* Scanning row highlight */}
        <motion.rect
          x={offsetX}
          width={matrixSize}
          height={cellSize}
          rx={4}
          fill="var(--secondary)"
          opacity="0.06"
          animate={{
            y: Array.from({ length: n + 1 }, (_, i) =>
              offsetY + (i % n) * cellSize
            ),
          }}
          transition={{
            duration: n * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Scanning column highlight */}
        <motion.rect
          y={offsetY}
          height={matrixSize}
          width={cellSize}
          rx={4}
          fill="var(--primary)"
          opacity="0.04"
          animate={{
            x: Array.from({ length: n + 1 }, (_, i) =>
              offsetX + ((i + 3) % n) * cellSize
            ),
          }}
          transition={{
            duration: n * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Q K V labels on left */}
        {(["Q", "K", "V"] as const).map((label, i) => {
          const labelY = offsetY + matrixSize + 30 + i * 0;
          const labelX = offsetX + 40 + i * 110;
          const colors = [
            "var(--primary)",
            "var(--secondary)",
            "var(--primary)",
          ];
          return (
            <motion.g key={label}>
              <motion.rect
                x={labelX - 18}
                y={labelY - 10}
                width={36}
                height={20}
                rx={10}
                fill={colors[i]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.12, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              />
              <motion.text
                x={labelX}
                y={labelY + 4}
                textAnchor="middle"
                fill={colors[i]}
                fontSize="11"
                fontWeight="700"
                fontFamily="monospace"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              >
                {label}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Arrows between Q K V */}
        {[0, 1].map((i) => {
          const x1 = offsetX + 40 + i * 110 + 22;
          const x2 = offsetX + 40 + (i + 1) * 110 - 22;
          const y = offsetY + matrixSize + 24;
          return (
            <motion.line
              key={`qkv-arrow-${i}`}
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="var(--primary)"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            />
          );
        })}

        {/* softmax(QK/sqrt(d)) label */}
        <motion.text
          x="210"
          y={offsetY + matrixSize + 54}
          textAnchor="middle"
          fill="var(--primary)"
          fontSize="10"
          fontFamily="monospace"
          fontWeight="500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {"softmax( Q \u00B7 K\u1D40 / \u221Ad )"}
        </motion.text>

        {/* Head indicator pills at bottom */}
        {["Head 1", "Head 2", "Head 3", "Head 4"].map((label, i) => {
          const pillX = offsetX + 14 + i * 80;
          const pillY = offsetY + matrixSize + 68;
          return (
            <motion.g key={label}>
              <motion.rect
                x={pillX}
                y={pillY}
                width={64}
                height={18}
                rx={9}
                fill={i < 2 ? "var(--primary)" : "var(--secondary)"}
                initial={{ opacity: 0, y: 5 }}
                animate={{
                  opacity: i === 0 ? [0.15, 0.3, 0.15] : 0.08,
                  y: 0,
                }}
                transition={
                  i === 0
                    ? {
                        opacity: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        y: { delay: 2 + i * 0.1, duration: 0.4 },
                      }
                    : { delay: 2 + i * 0.1, duration: 0.4 }
                }
              />
              <motion.text
                x={pillX + 32}
                y={pillY + 12}
                textAnchor="middle"
                fill={i < 2 ? "var(--primary)" : "var(--secondary)"}
                fontSize="8"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: i === 0 ? 0.9 : 0.5 }}
                transition={{ delay: 2.1 + i * 0.1, duration: 0.4 }}
              >
                {label}
              </motion.text>
            </motion.g>
          );
        })}

        {/* Subtle corner accent lines */}
        <motion.path
          d={`M ${offsetX - 8} ${offsetY + 12} L ${offsetX - 8} ${offsetY - 2} L ${offsetX + 12} ${offsetY - 2}`}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.3, pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.path
          d={`M ${offsetX + matrixSize + 8} ${offsetY + matrixSize - 12} L ${offsetX + matrixSize + 8} ${offsetY + matrixSize + 2} L ${offsetX + matrixSize - 12} ${offsetY + matrixSize + 2}`}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.3, pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
