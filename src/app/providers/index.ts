import { createContext } from "react";
import { currency } from "@/app/providers/pt-BR/numbers";
import { date } from "@/app/providers/pt-BR/dateTime";
import { Location, matchRoutes } from "react-router-dom";
import routes from "@/router/routes";

export type IFormatter<Input, Output> = {
  format: (arg: Input) => Output | never;
}

const getRoute = (location: Partial<Location>) => {
  const routesMatched = matchRoutes(routes, location)
  const { route = {}, ...rest } = routesMatched?.pop() || {}
  return { ...route, ...rest };
}

export const data = {
  formatters: {
    currency,
    date
  },
  getRoute
};
const AppContext = createContext(data)

export default AppContext;
