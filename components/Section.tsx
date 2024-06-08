import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
}

type MaxWidth = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

const maxWidthLookupMap: Record<MaxWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
};
const baseStyles = "container py-16 sm:py-24";

export const Section: React.FC<SectionProps> = ({ className, children, maxWidth = "6xl" }) => (
  <section className={className}>
    <div className={cn(maxWidthLookupMap[maxWidth], baseStyles)}>{children}</div>
  </section>
);
