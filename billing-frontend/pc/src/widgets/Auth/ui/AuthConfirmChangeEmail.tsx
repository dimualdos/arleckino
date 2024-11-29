import React, { FC } from "react"
import { buttonVariants } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { InputMessage } from "@/src/shared/ui/input-message"
import { useConfirmChangeEmail } from "../hooks/useConfirmChangeEmail"
import Link from "next/link"
import { useTranslations } from "next-intl"

interface ComponentProps {
  uid: string
}

export const AuthConfirmChangeEmail: FC<ComponentProps> = ({ uid }) => {
  const { onSubmit, useFormValidation, useApiConfirmChangeEmail } = useConfirmChangeEmail({ uid })
  const t = useTranslations("authorization")

  const defaultTitleView = (
    <h1 className="max-w-[485px] self-center text-64 font-semibold text-background lg:hidden">
      {t.rich("confirmChangeEmail.confirmScreenCaption", {
        span: (chunks) => <span className="text-accent">{chunks}</span>,
      })}
    </h1>
  )

  const defaultContentView = (
    <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
      <InputMessage
        className="text-base md:text-center"
        variant={useApiConfirmChangeEmail.isError || !useFormValidation.formState.isValid ? "invalid" : useApiConfirmChangeEmail.isSuccess ? "valid" : "text-grey-hard"}
      >
        {useApiConfirmChangeEmail.isError ? t("confirmChangeEmail.errors.undefined") : t("confirmChangeEmail.success.confirmedNewEmail")}
      </InputMessage>
      <div className="mt-4">
        <Link
          href="/sign-in"
          type="submit"
          className={buttonVariants({ className: "w-full" })}
        >
          {t("confirmChangeEmail.loginButton")}
        </Link>
      </div>
    </form>
  )

  const succesContentView = (
    <div className="lg:text-center">
      <p className="mb-4 text-2xl font-semibold">{t("confirmChangeEmail.success.confirmEmailSended", { email: useApiConfirmChangeEmail.data?.data.token })}</p>
    </div>
  )

  return (
    <AuthTemplate title={defaultTitleView}>
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">{!useApiConfirmChangeEmail.isSuccess ? defaultContentView : succesContentView}</div>
    </AuthTemplate>
  )
}
