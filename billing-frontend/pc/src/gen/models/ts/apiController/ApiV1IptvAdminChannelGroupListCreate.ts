import type { AdminChannelGroup } from "../AdminChannelGroup"

export type ApiV1IptvAdminChannelGroupListCreate201 = AdminChannelGroup

export type ApiV1IptvAdminChannelGroupListCreateMutationRequest = Omit<NonNullable<AdminChannelGroup>, "id" | "channels_count" | "count_selected" | "created_date" | "modified_date">

export type ApiV1IptvAdminChannelGroupListCreateMutationResponse = AdminChannelGroup
export namespace ApiV1IptvAdminChannelGroupListCreateMutation {
  export type Response = ApiV1IptvAdminChannelGroupListCreateMutationResponse
  export type Request = ApiV1IptvAdminChannelGroupListCreateMutationRequest
  export type Errors = ApiV1IptvAdminChannelGroupListCreate201
}
