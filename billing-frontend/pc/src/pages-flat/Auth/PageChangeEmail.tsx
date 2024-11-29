import React, { FC } from "react"
import { AuthChangeEmail } from "@/src/widgets/Auth/ui/AuthChangeEmail"
interface ComponentProps {
  uid: string
  token: string
}

export const PageChangeEmail: FC<ComponentProps> = ({ token, uid }) => {
  return (
    <AuthChangeEmail
      token={token}
      uid={uid}
    />
  )
}
