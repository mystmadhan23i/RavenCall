import { useState } from "react";
import { motion } from "framer-motion";
import { Crosshair, MapPin, Search, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { donors, bloodGroups } from "@/data/dummyData";

export function DonorMapSection() {
  const [city, setCity] = useState("");
  const [group, setGroup] = useState("All");
  const [distance, setDistance] = useState(10);
  const [locating, setLocating] = useState(false);

  const filtered = donors.filter((d) => {
    const matchCity = city ? d.city.toLowerCase().includes(city.toLowerCase()) : true;
    const matchGroup = group === "All" ? true : d.bloodGroup === group;
    const matchDistance = d.distanceKm <= distance;
    return matchCity && matchGroup && matchDistance;
  });

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Donor Map"
        title="Locate donors"
        highlight="near you"
        description="Search by city, blood group, and distance to see who's ready to help."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[380px_1fr]">
        {/* Filters + results */}
        <div className="glass-card space-y-5 p-6">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">City</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Chennai"
                className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Blood Group
            </label>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            >
              <option>All</option>
              {bloodGroups.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1.5 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span>Distance</span>
              <span className="text-crimson">{distance} km</span>
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full accent-crimson"
            />
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => setLocating(true)}
            loading={locating}
            type="button"
          >
            <Crosshair className="h-4 w-4" /> Locate Me
          </Button>

          <div className="border-t border-black/5 pt-4 dark:border-white/10">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <SlidersHorizontal className="h-3.5 w-3.5" /> {filtered.length} Nearby Donors
            </p>
            <div className="max-h-60 space-y-2 overflow-y-auto pr-1">
              {filtered.map((d) => (
                <div
                  key={d.id}
                  className="flex items-center gap-3 rounded-xl border border-black/5 p-2.5 text-sm dark:border-white/10"
                >
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ background: d.avatarColor }}
                  >
                    {d.bloodGroup}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium">{d.name}</p>
                    <p className="text-xs text-slate-500">
                      {d.city} · {d.distanceKm} km
                    </p>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="py-6 text-center text-sm text-slate-400">No donors match these filters.</p>
              )}
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-card relative min-h-[420px] overflow-hidden p-0"
        >
          <div className="medical-grid absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-medblue/10" />
          {filtered.slice(0, 6).map((d, i) => (
            <motion.div
              key={d.id}
              className="absolute flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow-glow dark:border-ink"
              style={{
                top: `${15 + ((i * 37) % 70)}%`,
                left: `${10 + ((i * 53) % 75)}%`,
                background: d.avatarColor,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              {d.bloodGroup}
            </motion.div>
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-slate-500 dark:text-slate-300">
              <Search className="h-4 w-4" /> Interactive map connects to live GPS data
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
