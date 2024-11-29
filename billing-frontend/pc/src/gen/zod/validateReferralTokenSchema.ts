import { z } from "zod"

export const validateReferralTokenSchema = z.object({ referral_token: z.string().min(1), referer_url: z.string().min(1).nullish() })
