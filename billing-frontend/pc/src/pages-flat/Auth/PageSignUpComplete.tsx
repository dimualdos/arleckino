import React, { FC } from "react"
import { AuthSignUpComplete } from "@/src/widgets/Auth/ui/AuthSignUpComplete"

interface ComponentProps {
  token: string
}

export const PageSignUpComplete: FC<ComponentProps> = ({ token }) => {
  return <AuthSignUpComplete token={token} />
}
