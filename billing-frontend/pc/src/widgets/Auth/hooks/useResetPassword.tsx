import { useApiV1AuthPasswordResetCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthPasswordResetCreate"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsResetPassword } from "../types"
import { isAxiosError } from "axios"
import ReCAPTCHA from "react-google-recaptcha"
import { apiV1AuthConfirmResendCreate } from "@/src/gen/clients/axios/apiService"
import { useState } from "react"
import { useTranslations } from "next-intl"

interface ComponentProps {
  captcha_token: string | null
  recaptchaRef: React.RefObject<ReCAPTCHA>
}

export const useResetPassword = ({ captcha_token, recaptchaRef }: ComponentProps) => {
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const useFormValidation = useForm<FormPropsResetPassword>({ mode: "onChange" })
  const t = useTranslations("authorization")
  const useSubmitResetPassword = useApiV1AuthPasswordResetCreate({
    mutation: {
      onMutate: async (data) => {},
      onError: (error, variables, context) => {},
      onSuccess: (data, variables, context) => {},
    },
  })

  const onSubmit: SubmitHandler<FormPropsResetPassword> = async (data) => {
    if (!captcha_token) return
    try {
      const { data: res } = await useSubmitResetPassword.mutateAsync({
        ...data,
        captcha_token,
      })
    } catch (error) {
      isAxiosError(error) && useFormValidation.setError("email", { message: error.response?.data.message })
    } finally {
      recaptchaRef.current?.reset()
    }
  }

  const resendEmail = () => {
    if (!useSubmitResetPassword.variables?.email) return
    apiV1AuthConfirmResendCreate({ email: useSubmitResetPassword.variables?.email })
      .then(() => {
        setMessage(t("signUp.success"))
      })
      .catch((err) => {
        const error = isAxiosError(err)
        if (error) {
          setMessage(err.response?.data.message)
          setError(true)
        }
      })
  }

  return { useFormValidation, onSubmit, useSubmitResetPassword, resendEmail, error, message }
}
