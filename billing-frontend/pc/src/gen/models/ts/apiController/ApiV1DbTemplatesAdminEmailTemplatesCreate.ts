import type { EmailTemplateCreate } from "../EmailTemplateCreate"

export type ApiV1DbTemplatesAdminEmailTemplatesCreate201 = EmailTemplateCreate

export type ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest = Omit<NonNullable<EmailTemplateCreate>, "id">

export type ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse = EmailTemplateCreate
export namespace ApiV1DbTemplatesAdminEmailTemplatesCreateMutation {
  export type Response = ApiV1DbTemplatesAdminEmailTemplatesCreateMutationResponse
  export type Request = ApiV1DbTemplatesAdminEmailTemplatesCreateMutationRequest
  export type Errors = ApiV1DbTemplatesAdminEmailTemplatesCreate201
}
