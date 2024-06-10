"use client";
import Link from "next/link";
import React from "react";

import { Paths } from "@/lib/configs";

import { Button } from "../Button";
import { Section } from "../Section";
import { Text } from "../Text";

export function TakeTheStepSection() {
  return (
    <Section className="border-t-[0.5px] border-muted">
      <div className="flex flex-col justify-center items-center text-center">
        <Text type="postTitle" className="mb-2">
          Din partner i Bitcoin
        </Text>
        <Text type="h2" className="mb-8 max-w-[640px]">
          Ta steget inn i Bitcoin-revolusjonen!
        </Text>
        <Text type="normal" className="mb-8 max-w-[640px]">
          Opplev ekspertveiledning, fra Bitcoin-selvoppbevaring til Lightning Network-integrasjon.
          Book et møte i dag og løft din virksomhet med våre skreddersydde løsninger og workshops.
        </Text>
        <Link href={Paths.KONTAKT} passHref>
          <Button size={"lg"} variant={"primary"}>
            Book møte
          </Button>
        </Link>
      </div>
    </Section>
  );
}
