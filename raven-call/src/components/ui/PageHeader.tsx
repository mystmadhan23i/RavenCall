import { motion } from "framer-motion";
import { Badge } from "./Badge";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Badge className="mx-auto">{eyebrow}</Badge>
          <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}
