import clsx from "clsx"
import React, { ReactNode } from "react"
import { RadioGroupItem } from "./radio-group"
import { StaticImageData } from "next/image"

type Props = {
  walletProps: {
    name: string
    image: StaticImageData | null
    content: ReactNode | null
  }
  radioId: string
  radioValue: string
  isLoading?: boolean
}

export const BalanceCard = ({ walletProps, radioId, radioValue, isLoading = false }: Props) => {
  const { name, content, image } = walletProps
  return (
    <div
      className={clsx("relative rounded-lg", {
        "cursor-pointer": !isLoading,
        "pointer-events-none animate-pulse": isLoading,
      })}
    >
      <RadioGroupItem
        className="peer absolute left-6 top-4.5 z-10"
        id={radioId}
        value={radioValue}
      />
      <div className="absolute inset-0 h-full w-full rounded-lg border border-transparent peer-data-[state=checked]:border-accent peer-data-[state=unchecked]:border-grey-soft peer-data-[state=checked]:bg-white peer-data-[state=unchecked]:bg-grey-extra-soft lg:peer-data-[state=checked]:border-purple lg:peer-data-[state=unchecked]:bg-transparent"></div>
      <div className="relative z-10 flex items-start py-4.5 pl-14 pr-6 lg:pl-12">
        <span
          className={clsx("ml-2.5 flex flex-1 items-center space-x-2 lg:font-bold", {
            "max-w-[50%] rounded-full bg-grey-extra-soft text-transparent placeholder:bg-transparent": isLoading,
          })}
        >
          {isLoading ? "Загрузка..." : name}
        </span>
        {isLoading ? null : (
          <img
            className="ml-auto"
            src={image?.src}
            width={image?.width}
            height={image?.height}
            alt=""
          />
        )}
      </div>
      <div
        className={clsx("relative z-20 hidden pb-3 pl-16 pr-6 peer-data-[state=checked]:block lg:pl-14 lg:text-xs", {
          "animate-pulse": isLoading,
        })}
      >
        {!content ? null : (
          <span
            className={clsx("transition-all duration-300", {
              "text-transparent placeholder:bg-transparent": isLoading,
            })}
          >
            {isLoading ? "Загрузка..." : content}
          </span>
        )}
      </div>
      <label
        className={clsx("absolute inset-0 z-10 h-full w-full",{
          "cursor-pointer": !isLoading
        })}
        htmlFor={radioId}
      />
    </div>
  )
}
