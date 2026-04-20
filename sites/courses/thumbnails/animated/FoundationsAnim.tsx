"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function FoundationsAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 240, 270));
  const bgFrom = `hsl(${hue}, 65%, 22%)`;
  const bgTo = `hsl(${hue + 20}, 55%, 10%)`;
  const accent = `hsl(${hue}, 80%, 65%)`;
  const accent2 = `hsl(${hue + 60}, 75%, 60%)`;
  const speed = range(rng, 4, 6);
  const pointCount = Math.floor(range(rng, 6, 12));

  return (
    <AnimatedThumbnail seed={seed} category="foundations">
      <defs>
        <linearGradient id={`fbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#fbg${seed})`} />

      {/* Coordinate axes */}
      <line x1="40" y1="140" x2="250" y2="140" stroke={accent} strokeWidth="1" opacity="0.3" />
      <line x1="40" y1="140" x2="40" y2="25" stroke={accent} strokeWidth="1" opacity="0.3" />

      {/* Grid lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <g key={`grid${i}`}>
          <line
            x1="40"
            y1={30 + i * 22}
            x2="250"
            y2={30 + i * 22}
            stroke={accent}
            strokeWidth="0.3"
            opacity="0.15"
          />
          <line
            x1={80 + i * 40}
            y1="25"
            x2={80 + i * 40}
            y2="140"
            stroke={accent}
            strokeWidth="0.3"
            opacity="0.15"
          />
        </g>
      ))}

      {/* Scattered data points */}
      {Array.from({ length: pointCount }).map((_, i) => {
        const cx = range(seededRandom(seed + i), 50, 240);
        const cy = range(seededRandom(seed + 100 + i), 35, 135);
        return (
          <circle
            key={`pt${i}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill={accent2}
            opacity="0.6"
            style={{
              animation: `float ${speed}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
        );
      })}

      {/* Regression line */}
      <line
        x1="50"
        y1={range(rng, 100, 130)}
        x2="240"
        y2={range(rng, 40, 70)}
        stroke={accent}
        strokeWidth="2"
        opacity="0.5"
        strokeDasharray="150"
        strokeDashoffset="150"
        style={{
          animation: `dash ${speed * 2}s ease-out infinite`,
        }}
      />

      {/* Math symbols */}
      <text
        x="60"
        y="168"
        fontSize="14"
        fill={accent}
        fontFamily="serif"
        opacity="0.4"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      >
        {"f(x) = wx + b"}
      </text>

      {/* Sigma */}
      <text
        x="200"
        y="170"
        fontSize="18"
        fill={accent2}
        fontFamily="serif"
        opacity="0.3"
        style={{ animation: `pulse ${speed}s ease-in-out infinite`, animationDelay: "1s" }}
      >
        {"\\u03A3"}
      </text>
    </AnimatedThumbnail>
  );
}
