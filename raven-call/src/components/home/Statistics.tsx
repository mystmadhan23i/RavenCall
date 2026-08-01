import { statistics } from "@/data/dummyData";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: animated, ref } = useCountUp(value);
  return (
    <div ref={ref} className="glass-card flex flex-col items-center py-10 text-center">
      <span className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
        {animated.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{label}</span>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {statistics.map((s) => (
          <StatCard key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}
