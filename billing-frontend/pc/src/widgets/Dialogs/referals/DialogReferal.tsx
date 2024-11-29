import React from "react"

import { AlertDialog, AlertDialogContent } from "@/src/shared/ui/alert-dialog"
import { RadioGroup, RadioGroupItem } from "@/src/shared/ui/radio-group"
import clsx from "clsx"
import { Label } from "@/src/shared/ui/label"
import { Input } from "@/src/shared/ui/input"
import { Button } from "@/src/shared/ui/button"

type Props = {
  isActive: boolean
  isActiveChange: React.Dispatch<React.SetStateAction<boolean>>
  toggleModal: () => void
  selectedTabOutMoney: 1 | 2
  onSelectTabOutMoney: (val: 1 | 2) => () => void
}

const mockPayments = [
  {
    name: "PayPal",
    description: "Минимальная сумма вывода 15 USD",
  },
  {
    name: "WebMoney",
    description: "Комиссия 10%",
  },
  {
    name: "TRON USDT TRC20",
    description: "Комиссия 10% + 3  USD",
  },
  {
    name: "Карта МИР",
    description: "Комиссия 5% + 0,5 USD",
  },
  {
    name: "Qiwi Кошелек",
    description: "",
  },
]

export const DialogReferal = ({ isActive, isActiveChange, toggleModal, selectedTabOutMoney, onSelectTabOutMoney }: Props) => {
  return (
    <AlertDialog
      open={isActive}
      onOpenChange={isActiveChange}
    >
      <AlertDialogContent className="min-h-[550px] w-full max-w-2xl p-0 md:h-full md:rounded-none">
        <div className="flex flex-col">
          {/* MAIN CONTENT */}
          <div className="relative flex items-start space-x-3.5 p-6 md:space-x-0 md:px-0">
            <div className="relative w-full space-y-6">
              {/* TITLE */}
              <p className="text-xl font-bold md:px-6">Запрос на вывод денежных средств</p>

              {/* ACTIONS START */}
              <div className="flex items-start justify-between md:flex-col md:justify-start">
                <div className="flex items-center md:hidden">
                  <button
                    onClick={onSelectTabOutMoney(1)}
                    className={clsx("rounded-l-sm border border-r-0 px-4 py-2.5", {
                      "shaddow-bold border-accent bg-yellow-soft text-yellow-foreground": selectedTabOutMoney === 1,
                      "border-grey bg-white": selectedTabOutMoney !== 1,
                    })}
                  >
                    На платежную систему
                  </button>
                  {/* TODO: ADD FULL HEIGHT */}
                  <span className="relative h-[42px] w-px min-w-px bg-accent"></span>
                  <button
                    onClick={onSelectTabOutMoney(2)}
                    className={clsx("rounded-r-sm border border-l-0 px-4 py-2.5", {
                      "shaddow-bold border-accent bg-yellow-soft text-yellow-foreground": selectedTabOutMoney === 2,
                      "border-grey bg-white": selectedTabOutMoney !== 2,
                    })}
                  >
                    На баланс
                  </button>
                </div>
                <div className="text-right md:px-6 md:text-left">
                  <p className="md:text-grey-hard">Доступно к выводу</p>
                  <p className="font-bold">$ 1 900.00</p>
                </div>

                {/* MOBILE TABS START */}
                <div className="no-scrollbar hidden w-full items-center space-x-8 overflow-x-auto whitespace-nowrap border-b border-b-grey-soft px-6 md:mt-6 md:flex md:px-6">
                  <button
                    onClick={onSelectTabOutMoney(1)}
                    className={clsx("relative pb-3", {
                      "text-accent": selectedTabOutMoney === 1,
                    })}
                  >
                    <span>На платежную систему</span>
                    <span
                      className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent", {
                        "opacity-0": selectedTabOutMoney !== 1,
                        "opacity-100": selectedTabOutMoney === 1,
                      })}
                    />
                  </button>
                  <button
                    onClick={onSelectTabOutMoney(2)}
                    className={clsx("relative pb-3", {
                      "text-accent": selectedTabOutMoney === 2,
                    })}
                  >
                    <span>На баланс</span>
                    <span
                      className={clsx("absolute inset-x-0 -bottom-px h-1 bg-accent", {
                        "opacity-0": selectedTabOutMoney !== 2,
                        "opacity-100": selectedTabOutMoney === 2,
                      })}
                    />
                  </button>
                </div>
                {/* MOBILE TABS END */}
                {/* ACTIONS END */}
              </div>
              {/* ACTIONS END */}

              {/* RADIO START */}
              {selectedTabOutMoney === 1 && (
                <div className="space-y-6 md:space-y-8 md:px-6">
                  <div className="space-y-3">
                    <RadioGroup defaultValue="option-one">
                      {mockPayments.map((item, indx) => {
                        const { name, description } = item
                        return (
                          <div
                            key={indx}
                            className="flex space-x-2"
                          >
                            <RadioGroupItem
                              className="mt-1"
                              value={`${indx}`}
                              id={`${indx}`}
                            />
                            <Label
                              className="flex flex-col text-left"
                              htmlFor={`${indx}`}
                            >
                              <span className="font-bold text-foreground">{name}</span>
                              <span className="text-xs text-grey-extra-hard">{description}</span>
                            </Label>
                          </div>
                        )
                      })}
                    </RadioGroup>
                  </div>

                  {/* FIELDS START */}
                  <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4">
                    <div className="min-w-30 flex-1 space-y-0.5">
                      <Label className="block">Сумма, $</Label>
                      <Input
                        placeholder="Сумма, $"
                        defaultValue={"1900"}
                      />
                    </div>
                    <div className="w-[68%] space-y-0.5 md:w-full">
                      <Label className="block">Кошелек</Label>
                      <Input
                        placeholder="Кошелек"
                        defaultValue={"simonov94@yandex.ru"}
                      />
                    </div>
                  </div>
                  {/* FIELDS END */}
                </div>
              )}
              {/* RADIO END */}

              {/* BALANCE START */}
              {selectedTabOutMoney === 2 && (
                <div className="space-y-4 md:px-6">
                  <p>Выберите сумму которая поступит на Ваш текущий баланс Zharavoz.tv</p>
                  <div className="max-w-44 space-y-0.5 md:max-w-full">
                    <Label className="block">Сумма, $</Label>
                    <Input
                      placeholder="Сумма, $"
                      defaultValue={"1900"}
                    />
                  </div>
                </div>
              )}
              {/* BALANCE END */}
            </div>
          </div>

          {/* FOOTER ACTIONS */}
          <div className="mt-auto flex items-center border-t px-6 py-4 md:flex-col md:items-start md:border-t-0">
            <div className="mr-4 md:mr-0 md:flex md:items-center md:text-xl">
              <span className="md:hidden">Итого: </span>
              <div className="hidden font-semibold text-grey-hard md:mr-1 md:inline-flex">{selectedTabOutMoney === 1 ? "Итого к выводу: " : "Итого на баланс: "}</div>
              <b>$ 1900.00</b>
            </div>
            <div className="ml-auto flex items-center justify-end  space-x-2 md:ml-0 md:mt-8">
              <Button
                className="uppercase"
                onClick={toggleModal}
                variant={"outline"}
              >
                Отмена
              </Button>
              <Button
                className="uppercase"
                onClick={toggleModal}
              >
                отправить запрос
              </Button>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  )
}
