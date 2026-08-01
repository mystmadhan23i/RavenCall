import { Link } from "react-router-dom";

export function RavenLogo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 group ${className}`}>
      <span className="relative flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-9 w-9 transition-transform duration-300 group-hover:-rotate-6">
          <path
            d="M24 4C15 6 8 12 6 20c-1 4 0 7 3 8-2 1-4 3-4 6 3 1 6 0 8-2 1 3 4 6 8 7-3 2-6 3-9 3 6 3 14 3 19-2 6-5 8-13 6-21-1-5-4-9-8-12-2-2-6-4-9-3-2 1-2 3 0 4-3 1-6 0-8-2 2-3 5-4 8-5z"
            fill="currentColor"
            className="text-ink dark:text-white"
          />
          <circle cx="30" cy="16" r="1.6" fill="#F8FAFC" />
        </svg>
        <svg viewBox="0 0 24 24" className="absolute -bottom-1 -right-1 h-4 w-4 drop-shadow-[0_0_4px_rgba(220,38,38,0.8)]">
          <path
            d="M12 2C9 7 5 11.5 5 15.5A7 7 0 0 0 19 15.5C19 11.5 15 7 12 2Z"
            fill="#DC2626"
          />
        </svg>
      </span>
      <span className="font-display text-xl font-bold tracking-tight">
        Raven <span className="text-crimson">Call</span>
      </span>
    </Link>
  );
}
