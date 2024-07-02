import Link from "next/link";

import { Section } from "@/components/Section";
import { Text } from "@/components/Text";

export default function NotFound() {
  return (
    <Section>
      <div className="flex flex-col text-center space-y-4">
        <Text type="h1">Ooops...</Text>
        <Text type="normal">Denne siden finnes ikke, dessverre 🤷🏻‍♂️</Text>
        <Link href="/" className="hover:underline">
          Til forsiden
        </Link>
      </div>
    </Section>
  );
}
