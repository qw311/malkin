import { useMemo } from "react";

/**
 * Soft ambient background — gentle pastel gradient with soft SVG hearts
 * drifting slowly upward, blended into the background.
 */

const HEART_COLORS = [
  "#e8a0b4",   // soft rose
  "#e6b0be",   // blush pink
  "#d98aaf",   // deeper pink
  "#d4a5c8",   // lavender-pink
  "#e0a8a8",   // warm peach-pink
  "#cf8da5",   // dusty rose
];

export function AmbientBackground() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 18 + Math.random() * 26,
        delay: -Math.random() * 40,
        duration: 38 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 60,
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
        rotation: Math.random() * 40 - 20,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-bg absolute inset-0" />
      {hearts.map((h) => (
        <div
          key={`h-${h.id}`}
          className="absolute heart-float"
          style={{
            left: `${h.left}%`,
            bottom: `-50px`,
            width: h.size,
            height: h.size,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            ["--drift" as string]: `${h.drift}px`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            style={{ transform: `rotate(${h.rotation}deg)` }}
          >
            <path
              fill={h.color}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
