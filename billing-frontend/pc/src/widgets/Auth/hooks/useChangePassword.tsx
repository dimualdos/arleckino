import { useApiV1AuthPasswordChangeCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthPasswordChangeCreate"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsChangePassword } from "../types"
import { isAxiosError } from "axios"
import { useEffect } from "react"
import { apiV1AuthValidatePasswordChangeTokenCreate } from "@/src/gen/clients/axios/apiService"
import { useTranslations } from "next-intl"

interface ComponentProps {
  uid: string
  token: string
}

export const useChangePassword = ({ uid, token }: ComponentProps) => {
  const useFormValidation = useForm<FormPropsChangePassword>({ mode: "onChange" })
  const useSubmitChangePassword = useApiV1AuthPasswordChangeCreate(token, uid, {
    mutation: {
      onMutate: async (data) => {},
      onError: (error, variables, context) => {},
      onSuccess: (data, variables, context) => {},
    },
  })
  const t = useTranslations("authorization")
  const onSubmit: SubmitHandler<FormPropsChangePassword> = async (data) => {
    try {
      const { data: res } = await useSubmitChangePassword.mutateAsync({
        new_password1: data.new_password1,
        new_password2: data.new_password2,
        token,
        uid,
      })
    } catch (error) {
      isAxiosError(error) && useFormValidation.setError("root", { message: error.response?.data.message })
    }
  }

  useEffect(() => {
    apiV1AuthValidatePasswordChangeTokenCreate({ uid, token })
      .then((d) => console.log(d.data))
      .catch((err) => {
        useFormValidation.setError("root", {
          message: t("tokenValidation.error"),
        })
      })
  }, [])

  return { useFormValidation, onSubmit, useSubmitChangePassword }
}
