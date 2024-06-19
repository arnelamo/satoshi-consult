import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  verticalPadding?: "normal" | "small";
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

const verticalPaddingLookupMap: Record<"normal" | "small", string> = {
  normal: "py-12 sm:py-24",
  small: "py-10 sm:py-12",
};

const baseStyles = "container";

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  maxWidth = "6xl",
  verticalPadding = "normal",
}) => (
  <section className={className}>
    <div
      className={cn(
        maxWidthLookupMap[maxWidth],
        verticalPaddingLookupMap[verticalPadding],
        baseStyles,
      )}
    >
      {children}
    </div>
  </section>
);
