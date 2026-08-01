import { useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Camera, Droplet, Mail, MapPin, Phone, User } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { bloodGroups } from "@/data/dummyData";

export function Profile() {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <PageHeader
        eyebrow="My Profile"
        title="Manage your donor profile"
        description="Keep your information accurate and up to date."
      />

      <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 sm:p-8"
        >
          <div className="flex flex-col items-center gap-4 border-b border-black/5 pb-6 dark:border-white/10 sm:flex-row">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-crimson to-crimson-dark font-display text-2xl font-bold text-white shadow-glow">
                AS
              </div>
              <button className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-medblue text-white dark:border-ink">
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="text-center sm:text-left">
              <p className="flex items-center justify-center gap-1.5 font-display text-xl font-bold sm:justify-start">
                Aarav Sharma <BadgeCheck className="h-5 w-5 text-medblue" />
              </p>
              <p className="text-sm text-slate-500">Verified donor since Jan 2024</p>
            </div>
            <Button variant="outline" size="sm" className="sm:ml-auto" onClick={() => setEditing((e) => !e)}>
              {editing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <ProfileField icon={User} label="Full Name" value="Aarav Sharma" editing={editing} />
            <ProfileField icon={Mail} label="Email" value="aarav.sharma@email.com" editing={editing} />
            <ProfileField icon={Phone} label="Phone" value="+91 98765 43210" editing={editing} />
            <ProfileField icon={MapPin} label="City" value="Chennai" editing={editing} />
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Droplet className="h-3.5 w-3.5" /> Blood Group
              </label>
              {editing ? (
                <select
                  defaultValue="O+"
                  className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
                >
                  {bloodGroups.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              ) : (
                <p className="rounded-xl border border-transparent px-1 py-2.5 text-sm font-semibold text-crimson">O+</p>
              )}
            </div>
          </div>

          {editing && (
            <Button variant="primary" className="mt-6 w-full" onClick={() => setEditing(false)}>
              Save Changes
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

function ProfileField({
  icon: Icon,
  label,
  value,
  editing,
}: {
  icon: any;
  label: string;
  value: string;
  editing: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
        <Icon className="h-3.5 w-3.5" /> {label}
      </label>
      {editing ? (
        <input
          defaultValue={value}
          className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
        />
      ) : (
        <p className="px-1 py-2.5 text-sm">{value}</p>
      )}
    </div>
  );
}
