import { BookOpen, HeartPulse, ShieldQuestion, Stethoscope, Syringe, Users } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";

const resources = [
  { icon: Syringe, title: "Donation Eligibility", desc: "Understand the medical criteria for safe blood donation." },
  { icon: HeartPulse, title: "Before & After Donating", desc: "Tips to prepare for and recover from a donation." },
  { icon: Stethoscope, title: "For Hospitals", desc: "Guides for onboarding your hospital onto Raven Call." },
  { icon: Users, title: "Community Drives", desc: "Organize or join blood donation camps in your area." },
  { icon: BookOpen, title: "Blood Type Guide", desc: "Learn about compatibility between blood groups." },
  { icon: ShieldQuestion, title: "Safety & Privacy", desc: "How Raven Call protects donor and patient data." },
];

export function Resources() {
  return (
    <div>
      <PageHeader
        eyebrow="Resources"
        title="Learn, prepare, and stay informed"
        description="Everything you need to know about donating and requesting blood safely."
      />
      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <GlassCard key={r.title} delay={i * 0.06} className="cursor-pointer">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-medblue to-blue-700 text-white shadow-blueglow">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{r.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
