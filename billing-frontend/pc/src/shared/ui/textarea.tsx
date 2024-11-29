import * as React from "react"
import { cn } from "@/src/shared/utils/cn"

export interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-grey-soft outline-none flex min-h-10 w-full rounded border bg-background px-4 py-1 ring-accent-muted ring-offset-background transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
