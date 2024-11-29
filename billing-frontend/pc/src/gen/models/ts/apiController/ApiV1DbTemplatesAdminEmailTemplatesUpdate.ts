import type { EmailTemplateUpdate } from "../EmailTemplateUpdate"

export type ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams = {
  /**
   * @description A unique integer value identifying this email template.
   * @type integer
   */
  id: number
}

export type ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest = Omit<NonNullable<EmailTemplateUpdate>, "id">

export type ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse = EmailTemplateUpdate
export namespace ApiV1DbTemplatesAdminEmailTemplatesUpdateMutation {
  export type Response = ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationResponse
  export type Request = ApiV1DbTemplatesAdminEmailTemplatesUpdateMutationRequest
  export type PathParams = ApiV1DbTemplatesAdminEmailTemplatesUpdatePathParams
}
