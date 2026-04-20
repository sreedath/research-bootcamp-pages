"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function BuildAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 20, 45));
  const bgFrom = `hsl(${hue}, 75%, 25%)`;
  const bgTo = `hsl(${hue + 15}, 65%, 12%)`;
  const accent = `hsl(${hue}, 90%, 60%)`;
  const accent2 = `hsl(${hue + 30}, 85%, 65%)`;
  const speed = range(rng, 3, 5);
  const blockCount = Math.floor(range(rng, 4, 7));
  const cols = Math.floor(range(rng, 3, 5));

  return (
    <AnimatedThumbnail seed={seed} category="build">
      <defs>
        <linearGradient id={`bbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#bbg${seed})`} />

      {/* Code brackets */}
      <text
        x="30"
        y="55"
        fontSize="32"
        fill={accent}
        fontFamily="monospace"
        opacity="0.5"
        style={{
          animation: `float ${speed}s ease-in-out infinite`,
          transformOrigin: "30px 45px",
        }}
      >
        {"<"}
      </text>
      <text
        x="230"
        y="55"
        fontSize="32"
        fill={accent}
        fontFamily="monospace"
        opacity="0.5"
        style={{
          animation: `float ${speed}s ease-in-out infinite`,
          animationDelay: "0.5s",
          transformOrigin: "240px 45px",
        }}
      >
        {"/>"}
      </text>

      {/* Code lines typing */}
      {Array.from({ length: 5 }).map((_, i) => {
        const indent = Math.floor(range(seededRandom(seed + i), 0, 3)) * 12;
        const width = range(seededRandom(seed + 50 + i), 40, 120);
        return (
          <rect
            key={`code${i}`}
            x={70 + indent}
            y={35 + i * 14}
            width={width}
            height="5"
            rx="2"
            fill={i % 2 === 0 ? accent : accent2}
            opacity="0.4"
            style={{
              animation: `slideRight ${speed + 1}s ease-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}

      {/* Building blocks stacking up */}
      {Array.from({ length: blockCount }).map((_, i) => {
        const row = Math.floor(i / cols);
        const col = i % cols;
        const bx = 60 + col * 28;
        const by = 155 - row * 24;
        return (
          <rect
            key={`block${i}`}
            x={bx}
            y={by}
            width="22"
            height="18"
            rx="3"
            fill={row % 2 === 0 ? accent : accent2}
            opacity="0.5"
            style={{
              animation: `float ${speed}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transformOrigin: `${bx + 11}px ${by + 9}px`,
            }}
          />
        );
      })}

      {/* Gear spinning */}
      <circle
        cx="210"
        cy="130"
        r="18"
        fill="none"
        stroke={accent2}
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="8,6"
        style={{
          animation: `rotate ${speed * 3}s linear infinite`,
          transformOrigin: "210px 130px",
        }}
      />
      <circle cx="210" cy="130" r="5" fill={accent2} opacity="0.4" />
    </AnimatedThumbnail>
  );
}
