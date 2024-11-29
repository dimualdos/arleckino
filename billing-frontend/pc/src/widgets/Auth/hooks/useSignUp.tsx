import { useApiV1AuthSignUpCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthSignUpCreate"
import { useApiV1AuthValidateEmailCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthValidateEmailCreate"
import { useApiV1AuthValidateReferralTokenCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthValidateReferralTokenCreate"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsSignUp } from "../types"
import { useRouter } from "next/router"
import { generatePassword } from "@/src/shared/helpers/generatePassword"
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react"
import { useToggle } from "@/src/shared/hooks/useToggle"
import { useDebounce } from "react-use"
import { isAxiosError } from "axios"
import { UserRegistrationCountry } from "@/src/gen/models/ts/UserRegistration"
import ReCAPTCHA from "react-google-recaptcha"
import { useTranslations } from "next-intl"

interface ComponentProps {
  captcha_token: string | null
  recaptchaRef: React.RefObject<ReCAPTCHA>
  countryCode: UserRegistrationCountry
}

export const useSignUp = ({captcha_token, countryCode, recaptchaRef}: ComponentProps) => {
  const router = useRouter()
  const { active: showPassword1, setActive: showPassword1Set, toggle: togglePassword1 } = useToggle(false)
  const { active: showPassword2, setActive: showPassword2Set, toggle: togglePassword2 } = useToggle(false)
  const t = useTranslations("authorization")
  const { data: fingerPrintData, isLoading, getData, error } = useVisitorData({ extendedResult: true }, { immediate: true })

  const onGeneratePassword = () => {
    const pass = generatePassword()
    useFormValidation.setValue("password1", pass)
    useFormValidation.setValue("password2", pass)
    showPassword1Set(true)
    showPassword2Set(true)
  }

  const useFormValidation = useForm<FormPropsSignUp>({ mode: "onChange" })
  const watchReferralToken = useFormValidation.watch("referral_token")
  const watchEmail = useFormValidation.watch("email")

  const mutationOnSignUp = useApiV1AuthSignUpCreate({
    mutation: {
      onMutate: async (data) => {
        await router.push(
          {
            pathname: "/confirm-email",
            query: {
              email: data.email,
            },
          },
          undefined,
          { shallow: true },
        )
      },
    },
  })

  const mutationValidateReferalToken = useApiV1AuthValidateReferralTokenCreate({
    mutation: {
      onError: (error, variables, context) => {
        useFormValidation.setError("referral_token", { message: t("signUp.user_referral_token_invalid") })
      },
      onSuccess: (data, variables, context) => {
        useFormValidation.setValue("referral_token", data.data.referral_token)
        useFormValidation.clearErrors("referral_token")
      },
    },
  })

  const mutationValidateEmail = useApiV1AuthValidateEmailCreate({
    mutation: {
      onMutate: async (data) => {
        useFormValidation.setValue("referral_token", null)
      },
      onError: (error, variables, context) => {
        useFormValidation.setValue("referral_token", null)
        if (isAxiosError(error)) {
          useFormValidation.setError("email", { message: error.response?.data.message })
        }
      },
      onSuccess: (data, variables, context) => {
        useFormValidation.clearErrors("email")
      },
    },
  })

  const onSubmit: SubmitHandler<FormPropsSignUp> = async (data) => {
    const refToken = !data.referral_token?.length ? null : data.referral_token
    try {
      if (!captcha_token) return
      await mutationOnSignUp.mutateAsync({
        email: data.email,
        frontend_language: "ru",
        password1: data.password1,
        password2: data.password2,
        country: countryCode,
        referral_token: refToken,
        referral_link_click_through_id: null,
        captcha_token: captcha_token,
        fingerprint_token: fingerPrintData?.visitorId ? fingerPrintData?.visitorId : "Client-loading-error",
      })
    } catch (error) {
      console.log(error)
    } finally {
      console.log('start');
      recaptchaRef.current?.reset()
    }
  }

  const [, cancelReferal] = useDebounce(
    async () => {
      if (!watchReferralToken || !watchReferralToken.length) return
      try {
        await mutationValidateReferalToken.mutateAsync({ referral_token: watchReferralToken })
      } catch (error) {}
    },
    500,
    [watchReferralToken],
  )

  const [, cancelEmail] = useDebounce(
    async () => {
      if (!watchEmail || !watchEmail.length) return
      try {
        await mutationValidateEmail.mutateAsync({ email: watchEmail })
      } catch (error) {}
    },
    500,
    [watchEmail],
  )

  return { useFormValidation, mutationOnSignUp, mutationValidateReferalToken, onGeneratePassword, mutationValidateEmail, onSubmit }
}
