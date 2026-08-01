import { Hero } from "@/components/home/Hero";
import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BloodGroupSelector } from "@/components/home/BloodGroupSelector";
import { DonorMapSection } from "@/components/home/DonorMapSection";
import { Statistics } from "@/components/home/Statistics";
import { SuccessStories } from "@/components/home/SuccessStories";
import { BecomeDonorCTA } from "@/components/home/BecomeDonorCTA";
import { FAQSection } from "@/components/home/FAQSection";

export function Home() {
  return (
    <>
      <Hero />
      <div className="mt-16">
        <EmergencyBanner />
      </div>
      <Features />
      <HowItWorks />
      <BloodGroupSelector />
      <DonorMapSection />
      <Statistics />
      <SuccessStories />
      <BecomeDonorCTA />
      <FAQSection />
    </>
  );
}
