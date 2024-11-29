import { z } from "zod"

export const apiV1IptvPlaylistGroupsDelete204Schema = z.any()
export const apiV1IptvPlaylistGroupsDeleteMutationResponseSchema = z.any()
export const apiV1IptvPlaylistGroupsDeletePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
