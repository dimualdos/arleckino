import React from "react"
import { SelectFormatItem } from "./SelectFormatItem"
import clsx from "clsx"
import { useApiV1IptvPlaylistOsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistOsList"
import { Device } from "@/src/gen/models/ts/Device"

type Props = {
  selectedDevice: Device | null
  selected_os: string | undefined
  selected_format: string | undefined
}

export const SelectFormat = ({ selectedDevice, selected_os, selected_format }: Props) => {
  const useGetPlayListOS = useApiV1IptvPlaylistOsList()
  const matchCurrentOS = useGetPlayListOS.data?.data.results.find((search) => search.name.toLowerCase() === selected_os?.toLowerCase())
  
  return (
    <div
      className={clsx("w-[320px] min-w-[320px] border-r border-grey-soft pr-3 pt-8 lg:w-full lg:min-w-0 lg:border-0 lg:px-4 lg:pb-10 lg:pt-4", {
        "lg:hidden": selected_os && selected_format,
      })}
    >
      {/* FOR DESKTOP */}
      <div className="space-y-2">
        {!matchCurrentOS
          ? useGetPlayListOS.data?.data.results[0].playlist_types?.map((item) => {
            const tooltipArchie = item.is_mediateka ? "Поддержка архива трансляций последних 6 дней" : null
            const tooltipMedia = item.is_archived ? "Возможность просмотра медиатеки (коллекция фильмов и сериалов)" : null
              return (
                <SelectFormatItem
                  playlist_type_id={item.id}
                  selectedDevice={selectedDevice}
                  tooltipArchie={tooltipArchie}
                  tooltipMedia={tooltipMedia}
                  key={item.name}
                  name={item.name}
                  id={item.id!}
                />
              )
            })
          : matchCurrentOS.playlist_types?.map((item) => {
            const tooltipArchie = item.is_mediateka ? "Поддержка архива трансляций последних 6 дней" : null
            const tooltipMedia = item.is_archived ? "Возможность просмотра медиатеки (коллекция фильмов и сериалов)" : null
              return (
                <SelectFormatItem
                  playlist_type_id={item.id}
                  selectedDevice={selectedDevice}
                  tooltipArchie={tooltipArchie}
                  tooltipMedia={tooltipMedia}
                  key={item.name}
                  name={item.name}
                  id={item.id!}
                />
              )
            })}
      </div>
    </div>
  )
}
