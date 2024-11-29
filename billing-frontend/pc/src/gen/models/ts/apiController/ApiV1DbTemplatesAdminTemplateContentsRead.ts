import type { TemplateContent } from "../TemplateContent"

export type ApiV1DbTemplatesAdminTemplateContentsReadPathParams = {
  /**
   * @description A unique integer value identifying this template content.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse = TemplateContent
export type ApiV1DbTemplatesAdminTemplateContentsReadQuery = {
  Response: ApiV1DbTemplatesAdminTemplateContentsReadQueryResponse
  PathParams: ApiV1DbTemplatesAdminTemplateContentsReadPathParams
}
