import { motion } from "framer-motion";
import { AlertTriangle, BadgeCheck, Bell, Droplet, HeartPulse } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";

const notifications = [
  {
    id: "n1",
    icon: AlertTriangle,
    tone: "text-crimson",
    title: "Critical request nearby",
    desc: "O- blood needed at Apollo Hospitals, Chennai — 1.2km from you.",
    time: "2 mins ago",
  },
  {
    id: "n2",
    icon: BadgeCheck,
    tone: "text-medblue",
    title: "Profile verified",
    desc: "Your donor profile has been successfully verified.",
    time: "1 hour ago",
  },
  {
    id: "n3",
    icon: HeartPulse,
    tone: "text-crimson",
    title: "Thank you for donating!",
    desc: "Your recent donation helped save up to 3 lives.",
    time: "3 days ago",
  },
  {
    id: "n4",
    icon: Droplet,
    tone: "text-medblue",
    title: "Eligible to donate again",
    desc: "It's been 3 months since your last donation — you're eligible again.",
    time: "1 week ago",
  },
];

export function Notifications() {
  return (
    <div>
      <PageHeader
        eyebrow="Notifications"
        title="Stay in the loop"
        description="Real-time alerts for requests, verification, and donation milestones."
      />

      <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {notifications.map((n, i) => (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex items-start gap-4"
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/10">
                <n.icon className={`h-5 w-5 ${n.tone}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{n.title}</p>
                <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{n.desc}</p>
                <p className="mt-1.5 text-xs text-slate-400">{n.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {notifications.length === 0 && (
          <div className="flex flex-col items-center py-24 text-center text-slate-400">
            <Bell className="h-10 w-10" />
            <p className="mt-3">You're all caught up.</p>
          </div>
        )}
      </div>
    </div>
  );
}
