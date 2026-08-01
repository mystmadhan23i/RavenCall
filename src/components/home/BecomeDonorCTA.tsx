import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingBloodCells } from "@/components/background/FloatingBloodCells";

export function BecomeDonorCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-crimson-dark via-crimson to-red-500 px-8 py-16 text-center shadow-glow sm:px-16"
      >
        <FloatingBloodCells count={10} className="opacity-40" />
        <div className="relative">
          <HeartHandshake className="mx-auto h-12 w-12 text-white" />
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold text-white sm:text-4xl">
            One donation can save up to three lives. Will you be someone's Raven today?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/85 sm:text-base">
            Registration takes less than two minutes. Join thousands already saving lives across the country.
          </p>
          <div className="mt-8">
            <Link to="/become-donor">
              <Button variant="glass" size="lg" className="!text-white border-white/40 hover:!bg-white hover:!text-crimson">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
