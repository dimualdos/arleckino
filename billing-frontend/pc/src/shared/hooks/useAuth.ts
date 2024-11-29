import { useRouter } from "next/router"
import { LocalStorageService } from "../services/localStorageService"
import { useApiV1AuthSignOutCreate } from "@/src/gen/clients/hooks/apiController/useApiV1AuthSignOutCreate"
import { useQueryClient } from "@tanstack/react-query"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"

export const useAuth = () => {
  const client = useQueryClient()
  const router = useRouter()

  const useApiV1AuthSignOutCreateQuery = useApiV1AuthSignOutCreate()

  const signOut = async () => {
    router.push("/sign-in")
    await useApiV1AuthSignOutCreateQuery.mutateAsync()
    client.clear()
    LocalStorageService.removeAccessToken()
  }

  const redirectIfNotSignIn = async () => {
    try {
      // eslint-disable-next-line
      const data = useApiV1UserInfoRead()
    } catch (error) {
      client.clear()
      LocalStorageService.removeAccessToken()
      router.push("/sign-in")
    }
  }
  return { signOut, useApiV1AuthSignOutCreateQuery, redirectIfNotSignIn }
}
