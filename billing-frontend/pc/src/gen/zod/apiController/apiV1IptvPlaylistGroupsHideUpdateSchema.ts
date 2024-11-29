import { z } from "zod"
import { hideChannelGroupOnPlaylistSchema } from "../hideChannelGroupOnPlaylistSchema"

export const apiV1IptvPlaylistGroupsHideUpdatePathParamsSchema = z.object({ playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsHideUpdateMutationRequestSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsHideUpdateMutationResponseSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)

export const apiV1IptvPlaylistGroupsHideUpdatePathParamsSchemaAlt = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsHideUpdateMutationRequestSchemaAlt = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsHideUpdateMutationResponseSchemaAlt = z.lazy(() => hideChannelGroupOnPlaylistSchema)
