"use client";
import React from "react";

import { Icon } from "../Icon";
import { Section } from "../Section";
import { Text } from "../Text";
import { EaseIn } from "../motionWrappers/EaseIn";

export function ConsultationSection() {
  return (
    <Section>
      <div>
        <div className="flex flex-col items-center mb-8">
          <div className="max-w-[650px]">
            <Text type="postTitle" className="mb-2 text-center">
              KONSULTASJON PÅ ALLE OMRÅDER
            </Text>
            <Text type="h2" className="mb-4 sm:mb-16 text-center">
              Tjenester for bedrifer og privatpersoner
            </Text>
          </div>
        </div>
        <EaseIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"shield"} size={"l"} />
              <Text type="h3" className="mb-2">
                Kald oppbevaring
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Fra børs til sikker kaldlagring – trygg Bitcoin-overføring uten hackingfare. Vi
                tilbyr multisig-løsninger og personlig veiledning for ekstra sikkerhet og ro.
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"briefcase"} size={"l"} />
              <Text type="h3" className="mb-2">
                Strategi
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Strategisk rådgivning for bedrifter som investerer i Bitcoin. Få innsikt i risiko,
                skatt, regnskap, sikkerhet og styrets støtte.
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"zap"} size={"l"} />
              <Text type="h3" className="mb-2">
                Lightning
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Få raske og kostnadseffektive Bitcoin-transaksjoner med Lightning Network. Vi
                hjelper med API-integrasjon, sikkerhet, og nodeadministrasjon for full kontroll over
                dine midler
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"service"} size={"l"} />
              <Text type="h3" className="mb-2">
                Kundeservice
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Mens Bitcoin mangler kundeservice, tilbyr Satoshi Consult førsteklasses support. Få
                raske og pålitelige svar fra våre eksperter via møter, kryptert chat og
                videokonferanser.
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"presentation"} size={"l"} />
              <Text type="h3" className="mb-2">
                Foredrag
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Vi tilbyr tilpassede foredrag om Bitcoin og Lightning Network. Fra grunnleggende
                konsepter til avanserte detaljer, gjør vi komplekse emner lett forståelige og
                inspirerende for ditt team.
              </Text>
            </div>
          </div>
        </EaseIn>
      </div>
    </Section>
  );
}
