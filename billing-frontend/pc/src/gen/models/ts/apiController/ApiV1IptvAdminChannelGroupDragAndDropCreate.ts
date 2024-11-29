import type { ChannelGroupDragNDrop } from "../ChannelGroupDragNDrop"

export type ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams = {
  /**
   * @type string
   */
  id: string
}

export type ApiV1IptvAdminChannelGroupDragAndDropCreate201 = ChannelGroupDragNDrop

export type ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest = ChannelGroupDragNDrop

export type ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse = ChannelGroupDragNDrop
export namespace ApiV1IptvAdminChannelGroupDragAndDropCreateMutation {
  export type Response = ApiV1IptvAdminChannelGroupDragAndDropCreateMutationResponse
  export type Request = ApiV1IptvAdminChannelGroupDragAndDropCreateMutationRequest
  export type PathParams = ApiV1IptvAdminChannelGroupDragAndDropCreatePathParams
  export type Errors = ApiV1IptvAdminChannelGroupDragAndDropCreate201
}
