import type { TemplateUpdate } from "../TemplateUpdate"

export type ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest = TemplateUpdate

export type ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse = TemplateUpdate
export namespace ApiV1DbTemplatesAdminTemplatesPartialUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminTemplatesPartialUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminTemplatesPartialUpdatePathParams
}
