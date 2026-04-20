"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

export default function RoboticsAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const hue = Math.floor(range(rng, 230, 270));
  const bgFrom = `hsl(${hue}, 65%, 20%)`;
  const bgTo = `hsl(${hue + 20}, 55%, 10%)`;
  const accent = `hsl(${hue}, 80%, 65%)`;
  const accent2 = `hsl(${45}, 85%, 55%)`;
  const speed = range(rng, 4, 6);
  const armAngle = range(rng, -20, 20);

  const joints = [
    { x: 70, y: 140 },
    { x: 110, y: 100 + armAngle },
    { x: 160, y: 70 + armAngle * 0.5 },
    { x: 195, y: 55 },
  ];

  return (
    <AnimatedThumbnail seed={seed} category="robotics">
      <defs>
        <linearGradient id={`robg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#robg${seed})`} />

      {/* Base */}
      <rect x="50" y="145" width="40" height="12" rx="3" fill={accent} opacity="0.3" />

      {/* Arm segments */}
      {joints.slice(0, -1).map((joint, i) => (
        <g key={`seg${i}`}>
          <line
            x1={joint.x}
            y1={joint.y}
            x2={joints[i + 1].x}
            y2={joints[i + 1].y}
            stroke={accent}
            strokeWidth={4 - i}
            opacity="0.5"
            strokeLinecap="round"
          />
          <circle
            cx={joint.x}
            cy={joint.y}
            r={7 - i}
            fill={accent}
            opacity="0.5"
            style={{
              animation: `pulse ${speed}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        </g>
      ))}

      {/* Gripper */}
      <line
        x1="195"
        y1="55"
        x2="210"
        y2="42"
        stroke={accent2}
        strokeWidth="2"
        opacity="0.6"
        style={{
          animation: `float ${speed * 0.5}s ease-in-out infinite`,
          transformOrigin: "195px 55px",
        }}
      />
      <line
        x1="195"
        y1="55"
        x2="215"
        y2="60"
        stroke={accent2}
        strokeWidth="2"
        opacity="0.6"
        style={{
          animation: `float ${speed * 0.5}s ease-in-out infinite`,
          animationDelay: "0.3s",
          transformOrigin: "195px 55px",
        }}
      />

      {/* Vision cone */}
      <path
        d={`M 195 55 L 240 30 L 250 65 Z`}
        fill={accent2}
        opacity="0.08"
        stroke={accent2}
        strokeWidth="0.5"
        style={{ animation: `pulse ${speed}s ease-in-out infinite` }}
      />

      {/* Trajectory path */}
      <path
        d={`M 70 140 Q 120 60 200 50`}
        fill="none"
        stroke={accent}
        strokeWidth="0.8"
        opacity="0.2"
        strokeDasharray="4,4"
        style={{ animation: `dash ${speed}s linear infinite` }}
      />

      {/* Moving target */}
      <circle r="3" fill={accent2} opacity="0.8">
        <animateMotion
          dur={`${speed * 2}s`}
          repeatCount="indefinite"
          path="M 220 40 Q 240 50 230 70 Q 220 50 220 40"
        />
      </circle>
    </AnimatedThumbnail>
  );
}
