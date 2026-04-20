"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function SoftwareDevAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 210, 240));
  const bgFrom = `hsl(${hue}, 60%, 18%)`;
  const bgTo = `hsl(${hue + 15}, 50%, 8%)`;
  const accent = `hsl(${hue}, 80%, 60%)`;
  const accent2 = `hsl(${130}, 70%, 55%)`;
  const speed = range(rng, 3, 5);
  const lineCount = Math.floor(range(rng, 5, 8));

  return (
    <AnimatedThumbnail seed={seed} category="software-dev">
      <defs>
        <linearGradient id={`sdbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#sdbg${seed})`} />

      {/* Terminal window */}
      <rect
        x="35"
        y="25"
        width="210"
        height="130"
        rx="6"
        fill="hsl(220, 20%, 12%)"
        stroke={accent}
        strokeWidth="0.5"
        opacity="0.9"
      />
      {/* Title bar */}
      <rect x="35" y="25" width="210" height="18" rx="6" fill="hsl(220, 15%, 18%)" opacity="0.9" />
      <circle cx="48" cy="34" r="3" fill="#ef4444" opacity="0.7" />
      <circle cx="58" cy="34" r="3" fill="#eab308" opacity="0.7" />
      <circle cx="68" cy="34" r="3" fill={accent2} opacity="0.7" />

      {/* Code lines typing in */}
      {Array.from({ length: lineCount }).map((_, i) => {
        const indent = Math.floor(range(seededRandom(seed + i * 3), 0, 4)) * 10;
        const width = range(seededRandom(seed + 50 + i), 30, 140);
        const isKeyword = range(seededRandom(seed + 100 + i), 0, 1) > 0.5;
        return (
          <rect
            key={`cl${i}`}
            x={45 + indent}
            y={50 + i * 14}
            width={width}
            height="5"
            rx="2"
            fill={isKeyword ? accent : accent2}
            opacity="0.4"
            style={{
              animation: `slideRight ${speed}s ease-out infinite`,
              animationDelay: `${i * 0.25}s`,
            }}
          />
        );
      })}

      {/* Cursor blinking */}
      <rect
        x="45"
        y={50 + lineCount * 14}
        width="6"
        height="10"
        fill={accent}
        style={{
          animation: `pulse 1s steps(2) infinite`,
        }}
      />

      {/* Git branch */}
      <g opacity="0.4">
        <line x1="45" y1="155" x2="45" y2="170" stroke={accent2} strokeWidth="1.5" />
        <line x1="45" y1="162" x2="60" y2="157" stroke={accent2} strokeWidth="1.5" />
        <circle cx="45" cy="170" r="2.5" fill={accent2} />
        <circle cx="60" cy="157" r="2.5" fill={accent2} />
      </g>
    </AnimatedThumbnail>
  );
}
