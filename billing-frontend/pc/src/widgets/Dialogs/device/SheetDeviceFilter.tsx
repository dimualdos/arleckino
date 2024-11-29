import React, { useEffect, useState, useRef } from "react"
import { Drawer, DrawerClose, DrawerContent } from "@/shared/ui/drawer"
import { Button } from "@/src/shared/ui/button"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { CheckedFilterStore } from "@/src/shared/store/checkedFilterStore"

type Props = {
  isOpen: boolean
  onChange: React.Dispatch<React.SetStateAction<boolean>>
  devicesSubscrType: {
    label: string
    value: string
    subscription_type: string
  }[]
  onDispatchData: (subscriptionDevice: string, search: string) => void
  selectSubscriptionName: string
}

// Фильтр на списке устройств
export const SheetDeviceFilter = ({ isOpen, onChange, devicesSubscrType, onDispatchData, selectSubscriptionName }: Props) => {
  const prevSearchRef = useRef("")
  const prevSubscrRef = useRef("")

  const [search, setSearch] = React.useState<string>("")
  const [subscriptionDevice, setSubscriptionDevice] = useState<string>("")
  const [boolFilter, boolFilterSet] = useState(false)
  const [boolSubscrType, boolSubscrTypeSet] = useState(false)
  useEffect(() => {
    if (search.trim().length) {
      boolFilterSet(true)
    } else {
      boolFilterSet(false)
    }
    if (subscriptionDevice.trim().length) {
      boolSubscrTypeSet(true)
    } else {
      boolSubscrTypeSet(false)
    }
  }, [search, subscriptionDevice])

  //* закидываем в стор данные по предварительному расчету подписки девайсов
  useEffect(() => {
    CheckedFilterStore.update((s) => {
      s.activatedFilter = boolFilter
      s.activatedTypeSubscr = boolSubscrType
    })
  }, [boolFilter, boolSubscrType])

  useEffect(() => {
    setSubscriptionDevice(selectSubscriptionName)
  }, [selectSubscriptionName])

  const handleClick = () => {
    prevSearchRef.current = search
    prevSubscrRef.current = subscriptionDevice

    onDispatchData(subscriptionDevice, search)
  }
  const canselHandleClick = () => {
    setSearch(prevSearchRef.current)
    setSubscriptionDevice(prevSubscrRef.current)
  }
  const removeHandleClick = () => {
    setSearch("")
    setSubscriptionDevice("")
    onDispatchData("", "")
  }

  return (
    <Drawer
      open={isOpen}
      onOpenChange={onChange}
    >
      <DrawerContent>
        <div className="w-full p-6">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold">Фильтр</p>
            <DrawerClose
              className="text-grey-hard"
              asChild
            >
              <button onClick={removeHandleClick}>Сбросить</button>
            </DrawerClose>
          </div>

          <div className="mt-4 space-y-4">
            <div className="space-y-0.5">
              <Label>Поиск по названию устройства</Label>
              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="border-destructive"
              />
            </div>
            <div className="space-y-0.5">
              <Label>Подписка</Label>
              <Select
                onValueChange={setSubscriptionDevice}
                value={subscriptionDevice}
              >
                <SelectTrigger className="text-base">
                  <SelectValue placeholder="Устройства" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {devicesSubscrType.map((item) => (
                      <SelectItem
                        className="px-4"
                        key={item.value}
                        value={item.subscription_type}
                      >
                        <span className="text-base">{item.label}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-8 gap-2 md:grid md:grid-cols-2">
            <DrawerClose asChild>
              <Button
                variant={"outline"}
                className="mt-0 uppercase"
                onClick={canselHandleClick}
              >
                Отмена
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button
                onClick={() => handleClick()}
                className="mt-0 uppercase"
              >
                Применить
              </Button>
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
