import { z } from "zod"
import { helpDeskCaseCreateSchema } from "../helpDeskCaseCreateSchema"

export const apiV1HelpdeskCasesCreate201Schema = z.lazy(() => helpDeskCaseCreateSchema)
export const apiV1HelpdeskCasesCreateMutationRequestSchema = z.lazy(() => helpDeskCaseCreateSchema)
export const apiV1HelpdeskCasesCreateMutationResponseSchema = z.lazy(() => helpDeskCaseCreateSchema)
