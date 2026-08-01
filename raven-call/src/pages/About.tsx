import { motion } from "framer-motion";
import { HeartPulse, ShieldCheck, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Statistics } from "@/components/home/Statistics";

const values = [
  { icon: HeartPulse, title: "Life-Saving First", desc: "Every decision we make is measured by lives it can help save." },
  { icon: ShieldCheck, title: "Trust & Verification", desc: "Rigorous identity and health verification for every donor." },
  { icon: Sparkles, title: "Hope, Delivered Fast", desc: "Speed matters in emergencies — our systems are built for it." },
  { icon: Users, title: "Community Powered", desc: "A growing network of donors, hospitals, and volunteers." },
];

export function About() {
  return (
    <div>
      <PageHeader
        eyebrow="About Raven Call"
        title="A raven for every emergency"
        description="Raven Call was built on a simple belief: no one should wait too long for blood that could save their life."
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-300"
        >
          Named after the raven — a symbol of urgent messages carried swiftly across great distances — Raven Call
          connects donors and patients the moment it matters most. We combine verified donor networks, real-time
          alerts, and hospital partnerships into one dependable platform.
        </motion.p>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <GlassCard key={v.title} delay={i * 0.08} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-crimson-dark text-white shadow-glow">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{v.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <Statistics />
    </div>
  );
}
