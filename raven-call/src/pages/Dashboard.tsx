import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Bell, Droplet, HeartPulse, MapPin, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { emergencyRequests } from "@/data/dummyData";

const quickStats = [
  { icon: Droplet, label: "Blood Group", value: "O+" },
  { icon: HeartPulse, label: "Donations Made", value: "12" },
  { icon: Award, label: "Lives Impacted", value: "36" },
  { icon: TrendingUp, label: "Donor Rank", value: "Top 5%" },
];

export function Dashboard() {
  return (
    <div>
      <PageHeader
        eyebrow="Donor Dashboard"
        title="Welcome back, life-saver"
        description="Here's your donation activity and the latest requests that match your profile."
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickStats.map((s, i) => (
            <GlassCard key={s.label} delay={i * 0.06} className="text-center">
              <s.icon className="mx-auto h-7 w-7 text-crimson" />
              <p className="mt-3 font-display text-2xl font-bold">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold">Requests matching your blood type</h3>
              <Bell className="h-5 w-5 text-crimson" />
            </div>
            <div className="mt-5 space-y-3">
              {emergencyRequests.slice(0, 3).map((req) => (
                <div
                  key={req.id}
                  className="flex items-center justify-between rounded-xl border border-black/5 p-3 dark:border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-dark text-xs font-bold text-white">
                      {req.bloodGroup}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{req.hospital}</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500">
                        <MapPin className="h-3 w-3" /> {req.location}
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Respond
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card flex flex-col"
          >
            <h3 className="font-display text-lg font-bold">Your profile</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Keep your details current so we can match you with the right requests.
            </p>
            <Link to="/profile" className="mt-auto">
              <Button variant="primary" className="mt-6 w-full">
                Manage Profile
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
