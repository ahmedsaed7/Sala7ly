import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils/formatting";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-[#23486A] text-[#F5EEDC] hover:bg-[#3B6790]",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-[#3B6790] text-[#F5EEDC] hover:bg-[#3B6790]/20",
        secondary: "bg-[#3B6790] text-[#F5EEDC] hover:bg-[#4C7B8B]",
        accent: "bg-[#EFB036] text-[#23486A] hover:bg-[#EFB036]/90",
        ghost: "text-[#F5EEDC] hover:bg-[#3B6790]/20",
        link: "underline-offset-4 hover:underline text-[#EFB036]",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
); 
Button.displayName = "Button";

export  { Button, buttonVariants };