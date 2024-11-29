import { z } from "zod"
import { notificationSchema } from "../notificationSchema"

export const apiV1UserNotificationsListQueryResponseSchema = z.array(z.lazy(() => notificationSchema))
