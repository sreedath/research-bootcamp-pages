"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function InferenceAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 35, 55));
  const bgFrom = `hsl(${hue}, 65%, 20%)`;
  const bgTo = `hsl(${hue + 15}, 55%, 10%)`;
  const accent = `hsl(${hue}, 90%, 50%)`;
  const accent2 = `hsl(${hue + 20}, 85%, 65%)`;
  const speed = range(rng, 3, 5);
  const chipRows = Math.floor(range(rng, 3, 5));
  const chipCols = Math.floor(range(rng, 4, 7));

  return (
    <AnimatedThumbnail seed={seed} category="inference">
      <defs>
        <linearGradient id={`ibg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#ibg${seed})`} />

      {/* GPU chip */}
      <rect
        x="80"
        y="35"
        width="120"
        height="75"
        rx="5"
        fill={accent}
        opacity="0.1"
        stroke={accent}
        strokeWidth="1.5"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />

      {/* Chip grid cores */}
      {Array.from({ length: chipRows }).map((_, r) =>
        Array.from({ length: chipCols }).map((_, c) => (
          <rect
            key={`ch${r}${c}`}
            x={90 + c * (100 / chipCols)}
            y={42 + r * (60 / chipRows)}
            width={100 / chipCols - 4}
            height={60 / chipRows - 4}
            rx="2"
            fill={accent}
            opacity={0.15 + range(seededRandom(seed + r * 10 + c), 0, 0.35)}
            style={{
              animation: `fadeInOut ${speed + range(seededRandom(seed + r + c * 5), 0, 2)}s ease-in-out infinite`,
              animationDelay: `${(r + c) * 0.15}s`,
            }}
          />
        ))
      )}

      {/* Pin connections */}
      {Array.from({ length: 7 }).map((_, i) => (
        <g key={`pin${i}`}>
          <line
            x1={95 + i * 16}
            y1="35"
            x2={95 + i * 16}
            y2="25"
            stroke={accent2}
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            x1={95 + i * 16}
            y1="110"
            x2={95 + i * 16}
            y2="120"
            stroke={accent2}
            strokeWidth="1.5"
            opacity="0.3"
          />
        </g>
      ))}

      {/* Speed metric arrow */}
      <line x1="40" y1="150" x2="240" y2="150" stroke={accent} strokeWidth="1" opacity="0.25" />
      <polygon points="240,150 234,146 234,154" fill={accent} opacity="0.4" />

      {/* Speed bars */}
      {[130, 138, 146].map((y, i) => (
        <rect
          key={`sb${i}`}
          x="40"
          y={y}
          width={range(seededRandom(seed + 800 + i), 80, 190)}
          height="4"
          rx="2"
          fill={accent}
          opacity="0.3"
          style={{
            animation: `slideRight ${speed}s ease-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Data throughput pulse */}
      <circle r="3" fill="white" opacity="0.7">
        <animateMotion
          dur={`${speed}s`}
          repeatCount="indefinite"
          path="M 40 150 L 240 150"
        />
      </circle>
    </AnimatedThumbnail>
  );
}
