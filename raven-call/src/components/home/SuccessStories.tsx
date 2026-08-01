import { Star } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/dummyData";

export function SuccessStories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Success Stories"
        title="Real people,"
        highlight="real hope"
        description="Stories from the patients, donors, and hospitals who make Raven Call possible."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <GlassCard key={t.id} delay={i * 0.1} className="flex flex-col">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-crimson text-crimson" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              "{t.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-black/5 pt-4 dark:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-dark font-display text-sm font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-slate-500">
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
