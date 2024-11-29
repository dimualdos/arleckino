import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/shared/utils/cn"

const buttonVariants = cva(
  "inline-flex items-center tracking-[0.16px] ring-0 transition-all duration-300 justify-center whitespace-nowrap rounded outline-none ring-offset-background ring-background font-semibold 1 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        white: "disabled:bg-grey bg-white hover:opacity-90 text-foreground border border-border focus-visible:ring-border",
        accent: "disabled:bg-grey bg-accent hover:opacity-90 text-background focus-visible:ring-accent",
        yellow: "disabled:opacity-50 bg-yellow-soft hover:opacity-90 border border-accent text-yellow-foreground focus-visible:ring-accent",
        "ghost-yellow": "disabled:opacity-50 bg-transparent hover:opacity-90 focus-visible:ring-accent",
        "accent-app": "disabled:bg-grey bg-accent hover:opacity-90 text-background focus-visible:ring-accent md:bg-transparent md:text-foreground md:border md:border-accent",
        blue: "disabled:bg-grey bg-blue hover:opacity-90 text-blue-foreground focus-visible:ring-blue",
        destructive: "disabled:bg-grey bg-destructive hover:opacity-90 text-destructive-foreground focus-visible:ring-destructive",
        purple: "disabled:bg-grey bg-purple hover:opacity-90 text-purple-foreground focus-visible:ring-purple",
        outline: "disabled:bg-grey bg-background border border-accent hover:opacity-90 text-foreground ring-accent-muted",
        grey: "disabled:bg-grey bg-grey hover:opacity-90 border-0 text-background focus-visible:ring-grey",
        ghost: "disabled:bg-grey hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent",
        "ghost-purple": "disabled:bg-grey hover:bg-purple hover:text-purple-foreground focus-visible:ring-purple",
        "grey-extra-soft": "disabled:bg-grey bg-grey-extra-soft hover:opacity-90 border-0 text-foreground focus-visible:ring-grey-soft",
        transparent: "disabled:bg-grey bg-transparent border border-transparent hover:border-accent-muted focus:border-accent-muted text-foreground ring-accent-muted",
        link: "disabled:bg-grey hover:underline focus:underline underline-offset-2 text-accent !min-h-0 !p-0 font-medium",
        default: "disabled:bg-grey bg-primary text-primary-foreground rounded-md hover:bg-primary/90  focus-visible:ring-ring/50",
        secondary: "disabled:bg-grey bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md",
      },
      size: {
        xs: "min-h-6 max-h-6 size-6 min-w-6 p-1 text-sm",
        sm: "min-h-10 px-4 py-2 text-sm",
        default: "min-h-10 px-4 py-2 text-sm",
        none: "",
        icon: "min-h-10 min-w-10 p-0 items-center justify-center inline-flex",
        "icon-sm": "min-h-6 min-w-6 p-0 items-center justify-center inline-flex",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
