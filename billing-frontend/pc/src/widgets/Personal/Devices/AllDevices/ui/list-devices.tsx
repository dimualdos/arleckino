"use client"
import { Device } from "@/src/gen/models/ts/Device"
import { Button } from "@/src/shared/ui/button"
import { Label } from "@/src/shared/ui/label"
import { Switch } from "@/src/shared/ui/switch"
import { TripleCheckbox } from "@/src/shared/ui/triple-checkbox"
import { DropdownMenuDevice } from "@/src/widgets/Dialogs/device/DropdownMenuDevice"
import clsx from "clsx"
import { MouseEventHandler, useEffect, useReducer, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface IListDevises {
  onAutoRenewSubscription: (auto_renew: boolean, idDevice: string) => void
  onSelectDevice: (item: Device) => void
  filteredDevicesForPage: Device[]
  onDeleteDevice: (id: string) => void
  onChangeDeviceInfo: (itemDeviceID: number, data: Device) => void
  onSelectOneDeviceFromSubscription: (item: Device) => MouseEventHandler<HTMLButtonElement> | undefined
  onAddStoreIdDevice: (value: number) => void
}

const ListDevices = ({ onAutoRenewSubscription, onSelectDevice, filteredDevicesForPage, onDeleteDevice, onChangeDeviceInfo, onSelectOneDeviceFromSubscription, onAddStoreIdDevice }: IListDevises) => {
  const router = useRouter()
  return (
    <>
      {filteredDevicesForPage?.map((item: Device) => {
        const { id, name, description, content, is_active, subscription, subscription_type } = item
        let date = new Date(subscription?.date_end!)
        const resultDate = +date ? date.toLocaleDateString("ru-Ru") : ""
        const resultSubscription = subscription ? (
          subscription.is_active ? (
            `до ${resultDate}`
          ) : (
            <div className="text-[#939393]">истекла</div>
          )
        ) : subscription_type === "ending" ? (
          <div className="text-[#939393]">закончилась</div>
        ) : (
          <div className="text-[#939393]">не куплена</div>
        )
        return (
          <tr
            key={id}
            className="odd:bg-white even:bg-grey-extra-soft"
          >
            {/* Устройство */}
            <th
              scope="row"
              className="px-6 py-4 font-medium"
            >
              <div className="flex space-x-2">
                {/* выбор девайса в чебоксе */}
                <TripleCheckbox
                  onClick={() => onSelectDevice(item)}
                  selected={!item.selected ? "none" : "all-selected"}
                />
                <div className="space-y-0.5">
                  <div>{name}</div>
                  <div className="line-clamp-1 max-w-74 text-sm text-grey-hard">{!description || !description.length ? "–" : description}</div>
                </div>
              </div>
            </th>

            {/* Подписка */}
            <th className="px-6 py-4">
              <div className="grid grid-cols-3 items-center space-x-11  font-medium">
                <span>{resultSubscription}</span>

                {/* оплата подписки */}
                <Link href="/personal-page/subscription">
                  <Button
                    size="none"
                    variant={"transparent"}
                    className={"col-span-2 justify-self-start font-medium text-accent"}
                    onClick={onSelectOneDeviceFromSubscription(item)}
                  >
                    {subscription ? "Продлить" : "Купить"}
                  </Button>
                </Link>
              </div>
            </th>

            {/* Автопродление с баланса */}
            <th className="relative px-6 py-4">
              <Label
                htmlFor={`${item.id}`}
                className="absolute inset-0 flex h-full w-full items-center justify-center"
              >
                <Switch
                  id={`${item.id}`}
                  checked={subscription && subscription.auto_renew ? true : false}
                  onCheckedChange={() => onAutoRenewSubscription(item.subscription!.auto_renew, `${item.id!}`)}
                  disabled={!item.subscription}
                />
              </Label>
            </th>

            {/* Плейлист */}
            <th className="px-6 py-4">
              <Button
                size="none"
                variant={"transparent"}
                className={clsx("font-medium", {
                  "pointer-events-none text-grey-hard": !is_active,
                  "text-accent": is_active,
                })}
                onClick={() => {
                  router.push("/personal-page/update-channels").then(() => {})
                }}
              >
                Настроить
              </Button>
            </th>

            {/*   Действия  в попапе. Появляется при нажатии 3 точек в таблице с устройствами */}
            <th className="px-6 py-4">
              {/* START */}
              <div className="flex justify-end">
                <DropdownMenuDevice
                  onDeleteDevice={() => onDeleteDevice(`${item?.id!}`)}
                  onChangeDeviceInfo={() => onChangeDeviceInfo(item?.id!, item)}
                  subsriptionType={item?.subscription_type!}
                  onUpdateServer={() => onAddStoreIdDevice(item?.id!)}
                />
              </div>
              {/* END */}
            </th>
          </tr>
        )
      })}
    </>
  )
}

export { ListDevices }
