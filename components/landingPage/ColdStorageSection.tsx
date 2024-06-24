"use client";
import Image from "next/image";
import React from "react";

import coldCardQ from "../../public/coldcard.png";
import { Section } from "../Section";
import { Text } from "../Text";
import { EaseIn } from "../motionWrappers/EaseIn";

export function ColdStorageSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
        <div
          className="flex flex-col md:max-w-[5
            600px] items-center sm:items-start mb-4 md:mb-0"
        >
          <Text type="h2" className="text-center sm:text-left mb-8 max-w-[500px]">
            Kald oppbevaring - sov godt om natten
          </Text>
          <Text type="large" className="text-center sm:text-left">
            Vi tilbyr krypterte videokonferanser, hjemmebesøk, eller møter på nøytral plass. Ved
            bruk av multisig-løsninger, som krever to av tre nøkler, sikrer vi dine verdier mot
            hacking. Med ekstra trygghet sover du godt om natten.
          </Text>
        </div>
        <EaseIn fromDirection="bottom" offset={20}>
          <div className="relative h-[500px] flex justify-center">
            <Image
              src={coldCardQ}
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
