"use client";
import { useState } from "react";

import { Bitcoin } from "./Icons/Bitcoin";
import { Briefcase } from "./Icons/Briefcase";
import { Cart } from "./Icons/Cart";
import { CartAdd } from "./Icons/CartAdd";
import { Check } from "./Icons/Check";
import { Email } from "./Icons/Email";
import { Facebook } from "./Icons/Facebook";
import { Info } from "./Icons/Info";
import { Instagram } from "./Icons/Instagram";
import { MapPin } from "./Icons/MapPin";
import { Nostr } from "./Icons/Nostr";
import { Phone } from "./Icons/Phone";
import { Presentation } from "./Icons/Presentation";
import { Service } from "./Icons/Service";
import { Shield } from "./Icons/Shield";
import { Trash } from "./Icons/Trash";
import { Twitter } from "./Icons/Twitter";
import { Zap } from "./Icons/Zap";

export type IconName =
  | "facebook"
  | "instagram"
  | "twitter"
  | "email"
  | "phone"
  | "address"
  | "nostr"
  | "cartAdd"
  | "cart"
  | "info"
  | "trash"
  | "bitcoin"
  | "briefcase"
  | "service"
  | "zap"
  | "shield"
  | "check"
  | "presentation";

export interface InternalIconProps {
  height: number;
  width: number;
  fill: string;
}
export interface IconProps {
  size?: IconSize;
  color?: IconColor;
  name: IconName;
  hoverColor?: IconColor;
}
export type IconSize = "s" | "m" | "l";

export interface iconSizeProps {
  height: number;
  width: number;
}

export interface InternalIconProps {
  height: number;
  width: number;
  fill: string;
  onMouseEnter: (event: React.MouseEvent<SVGElement>) => void;
  onMouseLeave: (event: React.MouseEvent<SVGElement>) => void;
}

export type IconColor = "foreground" | "muted" | "green";

const iconsMap: Record<IconName, React.FC<InternalIconProps>> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  address: MapPin,
  email: Email,
  phone: Phone,
  nostr: Nostr,
  cartAdd: CartAdd,
  cart: Cart,
  info: Info,
  trash: Trash,
  bitcoin: Bitcoin,
  briefcase: Briefcase,
  service: Service,
  shield: Shield,
  zap: Zap,
  check: Check,
  presentation: Presentation,
};

const iconSizeMap: Record<IconSize, iconSizeProps> = {
  s: { height: 16, width: 16 },
  m: { height: 24, width: 24 },
  l: { height: 32, width: 32 },
};

const colorMap: Record<IconColor, string> = {
  foreground: "hsl(var(--foreground))",
  muted: "hsl(var(--muted))",
  green: "hsl(var(--green))",
};

export const Icon: React.FC<IconProps> = ({ name, color, size, hoverColor }) => {
  const [fill, setFill] = useState(colorMap[color || "foreground"]);
  const IconComponent = iconsMap[name];
  const sizeProps = iconSizeMap[size || "m"];
  const hoverFill = colorMap[hoverColor || "foreground"];

  const handleMouseEnter = () => {
    setFill(hoverFill);
  };

  const handleMouseLeave = () => {
    setFill(colorMap[color || "foreground"]);
  };
  const styles = {
    display: "inline-block",
    transition: "fill 0.3s ease",
  };

  return (
    <IconComponent
      {...sizeProps}
      fill={fill}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
