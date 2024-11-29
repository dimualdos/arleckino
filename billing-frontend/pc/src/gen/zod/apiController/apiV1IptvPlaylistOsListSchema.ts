import { z } from "zod"
import { playlistOsSchema } from "../playlistOsSchema"

export const apiV1IptvPlaylistOsListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1IptvPlaylistOsListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => playlistOsSchema)),
})
