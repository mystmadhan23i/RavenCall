import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "crimson",
}: {
  children: ReactNode;
  className?: string;
  tone?: "crimson" | "blue" | "neutral";
}) {
  const tones = {
    crimson: "bg-crimson/10 text-crimson border-crimson/20 dark:bg-crimson/20 dark:text-red-300",
    blue: "bg-medblue/10 text-medblue border-medblue/20 dark:bg-medblue/20 dark:text-blue-300",
    neutral: "bg-black/5 text-ink border-black/10 dark:bg-white/10 dark:text-white",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
