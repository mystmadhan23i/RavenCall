import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Contact Us"
        title="We're here to help"
        description="Questions, partnerships, or feedback — reach out and our team will respond promptly."
      />

      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="space-y-4">
          {[
            { icon: Phone, label: "Phone", value: "+91 1800 200 3000" },
            { icon: Mail, label: "Email", value: "hello@ravencall.org" },
            { icon: MapPin, label: "Headquarters", value: "Siliguri, West Bengal, India" },
          ].map((c) => (
            <div key={c.label} className="glass-card flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-crimson to-crimson-dark text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">{c.label}</p>
                <p className="text-sm font-medium">{c.value}</p>
              </div>
            </div>
          ))}
        </div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card flex flex-col items-center justify-center py-16 text-center"
          >
            <CheckCircle2 className="h-14 w-14 text-crimson" />
            <h3 className="mt-4 font-display text-xl font-bold">Message Sent</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                required
                placeholder="Your Name"
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
              />
            </div>
            <input
              required
              placeholder="Subject"
              className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
            <textarea
              required
              rows={5}
              placeholder="Your message..."
              className="w-full rounded-xl border border-black/10 bg-white/70 p-4 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
