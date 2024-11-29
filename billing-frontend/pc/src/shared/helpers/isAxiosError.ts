import { isAxiosError as OriginalAxiosError } from "axios"

export const isAxiosError = (error: unknown) => {
  const checkIfAxiosError = OriginalAxiosError(error)
  return checkIfAxiosError
}
