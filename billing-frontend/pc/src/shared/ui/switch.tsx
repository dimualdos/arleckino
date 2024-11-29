"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/src/shared/utils/cn"

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer relative inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full border-px border-transparent outline-none transition-all delay-200 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:border-grey data-[state=checked]:bg-accent data-[state=unchecked]:bg-transparent",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none absolute top-1/2 block size-[15px] -translate-y-1/2 rounded-full border-px border-grey bg-background shadow-lg ring-0 transition-all duration-200 data-[state=checked]:translate-x-[calc(100%+1px)] data-[state=unchecked]:translate-x-[-1px] data-[state=checked]:border-accent",
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
