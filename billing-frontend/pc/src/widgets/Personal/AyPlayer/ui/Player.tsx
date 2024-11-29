import React from "react"
import bgAnyPlayerDemoImage from "@/public/bg-any-player-demo.jpg"

type Props = {}

export const Player = (props: Props) => {
  return (
    <div className="absolute -bottom-14 left-1/2 w-[786px] -translate-x-1/2 bg-black shadow-xl lg:-bottom-7 lg:w-[calc(100%-48px)]">
      <div className="relative overflow-hidden pb-[58%]">
        <div className="absolute inset-0 h-full w-full">
          {/* PAST PLAYER HERE AND DELETE DEMO IMAGE */}
          <img
            className="h-full w-full object-cover"
            alt=""
            src={bgAnyPlayerDemoImage.src}
            width={bgAnyPlayerDemoImage.width}
            height={bgAnyPlayerDemoImage.height}
          />
        </div>
      </div>
    </div>
  )
}
