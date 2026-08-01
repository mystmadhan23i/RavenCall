import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Droplet, Mail, MapPin, Phone, ShieldCheck, User } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { bloodGroups } from "@/data/dummyData";

const benefits = [
  "Free health screening at every donation",
  "Real-time alerts only for compatible requests",
  "Track your total lives-saved impact",
  "Verified badge on your donor profile",
];

export function BecomeDonor() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Become a Donor"
        title="Register as a life-saver"
        description="Join a trusted network of verified donors ready to answer the call when it matters."
      />

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card h-fit space-y-4 p-6"
        >
          <ShieldCheck className="h-10 w-10 text-crimson" />
          <h3 className="font-display text-xl font-bold">Why register?</h3>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-crimson" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card flex flex-col items-center justify-center py-16 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-crimson" />
            <h3 className="mt-4 font-display text-xl font-bold">Welcome to Raven Call</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-300">
              Your donor profile is being verified. You'll start receiving compatible alerts soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" icon={User} placeholder="Your full name" required />
              <Field label="Age" type="number" placeholder="18+" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Blood Group
                </label>
                <div className="relative">
                  <Droplet className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <select
                    required
                    className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
                  >
                    <option value="">Select group</option>
                    {bloodGroups.map((g) => (
                      <option key={g}>{g}</option>
                    ))}
                  </select>
                </div>
              </div>
              <Field label="City" icon={MapPin} placeholder="e.g. Siliguri" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" type="email" icon={Mail} placeholder="you@example.com" required />
              <Field label="Phone" icon={Phone} placeholder="+91 " required />
            </div>
            <label className="flex items-start gap-2 text-xs text-slate-500">
              <input type="checkbox" required className="mt-0.5 accent-crimson" />
              I confirm I meet the eligibility criteria and consent to identity verification.
            </label>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Register as Donor
            </Button>
          </motion.form>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  ...props
}: {
  label: string;
  icon?: any;
  [key: string]: any;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</label>
      <div className="relative">
        {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />}
        <input
          className={`w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5 ${
            Icon ? "pl-9" : "pl-3"
          }`}
          {...props}
        />
      </div>
    </div>
  );
}
