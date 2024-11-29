import { z } from "zod"

export const apiV1AuthConfirmSignUpCompleteReadPathParamsSchema = z.object({ key: z.string() })
export const apiV1AuthConfirmSignUpCompleteReadQueryResponseSchema = z.any()
