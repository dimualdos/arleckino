import type { TemplateDetail } from "../TemplateDetail"

export type ApiV1DbTemplatesAdminTemplatesReadPathParams = {
  /**
   * @description A unique integer value identifying this template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminTemplatesReadQueryResponse = TemplateDetail
export type ApiV1DbTemplatesAdminTemplatesReadQuery = {
  Response: ApiV1DbTemplatesAdminTemplatesReadQueryResponse
  PathParams: ApiV1DbTemplatesAdminTemplatesReadPathParams
}
