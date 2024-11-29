import clsx from "clsx"
import { AlertCircle } from "lucide-react"
import React, { ReactNode } from "react"

type Props = {
  description: ReactNode
  variant?: "warning" | "dangerous" | "success"
}

export const Alert = ({ description, variant = "warning" }: Props) => {
  return (
    <div
      className={clsx("flex space-x-2 rounded-sm px-3 py-2", {
        "bg-yellow-soft": variant === "warning",
        "bg-destructive/30": variant === "dangerous",
        "bg-valid/30": variant === "success",
      })}
    >
      <AlertCircle
        className={clsx("size-5 min-w-5", {
          "text-accent": variant === "warning",
          "text-destructive": variant === "dangerous",
          "text-valid": variant === "success",
        })}
      />
      <div className="text-sm">{description}</div>
    </div>
  )
}
