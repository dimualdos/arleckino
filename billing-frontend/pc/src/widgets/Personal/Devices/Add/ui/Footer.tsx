import { buttonVariants } from "@/src/shared/ui/button"
import { AppHeader } from "@/src/widgets/AppHeader"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"
import { ServerTypeStatus } from "../types"
import clsx from "clsx"

type Props = {
  getBack: () => string
  getForward: () => string
  watchServerTypeStatus: ServerTypeStatus
  parsedStepNumber: number
  getForwardCallback: () => void
}

export const Footer = ({ getBack, getForward, getForwardCallback, watchServerTypeStatus, parsedStepNumber }: Props) => {
  return (
    <AppHeader className="flex min-h-20 flex-row items-center justify-between py-8">
      <Link
        className={buttonVariants({ variant: "outline", className: "uppercase" })}
        href={getBack()}
      >
        Назад
      </Link>
      <Link
        className={buttonVariants({
          className: clsx("space-x-1 uppercase", {
            "disabled pointer-events-none": watchServerTypeStatus === "progress" || watchServerTypeStatus === "error" || (watchServerTypeStatus === "none" && parsedStepNumber === 2),
          }),
          variant: watchServerTypeStatus === "progress" || watchServerTypeStatus === "error" || (watchServerTypeStatus === "none" && parsedStepNumber === 2) ? "grey" : "accent",
        })}
        onClick={getForwardCallback}
        href={getForward()}
      >
        {parsedStepNumber <= 3 ? <span>Далее</span> : <span>Купить и завершить</span>}

        <ChevronRight className="size-6 text-white" />
      </Link>
    </AppHeader>
  )
}
