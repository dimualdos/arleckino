import { apiV1AuthConfirmSignUpCompleteRead } from "@/src/gen/clients/axios/apiService/apiV1AuthConfirmSignUpCompleteRead"
import { useEffect, useState } from "react"

interface ComponentProps {
  token: string
}

export const useSignUpComplete = ({ token }: ComponentProps) => {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
    apiV1AuthConfirmSignUpCompleteRead({ key: token })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  return { isLoading }
}
