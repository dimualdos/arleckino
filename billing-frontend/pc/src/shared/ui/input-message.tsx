import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/shared/utils/cn"

const inputMessageVariants = cva("inline-flex text-left transition-all duration-300", {
  variants: {
    variant: {
      invalid: "text-destructive",
      valid: "text-valid",
      "text-grey-hard": "text-grey-hard",
    },
    size: {
      default: "text-xs",
    },
  },
  defaultVariants: {
    variant: "invalid",
    size: "default",
  },
})

export interface InputMessageProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof inputMessageVariants> {
  asChild?: boolean
}

const InputMessage = React.forwardRef<HTMLSpanElement, InputMessageProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "span"
  return (
    <Comp
      className={cn(inputMessageVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
InputMessage.displayName = "Button"

export { InputMessage, inputMessageVariants }
