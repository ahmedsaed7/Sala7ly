// components/ui/Form/Label.tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils/formatting";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "text-gray-900 dark:text-gray-100",
        error: "text-red-500 dark:text-red-400",
        success: "text-green-500 dark:text-green-400",
        disabled: "text-gray-500 dark:text-gray-400",
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  optional?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, optional, children, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {optional && (
          <span className="ml-1 text-gray-500 dark:text-gray-400">(Optional)</span>
        )}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label, labelVariants };