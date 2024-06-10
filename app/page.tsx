"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";

import coldCardQ from "../public/coldcard.png";
import terminal from "../public/terminal.png";
import walletPhone from "../public/walletOfSatoshiPhone.png";

export default function Home() {
  return (
    <div>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
        </div>
      </Section>
      <Section>
        <div>
          <div className="flex flex-col items-center mb-8">
            <div className="max-w-[650px]">
              <Text type="postTitle" className="mb-2 text-center">
                KONSULTASJON PÅ ALLE OMRÅDER
              </Text>
              <Text type="h2" className="mb-4 sm:mb-16 text-center">
                Vi tilbyr tjenester til bedrifer og privatpersoner
              </Text>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 lg:gap-4">
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"shield"} size={"l"} />
              <Text type="h4" className="mb-2">
                Kald oppbevaring
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Fra børs til sikker kaldlagring – trygg Bitcoin-overføring uten hackingfare. Vi
                tilbyr multisig-løsninger og personlig veiledning for ekstra sikkerhet og ro.
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"briefcase"} size={"l"} />
              <Text type="h4" className="mb-2">
                Strategi
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Strategisk rådgivning for bedrifter som investerer i Bitcoin. Få innsikt i risiko,
                skatt, regnskap, sikkerhet og styrets støtte.
              </Text>
            </div>
            <div className="flex flex-col items-center sm:items-start space-y-4 sm:space-y-8">
              <Icon name={"zap"} size={"l"} />
              <Text type="h4" className="mb-2">
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
              <Text type="h4" className="mb-2">
                Kundeservice
              </Text>
              <Text type="small" className="text-center sm:text-left">
                Mens Bitcoin mangler kundeservice, tilbyr Satoshi Consult førsteklasses support. Få
                raske og pålitelige svar fra våre eksperter via møter, kryptert chat og
                videokonferanser.
              </Text>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
          <div
            className="flex flex-col md:max-w-[5
            600px] items-center md:items-start mb-16 md:mb-0"
          >
            <Text type="h2" className="mb-8 max-w-[500px]">
              Kald oppbevaring - sov godt om natten
            </Text>
            <Text type="large">
              Vi tilbyr krypterte videokonferanser, hjemmebesøk, eller møter på nøytral plass. Ved
              bruk av multisig-løsninger, som krever to av tre nøkler, sikrer vi dine verdier mot
              hacking. Med ekstra trygghet sover du godt om natten.
            </Text>
          </div>
          <div className="relative h-[500px] flex justify-center">
            <Image
              src={coldCardQ}
              alt="iPhone med Wallet of Satoshi-appen åpen"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </Section>
      {/* overflow-x-hidden pga rotate skyver elementet utenfor */}
      <Section className="overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 items-center">
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
          <div className="flex flex-col items-center md:items-start mb-16 md:mb-0">
            <Text type="h2" className="mb-8">
              Onboarding til Bitcoin Lightning Network
            </Text>
            <Text type="large" className="mb-8">
              Øk kundebasen din med lynraske betalinger via Lightning Network!
            </Text>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Icon name={"check"} size={"m"} color="green" />
                <Text className="ml-4">
                  Vi hjelper deg med å integrere Lightning API-er for sømløse og raske
                  transaksjoner.
                </Text>
              </li>
              <li className="flex items-center">
                <Icon name={"check"} size={"m"} color="green" />
                <Text className="ml-4">
                  Få full kontroll over dine midler med selvoppbevarte Lightning-noder og wallets.
                </Text>
              </li>
              <li className="flex items-center">
                <Icon name={"check"} size={"m"} color="green" />
                <Text className="ml-4">
                  Vi tilbyr omfattende administrasjon av Lightning-noder, inkludert overvåkning,
                  vedlikehold og optimalisering.
                </Text>
              </li>
            </ul>
          </div>
        </div>
      </Section>
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
          <Button size={"lg"} variant={"primary"}>
            Book møte
          </Button>
        </div>
      </Section>
    </div>
  );
}
