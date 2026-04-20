"use client";

import { motion } from "framer-motion";

/*
 * Neural-network hero visualization.
 * Shows a 5-layer network with:
 *   - activation function labels (ReLU, Sigmoid, Softmax)
 *   - a skip / residual connection
 *   - dropout indicators (crossed-out nodes)
 *   - gradient-flow arrows on the backprop side
 *   - floating math annotations
 */

const layers = [
  { nodes: 4, label: "Input", activation: "" },
  { nodes: 6, label: "Dense + ReLU", activation: "ReLU" },
  { nodes: 6, label: "Dense + ReLU", activation: "ReLU" },
  { nodes: 4, label: "Dense + Sigmoid", activation: "Sigmoid" },
  { nodes: 3, label: "Softmax", activation: "Softmax" },
];

const layerSpacing = 82;
const nodeSpacing = 44;
const startX = 32;
const vizWidth = 440;
const vizHeight = 380;

// Nodes that are "dropped out" (layerIdx, nodeIdx)
const droppedOut: Set<string> = new Set(["1-4", "2-1", "3-2"]);

function ny(count: number, idx: number): number {
  const total = (count - 1) * nodeSpacing;
  return (vizHeight - 80 - total) / 2 + idx * nodeSpacing + 20;
}
function nx(layerIdx: number): number {
  return startX + layerIdx * layerSpacing;
}

