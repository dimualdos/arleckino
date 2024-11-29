import type { TemplateContent } from "../TemplateContent"

export type ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams = {
  /**
   * @description A unique integer value identifying this template content.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest = Omit<NonNullable<TemplateContent>, "id" | "images">

export type ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse = TemplateContent
export namespace ApiV1DbTemplatesAdminTemplateContentsUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminTemplateContentsUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminTemplateContentsUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminTemplateContentsUpdatePathParams
}
