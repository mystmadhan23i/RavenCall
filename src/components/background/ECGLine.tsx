export function ECGLine({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 120" className="h-full w-full" preserveAspectRatio="none">
        <path
          d="M0,60 L140,60 L170,20 L200,100 L230,60 L280,60 L310,40 L340,80 L370,60 L520,60 L550,20 L580,100 L610,60 L660,60 L690,40 L720,80 L750,60 L900,60 L930,20 L960,100 L990,60 L1040,60 L1070,40 L1100,80 L1130,60 L1200,60"
          fill="none"
          stroke="#DC2626"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset="1"
          style={{ animation: "ecgdraw 4s linear infinite" }}
        />
      </svg>
      <style>{`
        @keyframes ecgdraw {
          0% { stroke-dashoffset: 1; opacity: 0.2; }
          10% { opacity: 1; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          70% { opacity: 0.3; }
          100% { stroke-dashoffset: -1; opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
