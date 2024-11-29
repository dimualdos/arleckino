import React from "react"
import { AppHeader } from "@/src/widgets/AppHeader"
import clsx from "clsx"
import Link from "next/link"
import { AnyPlayerCard } from "./AnyPlayerCard"
import { useApiV1UserDeviceListList } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { Device } from "@/src/gen/models/ts/Device"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/src/shared/ui/dropdown-menu"
import { Button } from "@/src/shared/ui/button"
import { ChevronDown } from "lucide-react"
import { useToggle } from "@/src/shared/hooks/useToggle"

type Props = {
  selectedDevice: Device | null
  onSelectDevice: (value: Device) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  selected_os: string | undefined
  selected_format: string | undefined
}

export const Header = ({ selectedDevice, onSelectDevice, selected_os, selected_format }: Props) => {
  const useApiV1UserDeviceList = useApiV1UserDeviceListList()

  const { active: isActiveDropdown, setActive: onChangeActiveDropdown } = useToggle(false)

  // Только активные устройства
  const filteredActiveDevices = useApiV1UserDeviceList.data?.data.results.filter((item) => item.is_active)

  return (
    <>
      <AppHeader
        className={clsx("flex-row items-center justify-between space-x-6 pb-3 pt-4 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-1 lg:py-6", {
          "lg:hidden": selected_format || selected_format?.length,
        })}
      >
        <div
          className={clsx("flex-1 space-y-2", {
            "lg:hidden": selected_os || selected_os?.length,
          })}
        >
          <div className="flex items-center">
            <h1 className="flex lg:text-2xl">
              Плейлист для устройства: <span className="ml-1 line-clamp-1 max-w-80 text-purple">{selectedDevice?.name}</span>
            </h1>
            {!filteredActiveDevices?.length ? null : (
              <DropdownMenu
                open={isActiveDropdown}
                onOpenChange={onChangeActiveDropdown}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="ml-2 mt-2"
                    variant={"transparent"}
                    size={"none"}
                  >
                    <ChevronDown
                      className={clsx("size-5 text-accent transition-all duration-300", {
                        "rotate-180": isActiveDropdown,
                      })}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="!right-0 rounded-sm p-0 pb-2"
                >
                  <DropdownMenuGroup>
                    {filteredActiveDevices.map((item) => (
                      <DropdownMenuItem
                        onClick={onSelectDevice(item)}
                        key={item.id}
                        className="rounded-none px-4 text-base"
                      >
                        {item.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
          <p className=" text-base font-medium text-grey-extra-hard lg:block">
            <span className="text-accent">Установите</span> AnyPlayer или сторонний плеер.
            <br />
            Импортируйте ссылку или файл плейлиста в плеер{" "}
            <Link
              className="text-accent"
              href="/"
            >
              (Инструкция)
            </Link>
          </p>
        </div>
        <div className="lg:hidden">
          <AnyPlayerCard />
        </div>

        <div
          className={clsx("hidden space-y-1", {
            "lg:block": selected_os && selected_os.length,
          })}
        >
          <p className="text-2xl font-semibold">Windows</p>
          <p className="text-base text-grey-extra-hard">Плейлист для устройства</p>
        </div>
      </AppHeader>
    </>
  )
}
