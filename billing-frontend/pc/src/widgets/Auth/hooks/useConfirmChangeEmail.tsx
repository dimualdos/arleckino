import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsConfirmChangeEmail } from "../types"
import { isAxiosError } from "axios"
import { useApiV1UserProfileChangeEmailCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileChangeEmailCreate"
import { useEffect } from "react"
interface ComponentProps {
  uid: string
}

export const useConfirmChangeEmail = ({ uid }: ComponentProps) => {
  const useFormValidation = useForm<FormPropsConfirmChangeEmail>({ mode: "onChange" })
  const useApiConfirmChangeEmail = useApiV1UserProfileChangeEmailCreate({ client: { data: { token: uid } } })

  const onSubmit: SubmitHandler<FormPropsConfirmChangeEmail> = async (data) => {
    try {
      const { data: res } = await useApiConfirmChangeEmail.mutateAsync({ token: uid })
    } catch (error) {
      isAxiosError(error) && useFormValidation.setError("root", { message: error.response?.data.message })
    }
  }

  useEffect(() => {
    if (uid) {
      useApiConfirmChangeEmail.mutateAsync({token: uid})
    }
  }, [uid])

  return { useFormValidation, onSubmit, useApiConfirmChangeEmail }
}
