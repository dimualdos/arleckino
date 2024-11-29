import { Device } from "@/src/gen/models/ts/Device"
import { Button } from "@/src/shared/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/src/shared/ui/dropdown-menu"
import clsx from "clsx"
import { LucideMoreVertical } from "lucide-react"
import Link from "next/link"
import { useEqualizeSubscription } from "@/src/shared/hooks/useEqualizeSubscription"

type Props = {
  disableToSelectDevices?: boolean
  disableActionsForOneDevice?: boolean
  onDeleteHandler: () => void
  checkedActiveSubsriptions: boolean
  selectedDevises: Device[]
  openUpdateDates: () => void
  comparisonData: boolean
}

export const DropdownMenuAllDevices = ({ checkedActiveSubsriptions, selectedDevises, disableToSelectDevices, disableActionsForOneDevice, onDeleteHandler, openUpdateDates, comparisonData }: Props) => {
  const { buySubscriptionEqualize } = useEqualizeSubscription()
  const onUpdateDatesDevices = () => {
    buySubscriptionEqualize(false)
    openUpdateDates()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={disableToSelectDevices}
          variant={"outline"}
          size={"icon"}
          className={clsx("bg-white", {
            "pointer-events-none": disableToSelectDevices,
          })}
        >
          <LucideMoreVertical className="size-5 text-black" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="!right-0 rounded-sm p-0 pb-2"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            asChild
            textValue="1"
            className="rounded-none px-4 text-base"
          >
            <Link
              href="/personal-page/update-channels"
              className="mr-auto"
            >
              <span className="mr-auto">Редактор списка каналов</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            textValue="2"
            className="rounded-none px-4 text-base"
            disabled={!selectedDevises.length}
          >
            <Link
              href="/personal-page/subscription"
              className="mr-auto"
            >
              <span className="mr-auto">Продлить подписку</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            disabled={disableActionsForOneDevice || comparisonData}
            textValue="3"
            onClick={() => onUpdateDatesDevices()}
            className="rounded-none px-4 text-base"
          >
            <span className="mr-auto">Выровнять даты окончания подписок</span>
            {/* <DropdownMenuShortcut className="ml-2">⌘3</DropdownMenuShortcut>  */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {checkedActiveSubsriptions && (
          <>
            <DropdownMenuSeparator className="my-2" />
            <DropdownMenuItem
              onClick={onDeleteHandler}
              textValue="1"
              className="rounded-none px-4 text-base hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground"
            >
              Удалить
              {/* <DropdownMenuShortcut>{selectedDevisesLength && selectedDevisesLength}</DropdownMenuShortcut> */}
            </DropdownMenuItem>{" "}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
