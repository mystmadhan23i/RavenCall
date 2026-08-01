import {
  BloodBank,
  BloodGroup,
  Donor,
  EmergencyRequest,
  FaqItem,
  Feature,
  StatItem,
  Testimonial,
  TimelineStep,
} from "@/types";

export const bloodGroups: BloodGroup[] = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const emergencyRequests: EmergencyRequest[] = [
  { id: "e1", bloodGroup: "O-", location: "Chennai", unitsNeeded: 2, postedMinutesAgo: 2, hospital: "Apollo Hospitals", urgency: "critical" },
  { id: "e2", bloodGroup: "B+", location: "Siliguri", unitsNeeded: 3, postedMinutesAgo: 8, hospital: "North Bengal Medical", urgency: "high" },
  { id: "e3", bloodGroup: "AB-", location: "Kolkata", unitsNeeded: 1, postedMinutesAgo: 14, hospital: "AMRI Hospitals", urgency: "critical" },
  { id: "e4", bloodGroup: "A+", location: "Bengaluru", unitsNeeded: 4, postedMinutesAgo: 21, hospital: "Manipal Hospital", urgency: "moderate" },
  { id: "e5", bloodGroup: "O+", location: "Delhi", unitsNeeded: 2, postedMinutesAgo: 30, hospital: "AIIMS", urgency: "high" },
];

export const donors: Donor[] = [
  { id: "d1", name: "Aarav Sharma", bloodGroup: "O+", city: "Chennai", distanceKm: 1.2, lastDonated: "3 months ago", verified: true, donationCount: 12, avatarColor: "#DC2626" },
  { id: "d2", name: "Priya Nair", bloodGroup: "A-", city: "Chennai", distanceKm: 2.4, lastDonated: "5 months ago", verified: true, donationCount: 8, avatarColor: "#2563EB" },
  { id: "d3", name: "Rohan Das", bloodGroup: "B+", city: "Siliguri", distanceKm: 0.8, lastDonated: "2 months ago", verified: true, donationCount: 21, avatarColor: "#991B1B" },
  { id: "d4", name: "Ishita Roy", bloodGroup: "AB+", city: "Kolkata", distanceKm: 4.1, lastDonated: "1 month ago", verified: false, donationCount: 3, avatarColor: "#60A5FA" },
  { id: "d5", name: "Vikram Singh", bloodGroup: "O-", city: "Delhi", distanceKm: 3.6, lastDonated: "6 months ago", verified: true, donationCount: 17, avatarColor: "#DC2626" },
  { id: "d6", name: "Meera Iyer", bloodGroup: "A+", city: "Bengaluru", distanceKm: 5.9, lastDonated: "4 months ago", verified: true, donationCount: 9, avatarColor: "#2563EB" },
];

export const bloodBanks: BloodBank[] = [
  {
    id: "b1",
    name: "Raven Central Blood Bank",
    city: "Chennai",
    address: "12 Anna Salai, Chennai",
    phone: "+91 44 2345 6789",
    hours: "24/7 Emergency Access",
    stock: { "O+": 40, "O-": 12, "A+": 25, "B+": 18 },
  },
  {
    id: "b2",
    name: "North Bengal Life Bank",
    city: "Siliguri",
    address: "Sevoke Road, Siliguri",
    phone: "+91 353 234 5678",
    hours: "8:00 AM – 10:00 PM",
    stock: { "A-": 6, "B+": 22, "AB+": 9, "O+": 30 },
  },
  {
    id: "b3",
    name: "Kolkata Metro Blood Center",
    city: "Kolkata",
    address: "Park Street, Kolkata",
    phone: "+91 33 4567 8901",
    hours: "24/7 Emergency Access",
    stock: { "O-": 8, "AB-": 3, "A+": 33, "B-": 11 },
  },
];

