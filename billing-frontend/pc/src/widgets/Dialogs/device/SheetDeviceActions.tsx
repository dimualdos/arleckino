import React from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/shared/ui/drawer"
import { Button } from "@/src/shared/ui/button"
import { Device } from "@/src/gen/models/ts/Device"
import Link from "next/link"
import { useDevices } from "../../../shared/hooks/useDevices"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  onUpdateServer: () => void
  onRenameDevice: () => void
  onDeleteDevice: () => void
  subsriptionType?: string
  onOpenConnectAnyPlayer: () => void
  currentIDDevice?: { updateDevice: Device }
}

export const SheetDeviceActions = ({ subsriptionType,
  isOpen,
  onChange,
  onUpdateServer,
  onRenameDevice,
  onDeleteDevice,
  onOpenConnectAnyPlayer,
  currentIDDevice }: Props) => {


  return (
    <Drawer
      open={isOpen}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="w-full space-y-8 pb-10 pt-8">
          <p className="border-b border-grey-soft px-6 pb-4 text-center text-grey-extra-hard">Устройство: {currentIDDevice?.updateDevice.name}</p>
          <div className="flex flex-col space-y-8 px-6 *:text-wrap">
            <Button
              className="text-xl text-foreground"
              variant={"link"}
              onClick={onRenameDevice}
            >
              Переименовать
            </Button>
            {subsriptionType == "active" && <Button
              className="text-xl text-foreground"
              variant={"link"}
              onClick={onUpdateServer}
            >
              <Link href="/personal-page/update-server" className="text-xl">Изменить сервер</Link>
            </Button>}

            <Button
              className="text-xl text-foreground"
              variant={"link"}
            >
              <Link href="/personal-page/update-channels" className="text-xl">Настроить список каналов</Link>
            </Button>

            <Button
              className="text-xl text-foreground"
              variant={"link"}
              onClick={onOpenConnectAnyPlayer}
            >
              Привязать AnyPlayer
            </Button>
            {subsriptionType !== "active" && (
              <Button
                onClick={onDeleteDevice}
                className="text-xl text-destructive"
                variant={"link"}
              >
                Удалить устройство
              </Button>
            )}
            <DrawerClose asChild>
              <Button
                className="text-sm uppercase"
                variant={"outline"}
              >
                Закрыть
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
