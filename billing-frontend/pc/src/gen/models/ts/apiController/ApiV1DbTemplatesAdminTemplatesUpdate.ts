import type { TemplateUpdate } from "../TemplateUpdate"

export type ApiV1DbTemplatesAdminTemplatesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest = TemplateUpdate

export type ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse = TemplateUpdate
export namespace ApiV1DbTemplatesAdminTemplatesUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminTemplatesUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminTemplatesUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminTemplatesUpdatePathParams
}
