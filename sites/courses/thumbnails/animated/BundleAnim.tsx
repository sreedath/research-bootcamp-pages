"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function BundleAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue1 = Math.floor(range(rng, 260, 290));
  const hue2 = Math.floor(range(rng, 30, 50));
  const bgFrom = `hsl(${hue1}, 55%, 18%)`;
  const bgTo = `hsl(${hue2}, 50%, 12%)`;
  const accent = `hsl(${hue1}, 75%, 65%)`;
  const accent2 = `hsl(${hue2}, 85%, 55%)`;
  const speed = range(rng, 3, 5);
  const cardCount = Math.floor(range(rng, 3, 6));

  return (
    <AnimatedThumbnail seed={seed} category="bundle">
      <defs>
        <linearGradient id={`bubg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#bubg${seed})`} />

      {/* Stacked cards fanning out */}
      {Array.from({ length: cardCount }).map((_, i) => (
        <rect
          key={`card${i}`}
          x={70 + i * 10}
          y={30 - i * 5}
          width="120"
          height="80"
          rx="6"
          fill="none"
          stroke={i % 2 === 0 ? accent : accent2}
          strokeWidth="1.2"
          opacity={0.1 + i * 0.12}
          style={{
            animation: `float ${speed}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
            transformOrigin: `${130 + i * 10}px ${70 - i * 5}px`,
          }}
        />
      ))}

      {/* Content lines on top card */}
      {[40, 50, 60].map((y, i) => (
        <rect
          key={`cont${i}`}
          x={80 + cardCount * 10}
          y={y - (cardCount - 1) * 5}
          width={range(seededRandom(seed + i), 40, 80)}
          height="4"
          rx="2"
          fill={accent}
          opacity="0.3"
        />
      ))}

      {/* Bundle ribbon */}
      <rect
        x="85"
        y="105"
        width="110"
        height="24"
        rx="12"
        fill={accent2}
        opacity="0.3"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />
      <text x="113" y="121" fontSize="11" fill={accent2} fontFamily="sans-serif" opacity="0.9" fontWeight="bold">
        BUNDLE
      </text>

      {/* Savings badge */}
      <circle
        cx="220"
        cy="50"
        r="20"
        fill={accent2}
        opacity="0.2"
        style={{ animation: `pulse ${speed * 0.8}s ease-in-out infinite` }}
      />
      <text x="210" y="48" fontSize="8" fill={accent2} fontFamily="sans-serif" opacity="0.8">
        Save
      </text>
      <text x="210" y="58" fontSize="10" fill={accent2} fontFamily="sans-serif" opacity="0.9" fontWeight="bold">
        More
      </text>

      {/* Connecting dots */}
      {Array.from({ length: 4 }).map((_, i) => (
        <circle
          key={`cd${i}`}
          cx={100 + i * 30}
          cy="150"
          r="3"
          fill={accent}
          opacity="0.4"
          style={{
            animation: `pulse ${speed * 0.6}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <line
          key={`cl${i}`}
          x1={103 + i * 30}
          y1="150"
          x2={127 + i * 30}
          y2="150"
          stroke={accent}
          strokeWidth="0.8"
          opacity="0.2"
          strokeDasharray="3,3"
          style={{ animation: `dash ${speed}s linear infinite` }}
        />
      ))}
    </AnimatedThumbnail>
  );
}