export const features: Feature[] = [
  {
    id: "f1",
    title: "Find Nearby Donors",
    description: "Instantly locate verified donors around you, filtered by blood group and distance.",
    icon: "MapPinned",
    href: "/find-donors",
  },
  {
    id: "f2",
    title: "Emergency Blood Requests",
    description: "Broadcast a critical request to every eligible donor in your city within seconds.",
    icon: "Siren",
    href: "/emergency",
  },
  {
    id: "f3",
    title: "Verified Donors",
    description: "Every donor profile is identity and health verified for a trustworthy network.",
    icon: "ShieldCheck",
    href: "/find-donors",
  },
  {
    id: "f4",
    title: "Nearby Blood Banks",
    description: "Real-time inventory from partner blood banks so you always know where to go.",
    icon: "Building2",
    href: "/blood-banks",
  },
  {
    id: "f5",
    title: "Real-Time Notifications",
    description: "Get alerted the moment a compatible request or reply comes in — no delays.",
    icon: "BellRing",
    href: "/notifications",
  },
  {
    id: "f6",
    title: "Hospital Support",
    description: "Dedicated tools for hospitals to coordinate blood needs with verified donors.",
    icon: "Stethoscope",
    href: "/resources",
  },
];

export const timelineSteps: TimelineStep[] = [
  { id: "t1", title: "Register", description: "Create your donor profile in under two minutes.", icon: "UserPlus" },
  { id: "t2", title: "Verify", description: "Confirm your identity and eligibility to donate.", icon: "BadgeCheck" },
  { id: "t3", title: "Receive Emergency Alerts", description: "Get notified when someone nearby needs your blood type.", icon: "BellRing" },
  { id: "t4", title: "Accept Request", description: "Respond in one tap when you're able to help.", icon: "CheckCircle2" },
  { id: "t5", title: "Donate", description: "Visit the hospital or blood bank and donate safely.", icon: "HeartPulse" },
  { id: "t6", title: "Save a Life", description: "Your single donation can save up to three lives.", icon: "Sparkles" },
];

export const statistics: StatItem[] = [
  { id: "s1", label: "Registered Donors", value: 20000, suffix: "+" },
  { id: "s2", label: "Lives Saved", value: 7500, suffix: "+" },
  { id: "s3", label: "Partner Hospitals", value: 600, suffix: "+" },
  { id: "s4", label: "Cities Covered", value: 30, suffix: "+" },
];

export const testimonials: Testimonial[] = [
  {
    id: "ts1",
    name: "Sundar Raman",
    role: "Patient",
    quote: "Within twenty minutes of posting our request, three donors had already responded. Raven Call gave my father a second chance.",
    location: "Chennai",
    rating: 5,
  },
  {
    id: "ts2",
    name: "Ananya Ghosh",
    role: "Donor",
    quote: "I get an alert only when I'm truly needed nearby. It feels good knowing exactly how many times I've helped save a life.",
    location: "Siliguri",
    rating: 5,
  },
  {
    id: "ts3",
    name: "Dr. Kabir Mehta",
    role: "Hospital",
    quote: "Our emergency ward coordinates transfusions faster than ever. The verified donor network cut our response time dramatically.",
    location: "Kolkata",
    rating: 5,
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq1",
    question: "Who can donate blood on Raven Call?",
    answer: "Anyone aged 18–65, weighing over 50kg, and in general good health can register as a donor. Full eligibility is confirmed during the verification step.",
  },
  {
    id: "faq2",
    question: "How fast are emergency requests broadcast?",
    answer: "Emergency requests reach every matching, verified donor within your selected radius in real time, typically within seconds of posting.",
  },
  {
    id: "faq3",
    question: "Is my personal information safe?",
    answer: "Yes. Contact details are only shared with a requester once you explicitly accept a donation request, and all profiles are encrypted end-to-end.",
  },
  {
    id: "faq4",
    question: "How often can I donate blood?",
    answer: "Whole blood donation is recommended every 3 months for men and every 4 months for women, in line with standard medical guidelines.",
  },
  {
    id: "faq5",
    question: "Can hospitals post requests directly?",
    answer: "Yes, verified hospitals and blood banks can create an account under Hospital Support to post and manage requests directly.",
  },
];