export default function NeuralNetViz() {
  /* ---- connections ---- */
  const conns: Array<{
    x1: number; y1: number; x2: number; y2: number;
    dropped: boolean; delay: number; weight: number;
  }> = [];

  for (let l = 0; l < layers.length - 1; l++) {
    const from = layers[l];
    const to = layers[l + 1];
    for (let i = 0; i < from.nodes; i++) {
      for (let j = 0; j < to.nodes; j++) {
        const srcDrop = droppedOut.has(`${l}-${i}`);
        const dstDrop = droppedOut.has(`${l + 1}-${j}`);
        conns.push({
          x1: nx(l), y1: ny(from.nodes, i),
          x2: nx(l + 1), y2: ny(to.nodes, j),
          dropped: srcDrop || dstDrop,
          delay: (l * 0.6 + (i + j) * 0.04) % 3.5,
          weight: 0.06 + Math.random() * 0.14,
        });
      }
    }
  }

  return (
    <svg
      viewBox={`0 0 ${vizWidth} ${vizHeight}`}
      className="w-full h-full"
      aria-label="Neural Network with ReLU, Dropout, Skip Connection, and Gradient Flow"
    >
      <defs>
        <linearGradient id="nn-fwd" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
          <stop offset="50%" stopColor="var(--secondary)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="nn-skip" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="nn-grad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="nn-glow">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <filter id="nn-blur"><feGaussianBlur stdDeviation="3" /></filter>
        <marker id="arrow-grad" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0,0 L6,2 L0,4" fill="#f97316" opacity="0.6" />
        </marker>
        <marker id="arrow-skip" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
          <path d="M0,0 L6,2 L0,4" fill="var(--secondary)" opacity="0.7" />
        </marker>
      </defs>

      {/* ===== CONNECTIONS ===== */}
      {conns.map((c, i) => (
        <motion.line
          key={i}
          x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke={c.dropped ? "var(--primary)" : "url(#nn-fwd)"}
          strokeWidth={c.dropped ? 0.3 : 0.7}
          strokeDasharray={c.dropped ? "2 3" : "none"}
          opacity={c.dropped ? 0.12 : c.weight}
          animate={c.dropped ? {} : { opacity: [c.weight, c.weight * 2.5, c.weight] }}
          transition={{ duration: 3.5, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ===== SIGNAL PULSES (forward) ===== */}
      {conns.filter((_, i) => i % 11 === 0 && !conns[i].dropped).map((c, i) => (
        <motion.circle
          key={`fp-${i}`}
          r={1.8}
          fill="var(--secondary)"
          animate={{ cx: [c.x1, c.x2], cy: [c.y1, c.y2], opacity: [0, 0.9, 0] }}
          transition={{ duration: 2, delay: c.delay + 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* ===== SKIP / RESIDUAL CONNECTION (layer 1 -> layer 3) ===== */}
      <motion.path
        d={`M ${nx(1)} ${ny(layers[1].nodes, 0) - 14} Q ${(nx(1) + nx(3)) / 2} ${ny(layers[1].nodes, 0) - 52} ${nx(3)} ${ny(layers[3].nodes, 0) - 14}`}
        fill="none"
        stroke="url(#nn-skip)"
        strokeWidth={1.8}
        strokeDasharray="6 4"
        markerEnd="url(#arrow-skip)"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <text
        x={(nx(1) + nx(3)) / 2}
        y={ny(layers[1].nodes, 0) - 54}
        textAnchor="middle"
        fontSize={8}
        fontFamily="monospace"
        className="fill-secondary"
        opacity={0.7}
      >
        skip connection
      </text>

      {/* ===== NODES ===== */}
      {layers.map((layer, lIdx) =>
        Array.from({ length: layer.nodes }).map((_, nIdx) => {
          const x = nx(lIdx);
          const y = ny(layer.nodes, nIdx);
          const isDropped = droppedOut.has(`${lIdx}-${nIdx}`);
          const isOutput = lIdx === layers.length - 1;

          return (
            <g key={`n-${lIdx}-${nIdx}`}>
              {!isDropped && (
                <circle cx={x} cy={y} r={14} fill="url(#nn-glow)" filter="url(#nn-blur)" />
              )}
              <motion.circle
                cx={x} cy={y}
                r={isOutput ? 10 : 8}
                fill={isDropped ? "transparent" : "var(--background)"}
                stroke={isDropped ? "var(--primary)" : isOutput ? "var(--secondary)" : "var(--primary)"}
                strokeWidth={isDropped ? 1 : 1.8}
                strokeDasharray={isDropped ? "3 2" : "none"}
                opacity={isDropped ? 0.3 : 1}
                animate={isDropped ? {} : { scale: [1, 1.1, 1], strokeOpacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.8, delay: lIdx * 0.4 + nIdx * 0.12, repeat: Infinity, ease: "easeInOut" }}
              />
              {!isDropped && (
                <motion.circle
                  cx={x} cy={y} r={3.5}
                  fill={isOutput ? "var(--secondary)" : "var(--primary)"}
                  animate={{ opacity: [0.25, 0.85, 0.25], r: [3, 4.5, 3] }}
                  transition={{ duration: 2.2, delay: lIdx * 0.5 + nIdx * 0.15, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              {isDropped && (
                <g opacity={0.4}>
                  <line x1={x - 5} y1={y - 5} x2={x + 5} y2={y + 5} stroke="#ef4444" strokeWidth={1.5} />
                  <line x1={x + 5} y1={y - 5} x2={x - 5} y2={y + 5} stroke="#ef4444" strokeWidth={1.5} />
                </g>
              )}
            </g>
          );
        })
      )}

      {/* ===== ACTIVATION LABELS (between layers) ===== */}
      {layers.slice(1).map((layer, i) => {
        const lIdx = i + 1;
        const midX = (nx(lIdx - 1) + nx(lIdx)) / 2;
        const topY = ny(layer.nodes, 0) - 6;
        if (!layer.activation) return null;
        return (
          <motion.g
            key={`act-${lIdx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.2 }}
          >
            <rect
              x={midX - 18} y={topY - 10}
              width={36} height={16}
              rx={4}
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth={0.6}
              opacity={0.7}
            />
            <text
              x={midX} y={topY + 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={7.5}
              fontFamily="monospace"
              fontWeight="600"
              className="fill-primary"
              opacity={0.8}
            >
              {layer.activation}
            </text>
          </motion.g>
        );
      })}

      {/* ===== DROPOUT LABEL ===== */}
      <motion.text
        initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 2 }}
        x={nx(1) + (nx(2) - nx(1)) / 2}
        y={ny(layers[2].nodes, layers[2].nodes - 1) + 18}
        textAnchor="middle"
        fontSize={7}
        fontFamily="monospace"
        fill="#ef4444"
      >
        dropout p=0.2
      </motion.text>

      {/* ===== LAYER LABELS ===== */}
      {layers.map((layer, lIdx) => (
        <text
          key={`lbl-${lIdx}`}
          x={nx(lIdx)}
          y={vizHeight - 10}
          textAnchor="middle"
          className="fill-muted-foreground"
          fontSize={8}
          fontFamily="Inter, sans-serif"
        >
          {layer.label}
        </text>
      ))}
    </svg>
  );
}
