import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "normal"
  | "small"
  | "large"
  | "strong"
  | "link"
  | "postTitle";

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: TextType;
  children: ReactNode;
}

const tagLookup: Record<TextType, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  normal: "p",
  small: "p",
  large: "p",
  strong: "p",
  link: "p",
  postTitle: "p",
};

const tagStylesLookup: Record<TextType, string> = {
  h1: "text-6xl font-bold leading-115",
  h2: "text-5xl font-bold leading-115",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  normal: "text-base text-muted",
  small: "text-sm text-muted",
  large: "text-2xl text-muted",
  strong: "text-base font-semibold",
  link: "text-sm text-muted hover:text-foreground font-semibold",
  postTitle: "text-base font-semibold text-muted uppercase",
};

export const Text: React.FC<TextProps> = ({ className, type = "normal", children }) => {
  const Tag = `h${type}` as keyof JSX.IntrinsicElements;

  const baseStyles = "block";
  const typeStyles = `${tagStylesLookup[type]}`;

  return <Tag className={cn(baseStyles, typeStyles, className)}>{children}</Tag>;
};
