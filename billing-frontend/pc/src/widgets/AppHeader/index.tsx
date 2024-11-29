import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/src/shared/utils/cn"

export interface ElementProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const AppHeader = React.forwardRef<HTMLDivElement, ElementProps>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  return (
    <div className="bg-white">
      <Comp
        className={cn("container flex min-h-28 flex-col justify-center py-2 text-left text-4xl font-semibold md:min-h-20 md:py-6 md:text-2xl", className)}
        ref={ref}
        {...props}
      />
    </div>
  )
})
AppHeader.displayName = "Title"

export { AppHeader }
