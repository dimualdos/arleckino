import { User } from "@/src/gen/models/ts/User"
export const sendSpeedStats = async (userInfo: { data: User } | undefined, testData: { dlStatus: string; jitterStatus: string; pingStatus: string; server: string; isRecom: boolean }[]) => {
  const url = "https://worker.spr24.net/api/speedtest_results"
  const IpAddress =
    userInfo?.data.ip_address ||
    (await fetch("https://www.cloudflare.com/cdn-cgi/trace")
      .then(async (r) => {
        let result = ""
        ;(r.status === 200 ? await r.text() : "").split("\n").forEach((l) => {
          if (l.startsWith("ip=")) {
            result = l.replace("ip=", "")
          }
        })
        return result
      })
      .catch(() => null))

  const prepareServerData = (td: { dlStatus: string; jitterStatus: string; pingStatus: string; server: string }) => ({
    Download: parseFloat(td.dlStatus) || 0,
    Jitter: parseFloat(td.jitterStatus) || 0,
    Ping: parseFloat(td.pingStatus) || 0,
    ServerUrl: td.server || "noServer",
  })

  const Tests = testData.map(prepareServerData)
  const recomendedTest = testData.find((t: { isRecom: boolean }) => t.isRecom) || null

  const data = {
    Text: "LogToTelegram",
    IpAddress,
    Username: userInfo?.data.email || "not-detected",
    Tests,
    Recomendation: recomendedTest ? prepareServerData(recomendedTest) : null,
  }

  const postData: { method: string; mode: RequestMode | undefined; headers: HeadersInit; body: BodyInit } = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }

  const response = await fetch(url, postData)
    .then(async (r) => Promise.resolve(r.status === 200 ? await r.json() : { error: "status" }))
    .catch((e) => Promise.resolve({ error: e }))
  return response
}
