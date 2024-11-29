import { Device } from "@/src/gen/models/ts/Device"
import { useDevices } from "@/src/shared/hooks/useDevices"
import { useEffect, useMemo, useState } from "react"

export const useSelectDeviceLocal = () => {
  const { onSelectOneDevice, filteredDevicesForPage } = useDevices()

  const [selectedDevicesLocal, selectedDevicesLocalSet] = useState<Device[]>([])

  useEffect(() => {
    selectedDevicesLocalSet(filteredDevicesForPage)
  }, [filteredDevicesForPage])

  const onSelectDeviceLocal = (device: Device) => {
    const match = filteredDevicesForPage.find((search) => search.id === device.id)
    selectedDevicesLocalSet(
      filteredDevicesForPage.map((item: Device) => {
        if (item.id === match?.id) {
          return { ...item, selected: !item.selected }
        } else {
          return item
        }
      }),
    )
    onSelectOneDevice(device)
  }
  const value = useMemo(
    () => ({
      selectedDevicesLocal,
      onSelectDeviceLocal,
    }),
    [selectedDevicesLocal],
  )
  return value
}
