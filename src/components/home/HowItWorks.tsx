import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineSteps } from "@/data/dummyData";

export function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="The Process"
        title="How Raven Call"
        highlight="works"
        description="From registration to saving a life — a simple, guided journey."
      />

      <div className="relative mt-16">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-crimson via-crimson/40 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {timelineSteps.map((step, i) => {
            const Icon = (Icons as any)[step.icon] ?? Icons.Sparkles;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-5 sm:w-1/2 ${
                  isEven ? "sm:pr-10" : "sm:ml-auto sm:pl-10"
                }`}
              >
                <div className="absolute -left-[1px] top-0 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-4 border-graylight bg-gradient-to-br from-crimson to-crimson-dark text-white shadow-glow dark:border-ink sm:static">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="glass-card ml-16 flex-1 p-5 sm:ml-0">
                  <span className="text-xs font-bold uppercase tracking-widest text-crimson">Step {i + 1}</span>
                  <h3 className="mt-1 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
