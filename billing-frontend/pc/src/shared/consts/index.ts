import { AddDeviceStepProps } from "../types"

export enum LOCAL_STORAGE_KEYS {
  LS_ACCESS_TOKEN = "LS_ACCESS_TOKEN",
  LS_SELECTED_DEVICE = "LS_SELECTED_DEVICE",
}

export const LOCALE_NAMES = [
  {
    value: "en",
    label: "English",
    shortLabel: "EN",
  },
  {
    value: "ru",
    label: "Русский",
    shortLabel: "RU",
  },
]

export const addDeviceSteps: AddDeviceStepProps[] = [
  {
    name: "Наименование",
    number: 1
  },
  {
    name: "Выбор сервера",
    number: 2
  },
  {
    name: "Выбор каналов",
    number: 3
  },
  {
    name: "Покупка подписки",
    number: 4
  },
]
