import { addDeviceSteps } from "@/src/shared/consts"
import { SharedQueryAddDevice } from "@/src/shared/types"
import { AppHeader } from "@/src/widgets/AppHeader"
import clsx from "clsx"
import { Check } from "lucide-react"
import React from "react"

type Props = {
  query: SharedQueryAddDevice
  parsedStepNumber: number
}

export const Header = ({ query, parsedStepNumber }: Props) => {
  return (
    <AppHeader className="lg:min-h-26 flex-row items-center justify-between space-y-2 lg:flex-col lg:items-start lg:space-y-1">
      <h1>Добавление устройства</h1>
      {/* DEKSTOP */}
      <div className="ml-auto grid grid-cols-4 gap-12 text-nowrap text-base font-medium lg:hidden">
        {addDeviceSteps.map(({ name, number }) => {
          return (
            <div
              // href={{
              //   pathname: `/personal-page/devices/add`,
              //   query: {
              //     ...query,
              //     stepNumber: number,
              //   },
              // }}
              className="flex flex-col items-center space-y-2"
              key={name}
            >
              {/* NAME */}
              <span
                className={clsx("transition-all duration-300", {
                  "text-grey-hard": number > parsedStepNumber,
                  "text-purple": number === parsedStepNumber || (parsedStepNumber === 0 && number === 1),
                })}
              >
                {name}
              </span>

              {/* ICON */}
              <span
                className={clsx("relative size-6 rounded-full border text-white transition-all duration-300", {
                  "border-transparent bg-grey-soft": number !== parsedStepNumber,
                  "border-transparent bg-purple": number === parsedStepNumber || (parsedStepNumber === 0 && number === 1),
                  "!border-purple !bg-transparent": number < parsedStepNumber,
                })}
              >
                {/* Line */}
                <span
                  className={clsx("absolute left-[calc(100%+20px)] top-2.5 h-0.5 w-[116px] bg-grey-soft transition-all duration-300 lg:hidden", {
                    "bg-purple": parsedStepNumber - 1 === number || parsedStepNumber > number,
                    hidden: number === 4,
                  })}
                ></span>
                <span
                  className={clsx("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300", {
                    "pointer-events-all text-white opacity-100": number === parsedStepNumber || number > parsedStepNumber,
                    "pointer-events-none opacity-0": number < parsedStepNumber,
                  })}
                >
                  {number}
                </span>
                <span
                  className={clsx("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300", {
                    "pointer-events-all opacity-100": parsedStepNumber > number,
                    "pointer-events-none opacity-0": parsedStepNumber <= number,
                  })}
                >
                  <Check className="size-5 text-purple" />
                </span>
              </span>
            </div>
          )
        })}
      </div>

      {/* MOBILE */}
      <div className="hidden text-base font-bold text-purple lg:block">
        Шаг {parsedStepNumber} из {addDeviceSteps.length}
      </div>
    </AppHeader>
  )
}
