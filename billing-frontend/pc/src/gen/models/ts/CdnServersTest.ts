export type TCdnServersTest = {
  clientIp: string
  dlProgress: number
  dlStatus: number
  id: number
  isTested: boolean
  jitterStatus: string
  pingProgress: number
  pingStatus: string
  testId?: number | string | null
  testState: number
  ulProgress: number
  ulStatus: string
}
