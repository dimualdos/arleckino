import { Button } from "@/src/shared/ui/button"
import { useRouter } from "next/router"
import React from "react"
import iconTime from "@/public/icon-time.svg"
import iconPlayer from "@/public/icon-player.svg"
import { PageQueries } from "../types"
import { SimpleTooltip } from "@/src/shared/ui/simple-tooltip"
import { ChevronRight } from "lucide-react"
import clsx from "clsx"
import { Device } from "@/src/gen/models/ts/Device"
import { useApiV1UserDevicePlaylistTypeCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDevicePlaylistTypeCreate"
import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { isAxiosError } from "axios"
import { toast } from "sonner"

type Props = {
  selectedDevice: Device | null
  playlist_type_id: number | undefined
  id: number
  name: string
  tooltipArchie?: string | null
  tooltipMedia?: string | null
}

export const SelectFormatItem = ({ selectedDevice, playlist_type_id, name, id, tooltipArchie, tooltipMedia  }: Props) => {
  const router = useRouter()
  const { selected_os, selected_format } = router.query as PageQueries
  const useApiV1UserDeviceList = useApiV1UserDeviceListList()
  const useUpdatePlayListType = useApiV1UserDevicePlaylistTypeCreate(`${selectedDevice?.id}`)
  const isLoading = useUpdatePlayListType.isLoading || useApiV1UserDeviceList.isLoading

  const onUpdate = async () => {
    if (!selectedDevice || !playlist_type_id || selectedDevice.playlist_type === playlist_type_id || isLoading) return
    
    try {
      await useUpdatePlayListType.mutateAsync({ playlist_type_id })
      await Promise.allSettled([useApiV1UserDeviceList.refetch(), router.replace({
        query: {
          selected_os,
          selected_format: id,
          selected_device_id: selectedDevice.id
        },
      })])
      
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message)
      }
    }
  }

  return (
    <>
      {/* FOR DESKTOP */}
      <div className={clsx("relative h-11 lg:hidden")}>
        <Button
          onClick={onUpdate}
          variant={selectedDevice && selectedDevice.playlist_type === id ? "yellow" : "ghost-yellow"}
          className={clsx("absolute inset-0 h-full w-full !justify-start", {
            "cursor-wait": isLoading,
          })}
        >
          <div>{name}</div>
          {tooltipArchie && tooltipArchie.length && (
            <div className="group relative ml-2 outline-none">
              <img
                className="w-5 -translate-y-0.5"
                src={iconTime.src}
                width={iconTime.width}
                height={iconTime.height}
                alt=""
              />
              <SimpleTooltip content={tooltipArchie} />
            </div>
          )}

          {tooltipMedia && tooltipMedia.length && (
            <div className="group relative ml-2 outline-none">
              <img
                className="w-4 -translate-y-0.5"
                src={iconPlayer.src}
                width={iconPlayer.width}
                height={iconPlayer.height}
                alt=""
              />
              <SimpleTooltip content={tooltipMedia} />
            </div>
          )}
        </Button>
      </div>

      {/* FOR MOBILE */}
      <Button
        key={id}
        onClick={onUpdate}
        className={clsx("hidden w-full items-center rounded-lg bg-white px-6 py-4 lg:block text-left", {
          "cursor-wait": isLoading,
        })}
      >
        <div className="flex text-black">
          <span className="truncate font-bold first-letter:uppercase">{name}</span>
          <ChevronRight className={clsx("ml-auto size-5 text-accent", {})}></ChevronRight>
        </div>
        {tooltipMedia && tooltipMedia.length && (
          <div className="mt-1">
            <img
              className="mr-2 inline w-3"
              src={iconTime.src}
              width={iconTime.width}
              height={iconTime.height}
              alt=""
            />
            <span className="text-xs text-grey-extra-hard">{tooltipMedia}</span>
          </div>
        )}
      </Button>
    </>
  )
}
