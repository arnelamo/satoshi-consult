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
  openGraph: {
    url: "https://satoshiconsult.com",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Satoshi Comsult Open Graph Image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Satoshi Comsult Twitter Image",
      },
    ],
  },
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
