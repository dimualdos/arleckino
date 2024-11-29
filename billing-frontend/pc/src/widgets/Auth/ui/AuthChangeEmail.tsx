import React, { FC } from "react"
import { Button } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { InputMessage } from "@/src/shared/ui/input-message"
import { useChangeEmail } from "../hooks/useChangeEmail"
import { Input } from "@/src/shared/ui/input"
import { validateEmailRegex } from "@/src/shared/utils/validateEmail"
import { useTranslations } from "next-intl"

interface ComponentProps {
  uid: string
  token: string
}

export const AuthChangeEmail: FC<ComponentProps> = ({ uid, token }) => {
  const { onSubmit, useFormValidation, useApiChangeEmail } = useChangeEmail({ uid, token })
  const t = useTranslations("authorization")

  const defaultTitleView = (
    <h1 className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden">
      {t.rich("changeEmail.textBlack1", {
        span: (chunks) => <span className="text-accent">{chunks}</span>,
      })}
    </h1>
  )

  const defaultContentView = (
    <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
      <div className="relative mt-8 space-y-2">
        <label className="text-grey-hard">{t("changeEmail.newEmail")}</label>
        <div className="relative">
          <Input
            placeholder="your-new-email@server.com"
            {...useFormValidation.register("email", {
              required: t("changeEmail.newEmail"),
              pattern: {
                value: validateEmailRegex,
                message: t("wrongEmail"),
              },
              validate: (value) => {
                return value.length < 2 ? t("wrongEmail") : true
              },
            })}
          />
        </div>
        <InputMessage
          variant={useApiChangeEmail.isError || !useFormValidation.formState.isValid ? "invalid" : useApiChangeEmail.isSuccess ? "valid" : "text-grey-hard"}
          className="absolute !mt-1 text-sm"
        >
          {useFormValidation.formState.errors?.root?.message}
        </InputMessage>
      </div>
      <div className="mt-10 space-y-12">
        <Button
          disabled={!useFormValidation.formState.isValid || useApiChangeEmail.isLoading}
          type="submit"
          className="w-full text-background"
        >
          {t("changeEmail.confirmButton")}
        </Button>
      </div>
    </form>
  )

  const succesContentView = (
    <div className="lg:text-center">
      <p className="mb-4 text-2xl font-semibold">{t("changeEmail.confirmMessage", { email: useApiChangeEmail.data?.data.email })}</p>
    </div>
  )

  return (
    <AuthTemplate title={defaultTitleView}>
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">{!useApiChangeEmail.isSuccess ? defaultContentView : succesContentView}</div>
    </AuthTemplate>
  )
}
