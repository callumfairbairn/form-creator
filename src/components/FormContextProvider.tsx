import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { FormValues } from "../types";

type FormContextValue = [
  FormValues | undefined,
  Dispatch<SetStateAction<FormValues | undefined>> | (() => void)
]

export const FormContext = createContext<FormContextValue>([undefined, () => {}])

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const formContextHook = useState<FormValues | undefined>(undefined)

  return <FormContext.Provider value={formContextHook}>{children}</FormContext.Provider>
}
