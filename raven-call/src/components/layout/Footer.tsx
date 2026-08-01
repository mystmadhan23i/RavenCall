import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Twitter, Youtube } from "lucide-react";
import { RavenLogo } from "./RavenLogo";

const quickLinks = [
  { label: "Find Donors", to: "/find-donors" },
  { label: "Request Blood", to: "/request-blood" },
  { label: "Become a Donor", to: "/become-donor" },
  { label: "Blood Banks", to: "/blood-banks" },
  { label: "Resources", to: "/resources" },
  { label: "About Us", to: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Contact", to: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <RavenLogo />
            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">
              Connecting blood donors with patients in critical situations — instantly, safely, and with hope.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-slate-600 transition hover:border-crimson hover:text-crimson dark:border-white/10 dark:text-slate-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-600 transition hover:text-crimson dark:text-slate-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Emergency Contacts
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-crimson" /> Emergency: 108
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-crimson" /> Blood Helpline: 1910
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="h-4 w-4 text-crimson" /> Support: +91 1800 200 3000
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-600 transition hover:text-crimson dark:text-slate-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-slate-500 dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} Raven Call. All rights reserved.</p>
          <p>Made with care, for every life waiting for hope.</p>
        </div>
      </div>
    </footer>
  );
}
