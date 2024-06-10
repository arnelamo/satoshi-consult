"use client";
import Image from "next/image";
import React from "react";

import walletPhone from "../../public/walletOfSatoshiPhone.png";
import { Button } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";
import { EaseIn } from "../motionWrappers/EaseIn";

export function HeroSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
        <div className="flex flex-col md:max-w-[500px] items-center md:items-start mb-16 md:mb-0">
          <Text type="postTitle" className="mb-2">
            Bedre kunnskap. Tryggere investeringer.
          </Text>
          <Text type="h1" className="mb-4">
            Ekspertise på Bitcoin, for alle.
          </Text>
          <Text type="normal" className="mb-7">
            Våre eksperter gir deg verktøyene du trenger for trygg oppbevaring og en vellykket
            Bitcoin-strategi.
          </Text>
          <Button className="w-fit" size={"lg"} variant={"primary"}>
            Book møte
          </Button>
        </div>
        <EaseIn fromDirection="bottom" offset={20}>
          <div className="relative h-[500px] flex justify-center">
            <Image
              src={walletPhone}
              alt="iPhone med Wallet of Satoshi-appen åpen"
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
