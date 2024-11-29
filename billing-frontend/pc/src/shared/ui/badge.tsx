import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/shared/utils/cn"

const badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      default: "border-transparent bg-foreground text-background hover:opacity-80",
      accent: "border-accent bg-accent text-accent-foreground hover:opacity-80",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
