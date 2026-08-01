import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/dummyData";

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Raven Call"
        title="Built for the moments that"
        highlight="matter most"
        description="Every feature is designed around one goal — getting the right blood to the right person, faster."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => {
          const Icon = (Icons as any)[feature.icon] ?? Icons.HeartPulse;
          return (
            <Link key={feature.id} to={feature.href}>
              <GlassCard delay={i * 0.08} className="group h-full cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-crimson-dark text-white shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-crimson" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </GlassCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
