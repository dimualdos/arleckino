import React from "react"
import iconTail from "@/public/icon-tail.svg"

type Props = {
  content: string
}

export const SimpleTooltip = ({ content }: Props) => {
  return (
    <span className="pointer-events-none absolute bottom-[calc(100%+14px)] left-1/2 z-10 block h-auto w-[250px] -translate-x-1/2 rounded-lg bg-background text-left opacity-0 shadow-tooltip transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus:pointer-events-auto group-focus:opacity-100">
      <span className="relative block text-wrap px-4 py-2">
        <span>{content}</span>
        <img
          className="absolute left-1/2 top-full -translate-x-1/2"
          src={iconTail.src}
          width={iconTail.width}
          height={iconTail.height}
          alt=""
        />
      </span>
    </span>
  )
}
