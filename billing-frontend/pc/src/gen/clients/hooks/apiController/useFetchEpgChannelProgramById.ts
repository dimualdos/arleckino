import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchProgramById = async (id: string) => {
  const { data } = await axios.get(`https://epg.arlekino.tv/api/program?epg=${id}`)
  return data
}

export const useFetchEpgChannelProgramById = (id: string) => {
  return useQuery(["program", id], () => fetchProgramById(id), {
    enabled: !!id,
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
  })
}
