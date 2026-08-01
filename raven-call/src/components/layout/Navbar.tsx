import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Menu, Moon, Search, Sun, X } from "lucide-react";
import { RavenLogo } from "./RavenLogo";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Find Donors", to: "/find-donors" },
  { label: "Request Blood", to: "/request-blood" },
  { label: "Become Donor", to: "/become-donor" },
  { label: "Blood Banks", to: "/blood-banks" },
  { label: "Emergency", to: "/emergency" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-glass py-2" : "bg-transparent py-4"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <RavenLogo />

        

        <div className="hidden items-center gap-2 lg:flex">
          <div className="relative">
            <AnimatePresence>
              {searchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  autoFocus
                  placeholder="Search donors, banks..."
                  className="mr-2 rounded-full border border-crimson/20 bg-white/70 px-4 py-2 text-sm outline-none dark:bg-white/10 dark:text-white"
                />
              )}
            </AnimatePresence>
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((s) => !s)}
              className="flex h-10 w-10 items-center justify-end rounded-full text-slate-600 transition hover:bg-crimson/10 hover:text-crimson dark:text-slate-300 dark:hover:bg-white/10"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          <Link
            to="/notifications"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-end rounded-full text-slate-600 transition hover:bg-crimson/10 hover:text-crimson dark:text-slate-300 dark:hover:bg-white/10"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-crimson animate-pulseGlow" />
          </Link>

          <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-end rounded-full text-slate-600 transition hover:bg-crimson/10 hover:text-crimson dark:text-slate-300 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 dark:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
       <>
           {/* Background Overlay */}
            <motion.div
                 className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setMobileOpen(false)}
             />
            <motion.aside
                 initial={{ x: "100%" }}
                 animate={{ x: 0 }}
                 exit={{ x: "100%" }}
                 transition={{ type: "spring", stiffness: 260, damping: 25 }}
                 className="fixed top-0 right-0 z-50 h-screen w-[360px] bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
             >
           {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 p-6">
               <h2 className="text-xl font-bold text-crimson">
                 Raven Menu
               </h2>

                <button
                   onClick={() => setMobileOpen(false)}
                   className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                 >
                   <X className="h-6 w-6" />
                </button>
             </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "mb-2 flex items-center rounded-xl px-4 py-3 text-base font-medium transition-all",
                  isActive
                    ? "bg-crimson text-white shadow-lg"
                    : "hover:bg-crimson/10 hover:text-crimson"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        

        
      </motion.aside>
    </>
  )}
</AnimatePresence>
    </header>
  );
}
