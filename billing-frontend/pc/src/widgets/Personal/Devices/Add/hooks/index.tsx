import { useForm } from "react-hook-form"
import { AddDeviceProps } from "../types"
import { useRouter } from "next/router"
import { SharedQueryAddDevice } from "@/src/shared/types"
import { addDeviceSteps } from "@/src/shared/consts"
import { useToggle } from "@/src/shared/hooks/useToggle"

export const useAddDevice = () => {
  const router = useRouter()
  const query = router.query as SharedQueryAddDevice
  const { active: isActiveUpdateSubscription, setActive: onChageUpdateSubscription, toggle: toggleUpdateSubscription } = useToggle()
  const { stepNumber } = query
  const parsedStepNumber = !stepNumber || !stepNumber.length || stepNumber === "0" ? 1 : parseInt(stepNumber)

  const useFormAPI = useForm<AddDeviceProps>({
    defaultValues: {
      name: "",
      comment: "",
      serverType: "custom",
      serverTypeProgress: 0,
      serverTypeStatus: "none",
    },
  })

  const watchServerType = useFormAPI.watch("serverType")
  const watchServerTypeStatus = useFormAPI.watch("serverTypeStatus")
  const watchServerTypeProgress = useFormAPI.watch("serverTypeProgress")

  const getBack = () => {
    if (parsedStepNumber <= 1) {
      return "/personal-page/devices"
    }
    return `/personal-page/devices/add?stepNumber=${parsedStepNumber - 1}`
  }

  const getForward = () => {
    if (parsedStepNumber >= 4) {
      return router.asPath
    }
    return `/personal-page/devices/add?stepNumber=${parsedStepNumber + 1}`
  }

  const getForwardCallback = () => {
    if (parsedStepNumber === 4) {
      onChageUpdateSubscription(true)
    }
  }

  const onSubmitUpdateSubscription = () => onChageUpdateSubscription(false)

  const onStartTestCustomServer = async () => {
    useFormAPI.setValue("serverTypeStatus", "progress")
    useFormAPI.setValue("serverTypeProgress", 0)
    const intervalId = setInterval(() => {
      const newProgress = useFormAPI.getValues("serverTypeProgress") + 2
      if (newProgress <= 100) {
        useFormAPI.setValue("serverTypeProgress", newProgress)
      } else {
        clearInterval(intervalId)
        const randomStatus = Math.random() < 0.4 ? "completed" : "error"
        useFormAPI.setValue("serverTypeStatus", randomStatus)
      }
    }, 33)
  }

  return {
    query,
    parsedStepNumber,
    useFormAPI,
    getBack,
    getForward,
    getForwardCallback,
    onStartTestCustomServer,
    watchServerType,
    watchServerTypeStatus,
    watchServerTypeProgress,
    isActiveUpdateSubscription,
    onChageUpdateSubscription,
    onSubmitUpdateSubscription,
    toggleUpdateSubscription,
  }
}
