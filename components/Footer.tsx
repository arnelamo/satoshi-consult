import Image from "next/image";
import Link from "next/link";

import { ContactInformation, MenuItem } from "@/app/layout";
import { Text } from "@/components/Text";

import { ExternalLink } from "./ExternalLink";
import { Icon } from "./Icon";
import logo from "../public/logo_36h.png";

interface FooterProps {
  menuItems: MenuItem[];
  contactInformation?: ContactInformation;
}

export const Footer: React.FC<FooterProps> = ({ menuItems, contactInformation }) => (
  <footer className="border-t-[0.5px] border-muted">
    <div className="container py-16 max-w-6xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 items-center place-items-center">
        <Image src={logo} alt={"Logo"} height={32} width={33} className="mb-4 sm:mb-0" />
        <ul className="hidden sm:block sm:space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <Text type="link">{item.name}</Text>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden mb-4">
          {menuItems.map((item, i) => (
            <Link key={item.name} href={item.href}>
              {i !== 0 && <span className="mx-4 text-muted">/</span>}
              <Text type="link" className="">
                {item.name}
              </Text>
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4 justify-center">
            {contactInformation?.nostr && (
              <ExternalLink link={contactInformation.nostr}>
                <Icon name="nostr" color="muted" hoverColor="foreground" size="s" />
              </ExternalLink>
            )}
            {contactInformation?.twitter && (
              <ExternalLink link={contactInformation.twitter}>
                <Icon name="twitter" color="muted" hoverColor="foreground" size="s" />
              </ExternalLink>
            )}
          </div>
          <Text type="small">2024 @ Satoshi Consult</Text>
        </div>
      </div>
    </div>
  </footer>
);
