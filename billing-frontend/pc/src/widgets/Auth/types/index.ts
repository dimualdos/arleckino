import { UserProfileChangeEmailRequestNew } from "@/src/gen/models/ts/UserProfileChangeEmailRequestNew"
import { ApiV1AuthPasswordChangeCreateMutationRequest } from "@/src/gen/models/ts/apiController/ApiV1AuthPasswordChangeCreate"
import { ApiV1AuthPasswordResetCreateMutationRequest } from "@/src/gen/models/ts/apiController/ApiV1AuthPasswordResetCreate"
import { ApiV1AuthSignInCreateMutationRequest } from "@/src/gen/models/ts/apiController/ApiV1AuthSignInCreate"
import { ApiV1AuthSignUpCreateMutationRequest } from "@/src/gen/models/ts/apiController/ApiV1AuthSignUpCreate"

export interface ParsedCountryProps {
  code: string
  name: string
}

export interface FormPropsSignIn extends ApiV1AuthSignInCreateMutationRequest {}
export interface FormPropsSignUp extends ApiV1AuthSignUpCreateMutationRequest {}
export interface FormPropsResetPassword extends ApiV1AuthPasswordResetCreateMutationRequest {}
export interface FormPropsChangePassword extends ApiV1AuthPasswordChangeCreateMutationRequest {}
export interface FormPropsChangeWallet {}
export interface FormPropsChangeEmail extends UserProfileChangeEmailRequestNew {}
export interface FormPropsConfirmChangeEmail {}
