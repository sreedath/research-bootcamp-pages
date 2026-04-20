"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function AgentsAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 180, 210));
  const bgFrom = `hsl(${hue}, 65%, 20%)`;
  const bgTo = `hsl(${hue + 20}, 55%, 10%)`;
  const accent = `hsl(${hue}, 80%, 60%)`;
  const accent2 = `hsl(${hue + 60}, 75%, 55%)`;
  const speed = range(rng, 3, 5);

  const tools = ["Search", "Code", "Read", "Write", "Plan"].slice(
    0,
    Math.floor(range(rng, 3, 6))
  );
  const angleStep = (2 * Math.PI) / tools.length;
  const radius = range(rng, 45, 55);

  return (
    <AnimatedThumbnail seed={seed} category="agents">
      <defs>
        <linearGradient id={`abg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#abg${seed})`} />

      {/* Central agent brain */}
      <circle
        cx="140"
        cy="85"
        r="22"
        fill={accent}
        opacity="0.15"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />
      <circle cx="140" cy="85" r="10" fill={accent} opacity="0.5" />

      {/* Tool nodes orbiting */}
      {tools.map((tool, i) => {
        const angle = angleStep * i - Math.PI / 2;
        const tx = 140 + Math.cos(angle) * radius;
        const ty = 85 + Math.sin(angle) * radius;
        return (
          <g key={tool}>
            {/* Connection line */}
            <line
              x1="140"
              y1="85"
              x2={tx}
              y2={ty}
              stroke={accent}
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="4,3"
              style={{
                animation: `dash ${speed}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
            {/* Tool bubble */}
            <rect
              x={tx - 20}
              y={ty - 10}
              width="40"
              height="20"
              rx="6"
              fill={accent2}
              opacity="0.3"
              style={{
                animation: `float ${speed}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                transformOrigin: `${tx}px ${ty}px`,
              }}
            />
            <text
              x={tx}
              y={ty + 4}
              fontSize="8"
              fill={accent2}
              fontFamily="sans-serif"
              textAnchor="middle"
              opacity="0.8"
            >
              {tool}
            </text>
            {/* Data packet traveling */}
            <circle r="2" fill="white" opacity="0.8">
              <animateMotion
                dur={`${speed + i * 0.5}s`}
                repeatCount="indefinite"
                path={`M 140 85 L ${tx} ${ty} L 140 85`}
              />
            </circle>
          </g>
        );
      })}

      {/* Thinking dots */}
      {[0, 1, 2].map((i) => (
        <circle
          key={`dot${i}`}
          cx={125 + i * 15}
          cy="155"
          r="3"
          fill={accent}
          opacity="0.4"
          style={{
            animation: `pulse ${speed * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
    </AnimatedThumbnail>
  );
}
