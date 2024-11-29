import { buttonVariants } from "@/src/shared/ui/button"
import { AuthTemplate } from "./AuthTemplate"
import Link from "next/link"
import { useSignUpComplete } from "../hooks/useSignUpComplete"
import { useTranslations } from "next-intl"

interface ComponentProps {
  token: string
}

export const AuthSignUpComplete = ({ token }: ComponentProps) => {
  const { isLoading } = useSignUpComplete({ token })
  const t = useTranslations("authorization")
  return (
    <AuthTemplate
      title={
        <h1 className="w-[485px] self-center text-64 font-semibold text-background lg:hidden">
          {t.rich("signUp.complateTitleBlack", {
            span: (chunks) => (
              <>
                <br />
                <span className="text-accent">{chunks}</span>
              </>
            ),
          })}
        </h1>
      }
    >
      <div className="ml-auto flex max-w-[375px] flex-col justify-center lg:mx-auto">
        <div>
          <p className="mb-4 text-2xl font-semibold">{t("signUp.complateContentTitle")}</p>
          <p className="mb-8">{t("signUp.complateContentText")}</p>
          <Link
            href={"/sign-in"}
            className={buttonVariants({ className: "uppercase" })}
          >
            {t("signUp.complateContentButton")}
          </Link>
        </div>
      </div>
    </AuthTemplate>
  )
}
