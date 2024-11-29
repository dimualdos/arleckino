import { mockChannels } from "@/src/shared/mock/channels"
import { Channel as ChannelType } from "@/src/gen/models/ts/Channel"
import { Button } from "@/src/shared/ui/button"
import { ScrollArea } from "@/src/shared/ui/scroll-area"
import clsx from "clsx"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React, { useCallback, useEffect, useState } from "react"
import iconPlayer from "@/public/icon-player-accent.svg"
import { EpgData } from "."
import { useFetchEpgChannelProgramById } from "@/src/gen/clients/hooks/apiController/useFetchEpgChannelProgramById"
import { useApiV1ServiceServerListList } from "@/src/gen/clients/hooks/apiController/useApiV1ServiceServerListList"
import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { format, getUnixTime, sub } from "date-fns"
import { FormattedEpgDate, formatDateStrings, getStreamUrl, getTime } from "./utils"

type Props = {
  selectedChannel: ChannelType | null | undefined
}

export const PlayerChannel = ({ selectedChannel }: Props) => {
  const { data: currentEpgData } = useFetchEpgChannelProgramById(selectedChannel?.tvg_logo!)
  const { data: serverData } = useApiV1ServiceServerListList()
  const { data: devicesData } = useApiV1UserDeviceListList()
  const currentEpg = currentEpgData?.epg_data as EpgData[]
  const servers = serverData?.data.results
  const devices = devicesData?.data.results

  const currentDate = format(new Date(), "yyyy-MM-dd")
  const currentTimestamp = getUnixTime(new Date())

  const [epgByDate, setEpgByDate] = useState<Record<string, EpgData[]>>()
  const [streamUrl, setStreamUrl] = useState<string>()
  const [streamUrlLoading, setStreamUrlLoading] = useState<boolean>(true)
  const [dates, setDates] = useState<FormattedEpgDate[]>()
  const [selectedDate, setSelectedDate] = useState<string>(currentDate)
  const [selectedEgp, setSelectedEgp] = useState<EpgData[]>()
  const [selectedBroadcast, setSelectedBroadcast] = useState<EpgData>()

  useEffect(() => {
    const data = {} as Record<string, EpgData[]>
    currentEpg?.forEach((program) => {
      const programDate = format(new Date(program.time * 1000), "yyyy-MM-dd")
      if (data[programDate]) {
        data[programDate].push(program)
      } else {
        data[programDate] = [program]
      }
    })

    const availableDates = formatDateStrings(Object.keys(data))
    console.log("data", data)
    console.log("availableDates", availableDates)

    setEpgByDate(data)
    setDates(availableDates)
  }, [currentEpg])

  useEffect(() => {
    if (epgByDate && selectedDate) {
      setSelectedEgp(epgByDate[selectedDate])
    }
  }, [selectedDate, epgByDate])

  useEffect(() => {
    if (selectedEgp && currentTimestamp) {
      setSelectedBroadcast(selectedEgp.find((item) => item.time < currentTimestamp && currentTimestamp < item.time_to))
    }
  }, [selectedEgp])

  useEffect(() => {
    const streamUrl = selectedChannel?.tvg_logo && devices?.[0] && servers && getStreamUrl({ chanelId: selectedChannel?.tvg_logo, selectedDevice: devices?.[0]!, servers: servers })
    if (streamUrl) {
      setStreamUrl(streamUrl)
      setStreamUrlLoading(false)
    }
  }, [selectedChannel, devices, servers])

  useEffect(() => {
    setSelectedDate(currentDate)
  }, [selectedChannel])

  const handleDateClick = useCallback((dateValue: string) => {
    setSelectedDate(dateValue)
  }, [])

  const handleSelectBroadcast = (broadcast: EpgData) => {
    setSelectedBroadcast(broadcast)
    console.log(broadcast.time)

    const timeFrom = broadcast.time
    const timeTo = broadcast.time_to
    const streamUrl =
      selectedChannel?.tvg_logo && devices?.[0] && servers && getStreamUrl({ chanelId: selectedChannel?.tvg_logo, selectedDevice: devices?.[0], servers: servers, from: timeFrom, to: timeTo })
    console.log(streamUrl)

    if (streamUrl) {
      setStreamUrl(streamUrl)
      setStreamUrlLoading(false)
    }
  }

  return (
    <div
      className={clsx("flex flex-1 flex-col space-y-4 border-l pl-8 pt-4 lg:border-0 lg:border-l-0 lg:px-0", {
        "lg:hidden": !selectedChannel,
        "lg:flex": selectedChannel,
      })}
    >
      {/* MEDIA + MOBILE TITLE*/}
      <div className="space-y-4 lg:container">
        <div className="hidden space-y-0.5 lg:block">
          <p className="text-xs text-grey-hard">
            {getTime(selectedBroadcast?.time)} - {getTime(selectedBroadcast?.time_to)}{" "}
          </p>
          <p className="font-bold">{selectedBroadcast?.name}</p>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-grey-soft pb-[58%]">
          {streamUrlLoading ? (
            // TODO ВЕРСТКА лоадер плеера
            <>КАНАЛ ИЛИ ПРОГРАММА ЕЩЕ НЕ ВЫБРАНЫ</>
          ) : (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={streamUrl}
            />
          )}
        </div>
      </div>

      {/* HEAD + CONTENT */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-t-lg bg-white">
        {/* HEAD */}
        <div className="no-scrollbar flex items-center space-x-4 border-b border-b-grey-soft p-8 pb-4 lg:overflow-x-auto">
          <Button
            size={"none"}
            variant={"transparent"}
            className="size-6 p-0"
          >
            <ChevronLeft className="size-4" />
          </Button>
          {dates?.map((date) => {
            const isSelected = date.value === selectedDate
            const isToday = date.index === 0

            return (
              <Button
                key={date.value}
                size={"none"}
                variant={"transparent"}
                className={isSelected ? clsx("shaddow-bold relative p-0") : clsx("p-0 font-medium text-grey-hard")}
                onClick={() => handleDateClick(date.value)}
              >
                {date.title}
                {isSelected && <span className="absolute inset-x-0 top-9 h-1 w-full bg-accent"></span>}
              </Button>
            )
          })}
          <Button
            size={"none"}
            variant={"transparent"}
            className="size-6 p-0"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
        {/* CONTENT */}
        <div className="flex-1">
          <ScrollArea className="h-[742px] px-5 py-4 lg:h-auto lg:px-3 lg:py-2">
            <div className="space-y-2 lg:space-y-0">
              {selectedEgp?.map((item, indx) => {
                const isActive = item.time_to > currentTimestamp
                const isOnline = item.time < currentTimestamp && currentTimestamp < item.time_to
                return (
                  <div
                    key={indx}
                    className={clsx("rounded-lg px-3 py-2 transition-all duration-300", {
                      "bg-grey-extra-soft": selectedChannel && selectedBroadcast?.time === item.time,
                    })}
                  >
                    <div className="flex items-center">
                      <Button
                        onClick={() => handleSelectBroadcast(item)}
                        className="p-0.5"
                        variant={"transparent"}
                        size={"none"}
                      >
                        <img
                          className="size-5 object-contain"
                          src={iconPlayer.src}
                          width={iconPlayer.width}
                          height={iconPlayer.height}
                          alt=""
                        />
                      </Button>
                      <span
                        className={clsx("ml-4 font-bold", {
                          "text-grey-hard": !isActive,
                          "text-foreground": isActive,
                        })}
                      >
                        {getTime(item.time)}
                      </span>
                      <div
                        className={clsx("relative ml-6", {
                          "text-grey-hard": !isActive,
                          "text-foreground": isActive,
                        })}
                      >
                        <span
                          className={clsx("absolute -left-4 top-1.5 size-2 rounded-full bg-valid transition-all duration-300", {
                            "opacity-0": !isOnline,
                            "opacity-100": isOnline,
                          })}
                        ></span>
                        <p className="line-clamp-1">{item.name}</p>
                      </div>
                    </div>
                    <p
                      className={clsx("ml-[108px] text-xs", {
                        hidden: selectedBroadcast?.time !== item.time,
                        "mt-2 block": selectedBroadcast?.time === item.time,
                      })}
                    >
                      {item.descr}
                    </p>
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
