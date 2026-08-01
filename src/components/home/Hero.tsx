import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplet, HeartPulse, Search, Siren } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DNAHelix } from "@/components/background/DNAHelix";
import { FloatingBloodCells } from "@/components/background/FloatingBloodCells";
import { ECGLine } from "@/components/background/ECGLine";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge>🩸 Every Drop Saves a Life</Badge>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            When <span className="text-gradient">Hope</span> Runs Thin,
            <br />A <span className="text-gradient">Raven</span> Answers.
          </h1>

          <p className="mt-6 max-w-lg text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Raven Call connects <span className="font-semibold text-crimson">blood</span> donors and patients
            instantly during emergencies. Find nearby donors. Request blood. Save lives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/become-donor">
              <Button variant="primary" size="lg">
                <Droplet className="h-5 w-5" /> Become Donor
              </Button>
            </Link>
            <Link to="/find-donors">
              <Button variant="outline" size="lg">
                <Search className="h-5 w-5" /> Find Blood
              </Button>
            </Link>
            <Link to="/emergency">
              <Button variant="blue" size="lg">
                <Siren className="h-5 w-5" /> Emergency Request
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" size="lg">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#DC2626", "#991B1B", "#2563EB", "#F87171"].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-graylight dark:border-ink"
                  style={{ background: c }}
                />
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <span className="font-bold text-ink dark:text-white">20,000+</span> donors already saving lives
            </p>
          </div>
        </motion.div>

        {/* RIGHT — biomedical illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto h-[420px] w-full max-w-md sm:h-[520px]"
        >
          <div className="absolute inset-0 rounded-full bg-crimson/20 blur-[100px]" />
          <FloatingBloodCells count={10} />
          <DNAHelix className="absolute left-1/2 top-1/2 h-[440px] w-[200px] -translate-x-1/2 -translate-y-1/2 opacity-90 sm:h-[520px]" />

          <motion.div
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass shadow-glow"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <HeartPulse className="h-12 w-12 text-crimson animate-heartbeat" />
          </motion.div>

          <div className="absolute bottom-2 left-0 right-0 h-16 opacity-70">
            <ECGLine className="h-full w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
