import { useRouter } from "next/router"
import React from "react"
import ReCAPTCHA, { ReCAPTCHAProps } from "react-google-recaptcha"

interface ComponentProps {
  recaptchaRef?: React.LegacyRef<ReCAPTCHA> | undefined
  recaptchaProps?: Omit<ReCAPTCHAProps, "sitekey">
  isHumanSet: React.Dispatch<React.SetStateAction<boolean>>
  setCaptchaToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const SharedCaptchaV1 = ({ recaptchaProps, isHumanSet, setCaptchaToken, recaptchaRef }: ComponentProps) => {
  const { locale } = useRouter()
  const onChangeHandler = (token: string | null) => {
    isHumanSet(!!token)
    setCaptchaToken(token)
  }
  return (
    <ReCAPTCHA
      hl={locale}
      ref={recaptchaRef}
      className="selection:bg-transparent"
      {...recaptchaProps}
      onChange={onChangeHandler}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
    />
  )
}
