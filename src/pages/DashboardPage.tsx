import AppContext from "@/app/providers";
import IncomesExpenses from "@/components/charts/IncomesExpenses";
import { loadBalance } from "@/store/balance";
import { RootState } from "@/store/state";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DashboardPage() {
  // const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const { totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);

  useEffect(() => {
    dispatch(loadBalance())
  }, [dispatch])

  return (
    <AppContext.Consumer>
      {({ formatters : { currency } }) => <>
        {/* <h1>Dashboard Page</h1> */}

        <div className="flex gap-4 my-4 w-full">
          <div className={`py-2 px-4 bg-white rounded-md flex-grow shadow-lg`}>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-0">Incomes</h3>
            <p className="text-green-400">{currency.format(totalIncomes)}</p>
          </div>
          <div className={`py-2 px-4 bg-white rounded-md flex-grow shadow-lg`}>
            <h3 className="text-2xl font-semibold mb-2 lg:mb-0">Expenses</h3>
            <p className="text-red-400">{currency.format(totalExpenses)}</p>
          </div>
        </div>

        <IncomesExpenses />
      </>}
    </AppContext.Consumer>
  )
}

export default DashboardPage
