"use client";

import { seededRandom, range } from "../seeded-random";
import AnimatedThumbnail from "../AnimatedThumbnail";

// For: ml-dl, foundations
export default function NeuralNetAnim({ seed }: { seed: number }) {
  const rng = seededRandom(seed);
  const layers = [3, 4, 5, 4, 3].map(() => Math.floor(range(rng, 3, 6)));
  const hue1 = Math.floor(range(rng, 220, 290));
  const hue2 = hue1 + 40;
  const bgFrom = `hsl(${hue1}, 70%, 25%)`;
  const bgTo = `hsl(${hue2}, 60%, 15%)`;
  const accent = `hsl(${hue1}, 80%, 65%)`;
  const accent2 = `hsl(${hue2}, 75%, 70%)`;
  const speed = range(rng, 2.5, 4.5);

  const getY = (count: number, idx: number) =>
    90 - ((count - 1) * 22) / 2 + idx * 22;
  const layerX = [40, 85, 140, 195, 240];

  return (
    <AnimatedThumbnail seed={seed} category="neural-net">
      <defs>
        <linearGradient id={`bg${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={bgFrom} />
          <stop offset="100%" stopColor={bgTo} />
        </linearGradient>
      </defs>
      <rect width="280" height="180" rx="8" fill={`url(#bg${seed})`} />

      {/* Connections */}
      {layers.slice(0, -1).map((count, li) =>
        Array.from({ length: count }).flatMap((_, ni) =>
          Array.from({ length: layers[li + 1] }).map((_, nj) => (
            <line
              key={`c${li}${ni}${nj}`}
              x1={layerX[li]}
              y1={getY(count, ni)}
              x2={layerX[li + 1]}
              y2={getY(layers[li + 1], nj)}
              stroke={accent}
              strokeWidth="0.6"
              opacity="0.15"
              style={{
                animation: `pulse ${speed + ni * 0.3}s ease-in-out infinite`,
                animationDelay: `${ni * 0.2 + li * 0.4}s`,
              }}
            />
          ))
        )
      )}

      {/* Nodes */}
      {layers.map((count, li) =>
        Array.from({ length: count }).map((_, ni) => (
          <circle
            key={`n${li}${ni}`}
            cx={layerX[li]}
            cy={getY(count, ni)}
            r="5"
            fill={li === 0 || li === layers.length - 1 ? accent : accent2}
            opacity="0.8"
            style={{
              animation: `float ${speed}s ease-in-out infinite`,
              animationDelay: `${li * 0.3 + ni * 0.15}s`,
              transformOrigin: `${layerX[li]}px ${getY(count, ni)}px`,
            }}
          />
        ))
      )}

      {/* Signal pulse traveling through */}
      <circle r="3" fill="white" opacity="0.9">
        <animateMotion
          dur={`${speed * 1.5}s`}
          repeatCount="indefinite"
          path={`M ${layerX[0]} 90 L ${layerX[1]} ${getY(layers[1], 1)} L ${layerX[2]} 90 L ${layerX[3]} ${getY(layers[3], 1)} L ${layerX[4]} 90`}
        />
      </circle>
    </AnimatedThumbnail>
  );
}
