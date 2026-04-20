"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function VisionAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 330, 370)) % 360;
  const bgFrom = `hsl(${hue}, 65%, 22%)`;
  const bgTo = `hsl(${(hue + 20) % 360}, 55%, 12%)`;
  const accent = `hsl(${hue}, 80%, 65%)`;
  const accent2 = `hsl(${(hue + 40) % 360}, 75%, 60%)`;
  const speed = range(rng, 3, 5);
  const gridSize = Math.floor(range(rng, 3, 5));

  return (
    <AnimatedThumbnail seed={seed} category="vision">
      <defs>
        <linearGradient id={`vbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#vbg${seed})`} />

      {/* Eye shape */}
      <ellipse
        cx="140"
        cy="75"
        rx="55"
        ry="30"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.5"
        style={{
          animation: `pulse ${speed}s ease-in-out infinite`,
        }}
      />
      <circle
        cx="140"
        cy="75"
        r="14"
        fill={accent}
        opacity="0.3"
        style={{
          animation: `pulse ${speed * 0.7}s ease-in-out infinite`,
          animationDelay: "0.3s",
        }}
      />
      <circle cx="140" cy="75" r="6" fill={accent} opacity="0.7" />

      {/* Scan lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <line
          key={`scan${i}`}
          x1="60"
          y1={60 + i * 15}
          x2="220"
          y2={60 + i * 15}
          stroke={accent2}
          strokeWidth="0.5"
          opacity="0.2"
          strokeDasharray="5,5"
          style={{
            animation: `dash ${speed}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Feature map grid */}
      {Array.from({ length: gridSize }).map((_, r) =>
        Array.from({ length: gridSize }).map((_, c) => {
          const intensity = range(seededRandom(seed + r * 10 + c), 0.15, 0.55);
          return (
            <rect
              key={`g${r}${c}`}
              x={40 + c * 20}
              y={115 + r * 18}
              width="16"
              height="14"
              rx="2"
              fill={accent}
              opacity={intensity}
              style={{
                animation: `fadeInOut ${speed + r * 0.5}s ease-in-out infinite`,
                animationDelay: `${(r + c) * 0.2}s`,
              }}
            />
          );
        })
      )}

      {/* Detection box */}
      <rect
        x="155"
        y="115"
        width="80"
        height="50"
        rx="3"
        fill="none"
        stroke={accent2}
        strokeWidth="1.5"
        opacity="0.4"
        strokeDasharray="6,4"
        style={{
          animation: `pulse ${speed}s ease-in-out infinite`,
          animationDelay: "1s",
        }}
      />
      <text
        x="163"
        y="130"
        fontSize="8"
        fill={accent2}
        opacity="0.6"
        fontFamily="monospace"
      >
        detected
      </text>
    </AnimatedThumbnail>
  );
}
