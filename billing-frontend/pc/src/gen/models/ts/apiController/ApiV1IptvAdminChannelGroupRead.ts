import type { AdminChannelGroup } from "../AdminChannelGroup"

export type ApiV1IptvAdminChannelGroupReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelGroupReadQueryResponse = AdminChannelGroup
export type ApiV1IptvAdminChannelGroupReadQuery = {
  Response: ApiV1IptvAdminChannelGroupReadQueryResponse
  PathParams: ApiV1IptvAdminChannelGroupReadPathParams
}
