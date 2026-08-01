import { useMemo } from "react";

export function ParticleField({ count = 40, className = "" }: { count?: number; className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 1 + Math.random() * 2.5,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 4 + Math.random() * 6,
        delay: Math.random() * 6,
        color: i % 3 === 0 ? "#60A5FA" : "#DC2626",
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-pulseGlow"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
