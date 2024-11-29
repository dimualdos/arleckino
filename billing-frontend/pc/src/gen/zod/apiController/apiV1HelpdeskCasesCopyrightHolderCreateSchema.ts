import { z } from "zod"
import { helpDeskCaseCopyrightHolderCreateSchema } from "../helpDeskCaseCopyrightHolderCreateSchema"

export const apiV1HelpdeskCasesCopyrightHolderCreate201Schema = z.lazy(() => helpDeskCaseCopyrightHolderCreateSchema)
export const apiV1HelpdeskCasesCopyrightHolderCreateMutationRequestSchema = z.lazy(() => helpDeskCaseCopyrightHolderCreateSchema)
export const apiV1HelpdeskCasesCopyrightHolderCreateMutationResponseSchema = z.lazy(() => helpDeskCaseCopyrightHolderCreateSchema)
