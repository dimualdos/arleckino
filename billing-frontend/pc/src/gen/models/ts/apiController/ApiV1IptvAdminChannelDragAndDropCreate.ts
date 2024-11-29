import type { ChannelDragNDrop } from "../ChannelDragNDrop"

export type ApiV1IptvAdminChannelDragAndDropCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelDragAndDropCreate201 = ChannelDragNDrop

export type ApiV1IptvAdminChannelDragAndDropCreateMutationRequest = ChannelDragNDrop

export type ApiV1IptvAdminChannelDragAndDropCreateMutationResponse = ChannelDragNDrop
export namespace ApiV1IptvAdminChannelDragAndDropCreateMutation {
  export type Response = ApiV1IptvAdminChannelDragAndDropCreateMutationResponse
  export type Request = ApiV1IptvAdminChannelDragAndDropCreateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelDragAndDropCreatePathParams
  export type Errors = ApiV1IptvAdminChannelDragAndDropCreate201
}
