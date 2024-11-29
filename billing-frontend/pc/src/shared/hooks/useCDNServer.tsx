import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { sendSpeedStats } from '../../widgets/Personal/UpdateServer/ui/SpeedTest/request-service'
import SpeedtestService from "../../widgets/Personal/UpdateServer/ui/SpeedTest/speed-test"
import { useApiV1ServiceServerListList } from "@/src/gen/clients/hooks/apiController/useApiV1ServiceServerListList"
import { useApiV1UserInfoRead } from "@/src/gen/clients/hooks/apiController/useApiV1UserInfoRead"
import { UserServer } from "@/src/gen/models/ts/UserServer.js"
import { Device } from "@/src/gen/models/ts/Device"
import { useApiV1UserDeviceListListInfinite } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceListList"
import { useApiV1UserDeviceServerCreate } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceServerCreate"
import { useApiV1UserDeviceDnsDelete } from "@/src/gen/clients/hooks/apiController/useApiV1UserDeviceDnsDelete"
import { ICDNServer } from "@/src/gen/models/ts/CdnServer"
import { TCdnServersTest } from "@/src/gen/models/ts/CdnServersTest"

export const SHOW_VIEW_TYPE = false

const TEST_SERVER_TIMEOUT = 1000 * 5


export const useCDNServer = (isIdDeviceStore: number) => {

  const [deviceIDToServer, setDeviceIDToServer] = useState('')
  const { data: dataServerListList, isSuccess: serversLoadSuccess, queryKey } = useApiV1ServiceServerListList()
  const { data: dataDevicesUserInfinite } = useApiV1UserDeviceListListInfinite({ limit: 100000000 })
  const { isSuccess: isSuccessCreateServer, isError: isErrorCreateServer, mutate: mutateCreateServer } = useApiV1UserDeviceServerCreate(deviceIDToServer)
  const { isSuccess: isSuccessDeleteServer, isError: isErrorDeleteServer, mutate: mutateDeleteServer } = useApiV1UserDeviceDnsDelete(deviceIDToServer)
  const { data: userInfo } = useApiV1UserInfoRead()


  const [servers, setServers] = useState<UserServer[]>([])
  const [displayedServers, setDisplayedServers] = useState<UserServer[]>([])
  const [autoSelectServerId, setAutoSelectServerId] = useState(0)
  const [selectedDeviceTypeValue, setSelectedDeviceTypeValue] = useState("")
  const [selectedServer, setSelectedServer] = useState<UserServer | null>(null)
  const [stalkerServers, setStalkerServers] = useState<UserServer[]>([])
  const [serversFilters, setServersFilters] = useState({ page: 0, limit: 0 })

  const [isPortalSettingsInvalid, setIsPortalSettingsInvalid] = useState(false)
  const [isAutoServer, setIsAutoServer] = useState(false)
  const [needSetServer, setNeedSetServer] = useState<UserServer | null>(null)
  const [isDeviceTypeBusy, setIsDeviceTypeBusy] = useState(false)
  const [isServersEqual, setIsServersEqual] = useState(false)
  const [isFinalModal, setIsFinalModal] = useState(false)

  //*  фильтрация выбранных девайов со статусом selected
  let selectedDevices: Device = dataDevicesUserInfinite?.pages[0].data.results.find((item: Device) => item.id === isIdDeviceStore)

  const [successTestedServer, setSuccessTestServer] = useState(false)
  //* Объект текущего спидтеста
  const [speedTestState, setSpeedTestState] = useState<any | null>(null)
  //* список серверов на тестирование
  const [testServersQueue, setTestServersQueue] = useState<ICDNServer[]>([])
  //* протестированные сервера
  const [testedServers, setTestedServers] = useState<TCdnServersTest[] | [{}]>([{}])
  //* тестируемый сервер
  const [testingServer, setTestingServer] = useState<ICDNServer | null>(null)
  //* нужно ли запросить стат. данные о скорости серверов
  const [isNeededSpeedStats, setIsNeededSpeedStats] = useState(false)
  //* стат данные о скорости серверов
  const [speedStatsData, setSpeedStatsData] = useState(null)
  //* тестируются ли все сервера
  const [isAllServerTest, setIsAllServerTest] = useState(false)
  //* произошла ли ошибка в текущем тестировании
  const [isCurrentTestError, setIsCurrentTestError] = useState(false)
  //* общая ошибка тестирования
  const [isGeneralTestError, setIsGeneralTestError] = useState(false)
  //* текущий объект ответа спидтеста (какого-то лешего первый цикл обнуляет объект testedServers)
  const [currentTestData, setCurrentTestData] = useState<TCdnServersTest | null>(null)
  //* прогресс теста всех серверов
  const [testProgress, setTestProgress] = useState<number>(0)
  //* прогресс теста текущего сервера
  const [currentServerTestProgress, setCurrentServerTestProgress] = useState(0)

  const clearTestingErrors = () => {
    setIsGeneralTestError(false)
    setIsCurrentTestError(false)
  }

  useEffect(() => {
    let initialFilters = {
      page: 1,
      limit: Number(localStorage.getItem("limit")) || 10,
    }
    setServersFilters(initialFilters)
  }, []);

  //* speedTest section
  const testTimer = useRef<any>(null)

  const clearTimer = () => {
    if (testTimer.current) {
      clearTimeout(testTimer.current)
    }
  }

  //* определяем рекомендованный сервер из обработанных
  const detectRecommendedServer = () => {
    const state: any = { ...testedServers }
    let recServer: any = { pingStatus: 0, id: 0 } as { pingStatus: any, id: number }

    //* если есть сервера со следующими параметрами
    const arr1 = Object.values(state || {}).filter((x: any) => x.dlStatus >= 40 && x.pingStatus <= 150 && x.jitterStatus < 20)

    if (arr1 && arr1.length > 0) {

      //* определяем server с минимальным пингом
      recServer.pingStatus = arr1.reduce((p: any, c: any) => (p.pingStatus < c.pingStatus ? p : c))
      //* задаем границы отбора по пингу
      const minPing = +recServer!.pingStatus - 10
      const maxPing = +recServer!.pingStatus + 10

      //* находим в этих границах сервер с макс. скоростью DL (это и будет рекомендованный)
      recServer = arr1.filter((x: any) => +x.pingStatus >= minPing && +x.pingStatus <= maxPing).reduce((p: any, c: any) => (+p.dlStatus > +c.dlStatus ? p : c), 0)
    } else {
      //* если есть сервера со следующими параметрами
      //*  (DL меньше, чем в предыдущей выборке)
      const arr2 = Object.values(state || {}).filter((x: any) => x.dlStatus > 15 && x.pingStatus < 150 && x.jitterStatus < 20)

      if (arr2.length > 0) {
        const f = (x: { dlStatus: any, pingStatus: any }) => {
          let p1 = +x?.dlStatus / 40
          p1 = p1 > 1 ? 1 : p1
          const p2 = 1 - +x?.pingStatus / 150
          return p1 + p2
        }

        //* рекомендован будет сервер с макс. значением (DL/40 [max = 1] + (1 - ping/150))
        recServer = arr2.reduce((p: any, c: any) => (f(p) > f(c) ? p : c))
      }
    }
    if (recServer) {
      //* проставляем признак рекомендованного сервера
      Object.keys(state).forEach((id) => {
        state[id].isRecom = recServer?.id === parseInt(id, 10)
      })
    }
    setTestedServers(state)
  }

  //**обновление прогресса теста */ 
  const speedTestOnUpdate = (data: any) => {
    const tS: ICDNServer | null = testingServer
    clearTimer()
    const dts = data?.testState || -1
    if (dts > 0 && dts !== 4) {
      testTimer.current = setTimeout(() => {
        setIsCurrentTestError(true)
      }, TEST_SERVER_TIMEOUT)
    }
    if (tS) {
      setCurrentTestData({ ...data, id: tS!.id })
    }
  }
  //**оконочание быстрого тестирования  */ 

  const speedTestOnEnd = () => {
    setTestingServer(null)
    setIsCurrentTestError(false)
    clearTimer()
    setSpeedTestState(null)
  }

  //* тест прогресс
  const calcTestProgress = useCallback(() => {
    //*тут протестированные сервер
    const testedServersCount = Object.values(testedServers || {}).filter((ts: any) => ts.isTested)?.length

    const currentServerProgress = ((currentTestData?.dlProgress || 0) + (currentTestData?.pingProgress || 0)) / 2
    const v = (((testedServersCount || 0) + currentServerProgress) / displayedServers.length) * 100

    setCurrentServerTestProgress(currentServerProgress)
    setTestProgress(v)
  }, [currentTestData, displayedServers, testedServers])


  const getServerTestData = (item: any) => ({
    name: item.dns,
    dns: item.dns,
    server: `https://${item.speedtest_dns}`,
    dlURL: item.speedtest_download?.slice(1),
    ulURL: "empty.php",
    pingURL: item.speedtest_ping?.slice(1),
    getIpURL: "getIP.php",
    id: item.id,
  })

  /**
   * Останавливаем тест
   * @param server - если передан, удаляется из очереди только этот сервер
   */
  const onTestAbort = (server = null) => {
    //* останавливаем тест
    if (speedTestState) {
      speedTestState.abort()
      speedTestState.worker.terminate()
      setSpeedTestState(null)
    }
    //* чистим текущй тестируемый сервер
    setTestingServer(null)
    //* чистим очередь
    let newQueue: [] = []
    setTestServersQueue(newQueue)
    clearTimer()
  }

  //**старт и стоп тестирования всех серверов */
  const handleStartStopAllServersTest = () => {
    if (!isAllServerTest) {
      //* Сбрасываем флаги ошибок
      clearTestingErrors()
      //* начинаем тест всех серверов
      //* устанвливаем в состояние "теста всех серверов" - флаг "теста всех серверов"
      setTestServersQueue(displayedServers.map(getServerTestData))
      //* устанавливаем получение данных статистики по спидтесту
      setIsNeededSpeedStats(true)
      //* устанавливаем флаг "теста всех серверов"
      setIsAllServerTest(true)
      //* Сбрасываем результаты предыдущего теста
      setTestedServers([{}])
      //* Сбрасываем результаты запроса к статистике
      setSpeedStatsData(null)
      //* сбрасываем прогресс
      setTestProgress(0)
      //* сбрасываем успех выполнения тестирования
      setSuccessTestServer(false)
      setSelectedServer(null)


    } else {
      //* сбрасываем флаг "теста всех серверов"
      setIsAllServerTest(false)
      //* отменяем получение данных статистики по спидтесту
      setIsNeededSpeedStats(false)
      //* деинициализируем прогресс
      setTestProgress(0)
      //* сбрасываем успех выполнения тестирования
      setSuccessTestServer(false)
      onTestAbort()
    }
  }

  //* связвыание девайса с сервером
  const bindDeviceToServer = (selectedTableValue: number | undefined, showResultDialog = true) => {
    if (selectedDevices.server !== selectedTableValue && selectedTableValue) {
      setDeviceIDToServer(`${selectedDevices.id}`)
      mutateCreateServer({ server_id: selectedTableValue })
      if (showResultDialog) {
        setIsFinalModal(true)
      }
    }
  }

  //*отвязвыние сервера от девайса
  const unBindDeviceToServer = (selectedTableValue: number | undefined) => {
    if (selectedDevices.server === selectedTableValue && selectedTableValue) {
      setDeviceIDToServer(`${selectedDevices.id}`)
      mutateDeleteServer()
    }
  }
  const changeDeviceType = (device: {
    view_type: any; id?:
    any; ministra_server?:
    any; ministra_login?: any; ministra_password?: any
  },
    value: any, force = false, skipBusyCheck = false) => {
    if ((isDeviceTypeBusy && !skipBusyCheck) || !device || !value || force || device.view_type === value) {
      return
    }
    setIsDeviceTypeBusy(true)
    setIsPortalSettingsInvalid(false)
  }

  //* ручная привязка девайса к виртуальному  серверу
  const handleSetAutoServer = (isEnabled: boolean) => {
    clearTestingErrors()
    //* если не выбран ID вирт  сервера и не выбран девайс
    if (autoSelectServerId === 0 || !selectedDevices) {
      return
    }
    const sd = selectedDevices
    //* поиск по серверам ID вирт сервера из состояния
    const vServer = servers.find((s) => s.id === autoSelectServerId)
    if (!vServer) {
      return
    }
    if (isEnabled) {

      //* передаем в функцию bindDeviceToServer DNS сервера, который будет связан с девайсом
      bindDeviceToServer(vServer.id, false)
    } else {
      unBindDeviceToServer(sd.id)
    }
  }

  //* если сервер выбран, ставим флаг
  useEffect(() => {
    if (selectedServer) setSuccessTestServer(true)
  }, [selectedServer])

  useEffect(() => {
    //* установка состояния типа просмотра
    setSelectedDeviceTypeValue(selectedDevices?.view_type ?? "playlist")
  }, [selectedDevices])

  useEffect(() => {
    //* если нужно получить данные статистики и очередь пуста и сервер не тестируется
    //* получаем статстику, обновляем рекомендации
    if (isNeededSpeedStats && (testServersQueue || []).length === 0 && !testingServer && !selectedServer) {
      const tmpFn = async () => {
        const sssData = Object.entries(testedServers).map(([id, v]) => ({ ...v, server: servers.find((s: UserServer) => s.id === parseInt(id, 10))?.dns })) as { dlStatus: string; jitterStatus: string; pingStatus: string; server: string; isRecom: boolean }[]

        const detectStatResult = await sendSpeedStats(userInfo, sssData)

        const detectedBestDns = detectStatResult?.Best || null
        setSpeedStatsData(detectStatResult?.Response2User || null)
        //* рекомендуемы ID сервера
        const recommendedServerId = Object.values(testedServers).find((ts: any) => ts.isRecom) || 0

        const recommendedDns = servers.find((ts) => ts.id === recommendedServerId)?.dns || "no-server"
        //* устанавливаем лучший протестированый сервер
        const useDns = detectedBestDns || recommendedDns

        //**константа используемого сервера useDns  */ 
        const useServerDNS = servers.find((s) => s.dns === useDns) || null
        if (useServerDNS) {
          setSelectedServer(useServerDNS)
          setNeedSetServer(useServerDNS)
        }

        //* устанавливаем протестированые сервера
        setTestedServers((prevState: any) => {
          const newState: any = { ...prevState }
          Object.keys(newState).forEach((id) => {
            newState[id].isRecom = parseInt(id, 10) === (useServerDNS?.id || 0)
          })
          return newState
        })

        setIsAllServerTest(false)
      }
      if (Object.values(testedServers || []).length > 0) {
        //* функция запускает тестирование всех серверов
        tmpFn()
      }
    }
  }, [testServersQueue, testingServer, isNeededSpeedStats, testedServers, userInfo, servers, selectedServer])

  //**запуск теста серверов */ 
  useEffect(() => {
    //* если очередь на тест заполнена и сервер не тестируется
    if (!testingServer && (testServersQueue || []).length > 0 && testServersQueue !== undefined) {
      const tS = { ...testServersQueue[0] }
      setTestingServer(tS)
      setTestServersQueue((prevState: ICDNServer[]) => prevState.slice(1))
    }
    //* рассчитываем recommended server
    detectRecommendedServer()
  }, [testServersQueue, testingServer])

  useEffect(() => {
    //* если тестируются все сервера и тест окончен (пуста очередь не тестируется сервер)
    //* снимаем флаг теста всех серверов
    if (
      isAllServerTest &&
      !testingServer &&
      (testServersQueue || []).length === 0 &&
      Object.values(testedServers || {}).length > 0 &&
      Object.values(testedServers || {}).filter((s: any) => !s.isTested).length === 0
    ) {
      setIsAllServerTest(false)
      setIsGeneralTestError((testedServers || []).length === 0 ||
        Object.values(testedServers || {}).filter((ts: any) => ts.isRecom).length === 0)
    }
  }, [testServersQueue, testingServer, testedServers, isAllServerTest])

  //* новый спидтест сервера
  useEffect(() => {
    if (testingServer) {
      const spt = new SpeedtestService()
      spt.addTestPoint(testingServer)
      spt.setSelectedServer(testingServer)
      spt.onupdate = speedTestOnUpdate
      spt.onend = speedTestOnEnd
      spt.start()
      setSpeedTestState(spt)
    }
  }, [testingServer])

  //* если целевой тест данных  - ждем финиша теста (цифра 4) обновляем тестируемые сервера. else - прогресс теста
  useEffect(() => {
    if (currentTestData) {
      const { id, ...data } = currentTestData
      const isTested = currentTestData.testState === 4
      setTestedServers((prevState: any) => {
        const d: any = { ...(prevState || {}) }
        d[id] = { ...data, id, isTested }
        return d
      })
    }
    calcTestProgress()
  }, [currentTestData])

  useEffect(() => {
    if (isCurrentTestError) {
      if (speedTestState) {
        speedTestState.abort()
        speedTestState.worker.terminate()
        setSpeedTestState(null)
      }
      setTestingServer(null)
      setIsCurrentTestError(false)
      clearTimer()
    }
  }, [isCurrentTestError])

  useEffect(() => {
    if (!needSetServer || !selectedDevices) {
      return
    }
    bindDeviceToServer(Number(needSetServer.dns), false)
    setNeedSetServer(null)
  }, [servers, needSetServer, selectedDevices])

  //** установка в булево значение setIsAutoServer */ 
  useEffect(() => {
    if (!selectedDevices || (servers || []).length === 0) {
      return
    }
    //** поиск id серверов с  is_virtual === true*/
    const virtServersIds = servers.filter((s) => s.is_virtual).map((s) => s.id)

    //* булево значение setIsAutoServer сравнения вирит сревера выбранного девайса выбранного вирт сервера
    selectedDevices.server ? setIsAutoServer(virtServersIds.includes(selectedDevices?.server)) : null
  }, [dataDevicesUserInfinite, servers, selectedDevices])

  //*  установка серверов - не вирт и автовыбор вирт сервака */
  useEffect(() => {
    const useServers = dataServerListList?.data.results || []
    if (useServers.length > 0) {

      //** установка всех серверов в состояние */ 
      setServers([...useServers])
      //**установка серверов в состояние - не виртуальных */ 
      const dServers = useServers.filter((s) => !s.is_virtual)
      setDisplayedServers(dServers)
      setStalkerServers(dServers)
      //* установка в состояние ID виртуального сервера - автовыбранный сервер в дальнейшем
      setAutoSelectServerId(useServers?.find((s: any) => s.is_virtual)?.id || 0)
    }
  }, [serversLoadSuccess, dataServerListList])

  const valueCDN = useMemo(
    () => ({
      servers,
      displayedServers,
      selectedDeviceTypeValue,
      selectedServer,
      isDeviceTypeBusy,
      testedServers,
      stalkerServers,
      serversFilters,
      isFinalModal,
      isServersEqual,
      autoSelectServerId,
      changeDeviceType,
      isPortalSettingsInvalid,
      isAutoServer,
      handleSetAutoServer,
      speedStatsData,
      handleStartStopAllServersTest,
      testingServer,
      isAllServerTest,
      currentServerTestProgress,
      testProgress,
      isGeneralTestError,
      successTestedServer,
      bindDeviceToServer,
      isSuccessCreateServer
    }),

    [servers,
      displayedServers,
      selectedDeviceTypeValue,
      selectedServer,
      isDeviceTypeBusy,
      testedServers,
      stalkerServers,
      serversFilters,
      isFinalModal,
      isServersEqual,
      autoSelectServerId,
      changeDeviceType,
      isPortalSettingsInvalid,
      isAutoServer,
      handleSetAutoServer,
      speedStatsData,
      testingServer,
      isAllServerTest,
      currentServerTestProgress,
      testProgress,
      isGeneralTestError,
      successTestedServer,
      isSuccessCreateServer
    ]
  )

  return valueCDN
}
