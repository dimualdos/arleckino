import { useRouter } from "next/router"

export const useReferralToken = () => {
  const router = useRouter()
  const { referral_token } = router.query

  return referral_token as string | null
}
