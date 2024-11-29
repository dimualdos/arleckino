"use client"

import { Button } from "@/src/shared/ui/button"
import React, { FC, useState } from "react"
import { Input } from "@/src/shared/ui/input"
import { Checkbox } from "@/src/shared/ui/checkbox"
import { CredenzaUpdateDeviceSubscriptions } from "@/src/widgets/Dialogs/device/CredenzaUpdateDeviceSubscriptions"

interface ComponentProps {}
const periodsData = [
  {
    label: "30",
    value: 30,
    discount: 0,
  },
  {
    label: "90",
    value: 90,
    discount: 0,
  },
  {
    label: "180",
    value: 180,
    discount: 5,
  },
  {
    label: "360",
    value: 360,
    discount: 10,
  },
]
const devicesData = [
  {
    label: "Телевизор в гостинной",
    value: "device1",
  },
  {
    label: "Телефон",
    value: "device2",
  },
]
type PeriodItemProps = (typeof periodsData)[number]
type DeviceItemProps = (typeof devicesData)[number]
export const AddDeviceSubscription: FC<ComponentProps> = () => {
  const [selectedPeriod, selectedPeriodSet] = useState<PeriodItemProps | null>(null)
  const [selectedDevice, selectedDeviceSet] = useState<DeviceItemProps[]>([])

  const onSelectPeriod = (periodsItem: PeriodItemProps) => () => selectedPeriodSet(periodsItem)
  const onSelectDevice = (deviceItem: DeviceItemProps) => () => {
    const match = selectedDevice.find((search) => search.value === deviceItem.value)
    if (!match) {
      selectedDeviceSet((prev) => [...prev, deviceItem])
      return
    }
    const filtered = selectedDevice.filter((search) => search.value !== deviceItem.value)
    selectedDeviceSet(filtered)
  }

  return (
      <div className="container flex-1 space-y-6 lg:max-w-none lg:space-y-4 lg:rounded-lg lg:px-0">
        <p className="text-2xl font-semibold lg:container">Покупка подписки</p>
        <div className="flex space-x-6 lg:flex-col lg:space-x-0">
          {/* Perion START */}
          <div className="w-[66%] rounded-lg bg-white p-6 text-left lg:container lg:w-full lg:rounded-none">
            <p className="text-xl font-semibold lg:text-base">Период</p>

            <div className="mt-6 flex space-x-6 lg:mt-4 lg:flex-col lg:space-x-0">
              {/* DISCOUNTS */}
              <div className="flex w-[40%] flex-col space-y-2 lg:w-full">
                <Input
                  className="w-auto lg:inline-block"
                  placeholder="мин. 30 дней"
                />
                <div className="flex space-x-2">
                  {periodsData.map((item, indx) => (
                    <div
                      className="flex-1 flex-col items-center space-y-1"
                      key={indx}
                    >
                      <Button
                        className="w-full"
                        variant={selectedPeriod?.value === item.value ? "accent" : "outline"}
                        onClick={onSelectPeriod(item)}
                      >
                        {item.label}
                      </Button>
                      {item.discount > 0 && <div className="text-center text-sm font-bold text-purple">{item.discount} %</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* CHECKBOXES */}
              <div className="mt-2.5 flex space-x-2 lg:mt-6">
                <Checkbox id="check1" />
                <label
                  className="selection:bg-transparent"
                  htmlFor="check1"
                >
                  Автопродление подписки с Вашего баланса
                </label>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <p className="text-xl font-semibold lg:text-base">Cписок выбранных устройств</p>
              <div className="space-y-4">
                {devicesData.map((item) => {
                  const match = selectedDevice.find((search) => search.value === item.value)
                  return (
                    <div
                      key={item.value}
                      className="flex space-x-2 lg:border-b lg:border-b-grey-soft lg:pb-2"
                    >
                      <Checkbox
                        onCheckedChange={onSelectDevice(item)}
                        checked={!!match}
                        id={item.value}
                      />
                      <label
                        className="w-full selection:bg-transparent"
                        htmlFor={item.value}
                      >
                        {item.label}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          {/* Perion END */}

          {/* Стоимость подписки START */}
          <div className="flex h-auto w-full flex-1 flex-col rounded-lg bg-white p-6 lg:mt-4">
            <p className="text-2xl font-semibold lg:text-xl">Стоимость подписки</p>
            <div className="mt-6 flex flex-1 flex-col">
              <div className="flex items-center justify-between">
                <span>Период:</span>
                <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                <span className="font-bold">30 дней</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span>Устройств:</span>
                <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                <span className="font-bold">1</span>
              </div>

              <div className="relative mt-6 flex items-end justify-between overflow-hidden">
                <div>
                  <div>Автопродление подписки</div>
                  <div className="relative z-10 inline-flex bg-white pr-2">с Вашего баланса:</div>
                </div>
                <span className="absolute bottom-1 right-8 w-full divide-dashed border border-b border-dashed border-grey-soft"></span>
                <span className="font-bold">Да</span>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span>Скидка:</span>
                <span className="mx-2 mt-2 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                <span className="font-bold">0%</span>
              </div>

              <div className="my-6 flex items-center justify-between space-x-3">
                <span>Промокод:</span>
                <Input placeholder="" />
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-bold">Итого:</span>
                <span className="mx-3 mt-4 flex-1 divide-dashed border border-b border-dashed border-grey-soft"></span>
                <span className="text-xl font-bold">$ 3.0</span>
              </div>
            </div>
          </div>
          {/* Стоимость подписки END */}
        </div>
      </div>
  )
}
