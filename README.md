# Raven Call

A premium, production-quality frontend for **Raven Call** — a platform connecting blood donors with patients in critical situations.

## Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (custom crimson/medical-blue design system)
- React Router v6 (all routes wired, see below)
- Framer Motion (page transitions, hover states, scroll reveals, counters)
- Lucide Icons
- `class-variance-authority` + `tailwind-merge` for a lightweight shadcn-style component pattern

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`.

```bash
npm run build     # production build
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/
    background/   # DNAHelix, FloatingBloodCells, ECGLine, ParticleField, BiomedicalBackground
    layout/       # Navbar, Footer, Layout, RavenLogo
    home/         # Hero, EmergencyBanner, Features, HowItWorks, BloodGroupSelector,
                   # DonorMapSection, Statistics, SuccessStories, BecomeDonorCTA, FAQSection
    ui/           # Button, Badge, GlassCard, SectionHeading, PageHeader (reusable primitives)
  pages/          # One file per route (see Routes below)
  context/        # ThemeContext (dark mode)
  hooks/          # useCountUp, useLockBodyScroll
  data/           # dummyData.ts — swap this for real API calls
  types/          # Shared TypeScript interfaces (Donor, EmergencyRequest, BloodBank, ...)
  lib/            # cn() className utility
```

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/find-donors` | Find Donors (search + filter) |
| `/request-blood` | Request Blood (form) |
| `/become-donor` | Become a Donor (registration form) |
| `/blood-banks` | Blood Banks directory |
| `/emergency` | Emergency Requests |
| `/resources` | Resources |
| `/contact` | Contact (form) |
| `/login` | Login |
| `/signup` | Signup |
| `/dashboard` | Donor Dashboard |
| `/profile` | Profile management |
| `/notifications` | Notifications |
| `*` | 404 |

## Connecting to a Backend

All dummy data lives in `src/data/dummyData.ts` and is typed via `src/types/index.ts`. To connect a Node.js + Express + MongoDB backend:

1. Create `src/services/api.ts` with a small `fetch`/`axios` wrapper.
2. Replace imports of `dummyData` in pages/components with calls to your service layer (e.g. `useEffect` + `useState`, or React Query).
3. The shapes in `types/index.ts` (`Donor`, `EmergencyRequest`, `BloodBank`, etc.) are designed to map directly onto MongoDB collections/schemas.
4. Auth pages (`Login`, `Signup`) currently simulate a request — wire them to your `/auth` endpoints and store the session (JWT/cookie) via `context/`.

## Design Notes

- Color system: Crimson `#DC2626` / Dark Red `#991B1B` primary, Soft Gray `#F8FAFC` base, Medical Blue `#2563EB` accent, all defined in `tailwind.config.ts`.
- Glassmorphism via the `.glass` / `.glass-card` utility classes in `src/index.css`.
- Full dark mode support via Tailwind's `class` strategy — toggle in the navbar, persisted to `localStorage`.
- Biomedical motion (DNA helix rotation, floating blood cells, ECG heartbeat line, particle field, pulse glows) is intentionally subtle so it never competes with content or fails accessibility contrast checks.
