import { useMemo } from "react";
import { motion } from "framer-motion";

interface Cell {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingBloodCells({ count = 14, className = "" }: { count?: number; className?: string }) {
  const cells = useMemo<Cell[]>(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: 10 + Math.random() * 26,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 5,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {cells.map((cell) => (
        <motion.div
          key={cell.id}
          className="absolute rounded-full"
          style={{
            top: cell.top,
            left: cell.left,
            width: cell.size,
            height: cell.size,
            background:
              "radial-gradient(circle at 35% 30%, #f87171 0%, #dc2626 45%, #7f1d1d 100%)",
            boxShadow: "0 0 14px rgba(220,38,38,0.5)",
            opacity: cell.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: cell.duration,
            delay: cell.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
