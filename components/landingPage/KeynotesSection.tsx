"use client";
import Image from "next/image";
import React from "react";

import lecture from "../../public/lecture.png";
import { Section } from "../Section";
import { Text } from "../Text";
import { EaseIn } from "../motionWrappers/EaseIn";

export function KeynotesSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
        <div
          className="flex flex-col md:max-w-[5
        600px] items-center md:items-start mb-16 md:mb-0"
        >
          <Text type="h2" className="mb-8 max-w-[500px]">
            Foredrag, keynotes og workshops
          </Text>
          <Text type="large">
            Vi tilbyr skreddersydde foredrag om Bitcoin og Lightning Network, tilpasset deres behov.
            Vi dekker alt fra grunnleggende konsepter til komplekse detaljer, inspirerer og
            informerer. Vi gjør avanserte og detaljerte emner lett tilgjengelige for ditt team.
          </Text>
        </div>
        <EaseIn fromDirection="bottom" offset={20}>
          <div className="relative h-[500px] flex justify-center">
            <Image
              src={lecture}
              alt="Coldcard Q"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </EaseIn>
      </div>
    </Section>
  );
}
