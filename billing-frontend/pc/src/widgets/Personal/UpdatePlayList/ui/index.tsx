"use client"

import React, { FC, useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router"
import { PageQueries } from "../types"
import { SelectFormat } from "./SelectFormat"
import { CurrentFormat } from "./CurrentFormat"
import { CredenzaOTT } from "@/src/widgets/Dialogs/playlist/CredenzaOTT"
import { useApiV1IptvPlaylistOsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistOsList"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { SelectOS } from "./SelectOS"
import { Header } from "./Header"
import clsx from "clsx"
import { Device } from "@/src/gen/models/ts/Device"
import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { PlaylistType } from "@/src/gen/models/ts/PlaylistType"

interface ComponentProps {}

export const PersonalUpdatePlayList: FC<ComponentProps> = () => {
  const router = useRouter()
  const { selected_device_id, selected_os, selected_format } = router.query as PageQueries
  const useApiV1UserDeviceList = useApiV1UserDeviceListList()
  const useGetPlayListOS = useApiV1IptvPlaylistOsList()

  const { active: isActiveOTT, setActive: onChangeActiveOTT, toggle: toggleActiveOTT } = useToggle(false)
  const [selectedDevice, selectedDeviceSet] = useState<Device | null>(null)
  const onSelectDevice = (value: Device) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => selectedDeviceSet(value)
  const [currentFormatOfSelectedDevice, currentFormatOfSelectedDeviceSet] = useState<PlaylistType | null>(null)

  // Получить 1й девайс, удовлетворяющий условию. Отображаем его в dropdown
  useEffect(() => {
    if (useApiV1UserDeviceList.data?.data.results.length && selected_device_id?.length) {
      const matchDevice = useApiV1UserDeviceList.data.data.results.find((search) => search.is_active && `${search.id}` === selected_device_id)
      if (matchDevice) selectedDeviceSet(matchDevice)
    }
  }, [useApiV1UserDeviceList.data?.data, selected_device_id])

  useEffect(() => {
    const matchCurrentOS = useGetPlayListOS.data?.data.results.find((search) => search.name.toLowerCase() === selected_os?.toLowerCase())
    if (matchCurrentOS) {
      const playlistTypeOfCurrentDevice = selectedDevice?.playlist_type
      const matchFormat = matchCurrentOS.playlist_types?.find((search) => search.id === playlistTypeOfCurrentDevice)
      if (matchFormat) currentFormatOfSelectedDeviceSet(matchFormat)
    }
  }, [selectedDevice, useApiV1UserDeviceList])

  return (
    <>
      <div className="flex flex-1 flex-col">
        <Header
          selectedDevice={selectedDevice}
          onSelectDevice={onSelectDevice}
          selected_os={selected_os}
          selected_format={selected_format}
        />
        <div className="flex flex-1 flex-col">
          <SelectOS
            selected_device_id={selected_device_id}
            selected_os={selected_os}
            selected_format={selected_format}
          />
          <div
            className={clsx("container flex flex-1 lg:flex-col lg:bg-blue-soft lg:px-0", {
              "lg:hidden": !selected_os || !selected_os.length,
            })}
          >
            <SelectFormat
              selectedDevice={selectedDevice}
              selected_os={selected_os}
              selected_format={selected_format}
            />
            <CurrentFormat
              currentFormatOfSelectedDevice={currentFormatOfSelectedDevice}
              selectedDevice={selectedDevice}
              selected_format={selected_format}
              setOpenOTT={toggleActiveOTT}
            />
          </div>
        </div>
      </div>

      <CredenzaOTT
        isOpen={isActiveOTT}
        onChange={onChangeActiveOTT}
        selectedDevice={selectedDevice}
      />
    </>
  )
}
