import React from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/shared/ui/drawer"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { Device } from "@/src/gen/models/ts/Device"
import Link from "next/link"
import { useEqualizeSubscription } from "@/src/shared/hooks/useEqualizeSubscription";


type Props = {
  disableActionsForOneDevice?: boolean
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  selectedDevices: Device[]
  onRenameChannels: () => void
  openUpdateDates: () => void
  onDeleteDevices: () => void
  checkedActiveSubsriptions: boolean
  comparisonData: boolean
}

export const SheetDevicesActions = ({
  disableActionsForOneDevice,
  isOpen,
  onChange,
  selectedDevices,
  onRenameChannels,
  openUpdateDates,
  onDeleteDevices,
  checkedActiveSubsriptions,
  comparisonData
}: Props) => {
  const { buySubscriptionEqualize } = useEqualizeSubscription()
  const onUpdateDatesDevices = () => {
    buySubscriptionEqualize(false)
    openUpdateDates()
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="w-full space-y-8 pb-10 pt-8">
          <p className="border-b border-grey-soft px-6 pb-4 text-center text-grey-extra-hard">Выбранные устройства: {selectedDevices.length} шт.</p>
          <div className="flex flex-col space-y-8 px-6 *:text-wrap">
            <Link
              className={buttonVariants({ variant: "link", className: "text-xl text-foreground" })}
              href="/personal-page/update-channels"
            >
              Редактор списка каналов
            </Link>
            <Link
              className={buttonVariants({ variant: "link", className: "text-xl text-foreground"})}
              href={!selectedDevices.length ? '' : "/personal-page/subscription"}
              style={!selectedDevices.length ? {  textDecorationLine: "none", cursor: "not-allowed", backgroundColor: "hsl(var(--grey-extra-soft))"} : {}}
            >
              Продлить подписку
            </Link>           
             <Button
              disabled={disableActionsForOneDevice || comparisonData}
              className={"text-xl text-foreground disabled:bg-grey-extra-soft disabled:no-underline"}
              variant={"link"}
              onClick={onUpdateDatesDevices}
            >
              Выровнять даты окончания подписок
            </Button>
            {checkedActiveSubsriptions && (
              <Button
                onClick={onDeleteDevices}
                className="text-xl text-destructive"
                variant={"link"}
              >
                Удалить выбранные устройства
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
