import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  bgColor?: ThemeColor;
}

type ThemeColor = "background" | "foreground";

const colorLookupMap: Record<ThemeColor, string> = {
  background: "bg-background",
  foreground: "bg-foreground",
};

export const Section: React.FC<SectionProps> = ({
  className,
  children,
  bgColor = "background",
}) => (
  <section className={cn(colorLookupMap[bgColor], className)}>
    <div className="container py-24 max-w-6xl">{children}</div>
  </section>
);
