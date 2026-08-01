import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HeartCrack, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeartCrack className="mx-auto h-16 w-16 text-crimson animate-heartbeat" />
        <h1 className="mt-6 font-display text-4xl font-extrabold">404</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          This page seems to have flown off with the raven. Let's get you back.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" className="mt-8">
            <Home className="h-4 w-4" /> Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
