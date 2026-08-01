import { motion } from "framer-motion";

/**
 * A stylised, animated DNA double-helix built from SVG rungs.
 * Purely decorative — aria-hidden for accessibility.
 */
export function DNAHelix({ className = "" }: { className?: string }) {
  const rungs = Array.from({ length: 14 });

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 220 560"
        className="h-full w-full"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "center" }}
      >
        <defs>
          <linearGradient id="strandA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
          <linearGradient id="strandB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        {rungs.map((_, i) => {
          const y = 20 + i * 38;
          const phase = (i / rungs.length) * Math.PI * 2;
          const x1 = 60 + Math.sin(phase) * 50;
          const x2 = 160 - Math.sin(phase) * 50;
          return (
            <g key={i} opacity={0.85}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#strandA)" strokeWidth={1.5} opacity={0.4} />
              <circle cx={x1} cy={y} r={6} fill="url(#strandA)" />
              <circle cx={x2} cy={y} r={6} fill="url(#strandB)" />
            </g>
          );
        })}
      </motion.svg>
    </div>
  );
}
