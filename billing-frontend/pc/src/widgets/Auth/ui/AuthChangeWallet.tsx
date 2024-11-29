import React, { FC } from "react"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { InputMessage } from "@/src/shared/ui/input-message"
import Link from "next/link"
import { useChangeWallet } from "../hooks/useChangeWallet"
import { useTranslations } from "next-intl"

interface ComponentProps {
  token: string
}

export const AuthChangeWallet: FC<ComponentProps> = ({ token }) => {
  const { onSubmit, useFormValidation, useApiChangeWallet } = useChangeWallet({ token })
  const t = useTranslations("authorization")

  const defaultTitleView = (
    <h1 className="max-w-[485px] self-center text-64 text-shadow-sm font-semibold text-background lg:hidden">
      {t.rich("withdrawalWallets.title", {
        span: (chunks) => (
          <>
            <br />
            <span className="text-accent">{chunks}</span>
          </>
        ),
      })}
    </h1>
  )

  const defaultContentView = (
    <form onSubmit={useFormValidation.handleSubmit(onSubmit)}>
      <p className="mb-4 text-2xl font-semibold lg:block lg:text-center">{t("withdrawalWallets.textConfirm")}</p>

      <div className="mt-8 space-y-12">
        <Button
          disabled={!useFormValidation.formState.isValid || useApiChangeWallet.isLoading}
          type="submit"
          className="w-full text-background"
        >
           {t("withdrawalWallets.button")}
        </Button>
      </div>

      <InputMessage
        variant={"invalid"}
        className="mt-8 text-base"
      >
        {useFormValidation.formState.errors.root?.message}
      </InputMessage>
    </form>
  )

  const succesContentView = (
    <div className="lg:text-center">
      <p className="mb-4 text-2xl font-semibold">{t("withdrawalWallets.textSuccess")}</p>
      <Link
        href="/personal-page/profile"
        className={buttonVariants()}
      >
        {t("withdrawalWallets.redirectButtton")}
      </Link>
    </div>
  )

  return (
    <AuthTemplate title={defaultTitleView}>
      <div className="ml-auto flex w-full max-w-[375px] flex-col justify-center lg:mx-auto">{!useApiChangeWallet.isSuccess ? defaultContentView : succesContentView}</div>
    </AuthTemplate>
  )
}
