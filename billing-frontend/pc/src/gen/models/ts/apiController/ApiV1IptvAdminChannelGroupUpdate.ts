import type { AdminChannelGroup } from "../AdminChannelGroup"

export type ApiV1IptvAdminChannelGroupUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelGroupUpdateMutationRequest = Omit<NonNullable<AdminChannelGroup>, "id" | "channels_count" | "count_selected" | "created_date" | "modified_date">

export type ApiV1IptvAdminChannelGroupUpdateMutationResponse = AdminChannelGroup
export namespace ApiV1IptvAdminChannelGroupUpdateMutation {
  export type Response = ApiV1IptvAdminChannelGroupUpdateMutationResponse
  export type Request = ApiV1IptvAdminChannelGroupUpdateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelGroupUpdatePathParams
}
