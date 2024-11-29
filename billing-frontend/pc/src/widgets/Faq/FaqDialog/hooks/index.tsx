import { useApiV1HelpdeskCasesFaqCreate } from "@/src/gen/clients/hooks/apiController/useApiV1HelpdeskCasesFaqCreate"
import { SubmitHandler, useForm } from "react-hook-form"
import { ComponentProps, FormProps } from ".."

export const useCreateQuestion = ({ captcha_token }: ComponentProps) => {
  const useFormValidation = useForm<FormProps>({ mode: "onChange" })

  const useMutationSubmitQuestion = useApiV1HelpdeskCasesFaqCreate({
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
        subject: "Вопрос от посетителя",
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { useFormValidation, onSubmit, useMutationSubmitQuestion }
}
