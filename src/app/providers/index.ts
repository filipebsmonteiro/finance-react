import { createContext } from "react";
import { currency } from "@/app/providers/pt-BR/numbers";
import { date } from "@/app/providers/pt-BR/dateTime";

export type IFormatter<Input, Output> = {
  format: (arg: Input) => Output | never;
}

export const data = {
  formatters: {
    currency,
    date
  },
};
const AppContext = createContext(data)

export default AppContext;
