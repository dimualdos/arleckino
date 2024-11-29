import { z } from "zod"
import { playlistTypeSchema } from "../playlistTypeSchema"

export const apiV1IptvAdminPlaylistTypesListQueryParamsSchema = z
  .object({ limit: z.number().describe(`Number of results to return per page.`).optional(), offset: z.number().describe(`The initial index from which to return the results.`).optional() })
  .optional()
export const apiV1IptvAdminPlaylistTypesListQueryResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable().optional(),
  previous: z.string().nullable().optional(),
  results: z.array(z.lazy(() => playlistTypeSchema)),
})
