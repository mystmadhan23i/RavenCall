import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Phone, Search } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { donors, bloodGroups } from "@/data/dummyData";
import type { BloodGroup } from "@/types";

export function FindDonors() {
  const [params] = useSearchParams();
  const initialGroup = (params.get("group") as BloodGroup) || "All";
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<string>(initialGroup);

  const results = useMemo(
    () =>
      donors.filter((d) => {
        const matchQuery = query
          ? d.name.toLowerCase().includes(query.toLowerCase()) || d.city.toLowerCase().includes(query.toLowerCase())
          : true;
        const matchGroup = group === "All" ? true : d.bloodGroup === group;
        return matchQuery && matchGroup;
      }),
    [query, group]
  );

  return (
    <div>
      <PageHeader
        eyebrow="Find Donors"
        title="Search the verified donor network"
        description="Filter by name, city, or blood group to find someone who can help right now."
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="glass-card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or city..."
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
          </div>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="rounded-xl border border-black/10 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
          >
            <option>All</option>
            {bloodGroups.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                  style={{ background: d.avatarColor }}
                >
                  {d.bloodGroup}
                </span>
                <div className="min-w-0">
                  <p className="flex items-center gap-1.5 truncate font-semibold">
                    {d.name}
                    {d.verified && <BadgeCheck className="h-4 w-4 flex-shrink-0 text-medblue" />}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" /> {d.city} · {d.distanceKm} km away
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{d.donationCount} donations</span>
                <span>Last: {d.lastDonated}</span>
              </div>
              <Button variant="primary" size="sm" className="mt-4 w-full">
                <Phone className="h-4 w-4" /> Request Contact
              </Button>
            </motion.div>
          ))}
          {results.length === 0 && (
            <p className="col-span-full py-16 text-center text-slate-400">No donors found for these filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
