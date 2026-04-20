"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function SciMLAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 260, 300));
  const bgFrom = `hsl(${hue}, 60%, 20%)`;
  const bgTo = `hsl(${hue + 20}, 50%, 10%)`;
  const accent = `hsl(${hue}, 75%, 65%)`;
  const accent2 = `hsl(${hue - 100}, 80%, 55%)`;
  const speed = range(rng, 4, 6);
  const waveAmp = range(rng, 30, 50);
  const waveFreq = range(rng, 1.5, 3);

  const wavePath = Array.from({ length: 25 })
    .map((_, i) => {
      const x = 20 + i * 10;
      const y = 80 + Math.sin((i / 25) * Math.PI * waveFreq * 2) * waveAmp;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");

  return (
    <AnimatedThumbnail seed={seed} category="sciml">
      <defs>
        <linearGradient id={`smbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#smbg${seed})`} />

      {/* PDE wave */}
      <path
        d={wavePath}
        fill="none"
        stroke={accent}
        strokeWidth="2"
        opacity="0.5"
        strokeDasharray="200"
        strokeDashoffset="200"
        style={{
          animation: `dash ${speed * 2}s linear infinite`,
        }}
      />

      {/* Neural net nodes along wave */}
      {[3, 7, 11, 15, 19].map((i) => {
        const x = 20 + i * 10;
        const y = 80 + Math.sin((i / 25) * Math.PI * waveFreq * 2) * waveAmp;
        return (
          <circle
            key={`wn${i}`}
            cx={x}
            cy={y}
            r="4"
            fill={accent2}
            opacity="0.6"
            style={{
              animation: `float ${speed}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              transformOrigin: `${x}px ${y}px`,
            }}
          />
        );
      })}

      {/* Equation */}
      <text
        x="50"
        y="165"
        fontSize="11"
        fill={accent}
        fontFamily="serif"
        opacity="0.5"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      >
        du/dt = f(u, t; NN)
      </text>

      {/* Flask */}
      <path
        d="M 225 20 L 225 45 L 245 65 L 205 65 Z"
        fill={accent}
        opacity="0.1"
        stroke={accent}
        strokeWidth="1"
        style={{ animation: `float ${speed}s ease-in-out infinite`, transformOrigin: "225px 42px" }}
      />
      <line x1="218" y1="20" x2="232" y2="20" stroke={accent} strokeWidth="1" opacity="0.3" />

      {/* Data points scattered */}
      {Array.from({ length: 8 }).map((_, i) => {
        const cx = range(seededRandom(seed + 500 + i), 30, 260);
        const cy = range(seededRandom(seed + 600 + i), 30, 140);
        return (
          <circle
            key={`dp${i}`}
            cx={cx}
            cy={cy}
            r="2"
            fill={accent2}
            opacity="0.3"
            style={{
              animation: `pulse ${speed + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        );
      })}
    </AnimatedThumbnail>
  );
}
