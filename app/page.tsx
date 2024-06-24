import { Metadata } from "next";

import { ColdStorageSection } from "@/components/landingPage/ColdStorageSection";
import { ConsultationSection } from "@/components/landingPage/ConsultationSection";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { KeynotesSection } from "@/components/landingPage/KeynotesSection";
import { LightningSection } from "@/components/landingPage/LightningSection";
import { TakeTheStepSection } from "@/components/landingPage/TakeTheStepSection";
import ogImage from "@/public/opengraph-image.jpg";
import twitterImage from "@/public/twitter-image.jpg";

const someTitle = "Satoshi Consult";
const someDescription =
  "Satoshi Consult is a consulting firm that specializes in Bitcoin and Lightning network technology.";

export const metadata: Metadata = {
  title: someTitle,
  description: someDescription,
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://www.satoshiconsult.com`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: someTitle,
    description: someDescription,
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
    title: "Satoshi Consult",
    description:
      "Satoshi Consult is a consulting firm that specializes in Bitcoin and Lightning network technology.",
    card: "summary_large_image",
    creator: "@SatoshiConsult",
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
