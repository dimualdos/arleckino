"use client"

import * as React from "react"
import { Check, CheckIcon, Minus } from "lucide-react"
import { cn } from "@/src/shared/utils/cn"
import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"

export interface TripleCheckboxProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof tripleCheckboxVariants> {
  asChild?: boolean
  selected: "none" | "some-selected" | "all-selected"
}

const tripleCheckboxVariants = cva(
  "inline-flex items-center text-foreground border border-grey border-spacing-0.5 tracking-[0.16px] ring-0 transition-all relative duration-300 justify-center whitespace-nowrap rounded outline-none ring-offset-background ring-background font-semibold 1 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-75",
  {
    variants: {
      variant: {
        default: "focus-visible:ring-border",
        "some-selected": "bg-accent border-accent focus-visible:ring-accent",
        "all-selected": "bg-accent border-accent focus-visible:ring-accent",
      },
      size: {
        default: "size-4.5 min-w-4.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const TripleCheckbox = React.forwardRef<HTMLButtonElement, TripleCheckboxProps>(({ className, asChild = false, selected = "none", size, variant, ...props }, ref) => {
  return (
    <button
      type="button"
      className={cn(tripleCheckboxVariants({ variant: selected === "none" ? "default" : selected === "some-selected" ? "some-selected" : "all-selected", size, className }))}
      ref={ref}
      {...props}
    >
      <Minus
        className={clsx("absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300", {
          "opacity-0": selected !== "some-selected",
          "opacity-100": selected === "some-selected",
        })}
      />
      <Check
        className={clsx("absolute left-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-300", {
          "opacity-0": selected !== "all-selected",
          "opacity-100": selected === "all-selected",
        })}
      />
    </button>
  )
})
TripleCheckbox.displayName = "TripleCheckbox"

export { TripleCheckbox }
