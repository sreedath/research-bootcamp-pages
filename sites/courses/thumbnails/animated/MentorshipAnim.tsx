"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function MentorshipAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 140, 170));
  const bgFrom = `hsl(${hue}, 60%, 18%)`;
  const bgTo = `hsl(${hue + 30}, 50%, 10%)`;
  const accent = `hsl(${hue}, 75%, 55%)`;
  const accent2 = `hsl(${80}, 80%, 55%)`;
  const speed = range(rng, 3, 5);

  return (
    <AnimatedThumbnail seed={seed} category="mentorship">
      <defs>
        <linearGradient id={`mbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#mbg${seed})`} />

      {/* Graduation cap */}
      <path
        d="M 140 40 L 200 60 L 140 80 L 80 60 Z"
        fill={accent}
        opacity="0.25"
        stroke={accent}
        strokeWidth="1"
        style={{
          animation: `float ${speed}s ease-in-out infinite`,
          transformOrigin: "140px 60px",
        }}
      />
      <line x1="140" y1="80" x2="140" y2="60" stroke={accent} strokeWidth="1" opacity="0.5" />
      <rect x="136" y="38" width="8" height="8" rx="1" fill={accent} opacity="0.4" />

      {/* Research paper */}
      <rect
        x="40"
        y="100"
        width="50"
        height="60"
        rx="3"
        fill="none"
        stroke={accent2}
        strokeWidth="1"
        opacity="0.4"
        style={{
          animation: `float ${speed}s ease-in-out infinite`,
          animationDelay: "0.5s",
          transformOrigin: "65px 130px",
        }}
      />
      {[108, 116, 124, 132, 140].map((y, i) => (
        <rect
          key={`pl${i}`}
          x="47"
          y={y}
          width={range(seededRandom(seed + i), 20, 38)}
          height="3"
          rx="1"
          fill={accent2}
          opacity="0.3"
          style={{
            animation: `slideRight ${speed}s ease-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Mentor figure */}
      <circle
        cx="200"
        cy="115"
        r="16"
        fill={accent}
        opacity="0.15"
        stroke={accent}
        strokeWidth="1"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />
      <circle cx="200" cy="110" r="5" fill={accent} opacity="0.5" />
      <path d="M 190 125 Q 200 130 210 125" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.4" />

      {/* Connection between paper and mentor */}
      <circle r="2" fill="white" opacity="0.7">
        <animateMotion
          dur={`${speed * 1.5}s`}
          repeatCount="indefinite"
          path="M 90 130 Q 140 100 184 120"
        />
      </circle>
      <path
        d="M 90 130 Q 140 100 184 120"
        fill="none"
        stroke={accent}
        strokeWidth="0.8"
        opacity="0.2"
        strokeDasharray="5,5"
        style={{ animation: `dash ${speed}s linear infinite` }}
      />

      {/* Knowledge sparks */}
      {Array.from({ length: 5 }).map((_, i) => {
        const cx = range(seededRandom(seed + 900 + i), 170, 230);
        const cy = range(seededRandom(seed + 950 + i), 90, 145);
        return (
          <circle
            key={`ks${i}`}
            cx={cx}
            cy={cy}
            r="1.5"
            fill={accent2}
            style={{
              animation: `pulse ${range(seededRandom(seed + 800 + i), 1.5, 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        );
      })}
    </AnimatedThumbnail>
  );
}
