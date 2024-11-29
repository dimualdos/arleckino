import type { AdminUpdateChannel } from "../AdminUpdateChannel"

export type ApiV1IptvAdminChannelPartialUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelPartialUpdateMutationRequest = Omit<NonNullable<AdminUpdateChannel>, "id" | "group_name" | "created_date" | "modified_date" | "csv_channel_id" | "url">

export type ApiV1IptvAdminChannelPartialUpdateMutationResponse = AdminUpdateChannel
export namespace ApiV1IptvAdminChannelPartialUpdateMutation {
  export type Response = ApiV1IptvAdminChannelPartialUpdateMutationResponse
  export type Request = ApiV1IptvAdminChannelPartialUpdateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelPartialUpdatePathParams
}
