"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function GenAIAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 200, 240));
  const bgFrom = `hsl(${hue}, 70%, 22%)`;
  const bgTo = `hsl(${hue + 30}, 60%, 12%)`;
  const accent = `hsl(${hue}, 85%, 65%)`;
  const accent2 = `hsl(${hue + 50}, 80%, 70%)`;
  const speed = range(rng, 3, 5);
  const tokenCount = Math.floor(range(rng, 4, 7));
  const tokenWidth = range(rng, 25, 35);

  return (
    <AnimatedThumbnail seed={seed} category="genai">
      <defs>
        <linearGradient id={`gbg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#gbg${seed})`} />

      {/* Token boxes */}
      {Array.from({ length: tokenCount }).map((_, i) => {
        const x = 20 + i * (tokenWidth + 10);
        return (
          <g key={`t${i}`}>
            <rect
              x={x}
              y="65"
              width={tokenWidth}
              height="18"
              rx="4"
              fill={i < tokenCount - 2 ? accent : accent2}
              opacity="0.5"
              style={{
                animation: `fadeInOut ${speed}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
            {/* Connecting arrow */}
            {i < tokenCount - 1 && (
              <line
                x1={x + tokenWidth + 2}
                y1="74"
                x2={x + tokenWidth + 8}
                y2="74"
                stroke={accent}
                strokeWidth="1"
                opacity="0.3"
                strokeDasharray="3,2"
                style={{
                  animation: `dash ${speed * 0.5}s linear infinite`,
                }}
              />
            )}
          </g>
        );
      })}

      {/* Attention arcs */}
      {Array.from({ length: 3 }).map((_, i) => {
        const x1 = 35 + i * (tokenWidth + 10);
        const x2 = x1 + (tokenWidth + 10) * (i + 1);
        const cpY = 65 - 15 - i * 10;
        return (
          <path
            key={`arc${i}`}
            d={`M ${x1} 65 Q ${(x1 + x2) / 2} ${cpY} ${Math.min(x2, 255)} 65`}
            fill="none"
            stroke={accent}
            strokeWidth="1"
            opacity="0.3"
            style={{
              animation: `pulse ${speed + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        );
      })}

      {/* Output text lines appearing */}
      {[110, 122, 134, 146].map((y, i) => (
        <rect
          key={`line${i}`}
          x="30"
          y={y}
          width={range(seededRandom(seed + i), 80, 180)}
          height="5"
          rx="2.5"
          fill={accent}
          opacity="0.25"
          style={{
            animation: `slideRight ${speed}s ease-out infinite`,
            animationDelay: `${i * 0.5 + 1}s`,
          }}
        />
      ))}

      {/* Sparkle dots */}
      {Array.from({ length: 4 }).map((_, i) => {
        const cx = range(seededRandom(seed + 100 + i), 200, 260);
        const cy = range(seededRandom(seed + 200 + i), 100, 160);
        return (
          <circle
            key={`sp${i}`}
            cx={cx}
            cy={cy}
            r="2"
            fill="white"
            style={{
              animation: `pulse ${range(seededRandom(seed + 300 + i), 1.5, 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        );
      })}
    </AnimatedThumbnail>
  );
}
