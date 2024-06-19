import { Metadata } from "next";

import { ColdStorageSection } from "@/components/landingPage/ColdStorageSection";
import { ConsultationSection } from "@/components/landingPage/ConsultationSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { KeynotesSection } from "@/components/landingPage/KeynotesSection";
import { LightningSection } from "@/components/landingPage/LightningSection";
import { TakeTheStepSection } from "@/components/landingPage/TakeTheStepSection";

export const metadata: Metadata = {
  title: "Satoshi Comsult",
  description:
    "Satoshi Consult is a consulting firm that specializes in Bitcoin and Lightning network technology.",
};

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
