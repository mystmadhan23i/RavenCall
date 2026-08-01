import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bloodGroups } from "@/data/dummyData";

export function BloodGroupSelector() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Blood Groups"
        title="Find a donor by"
        highlight="blood type"
        description="Tap a blood group to instantly search verified donors near you."
      />

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {bloodGroups.map((group, i) => (
          <motion.button
            key={group}
            onClick={() => navigate(`/find-donors?group=${encodeURIComponent(group)}`)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glass-card group relative flex flex-col items-center justify-center gap-2 overflow-hidden py-8"
          >
            <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-crimson/10 blur-xl transition group-hover:bg-crimson/30" />
            <Droplet className="h-7 w-7 text-crimson transition group-hover:scale-110" fill="currentColor" fillOpacity={0.15} />
            <span className="font-display text-2xl font-extrabold text-gradient">{group}</span>
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Find Donors</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
