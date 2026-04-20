"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function WorkshopAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 0, 30));
  const bgFrom = `hsl(${hue}, 70%, 22%)`;
  const bgTo = `hsl(${hue + 15}, 60%, 10%)`;
  const accent = `hsl(${hue}, 85%, 55%)`;
  const accent2 = `hsl(${hue + 30}, 80%, 60%)`;
  const speed = range(rng, 3, 5);

  return (
    <AnimatedThumbnail seed={seed} category="workshop">
      <defs>
        <linearGradient id={`wbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#wbg${seed})`} />

      {/* Lightning bolt */}
      <path
        d="M 140 25 L 120 75 L 145 75 L 130 130"
        fill="none"
        stroke={accent2}
        strokeWidth="3"
        opacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="120"
        strokeDashoffset="120"
        style={{
          animation: `dash ${speed * 2}s ease-in-out infinite`,
        }}
      />

      {/* Wrench rotating */}
      <g
        style={{
          animation: `rotate ${speed * 4}s linear infinite`,
          transformOrigin: "70px 80px",
        }}
      >
        <rect x="60" y="70" width="20" height="6" rx="3" fill={accent} opacity="0.5" />
        <circle cx="56" cy="73" r="10" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" />
      </g>

      {/* Clock */}
      <circle
        cx="210"
        cy="80"
        r="25"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0.25"
      />
      <line
        x1="210"
        y1="80"
        x2="210"
        y2="62"
        stroke={accent}
        strokeWidth="2"
        opacity="0.5"
        style={{
          animation: `rotate ${speed * 5}s linear infinite`,
          transformOrigin: "210px 80px",
        }}
      />
      <line
        x1="210"
        y1="80"
        x2="225"
        y2="80"
        stroke={accent2}
        strokeWidth="1.5"
        opacity="0.4"
        style={{
          animation: `rotate ${speed * 0.8}s linear infinite`,
          transformOrigin: "210px 80px",
        }}
      />

      {/* Progress bar filling */}
      <rect x="60" y="145" width="160" height="8" rx="4" fill={accent} opacity="0.1" />
      <rect
        x="60"
        y="145"
        width="120"
        height="8"
        rx="4"
        fill={accent}
        opacity="0.4"
        style={{
          animation: `slideRight ${speed * 2}s ease-in-out infinite`,
        }}
      />

      <text x="80" y="170" fontSize="8" fill={accent} fontFamily="sans-serif" opacity="0.5">
        Hands-on Workshop
      </text>
    </AnimatedThumbnail>
  );
}
