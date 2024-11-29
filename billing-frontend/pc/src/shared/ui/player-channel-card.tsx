import React from "react"
import { Button } from "./button"
import clsx from "clsx"
import { EnrichedChannel } from "@/src/widgets/Personal/OnlinePlayer/ui/PlayerChannels"
import { EpgData } from "@/src/widgets/Personal/OnlinePlayer/ui"

interface Props extends EnrichedChannel {
  isActive: boolean
  onClickHandler: () => void
}

export const getDuration = (duration: number): string => {
  const hours = Math.floor(duration / 3600)
  let minutes = Math.floor((duration - hours * 3600) / 60).toString()

  if (minutes.length === 1) {
    minutes = `0${minutes}`
  }

  return `${hours}:${minutes}`
}
export const getProgress = (programm: EpgData) => {
  const currentTime = Math.round(Date.now() / 1000) - (programm?.time || 0)
  return (currentTime * 100) / (programm?.duration || 1)
}

export const getCurrentTime = (time: number): string => {
  const currentTimestamp = Math.round(Date.now() / 1000)
  const duration = currentTimestamp - time
  return getDuration(duration)
}

export const PlayerChannelCard = (item: Props) => {
  const { onClickHandler } = item
  return (
    <div className="relative flex flex-col items-center rounded-lg bg-white p-3 text-left">
      <Button
        variant={!item.isActive ? "white" : "outline"}
        className={clsx("absolute inset-0 h-full w-full rounded-lg bg-transparent", {
          "border-transparent lg:border-grey-soft": !item.isActive,
        })}
        onClick={onClickHandler}
      ></Button>
      <div className="flex w-full space-x-2">
        <img
          className="size-14 h-14 min-w-14 max-w-14 overflow-hidden rounded-md object-cover"
          alt="Изображение"
          src={item.url}
        />
        <div>
          <div className="line-clamp-1 text-sm">{item.name}</div>
          <div className="line-clamp-2 text-sm"> {(item.epgData?.name?.length || 0) > 40 ? `${(item.epgData?.name || "").slice(0, 40)}...` : item.epgData?.name || ""}</div>
        </div>
      </div>

      <div className=" mt-3 flex w-full items-center space-x-1">
        {item.epgData && (
          <span className="flex h-2 flex-1 items-center overflow-hidden rounded-md bg-grey-soft">
            <span
              style={{ width: `${getProgress(item?.epgData)}%` }}
              className="h-full bg-accent"
            ></span>
          </span>
        )}
        {item.epgData && (
          <span className="inline-flex items-center text-xs text-grey-hard">
            <small>{getCurrentTime(item.epgData.time)}</small>
            <small>–</small>
            <small>{getDuration(item.epgData.duration)}</small>
          </span>
        )}
      </div>
    </div>
  )
}
