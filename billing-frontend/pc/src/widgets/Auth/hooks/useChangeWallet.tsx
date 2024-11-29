import { SubmitHandler, useForm } from "react-hook-form"
import { FormPropsChangeWallet } from "../types"
import { isAxiosError } from "axios"
import { useApiV1UserProfileWithdrawalWalletsConfirmCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserProfileWithdrawalWalletsConfirmCreate"

interface ComponentProps {
  token: string
}

export const useChangeWallet = ({ token }: ComponentProps) => {
  const useFormValidation = useForm<FormPropsChangeWallet>({ mode: "onChange" })

  const useApiChangeWallet = useApiV1UserProfileWithdrawalWalletsConfirmCreate({ client: { data: { token } } })

  const onSubmit: SubmitHandler<FormPropsChangeWallet> = async (data) => {
    try {
      const { data: res } = await useApiChangeWallet.mutateAsync({ token })
    } catch (error) {
      isAxiosError(error) && useFormValidation.setError("root", { message: error.response?.data.message })
    }
  }
  return { useFormValidation, onSubmit, useApiChangeWallet }
}
