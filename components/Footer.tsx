import Image from "next/image";
import Link from "next/link";

import { ContactInformation, MenuItem } from "@/app/layout";
import { Text } from "@/components/Text";

import { ExternalLink } from "./ExternalLink";
import { Icon } from "./Icon";
import { ModeToggle } from "./ModeToggle";
import logo from "../public/logo_36h.png";

interface FooterProps {
  menuItems: MenuItem[];
  contactInformation?: ContactInformation;
}

export const Footer: React.FC<FooterProps> = ({ menuItems, contactInformation }) => (
  <footer className="border-t-[0.5px] border-muted">
    <div className="container py-10 max-w-6xl">
      <div className="flex justify-between items-center">
        <Image src={logo} alt={"Logo"} height={32} width={33} />
        {/* <ul className="hidden sm:block sm:space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <Text type="link">{item.name}</Text>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden mb-8">
          {menuItems.map((item, i) => (
            <Link key={item.name} href={item.href}>
              {i !== 0 && <span className="mx-4 text-muted">/</span>}
              <Text type="link" className="">
                {item.name}
              </Text>
            </Link>
          ))}
        </div> */}
        {/* <div className="flex flex-col space-y-2 sm:space-y-4 mb-8 sm:mb-0"> */}
        <div className="flex space-x-8 justify-center">
          {contactInformation?.nostr && (
            <ExternalLink link={contactInformation.nostr}>
              <Icon
                name="nostr"
                color="muted"
                hoverColor="foreground"
                size="s"
                altText="Nostr link"
              />
            </ExternalLink>
          )}
          {contactInformation?.twitter && (
            <ExternalLink link={contactInformation.twitter}>
              <Icon
                name="twitter"
                color="muted"
                hoverColor="foreground"
                size="s"
                altText="Twitter/X link"
              />
            </ExternalLink>
          )}
        </div>
        <div className="mt-2">
          <ModeToggle />
        </div>
        {/* </div> */}
      </div>
    </div>
    <div className="border-t-[0.5px] border-muted">
      <div className="container py-4 max-w-6xl flex justify-center">
        <Text type="small">2024 @ Satoshi Consult</Text>
      </div>
    </div>
  </footer>
);
