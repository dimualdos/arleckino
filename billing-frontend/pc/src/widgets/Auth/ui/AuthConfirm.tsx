import React, { FC, useState } from "react"
import { Button } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import { useRouter } from "next/router"
import { apiV1AuthConfirmResendCreate } from "@/src/gen/clients/axios/apiService"
import { useTranslations } from "next-intl"

interface ComponentProps {}

export const AuthConfirm: FC<ComponentProps> = () => {
  const router = useRouter()
  const { email } = router.query
  const formattedEmail = Array.isArray(email) ? email[0] : (email as string)
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")
  const t = useTranslations("authorization")

  const resendEmail = () => {
    apiV1AuthConfirmResendCreate({ email: formattedEmail })
      .then(() => {
        setError(false)
        setMessage(t("signUp.success"))
      })
      .catch((err) => {
        console.log(error)
        setMessage(err.response.data.message)
        setError(true)
      })
  }

  return (
    <AuthTemplate
      title={
        <h1
          className="w-[485px] self-center text-64 font-semibold text-background lg:hidden"
          dangerouslySetInnerHTML={{ __html: t.raw("signUp.confirmTitleBlack") }}
        />
      }
    >
      <div className="ml-auto flex max-w-[375px] flex-col justify-center lg:mx-auto">
        <div>
          <p className="mb-4 text-2xl font-semibold">{t("signUp.confirmContentTitle")}</p>
          <p className="mb-8">{t("signUp.confirmContentText")}</p>
          <Button
            size={"none"}
            type="button"
            variant="link"
            onClick={resendEmail}
          >
            {t("signUp.resendLink")}
          </Button>
          <p className={`${error ? "text-red-500" : "text-green-500"} ${message ? "" : "opacity-0"}`}>{message || "Placeholder"}</p>
        </div>
      </div>
    </AuthTemplate>
  )
}
