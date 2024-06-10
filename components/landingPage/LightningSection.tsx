"use client";
import Image from "next/image";
import React from "react";

import terminal from "../../public/terminal.png";
import { Icon } from "../Icon";
import { Section } from "../Section";
import { Text } from "../Text";
import { EaseIn } from "../motionWrappers/EaseIn";
import { Stagger } from "../motionWrappers/Stagger";

export function LightningSection() {
  return (
    <Section className="overflow-x-hidden bg-sectionBackgruond">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
        <EaseIn fromDirection="bottom" offset={20}>
          <div className="relative h-[500px] flex justify-center -rotate-[25deg]">
            <Image
              src={terminal}
              alt="Bitcoin Lightning betalingsterminal"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </EaseIn>
        <div className="flex flex-col items-center md:items-start mb-16 md:mb-0">
          <Text type="h2" className="mb-8">
            Onboarding til Bitcoin Lightning Network
          </Text>
          <Text type="large" className="mb-8">
            Øk kundebasen din med lynraske betalinger via Lightning Network!
          </Text>

          <Stagger className="space-y-4">
            <div className="flex items-center">
              <Icon name={"check"} size={"m"} color="green" />
              <Text className="ml-4">
                Vi hjelper deg med å integrere Lightning API-er for sømløse og raske transaksjoner.
              </Text>
            </div>
            <div className="flex items-center">
              <Icon name={"check"} size={"m"} color="green" />
              <Text className="ml-4">
                Få full kontroll over dine midler med selvoppbevarte Lightning-noder og wallets.
              </Text>
            </div>
            <div className="flex items-center">
              <Icon name={"check"} size={"m"} color="green" />
              <Text className="ml-4">
                Vi tilbyr omfattende administrasjon av Lightning-noder, inkludert overvåkning,
                vedlikehold og optimalisering.
              </Text>
            </div>
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
