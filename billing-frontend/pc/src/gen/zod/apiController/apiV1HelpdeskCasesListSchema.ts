import { z } from "zod"
import { helpDeskCaseSchema } from "../helpDeskCaseSchema"

export const apiV1HelpdeskCasesListQueryResponseSchema = z.array(z.lazy(() => helpDeskCaseSchema))
