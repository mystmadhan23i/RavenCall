import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Droplet, Hospital, MapPin, Phone, User } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { bloodGroups } from "@/data/dummyData";

export function RequestBlood() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Request Blood"
        title="Post a blood request"
        description="Reach every eligible, verified donor near your location within seconds."
      />

      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:px-8">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card flex flex-col items-center py-16 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-crimson" />
            <h3 className="mt-4 font-display text-xl font-bold">Request Broadcasted</h3>
            <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-300">
              Your request has been sent to nearby verified donors. You'll be notified the moment someone responds.
            </p>
            <Button className="mt-6" onClick={() => setSubmitted(false)}>
              Post Another Request
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8">
            <Field label="Patient Name" icon={User} placeholder="Full name" required />
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
              <Field label="Units Needed" type="number" placeholder="e.g. 2" required />
            </div>
            <Field label="Hospital / Location" icon={Hospital} placeholder="Hospital name" required />
            <Field label="City" icon={MapPin} placeholder="e.g. Chennai" required />
            <Field label="Contact Number" icon={Phone} placeholder="+91 " required />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any additional details for donors..."
                className="w-full rounded-xl border border-black/10 bg-white/70 p-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
              />
            </div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Broadcast Request
            </Button>
          </form>
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
