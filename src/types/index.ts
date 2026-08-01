export type BloodGroup = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export interface Donor {
  id: string;
  name: string;
  bloodGroup: BloodGroup;
  city: string;
  distanceKm: number;
  lastDonated: string;
  verified: boolean;
  donationCount: number;
  avatarColor: string;
}

export interface EmergencyRequest {
  id: string;
  bloodGroup: BloodGroup;
  location: string;
  unitsNeeded: number;
  postedMinutesAgo: number;
  hospital: string;
  urgency: "critical" | "high" | "moderate";
}

export interface BloodBank {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  hours: string;
  stock: Partial<Record<BloodGroup, number>>;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface TimelineStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: "Patient" | "Donor" | "Hospital";
  quote: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}
