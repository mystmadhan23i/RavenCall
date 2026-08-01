import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import { emergencyRequests } from "@/data/dummyData";

export function EmergencyBanner() {
  const loopItems = [...emergencyRequests, ...emergencyRequests];

  return (
    <div className="relative overflow-hidden border-y border-crimson/20 bg-gradient-to-r from-crimson-dark via-crimson to-crimson-dark py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {loopItems.map((req, i) => (
          <div key={i} className="mx-4 flex items-center gap-3 text-sm font-medium text-white">
            <AlertTriangle className="h-4 w-4 flex-shrink-0 animate-pulse" />
            <span className="font-bold">🚨 Emergency</span>
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-bold">{req.bloodGroup}</span>
            <span>{req.location}</span>
            <span className="opacity-80">·</span>
            <span>{req.unitsNeeded} Donors Needed</span>
            <span className="opacity-80">·</span>
            <span className="opacity-80">{req.postedMinutesAgo} mins ago</span>
            <Link
              to="/emergency"
              className="ml-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-crimson-dark transition hover:bg-graylight"
            >
              Respond
            </Link>
            <span className="mx-4 opacity-30">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}
