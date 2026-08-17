import { useEffect, useRef, useCallback } from "react";

/**
 * 🌸 Click Hearts — on every click, a burst of soft pastel SVG hearts
 * erupts from the cursor and drifts outward before fading away.
 * No trail on mouse move — only on click.
 */

const HEART_COLORS = [
  "oklch(0.78 0.12 350)",  // soft rose
  "oklch(0.82 0.09 15)",   // blush pink
  "oklch(0.75 0.15 340)",  // deeper pink
  "oklch(0.85 0.07 320)",  // lavender-pink
  "oklch(0.80 0.10 10)",   // warm peach-pink
  "oklch(0.72 0.14 355)",  // dusty rose
];

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createHeartSVG(color: string, size: number): string {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" style="filter: drop-shadow(0 0 3px ${color});">
    <path fill="${color}" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 
      19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>`;
}

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const spawnBurst = useCallback((x: number, y: number) => {
    const container = containerRef.current;
    if (!container) return;

    const count = Math.floor(randomBetween(6, 10));

    for (let i = 0; i < count; i++) {
      const color = HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)];
      const size = randomBetween(10, 22);
      const angle = randomBetween(0, 360);
      const distance = randomBetween(40, 120);
      const duration = randomBetween(700, 1300);
      const rotation = randomBetween(-60, 60);
      const delay = randomBetween(0, 80);

      const dx = Math.cos((angle * Math.PI) / 180) * distance;
      const dy = Math.sin((angle * Math.PI) / 180) * distance;

      const el = document.createElement("span");
      el.innerHTML = createHeartSVG(color, size);
      el.setAttribute("aria-hidden", "true");
      el.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9999;
        opacity: 0;
        will-change: transform, opacity;
        animation: cursor-trail-drift ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms forwards;
        --trail-dx: ${dx}px;
        --trail-dy: ${dy}px;
        --trail-rot: ${rotation}deg;
      `;

      container.appendChild(el);

      setTimeout(() => {
        el.remove();
      }, duration + delay + 50);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      spawnBurst(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      if (touch) spawnBurst(touch.clientX, touch.clientY);
    };

    window.addEventListener("click", handleClick, { passive: true });
    window.addEventListener("touchend", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("touchend", handleTouch);
    };
  }, [spawnBurst]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    />
  );
}
