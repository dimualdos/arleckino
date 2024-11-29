import type { AdminUpdateChannel } from "../AdminUpdateChannel"

export type ApiV1IptvAdminChannelUpdatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelUpdateMutationRequest = Omit<NonNullable<AdminUpdateChannel>, "id" | "group_name" | "created_date" | "modified_date" | "csv_channel_id" | "url">

export type ApiV1IptvAdminChannelUpdateMutationResponse = AdminUpdateChannel
export namespace ApiV1IptvAdminChannelUpdateMutation {
  export type Response = ApiV1IptvAdminChannelUpdateMutationResponse
  export type Request = ApiV1IptvAdminChannelUpdateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelUpdatePathParams
}
