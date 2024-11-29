import { Device } from "@/src/gen/models/ts/Device"
import { CheckedFilterStore } from "@/src/shared/store/checkedFilterStore"
import { Button, buttonVariants } from "@/src/shared/ui/button"
import { DropdownMenuAllDevices } from "@/src/widgets/Dialogs/device/DropdownMenuAllDevices"
import clsx from "clsx"
import { ListFilter, LucideMoreVertical, PlusCircle } from "lucide-react"
import Link from "next/link"
import { useStoreState } from "pullstate"
import React from "react"

type Props = {
  selectedDevices: Device[]
  openFilter: () => void
  onDeleteHandler: () => void
  openMobileActions: () => void
  openUpdateDates: () => void
  comparisonData: boolean
}

export const TopActions = ({ selectedDevices, openFilter, onDeleteHandler, openMobileActions, openUpdateDates, comparisonData }: Props) => {
  let checkedActiveSubsriptions = selectedDevices.length > 0 && selectedDevices.every((device) => device.subscription_type === 'ending' || device.subscription_type === 'inactive')
  const boolFilterData = useStoreState(CheckedFilterStore, s => s.activatedFilter)
  const boolSubscrTypeData = useStoreState(CheckedFilterStore, s => s.activatedTypeSubscr)
  return (
    <div className="container flex items-center justify-between">
      <p
        className={clsx("text-xl font-semibold text-grey-hard lg:text-sm")}
      >
        Выбрано: <span>{selectedDevices.length}</span>
      </p>

      <div className="ml-auto inline-flex items-center space-x-2">
        <Link
          href="/personal-page/devices/add"
          className={buttonVariants({ className: "flex items-center space-x-1 uppercase lg:hidden" })}
        >
          <PlusCircle className="size-5 text-white" />
          <span>Добавить новое </span>
        </Link>
        <Button
          variant={"accent"}
          size={"icon"}
          className="hidden lg:inline-flex"
        >
          <PlusCircle className="size-5 text-white" />
        </Button>
        <Button
          onClick={openFilter}
          variant={"outline"}
          size={"icon"}
          className="hidden bg-white lg:inline-flex relative"
        >
          {(boolFilterData || boolSubscrTypeData) && <span className="absolute rounded-full w-2 h-2 bg-accent top-[-4px] right-[-4px]"></span>}
          <ListFilter className="size-5 text-black" />
        </Button>
        <Button
          disabled={!selectedDevices.length}
          onClick={openMobileActions}
          variant={"outline"}
          size={"icon"}
          className="hidden bg-white lg:inline-flex"
        >
          <LucideMoreVertical className="size-5 text-black" />
        </Button>
        {/* компонент на декстопах */}
        <div className="lg:hidden">
          <DropdownMenuAllDevices
          comparisonData={comparisonData}
          disableActionsForOneDevice={selectedDevices.length < 2}
            selectedDevises={selectedDevices}
            checkedActiveSubsriptions={checkedActiveSubsriptions}
            onDeleteHandler={onDeleteHandler}
            openUpdateDates={openUpdateDates} />
        </div>
      </div>
    </div>
  )
}
