import type { TemplateContent } from "../TemplateContent"

export type ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams = {
  /**
   * @description A unique integer value identifying this template content.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest = Omit<NonNullable<TemplateContent>, "id" | "images">

export type ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse = TemplateContent
export namespace ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminTemplateContentsPartialUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminTemplateContentsPartialUpdatePathParams
}
