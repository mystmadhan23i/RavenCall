import { motion } from "framer-motion";
import { AlertTriangle, Clock, Hospital, MapPin } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { emergencyRequests } from "@/data/dummyData";

const urgencyStyles: Record<string, string> = {
  critical: "bg-crimson text-white",
  high: "bg-orange-500 text-white",
  moderate: "bg-medblue text-white",
};

export function Emergency() {
  return (
    <div>
      <PageHeader
        eyebrow="Emergency Requests"
        title="Active critical requests"
        description="These patients need blood right now. Every response can make the difference."
      />

      <div className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="space-y-5">
          {emergencyRequests.map((req, i) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-crimson to-crimson-dark font-display text-lg font-extrabold text-white shadow-glow">
                  {req.bloodGroup}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase ${urgencyStyles[req.urgency]}`}>
                      {req.urgency}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" /> {req.postedMinutesAgo} mins ago
                    </span>
                  </div>
                  <p className="mt-1.5 flex items-center gap-1.5 font-semibold">
                    <Hospital className="h-4 w-4 text-crimson" /> {req.hospital}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                    <MapPin className="h-4 w-4" /> {req.location} · {req.unitsNeeded} units needed
                  </p>
                </div>
              </div>
              <Button variant="primary" className="sm:w-auto w-full">
                <AlertTriangle className="h-4 w-4" /> Respond Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
