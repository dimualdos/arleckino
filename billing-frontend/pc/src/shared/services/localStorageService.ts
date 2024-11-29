import { Device } from "@/src/gen/models/ts/Device"
import { LOCAL_STORAGE_KEYS } from "@/src/shared/consts"

export class LocalStorageService {
  static setDevice(value: Device) {
    if (typeof window === "undefined") return
    const stringified = JSON.stringify(value)
    localStorage.setItem(LOCAL_STORAGE_KEYS.LS_SELECTED_DEVICE, stringified)
  }
  static getDevice() {
    try {
      if (typeof window === "undefined") return
      const findDevice = localStorage.getItem(LOCAL_STORAGE_KEYS.LS_SELECTED_DEVICE)
      if (!findDevice || !findDevice.length) return
      const parsedDevice = JSON.parse(findDevice) as Device
      return parsedDevice
    } catch (error) {}
  }
  static setAccessToken(value: string) {
    if (typeof window === "undefined") return
    localStorage.setItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN, value)
  }
  static removeAccessToken() {
    if (typeof window === "undefined") return
    localStorage.removeItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)
  }
  static getAccessToken() {
    if (typeof window === "undefined") return
    return localStorage.getItem(LOCAL_STORAGE_KEYS.LS_ACCESS_TOKEN)
  }
}
