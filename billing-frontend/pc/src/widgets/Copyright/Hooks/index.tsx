import { useApiV1HelpdeskCasesCopyrightHolderCreate } from "@/src/gen/clients/hooks/apiController/useApiV1HelpdeskCasesCopyrightHolderCreate"
import { useApiV1HelpdeskCasesFaqCreate } from "@/src/gen/clients/hooks/apiController/useApiV1HelpdeskCasesFaqCreate"
import { ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest } from "@/src/gen/models/ts/apiController/ApiV1HelpdeskCasesCopyrightHolderCreate"
import { SubmitHandler, useForm } from "react-hook-form"

export interface FormProps extends ApiV1HelpdeskCasesCopyrightHolderCreateMutationRequest {}
export interface ComponentProps {
  captcha_token: string | null
}

export const useCreateQuestion = ({ captcha_token }: ComponentProps) => {
  const useFormValidation = useForm<FormProps>({ mode: "onBlur" })

  const useMutationSubmitQuestion = useApiV1HelpdeskCasesCopyrightHolderCreate({
    mutation: {
      onMutate: async (data) => {},
      onError: (error, variables, context) => {},
      onSuccess: (data, variables, context) => {},
    },
  })

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    if (!captcha_token) return
    try {
      await useMutationSubmitQuestion.mutateAsync({
        ...data,
        captcha_token,
        subject: "Обращение правообладателя",
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { useFormValidation, onSubmit, useMutationSubmitQuestion }
}
