import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsChangeEmail } from "../types"
import { isAxiosError } from "axios"
import { useApiV1UserProfileChangeEmailRequestNewCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileChangeEmailRequestNewCreate"

interface ComponentProps {
  uid: string
  token: string
}

export const useChangeEmail = ({ token, uid }: ComponentProps) => {
  const useFormValidation = useForm<FormPropsChangeEmail>({ mode: "onChange" })
  const useApiChangeEmail = useApiV1UserProfileChangeEmailRequestNewCreate()

  const onSubmit: SubmitHandler<FormPropsChangeEmail> = async (data) => {
    try {
      const { data: res } = await useApiChangeEmail.mutateAsync({ email: data.email, token, uid })
    } catch (error) {
      isAxiosError(error) && useFormValidation.setError("root", { message: error.response?.data.message })
    }
  }
  return { useFormValidation, onSubmit, useApiChangeEmail }
}
