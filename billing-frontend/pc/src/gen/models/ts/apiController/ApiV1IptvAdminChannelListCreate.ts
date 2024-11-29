import type { AdminCreateChannel } from "../AdminCreateChannel"

export type ApiV1IptvAdminChannelListCreate201 = AdminCreateChannel

export type ApiV1IptvAdminChannelListCreateMutationRequest = Omit<NonNullable<AdminCreateChannel>, "id" | "group_name" | "created_date" | "modified_date" | "csv_channel_id" | "url">

export type ApiV1IptvAdminChannelListCreateMutationResponse = AdminCreateChannel
export namespace ApiV1IptvAdminChannelListCreateMutation {
  export type Response = ApiV1IptvAdminChannelListCreateMutationResponse
  export type Request = ApiV1IptvAdminChannelListCreateMutationRequest
  export type Errors = ApiV1IptvAdminChannelListCreate201
}
