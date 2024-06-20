import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background text-foreground hover:bg-foreground hover:text-background border-2 border-border",
        primary:
          "bg-primary text-foreground hover:bg-background hover:text-foreground hover:border-2 hover:border-foreground",
        // destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-base text-primary underline-offset-4 hover:underline",
        navLink: "text-muted text-sm hover:text-foreground",
      },
      size: {
        default: "h-10 px-4",
        // sm: "h-9 rounded-md px-3",
        lg: "h-12 px-6",
        // icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
