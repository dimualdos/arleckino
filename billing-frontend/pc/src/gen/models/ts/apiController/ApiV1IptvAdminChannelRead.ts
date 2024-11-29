import type { AdminChannel } from "../AdminChannel"

export type ApiV1IptvAdminChannelReadPathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelReadQueryResponse = AdminChannel
export type ApiV1IptvAdminChannelReadQuery = {
  Response: ApiV1IptvAdminChannelReadQueryResponse
  PathParams: ApiV1IptvAdminChannelReadPathParams
}
