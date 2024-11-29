import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

export const useCaptcha = () => {
  const [isHuman, isHumanSet] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  return { isHuman, isHumanSet, captchaToken, setCaptchaToken, recaptchaRef }
}
