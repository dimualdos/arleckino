import React, { FC } from "react"
import { AuthConfirmChangeEmail } from "@/src/widgets/Auth/ui/AuthConfirmChangeEmail"
interface ComponentProps {
  uid: string
}

export const PageConfirmChangeEmail: FC<ComponentProps> = ({ uid }) => {
  return <AuthConfirmChangeEmail uid={uid} />
}
