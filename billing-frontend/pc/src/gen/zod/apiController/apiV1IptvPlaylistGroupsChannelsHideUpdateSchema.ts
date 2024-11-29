import { z } from "zod"
import { hideChannelOnPlaylistChannelGroupSchema } from "../hideChannelOnPlaylistChannelGroupSchema"
import { hideChannelGroupOnPlaylistSchema } from "../hideChannelGroupOnPlaylistSchema"

export const apiV1IptvPlaylistGroupsChannelsHideUpdatePathParamsSchema = z.object({ group_pk: z.string(), id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequestSchema = z.lazy(() => hideChannelOnPlaylistChannelGroupSchema)
export const apiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponseSchema = z.lazy(() => hideChannelOnPlaylistChannelGroupSchema)

export const apiV1IptvPlaylistGroupsChannelsHideUpdatePathParamsSchema = z.object({ id: z.string(), playlist_pk: z.string() })
export const apiV1IptvPlaylistGroupsChannelsHideUpdateMutationRequestSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
export const apiV1IptvPlaylistGroupsChannelsHideUpdateMutationResponseSchema = z.lazy(() => hideChannelGroupOnPlaylistSchema)
