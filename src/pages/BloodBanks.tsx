import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { bloodBanks } from "@/data/dummyData";

export function BloodBanks() {
  return (
    <div>
      <PageHeader
        eyebrow="Blood Banks"
        title="Partner blood banks near you"
        description="Real-time inventory from our network of trusted blood banks and hospitals."
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {bloodBanks.map((bank, i) => (
            <motion.div
              key={bank.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card"
            >
              <h3 className="font-display text-lg font-bold">{bank.name}</h3>
              <div className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-crimson" /> {bank.address}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-crimson" /> {bank.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-crimson" /> {bank.hours}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {Object.entries(bank.stock).map(([group, units]) => (
                  <span
                    key={group}
                    className="rounded-full border border-crimson/20 bg-crimson/5 px-3 py-1 text-xs font-semibold text-crimson dark:bg-crimson/10"
                  >
                    {group}: {units} units
                  </span>
                ))}
              </div>

              <Button variant="outline" size="sm" className="mt-5 w-full">
                Get Directions
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
