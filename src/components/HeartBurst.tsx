import { useState, useCallback, type MouseEvent, type ReactNode } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  bx: number;
  by: number;
  emoji: string;
  size: number;
}

let counter = 0;
const emojis = ["💖", "💕", "✨", "🌸", "💗"];

interface Props {
  children: (trigger: (e: MouseEvent) => void) => ReactNode;
}

/**
 * Renders children with a trigger function; triggering spawns a burst of
 * hearts / sparkles at the click point.
 */
export function HeartBurst({ children }: Props) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const trigger = useCallback((e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = e.clientX - rect.left;
    const cy = e.clientY - rect.top;
    const newOnes: Particle[] = Array.from({ length: 14 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 90;
      return {
        id: counter++,
        x: cx,
        y: cy,
        bx: Math.cos(angle) * dist,
        by: Math.sin(angle) * dist - 20,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        size: 14 + Math.random() * 14,
      };
    });
    setParticles((p) => [...p, ...newOnes]);
    window.setTimeout(() => {
      setParticles((p) => p.filter((x) => !newOnes.some((n) => n.id === x.id)));
    }, 900);
  }, []);

  return (
    <div className="relative">
      {children(trigger)}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute select-none"
            style={{
              left: p.x,
              top: p.y,
              fontSize: p.size,
              animation: "burst 850ms ease-out forwards",
              ["--bx" as string]: `${p.bx}px`,
              ["--by" as string]: `${p.by}px`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>
    </div>
  );
}
