import { FloatingBloodCells } from "./FloatingBloodCells";
import { ParticleField } from "./ParticleField";

/**
 * Sits fixed behind the entire app: medical grid + glowing orbs + particles + blood cells.
 * Kept subtle so foreground content stays readable.
 */
export function BiomedicalBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-graylight dark:bg-ink transition-colors duration-500" />
      <div className="medical-grid absolute inset-0 opacity-70" />

      {/* Soft glowing orbs */}
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-crimson/20 blur-[120px] animate-pulseGlow" />
      <div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-medblue/20 blur-[120px] animate-pulseGlow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-crimson/10 blur-[100px] animate-pulseGlow"
        style={{ animationDelay: "3s" }}
      />

      <FloatingBloodCells count={16} />
      <ParticleField count={50} />
    </div>
  );
}
