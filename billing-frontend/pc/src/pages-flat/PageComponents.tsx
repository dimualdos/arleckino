"use client"

import React, { useState } from "react"
import { Checkbox } from "@/src/shared/ui/checkbox"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/src/shared/ui/alert-dialog"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/src/shared/ui/pagination"
import { format } from "date-fns"
import { Calendar } from "@/src/shared/ui/calendar"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/src/shared/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/src/shared/ui/popover"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogPortal, DialogOverlay } from "@/src/shared/ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/src/shared/ui/command"
import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/shared/ui/dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "@/shared/ui/toggle-group"
import { Select, SelectContent, SelectGroup, SelectIcon, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/src/shared/ui/select"
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/shared/ui/input-otp"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger } from "@/shared/ui/drawer"
import iconFreeKassa from "@/public/icon-freekassa.svg"
import iconEnot from "@/public/icon-enot.svg"
import iconPayPal from "@/public/icon-paypal.svg"
import { Button, buttonVariants } from "../shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../shared/ui/avatar"
import { Badge } from "../shared/ui/badge"
import { Switch } from "../shared/ui/switch"
import { Label } from "../shared/ui/label"
import { Skeleton } from "../shared/ui/skeleton"
import { Slider } from "../shared/ui/slider"
import { Input } from "../shared/ui/input"
import { Textarea } from "../shared/ui/textarea"
import { AutosizeTextarea } from "../shared/ui/autosize-textarea"
import { Toggle } from "../shared/ui/toggle"
import { AlertCircleIcon, ChevronDown, X } from "lucide-react"
import { LocaleSelect } from "../widgets/LocaleSelect"
import { TreeView } from "../shared/ui/tree-view/tree-view"
import { Combobox } from "../shared/ui/combobox/ui"
import { useCompobox } from "../shared/ui/combobox/hooks"
import { Credenza, CredenzaBody, CredenzaClose, CredenzaContent, CredenzaDescription, CredenzaFooter, CredenzaHeader, CredenzaTitle, CredenzaTrigger } from "@/src/shared/ui/credenza"
import { useToggle } from "../shared/hooks/useToggle"
import { cn } from "../shared/utils/cn"
import { DatePickerWithRange } from "../widgets/DatePickerWithRange"
import { RadioGroup, RadioGroupItem } from "../shared/ui/radio-group"
import { AppPagination } from "../widgets/AppPagination"
import { TripleCheckbox } from "../shared/ui/triple-checkbox"
import { DeviceCard } from "../shared/ui/device-card"
import { Device } from "../gen/models/ts/Device"
import { Alert } from "../shared/ui/alert"
import { BalanceCard } from "../shared/ui/balance-card"
import Link from "next/link"
import { ServerCard } from "../shared/ui/server-card"
import { ChannelCard } from "../shared/ui/channel-card"
import { DragDemo } from "../widgets/DragDemo"

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

const BalanceCardPaypal = () => {
  return (
    <div className="space-y-4">
      <p className="border-b border-b-grey-soft pb-4">
        Не смогли подобрать нужный вам вариант оплаты? Попробуйте обратиться по указанным ниже контактам.
        <b>Обращаем ваше внимание на то, что прием осуществляется в ручном режиме. Бонусы начисляются на усмотрение того, кто принимает платеж.</b>
      </p>
      <p className="border-b border-b-grey-soft pb-4">
        PayPal, WMZ, Yoo money, Qiwi, RU карты и др.
        <br />
        Telegram: <b>@santa171</b>
        <br />
        E-mail: <b>171santa@gmail.com</b>
        <br />
        Skype: <b>171santa@gmail.com</b>
      </p>
      <p>
        PayPal, Skrill, Paysafecard, Revolut, EU карты (в том числе Беларусь) и др. Telegram: @Ivin85 <br />
        Snapchat: <b>@Ivin85</b> <br />
        ICQ: <b>@Ivin85</b> <br />
        E-mail: <b>eugenieugeni82@gmail.com</b> <br />
        Skype: <b>Paypal-Tv</b>
      </p>
    </div>
  )
}

export const PageComponents = () => {
  const [date, setDate] = React.useState<Date>()
  const [openDrawer, openDrawerSet] = useState(false)
  const [goal, setGoal] = React.useState(350)
  const { active, setActive, close, toggle } = useToggle(false)
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  const SHEET_SIDES = ["left", "right"] as const

  const { open, selected, selectedSet, setOpen } = useCompobox()
  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]

  const mockDevices: Device[] = [
    {
      id: 1,
      pk: 1,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, laboriosam.",
      description: "ww",
      is_active: true,
      is_deleted: false,
      name: "device 1",
      new_device: true,
      order: 0,
      purchase_date: null,
      renew_subscription: false,
      selected: false,
      server: 9,
      dns: null,
      playlist: 191,
      start_date: null,
      is_test_period: false,
      view_type: "playlist",
      subscription_type: "active",
      user: 197,
      vip: false,
      ott_id: "PdywOHnWA6HAoc",
      ministra_server: null,
      ministra_login: null,
      ministra_password: null,
      playlist_type: 4,
      app_pairing_code: null,
      app_hwid: null,
      app_status: "not_configured",
    },
    {
      id: 2,
      pk: 2,
      content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, laboriosam.",
      description: "ww",
      is_active: true,
      is_deleted: false,
      name: "device 2",
      new_device: false,
      order: 0,
      purchase_date: null,
      renew_subscription: false,
      selected: false,
      server: 9,
      dns: null,
      playlist: 191,
      start_date: null,
      is_test_period: false,
      view_type: "playlist",
      subscription_type: "active",
      user: 197,
      vip: false,
      ott_id: "PdywOHnWA6HAoc",
      ministra_server: null,
      ministra_login: null,
      ministra_password: null,
      playlist_type: 4,
      app_pairing_code: null,
      app_hwid: null,
      app_status: "not_configured",
    },
  ]

  const [selectedDevices, selectedDevicesSet] = useState<Device[]>([])

  const onSelectDevice = (device: Device) => () => {
    const match = selectedDevices.find((search) => search.id === device.id)

    if (!match) {
      selectedDevicesSet((prev) => [...prev, device])
      return
    }
    const filtered = selectedDevices.filter((search) => search.id !== device.id)
    selectedDevicesSet(filtered)
  }

  const onSelectAllDevices = () => {
    if (selectedDevices.length === mockDevices.length) {
      selectedDevicesSet([])
      return
    }
    selectedDevicesSet(mockDevices)
  }

  const onSelectBalance = (value: string | undefined) => {
    console.log("selected: ", value)
  }

  const isSelectedAllDevices = mockDevices.length === selectedDevices.length
  const isSelectedSome = selectedDevices.length > 0 && mockDevices.length !== selectedDevices.length
  const isSelectedEmpty = !selectedDevices.length

  const onAutoRenewSubscription = (auto_renew: boolean, idDevice: string) => {
    console.log("WIP")
  }
  const onSelectOneDeviceFromSubscription = (item: Device) => () => {

  }

  return (
    <div className="container space-y-6 py-4">
      <div>
        <DragDemo />
      </div>

      {/* TripleCheckbox */}
      <div className="flex space-x-2">
        <TripleCheckbox selected="none" />
        <TripleCheckbox selected="some-selected" />
        <TripleCheckbox selected="all-selected" />
      </div>

      {/* Server items */}
      <div className="rounded-xl bg-purple/25 p-5">
        <RadioGroup
          onValueChange={onSelectBalance}
          defaultValue="item1"
        >
          <ServerCard
            radioId="item1"
            radioValue="item1"
            name="CDN"
            variant="CDN"
            description="Сервер по результам тестов других пользователей и вашему местоположению"
          />
          <ServerCard
            radioId="item2"
            radioValue="item2"
            variant="test"
            status="none"
            name="Оптимальный сервер с помощью теста"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />

          <ServerCard
            radioId="item3"
            radioValue="item3"
            variant="test"
            status="progress"
            name="Оптимальный сервер с помощью теста"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
          <ServerCard
            radioId="item4"
            radioValue="item4"
            variant="test"
            status="completed"
            name="Оптимальный сервер с помощью теста"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
          <ServerCard
            radioId="item5"
            radioValue="item5"
            variant="test"
            status="error"
            name="Оптимальный сервер с помощью теста"
            description="С помощью теста и выбирается наилучший сервер на основе вашего интернет соединения"
          />
        </RadioGroup>
      </div>

      {/* BalanceItems */}
      <RadioGroup
        onValueChange={onSelectBalance}
        defaultValue="item1"
      >
        <BalanceCard
          radioId="item1"
          radioValue="item1"
          walletProps={{
            name: "Free-kassa",
            content: (
              <div>
                Доступна оплата картами Мир переводом, минимальная сумма платежа 10 USD, так же доступен ADVcash самый дешевый вариант пополнения картами EU VISA/Mastercard. При не поступления платежа
                просьба обращаться к ним в поддержку
                <div>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-accent"
                  >
                    https://anypay.io/support
                  </Link>
                </div>
              </div>
            ),
            image: {
              width: iconFreeKassa.width,
              height: iconFreeKassa.height,
              src: iconFreeKassa.src,
            },
          }}
        />
        <BalanceCard
          radioId="item2"
          radioValue="item2"
          walletProps={{
            name: "Enot",
            content: (
              <div>
                Доступна оплата картами Мир переводом, минимальная сумма платежа 10 USD, так же доступен ADVcash самый дешевый вариант пополнения картами EU VISA/Mastercard. При не поступления платежа
                просьба обращаться к ним в поддержку
                <div>
                  <Link
                    href="/"
                    target="_blank"
                    className="text-accent"
                  >
                    https://anypay.io/support
                  </Link>
                </div>
              </div>
            ),
            image: {
              width: iconEnot.width,
              height: iconEnot.height,
              src: iconEnot.src,
            },
          }}
        />
        <BalanceCard
          radioId="item3"
          radioValue="item3"
          walletProps={{
            name: "Paypal",
            content: <BalanceCardPaypal />,
            image: {
              width: iconPayPal.width,
              height: iconPayPal.height,
              src: iconPayPal.src,
            },
          }}
        />
      </RadioGroup>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 pl-4">
          <TripleCheckbox
            onClick={onSelectAllDevices}
            selected={isSelectedEmpty ? "none" : isSelectedSome ? "some-selected" : "all-selected"}
          />
          <button onClick={onSelectAllDevices}>Выбрать все устройства</button>
        </div>
        <div className="space-y-4">
          {mockDevices.map((item, indx) => {
            const match = selectedDevices.find((search) => search.id === item.id)
            return (
              <DeviceCard
                onSelectOneDeviceFromSubscription={onSelectOneDeviceFromSubscription}
                autoRenewSubscription={onAutoRenewSubscription}
                onHandleClickSettings={() => console.log("onHandleClickSettings")}
                onHandleSelect={onSelectDevice(item)}
                key={item.id}
                selected={!match ? "none" : "all-selected"}
                device={item}
              />
            )
          })}
        </div>
      </div>

      {/* Alert */}
      <div className="space-y-5">
        <Alert description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at maxime nesciunt labore soluta facilis vero excepturi laboriosam, facere ab assumenda esse odio praesentium eaque nemo unde debitis quas dolorum." />
        <Alert
          variant="dangerous"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at maxime nesciunt labore soluta facilis vero excepturi laboriosam, facere ab assumenda esse odio praesentium eaque nemo unde debitis quas dolorum."
        />
        <Alert
          variant="success"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo at maxime nesciunt labore soluta facilis vero excepturi laboriosam, facere ab assumenda esse odio praesentium eaque nemo unde debitis quas dolorum."
        />
      </div>

      {/* Checkbox */}
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>

      <div className="flex flex-col items-start space-y-4 border p-6">
        {/* RadioGroup */}
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-one"
              id="option-one"
            />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-two"
              id="option-two"
            />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>

        {/* Date picker */}
        <DatePickerWithRange />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"purple"}
              className={cn("w-[280px] justify-start text-left font-normal")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              fixedWeeks
              footer
              title="Pick a date title"
            />
          </PopoverContent>
        </Popover>

        {/* BUTTONS */}
        <Button>DEFAULT button</Button>
        <Button variant={"yellow"}>yellow button</Button>
        <Button
          disabled
          variant={"yellow"}
        >
          yellow disabled
        </Button>
        <Button variant={"ghost-yellow"}>yellow ghost</Button>
        <Button variant={"white"}>white button</Button>
        <Button variant={"grey"}>gray button</Button>
        <Button variant={"ghost"}>ghost button</Button>
        <Button variant={"link"}>link button</Button>
        <Button variant={"outline"}>outline button</Button>
        <Button variant={"transparent"}>transparent button</Button>
        <Button variant={"blue"}>blue button</Button>
        <Button variant={"purple"}>purple button</Button>

        <AppPagination
          pathname="/"
          maxPageButtonsToShow={4}
          currentPage={8}
          onPageChange={() => console.log(1)}
          count={250}
          itemsPerPage={5}
        />

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
              >
                6
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">7</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">8</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">9</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">50</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <Combobox
          selectedItem={selected}
          open={open}
          setOpen={setOpen}
          availableItems={frameworks}
          notFoundTitle="notFoundTitle"
          placeholder="placeholder"
          onSelectValue={selectedSet}
          selectTitle="selectTitle"
        />

        <TreeView
          elements={[
            {
              id: "1",
              name: "Element 1",
              isSelectable: true,
              children: [
                {
                  id: "1.1",
                  name: "Element 1.1",
                  isSelectable: true,
                },
                {
                  id: "1.2",
                  name: "Element 1.2",
                  isSelectable: true,
                  children: [
                    {
                      id: "1.2.1",
                      name: "Element 1.2.1",
                      isSelectable: true,
                    },
                    {
                      id: "1.2.2",
                      name: "Element 1.2.2",
                      isSelectable: true,
                    },
                  ],
                },
              ],
            },
          ]}
          initialSelectedId="21"
        />

        {/* Sheet */}
        <div className="grid grid-cols-2 gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">{side}</Button>
              </SheetTrigger>
              <SheetContent
                side={side}
                className="max-w-80"
              >
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="name"
                      className="text-right"
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label
                      htmlFor="username"
                      className="text-right"
                    >
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>

        {/* AVATAR */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Select */}
        <Select>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>North America</SelectLabel>
              <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
              <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
              <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
              <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
              <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Europe & Africa</SelectLabel>
              <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
              <SelectItem value="cet">Central European Time (CET)</SelectItem>
              <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
              <SelectItem value="west">Western European Summer Time (WEST)</SelectItem>
              <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
              <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Asia</SelectLabel>
              <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
              <SelectItem value="ist">India Standard Time (IST)</SelectItem>
              <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
              <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
              <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
              <SelectItem value="ist_indonesia">Indonesia Central Standard Time (WITA)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Australia & Pacific</SelectLabel>
              <SelectItem value="awst">Australian Western Standard Time (AWST)</SelectItem>
              <SelectItem value="acst">Australian Central Standard Time (ACST)</SelectItem>
              <SelectItem value="aest">Australian Eastern Standard Time (AEST)</SelectItem>
              <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
              <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>South America</SelectLabel>
              <SelectItem value="art">Argentina Time (ART)</SelectItem>
              <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
              <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
              <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Skeleton */}
        <Skeleton className="h-[20px] w-[100px] rounded-full" />

        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>

        {/* Slider */}
        <Slider
          defaultValue={[33]}
          max={100}
          step={1}
          min={10}
        />

        {/* Input */}
        <Input
          placeholder="input something"
          className="max-w-40"
        />

        {/* Textarea */}
        <Textarea
          placeholder="input something"
          className="max-w-60"
        />

        {/* Autosize Textarea */}
        <AutosizeTextarea
          placeholder="Autosize Textarea"
          className="max-w-60"
        />

        {/* Toggle */}
        <Toggle>Toggle</Toggle>

        {/* ToggleGroup */}
        <ToggleGroup type="single">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>

        {/* ToggleGroup */}
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>

        {/* Switcher */}
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>

        <LocaleSelect />

        {/* Bange */}
        <Badge variant="default">Badge default</Badge>
        <Badge variant="accent">Badge accent</Badge>

        {/* Responsive dialog */}
        <Button onClick={toggle}>Responsive modal</Button>
        <Credenza
          open={active}
          onOpenChange={setActive}
        >
          <CredenzaContent className="block p-0">
            <div className="relative flex items-start space-x-3.5 border-b p-6 md:space-x-0 md:border-b-0">
              <div className="inline-flex min-w-6 items-center md:hidden">
                <AlertCircleIcon className="text-5 rotate-180 fill-purple text-white" />
              </div>
              <div className="relative space-y-2">
                <p className="text-xl font-bold">Изменение E-mail адреса</p>
                <div className="space-y-4">
                  <p>
                    Мы выслали Вам ссылку на <b>examole@gmail.com</b> Перейдите по ссылке в письме для завершения процесса изменения e-mail адреса
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end space-x-2 px-6 py-4">
              <Button
                onClick={toggle}
                variant={"outline"}
                className="mt-0 md:w-full"
              >
                Закрыть
              </Button>
            </div>
          </CredenzaContent>
        </Credenza>

        {/* ALERT DIALOG */}
        <AlertDialog>
          <AlertDialogTrigger className={buttonVariants({})}>Open alert dialog</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Dialog */}
        <Dialog>
          <DialogTrigger className={buttonVariants({})}>Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button>Open drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* Popover */}
        <Popover>
          <PopoverTrigger>Popover</PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* Command */}
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>

        {/* Dropdown menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">DropdownMenu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Keyboard shortcuts
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Email</DropdownMenuItem>
                    <DropdownMenuItem>Message</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>More...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Input OTP */}
        <p>Input OTP</p>
        <InputOTP
          maxLength={6}
          render={({ slots }) => (
            <>
              <InputOTPGroup>
                {slots.slice(0, 3).map((slot, index) => (
                  <InputOTPSlot
                    key={index}
                    {...slot}
                  />
                ))}{" "}
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                {slots.slice(3).map((slot, index) => (
                  <InputOTPSlot
                    key={index + 3}
                    {...slot}
                  />
                ))}
              </InputOTPGroup>
            </>
          )}
        />
      </div>

      <div className="my-10 divide-y rounded-sm border border-slate-300">
        <p className="flex items-center p-2 text-xl">FONT SIZES</p>
        <div className="space-y-6 p-2">
          <p className="text-xxs">xxs / 10px</p>
          <p className="text-xs">xs / 12px</p>
          <p className="text-sm">sm / 14px</p>
          <p className="text-base">base / 16px</p>
          <p className="text-lg">lg / 18px</p>
          <p className="text-xl">xl / 20px</p>
          <p className="text-2xl">2xl / 24px</p>
          <p className="text-3xl">3xl / 30px</p>
          <p className="text-4xl">4xl / 36px</p>
          <p className="text-5xl">5xl / 48px</p>
          <p className="text-6xl">6xl / 60px</p>
          <p className="text-7xl">7xl / 72px</p>
          <p className="text-8xl">8xl / 96px</p>
          <p className="text-9xl">9xl / 128px</p>
        </div>
      </div>

      <div className="my-10 divide-y rounded-sm border border-slate-300">
        <p className="flex items-center p-2 text-xl">SPACING</p>
        <div className="flex flex-col space-y-4 p-2">
          <div className="inline-flex size-1 items-center bg-foreground text-background"></div>
          <div className="inline-flex size-2 items-center bg-foreground text-background"></div>
          <div className="inline-flex size-4 items-center bg-foreground text-background"></div>
          <div className="inline-flex size-6 items-center bg-foreground text-background"></div>
          <div className="inline-flex size-8 items-center bg-foreground text-background"></div>
        </div>
      </div>

      <div className="my-10 divide-y rounded-sm border border-slate-300">
        <p className="flex items-center p-2 text-xl">BORDER RADIUS</p>
        <div className="flex flex-col space-y-4 p-2">
          <div className="inline-flex size-20 items-center justify-center rounded bg-foreground text-background">BASE</div>
          <div className="inline-flex size-20 items-center justify-center rounded-sm bg-foreground text-background">SM</div>
          <div className="inline-flex size-20 items-center justify-center rounded-md bg-foreground text-background">md</div>
          <div className="inline-flex size-20 items-center justify-center rounded-lg bg-foreground text-background">lg</div>
          <div className="inline-flex size-20 items-center justify-center rounded-2xl bg-foreground text-background">2xl</div>
        </div>
      </div>
    </div>
  )
}
