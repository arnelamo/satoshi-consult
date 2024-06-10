import { ColdStorageSection } from "@/components/landingPage/ColdStorageSection";
import { ConsultationSection } from "@/components/landingPage/ConsultationSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { KeynotesSection } from "@/components/landingPage/KeynotesSection";
import { LightningSection } from "@/components/landingPage/LightningSection";
import { TakeTheStepSection } from "@/components/landingPage/TakeTheStepSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ConsultationSection />
      <ColdStorageSection />
      <LightningSection />
      <KeynotesSection />
      <TakeTheStepSection />
    </div>
  );
}
