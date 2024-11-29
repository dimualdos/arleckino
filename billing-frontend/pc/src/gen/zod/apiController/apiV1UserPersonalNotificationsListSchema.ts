import { z } from "zod"
import { personalNotificationSchema } from "../personalNotificationSchema"

export const apiV1UserPersonalNotificationsListQueryResponseSchema = z.array(z.lazy(() => personalNotificationSchema))
