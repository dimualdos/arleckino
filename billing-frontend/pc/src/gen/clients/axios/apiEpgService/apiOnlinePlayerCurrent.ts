//@ts-ignore
import client from "@/src/axios-client"

/**
 * @description Получение текущего состояния онлайн-плеера.
 * @link https://epg.arlekino.tv/api/online-player/current */
export async function apiOnlinePlayerCurrent(options: Partial<Parameters<typeof client>[0]> = {}): Promise<any> {
  const res = await client({
    method: "get",
    url: `https://epg.arlekino.tv/api/online-player/current`,
    ...options,
  })
  return res
}
