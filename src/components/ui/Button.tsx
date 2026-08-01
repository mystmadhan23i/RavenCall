import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "btn-ripple relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson/50 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-crimson to-crimson-dark text-white shadow-glow hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:-translate-y-0.5",
        outline:
          "border-2 border-crimson text-crimson dark:text-white hover:bg-crimson hover:text-white bg-white/40 dark:bg-white/5 backdrop-blur",
        ghost:
          "text-ink dark:text-white hover:bg-crimson/10 dark:hover:bg-white/10",
        glass:
          "glass text-ink dark:text-white hover:border-crimson/40 hover:-translate-y-0.5",
        blue:
          "bg-gradient-to-r from-medblue to-blue-700 text-white shadow-blueglow hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
