import { z } from "zod"
import { hideChannelGroupOnPlaylistSchema } from "../hideChannelGroupOnPlaylistSchema"

export const apiV1IptvPlaylistGroupsHidePartialUpdatePathParamsSchema = z.object({ playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsHidePartialUpdateMutationRequestSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsHidePartialUpdateMutationResponseSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)

export const apiV1IptvPlaylistGroupsHidePartialUpdatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsHidePartialUpdateMutationRequestSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsHidePartialUpdateMutationResponseSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
