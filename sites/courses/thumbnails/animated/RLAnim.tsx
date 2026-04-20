"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function RLAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 140, 175));
  const bgFrom = `hsl(${hue}, 65%, 20%)`;
  const bgTo = `hsl(${hue + 20}, 55%, 10%)`;
  const accent = `hsl(${hue}, 80%, 55%)`;
  const accent2 = `hsl(${40 + Math.floor(range(rng, 0, 20))}, 85%, 60%)`;
  const speed = range(rng, 3, 5);
  const barCount = Math.floor(range(rng, 4, 7));

  return (
    <AnimatedThumbnail seed={seed} category="rl">
      <defs>
        <linearGradient id={`rbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#rbg${seed})`} />

      {/* Agent box */}
      <rect
        x="25"
        y="55"
        width="55"
        height="35"
        rx="5"
        fill={accent}
        opacity="0.25"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />
      <text x="35" y="77" fontSize="10" fill={accent} fontFamily="sans-serif" opacity="0.9">
        Agent
      </text>

      {/* Environment box */}
      <rect
        x="200"
        y="55"
        width="55"
        height="35"
        rx="5"
        fill={accent2}
        opacity="0.25"
        style={{ animation: `pulse ${speed}s ease-in-out infinite`, animationDelay: "1s" }}
      />
      <text x="206" y="77" fontSize="10" fill={accent2} fontFamily="sans-serif" opacity="0.9">
        Environ
      </text>

      {/* Action arrow with moving dot */}
      <path
        d="M 80 62 Q 140 25 200 62"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle r="3" fill={accent} opacity="0.9">
        <animateMotion dur={`${speed}s`} repeatCount="indefinite" path="M 80 62 Q 140 25 200 62" />
      </circle>
      <text x="125" y="38" fontSize="9" fill={accent} fontFamily="sans-serif" opacity="0.7">
        Action
      </text>

      {/* Reward arrow with moving dot */}
      <path
        d="M 200 83 Q 140 120 80 83"
        fill="none"
        stroke={accent2}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <circle r="3" fill={accent2} opacity="0.9">
        <animateMotion dur={`${speed * 1.2}s`} repeatCount="indefinite" path="M 200 83 Q 140 120 80 83" />
      </circle>
      <text x="118" y="115" fontSize="9" fill={accent2} fontFamily="sans-serif" opacity="0.7">
        Reward
      </text>

      {/* Q-value bars growing */}
      {Array.from({ length: barCount }).map((_, i) => {
        const barWidth = range(seededRandom(seed + i), 15, 60);
        return (
          <rect
            key={`bar${i}`}
            x="30"
            y={130 + i * 8}
            width={barWidth}
            height="5"
            rx="2"
            fill={accent}
            opacity="0.4"
            style={{
              animation: `slideRight ${speed}s ease-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}
    </AnimatedThumbnail>
  );
}
