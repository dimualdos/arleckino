import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchOnlinePlayerCurrent = async () => {
  const { data } = await axios.get("https://epg.arlekino.tv/api/online-player/current")
  return data
}

export const useOnlinePlayerCurrent = () => {
  return useQuery(["onlinePlayerCurrent"], fetchOnlinePlayerCurrent)
}
