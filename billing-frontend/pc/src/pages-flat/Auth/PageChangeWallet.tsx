import React, { FC } from "react"
import { AuthChangeWallet } from "@/src/widgets/Auth/ui/AuthChangeWallet"
interface ComponentProps {
  token: string
}

export const PageChangeWallet: FC<ComponentProps> = ({ token }) => {
  return <AuthChangeWallet token={token} />
}
