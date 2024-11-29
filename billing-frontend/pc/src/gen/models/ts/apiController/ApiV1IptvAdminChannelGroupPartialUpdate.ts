import type { AdminChannelGroup } from "../AdminChannelGroup"

export type ApiV1IptvAdminChannelGroupPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest = Omit<NonNullable<AdminChannelGroup>, "id" | "channels_count" | "count_selected" | "created_date" | "modified_date">

export type ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse = AdminChannelGroup
export namespace ApiV1IptvAdminChannelGroupPartialUpdateMutation {
  export type Response = ApiV1IptvAdminChannelGroupPartialUpdateMutationResponse
  export type Request = ApiV1IptvAdminChannelGroupPartialUpdateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelGroupPartialUpdatePathParams
}
