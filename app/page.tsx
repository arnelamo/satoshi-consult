import { Metadata } from "next";

import { ColdStorageSection } from "@/components/landingPage/ColdStorageSection";
import { ConsultationSection } from "@/components/landingPage/ConsultationSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { KeynotesSection } from "@/components/landingPage/KeynotesSection";
import { LightningSection } from "@/components/landingPage/LightningSection";
import { TakeTheStepSection } from "@/components/landingPage/TakeTheStepSection";
import ogImage from "@/public/opengraph-image.jpg";
import twitterImage from "@/public/twitter-image.jpg";

export const metadata: Metadata = {
  title: "Satoshi Consult",
  description:
    "Satoshi Consult is a consulting firm that specializes in Bitcoin and Lightning network technology.",
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://www.satoshiconsult.com`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    url: "https://www.satoshiconsult.com",
    type: "website",
    images: [
      {
        url: ogImage.src,
        width: 1200,
        height: 630,
        alt: "Satoshi Comsult Open Graph Image",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: twitterImage.src,
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
