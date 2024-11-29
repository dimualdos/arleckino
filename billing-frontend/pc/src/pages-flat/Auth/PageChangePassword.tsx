import React, { FC } from "react"
import { AuthChangePassword } from "@/src/widgets/Auth/ui/AuthChangePassword"
interface ComponentProps {
  uid: string
  token: string
}

export const PageChangePassword: FC<ComponentProps> = ({ uid, token }) => {
  return (
    <AuthChangePassword
      uid={uid}
      token={token}
    />
  )
}
