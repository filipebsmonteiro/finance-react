import { createContext } from "react";
import { formatter as ptBR } from "./pt-BR/currency";

// import { useState } from "react";
// const [Default, setDefault] = useState('ptBR');
// export { setDefault };

export const data = {
  formatters: {
    ptBR,
  },
  formatter: ptBR
};
const AppContext = createContext(data)

export default AppContext;
