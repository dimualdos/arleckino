import { Device } from "@/src/gen/models/ts/Device"
import clsx from "clsx"
import React, { MouseEventHandler } from "react"
import { TripleCheckbox } from "./triple-checkbox"
import { Settings } from "lucide-react"
import { Switch } from "./switch"
import { Label } from "./label"
import { format } from "date-fns"
import { useApiV1IptvPlaylistOsList } from "@/src/gen/clients/hooks/apiController/useApiV1IptvPlaylistOsList"
import Link from "next/link"

type Props = {
  device: Device
  selected?: "none" | "some-selected" | "all-selected"
  onHandleSelect: () => void
  onHandleClickSettings: () => void
  autoRenewSubscription: (autoRenew: boolean, id: string) => void
  onSelectOneDeviceFromSubscription: (item: Device) => MouseEventHandler<HTMLButtonElement> | undefined
}

export const DeviceCard = ({ device, selected = "none", onHandleSelect, onHandleClickSettings, autoRenewSubscription, onSelectOneDeviceFromSubscription }: Props) => {
  const { id, name, subscription, description, subscription_type } = device
  let date = new Date(subscription?.date_end!)
  const resultDate = +date ? format(new Date(+`${date.getUTCFullYear()}`, +`${date.getUTCMonth()}`, +`${date.getUTCDate()}`), "dd.MM.yyyy") : ""

  const useGetPlayListOS = useApiV1IptvPlaylistOsList()

  // Найти первое совподение операционной системы формата текущего устройства
  const matchFirstOSForCurrentDevice = useGetPlayListOS.data?.data.results.find((search) => search.playlist_types?.find((playList) => playList.id == device.playlist_type))
  let nameOfOS = !matchFirstOSForCurrentDevice ? "" : matchFirstOSForCurrentDevice.name.toLowerCase()

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
    <div
      className={clsx("space-y-5 rounded-lg p-2 pt-4 ring-1 ring-grey-soft transition-all duration-300", {
        "ring-2 ring-purple": selected === "some-selected" || selected === "all-selected",
      })}
    >
      <div className="flex pl-2">
        {/* выбор всех девайсов в чебоксе */}
        <TripleCheckbox
          onClick={onHandleSelect}
          className="mt-px"
          selected={selected === "some-selected" ? "some-selected" : selected === "all-selected" ? "all-selected" : "none"}
        />
        {/* выбор девайса */}
        <div className="ml-3 mr-auto">
          <p className="font-bold">{name}</p>
          <p className="mt-0.5 line-clamp-3 text-sm text-grey-hard">{description}</p>
        </div>
        {/* иконка "шестерёнка" в карточке устройства */}
        <button
          onClick={onHandleClickSettings}
          className="self-start"
        >
          <Settings className="ml-3 size-5 text-black" />
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="flex flex-wrap items-center gap-2 rounded-lg bg-grey-extra-soft px-4 py-3">
          <span className="mr-1 text-grey-extra-hard">Подписка:</span>
          <span>{resultSubscription}</span>
          <Link
            href="/personal-page/subscription"
            className="ml-auto"
          >
            <span
              className="text-accent"
              onClick={onSelectOneDeviceFromSubscription(device)}
            >
              {subscription ? "Продлить" : "Купить"}
            </span>
          </Link>
        </button>
        <div className="relative flex items-center rounded-lg bg-grey-extra-soft px-4 py-3">
          <span className="Автопродление с баланса">Автопродление с баланса</span>
          <Switch
            className="ml-auto"
            id={`${name}-${id}`}
            checked={subscription && subscription.auto_renew ? true : false}
            onCheckedChange={() => autoRenewSubscription(subscription!.auto_renew, `${id!}`)}
            disabled={!subscription}
          />
          <Label
            className="absolute inset-0 h-full w-full"
            htmlFor={`${name}-${id}`}
          />
        </div>
        <Link
          href={{ pathname: "/personal-page/playlist", query: { selected_os: nameOfOS, selected_device_id: id, selected_format: device.playlist_type } }}
          className="flex items-center rounded-lg bg-grey-extra-soft px-4 py-3"
        >
          <span>Плейлист</span>
          <span className="ml-auto text-accent">Настроить</span>
        </Link>
      </div>
    </div>
  )
}
