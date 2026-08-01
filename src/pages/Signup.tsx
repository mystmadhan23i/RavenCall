import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, User, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RavenLogo } from "@/components/layout/RavenLogo";
import { FloatingBloodCells } from "@/components/background/FloatingBloodCells";

export function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 900);
  }

  return (
    <div className="relative mx-auto flex min-h-[80vh] max-w-md items-center px-4 py-16 sm:px-6">
      <FloatingBloodCells count={8} className="opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card w-full p-8"
      >
        <div className="flex justify-center">
          <RavenLogo />
        </div>
        <h1 className="mt-6 text-center font-display text-2xl font-bold">Create your account</h1>
        <p className="mt-1 text-center text-sm text-slate-500">Join the network that saves lives.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              required
              placeholder="Full name"
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
          </div>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              required
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
          </div>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              required
              type="password"
              placeholder="Create password"
              className="w-full rounded-xl border border-black/10 bg-white/70 py-2.5 pl-9 pr-3 text-sm outline-none focus:border-crimson dark:border-white/10 dark:bg-white/5"
            />
          </div>
          <label className="flex items-start gap-2 text-xs text-slate-500">
            <input type="checkbox" required className="mt-0.5 accent-crimson" />
            I agree to the Terms of Service and Privacy Policy.
          </label>
          <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
            <UserPlus className="h-4 w-4" /> Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-crimson">
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
