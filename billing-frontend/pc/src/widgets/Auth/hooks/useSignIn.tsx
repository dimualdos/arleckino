import { useApiV1AuthSignInCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthSignInCreate"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsSignIn } from "../types"
import { LocalStorageService } from "@/src/shared/services/localStorageService"
import { useRouter } from "next/router"
import { isAxiosError } from "axios"
import ReCAPTCHA from "react-google-recaptcha"

interface ComponentProps {
  captcha_token: string | null
  recaptchaRef: React.RefObject<ReCAPTCHA>
}

export const useSignIn = ({ captcha_token, recaptchaRef }: ComponentProps) => {
  const router = useRouter()
  const useFormValidation = useForm<FormPropsSignIn>({ mode: "onChange" })

  const useSubmitSignIn = useApiV1AuthSignInCreate()

  const onSubmit: SubmitHandler<FormPropsSignIn> = async (data) => {
    if (!captcha_token) return
    try {
      const { data: res } = await useSubmitSignIn.mutateAsync({
        ...data,
        captcha_token,
      })
      LocalStorageService.setAccessToken(res.token)
      await router.push("/personal-page/profile")
    } catch (error) {
      if (isAxiosError(error)) {
        useFormValidation.setError("username", {
          message: error.response?.data.message
        })
      }
    } finally {
      recaptchaRef.current?.reset()
    }
  }

  return { useFormValidation, onSubmit, useSubmitSignIn }
}
