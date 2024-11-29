import { Device } from "@/src/gen/models/ts/Device"
import { UserServer } from "@/src/gen/models/ts/UserServer"
import { format } from "date-fns"

export interface FormattedEpgDate {
  title: string
  value: string
  index: number
}

function setMidnight(date: Date): Date {
  date.setHours(0, 0, 0, 0)
  return date
}

export function formatDateStrings(dates: string[]): FormattedEpgDate[] {
  const today = setMidnight(new Date())

  return dates.map((dateStr) => {
    const date = setMidnight(new Date(dateStr))
    let title = ""

    // Форматирование дня недели и числа
    const dayOfWeek = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(date)
    const dayOfMonth = new Intl.DateTimeFormat("ru-RU", { day: "numeric" }).format(date)

    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      title = "Сегодня"
    } else if (diffDays === -1) {
      title = "Вчера"
    } else if (diffDays === 1) {
      title = "Завтра"
    } else {
      title = `${dayOfWeek}, ${dayOfMonth}`
    }

    return { title, value: dateStr, index: diffDays }
  })
}

export const getTime = (time: number | undefined) => {
  if (!time) return null
  return format(new Date(time * 1000), "HH:mm")
}

export type getStreamUrlType = { selectedDevice: Device; servers: UserServer[]; chanelId: string; ago?: number; from?: number; to?: number }
const OVERRIDE_CHANNEL_DOMAIN = "cdn.ab01.spr24.net"

export const getStreamUrl = ({ selectedDevice, servers, chanelId, ago, from, to }: getStreamUrlType) => {
  if (!selectedDevice || (selectedDevice?.ott_id || "").length === 0) {
    return null
  }

  const useServer = servers?.find((s) => s.id === selectedDevice.server)
  if (!useServer) {
    return null
  }

  const useDns = OVERRIDE_CHANNEL_DOMAIN.length > 0 ? OVERRIDE_CHANNEL_DOMAIN : useServer.dns
  return !from || !to
    ? `https://${useDns}/${chanelId}/embed.html?token=${selectedDevice.ott_id}&autoplay=false&ago=${ago || 0}`
    : `https://${useDns}/${chanelId}/embed.html?token=${selectedDevice.ott_id}&autoplay=false&from=${from}&to=${to}`
}
