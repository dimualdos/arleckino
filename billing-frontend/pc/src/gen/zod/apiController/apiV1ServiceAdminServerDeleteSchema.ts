import { z } from "zod"

export const apiV1ServiceAdminServerDelete204Schema = z.any()
export const apiV1ServiceAdminServerDeleteMutationResponseSchema = z.any()
export const apiV1ServiceAdminServerDeletePathParamsSchema = z.object({ id: z.string() })
