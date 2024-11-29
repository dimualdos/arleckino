import React, { useRef } from "react"

import ReCAPTCHA from "react-google-recaptcha"

type ReCaptchaProps = {
  appToken?: string
  onCheck?: (v: string | null) => void
}

export const ReCaptchaV2 = ({ appToken = "", onCheck }: ReCaptchaProps) => {
  const captchaRef = useRef(null)

  const handleChange = async (v: string | null) => {
    if (onCheck) {
      onCheck(v)
    }
  }

  return (
    <ReCAPTCHA
      sitekey={appToken}
      ref={captchaRef}
      onChange={handleChange}
    />
  )
}
