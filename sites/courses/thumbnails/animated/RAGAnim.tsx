"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function RAGAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 160, 190));
  const bgFrom = `hsl(${hue}, 65%, 18%)`;
  const bgTo = `hsl(${hue + 20}, 55%, 10%)`;
  const accent = `hsl(${hue}, 80%, 55%)`;
  const accent2 = `hsl(${hue + 120}, 75%, 55%)`;
  const speed = range(rng, 3, 5);
  const docCount = Math.floor(range(rng, 3, 5));

  return (
    <AnimatedThumbnail seed={seed} category="rag">
      <defs>
        <linearGradient id={`ragbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#ragbg${seed})`} />

      {/* Document stack */}
      {Array.from({ length: docCount }).map((_, i) => (
        <g key={`doc${i}`}>
          <rect
            x={20 + i * 6}
            y={45 - i * 4}
            width="45"
            height="60"
            rx="3"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity={0.15 + i * 0.1}
            style={{
              animation: `float ${speed}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              transformOrigin: `${42 + i * 6}px ${75 - i * 4}px`,
            }}
          />
        </g>
      ))}
      {/* Doc lines */}
      {[55, 62, 69, 76].map((y, i) => (
        <rect
          key={`dl${i}`}
          x="30"
          y={y}
          width={30 - i * 5}
          height="3"
          rx="1"
          fill={accent}
          opacity="0.3"
        />
      ))}

      {/* Arrow: docs to vector DB */}
      <circle r="2" fill={accent} opacity="0.8">
        <animateMotion dur={`${speed}s`} repeatCount="indefinite" path="M 75 75 L 115 75" />
      </circle>

      {/* Vector DB cylinder */}
      <ellipse cx="145" cy="50" rx="22" ry="7" fill={accent2} opacity="0.15" stroke={accent2} strokeWidth="0.5" />
      <rect x="123" y="50" width="44" height="45" fill={accent2} opacity="0.1" />
      <ellipse cx="145" cy="95" rx="22" ry="7" fill={accent2} opacity="0.15" stroke={accent2} strokeWidth="0.5" />
      <line x1="123" y1="50" x2="123" y2="95" stroke={accent2} strokeWidth="0.5" opacity="0.2" />
      <line x1="167" y1="50" x2="167" y2="95" stroke={accent2} strokeWidth="0.5" opacity="0.2" />
      {/* Floating vectors inside */}
      {[60, 70, 80].map((y, i) => (
        <rect
          key={`vec${i}`}
          x="130"
          y={y}
          width="30"
          height="4"
          rx="2"
          fill={accent2}
          opacity="0.3"
          style={{
            animation: `fadeInOut ${speed}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Arrow: DB to LLM */}
      <circle r="2" fill={accent2} opacity="0.8">
        <animateMotion dur={`${speed}s`} repeatCount="indefinite" path="M 170 75 L 200 75" />
      </circle>

      {/* LLM box */}
      <rect
        x="200"
        y="55"
        width="55"
        height="40"
        rx="5"
        fill={accent}
        opacity="0.2"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />
      <text x="213" y="79" fontSize="11" fill={accent} fontFamily="sans-serif" opacity="0.8">
        LLM
      </text>

      {/* Output lines */}
      {[120, 132, 144].map((y, i) => (
        <rect
          key={`out${i}`}
          x="80"
          y={y}
          width={range(seededRandom(seed + i), 60, 140)}
          height="5"
          rx="2"
          fill={accent}
          opacity="0.2"
          style={{
            animation: `slideRight ${speed}s ease-out infinite`,
            animationDelay: `${1 + i * 0.4}s`,
          }}
        />
      ))}

      {/* Labels */}
      <text x="25" y="168" fontSize="7" fill={accent} opacity="0.5" fontFamily="sans-serif">
        Retrieve
      </text>
      <text x="128" y="168" fontSize="7" fill={accent2} opacity="0.5" fontFamily="sans-serif">
        Augment
      </text>
      <text x="205" y="168" fontSize="7" fill={accent} opacity="0.5" fontFamily="sans-serif">
        Generate
      </text>
    </AnimatedThumbnail>
  );
}
