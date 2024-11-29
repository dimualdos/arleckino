import type { EmailTemplateDetail } from "../EmailTemplateDetail"

export type ApiV1DbTemplatesAdminEmailTemplatesReadPathParams = {
  /**
   * @description A unique integer value identifying this email template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse = EmailTemplateDetail
export type ApiV1DbTemplatesAdminEmailTemplatesReadQuery = {
  Response: ApiV1DbTemplatesAdminEmailTemplatesReadQueryResponse
  PathParams: ApiV1DbTemplatesAdminEmailTemplatesReadPathParams
}
