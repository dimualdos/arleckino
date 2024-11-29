import { z } from "zod"
import { hideChannelOnPlaylistChannelGroupSchema } from "../hideChannelOnPlaylistChannelGroupSchema"
import { hideChannelGroupOnPlaylistSchema } from "../hideChannelGroupOnPlaylistSchema"

export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParamsSchema = z.object({ group_pk: z.string(), id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequestSchema = z.lazy(() => hideChannelOnPlaylistChannelGroupSchema)
export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponseSchema = z.lazy(() => hideChannelOnPlaylistChannelGroupSchema)

export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationRequestSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsChannelsHidePartialUpdateMutationResponseSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
