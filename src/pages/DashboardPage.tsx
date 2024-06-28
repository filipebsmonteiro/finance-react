import AppContext from "@/app/providers";
import IncomesExpenses from "@/components/charts/IncomesExpenses";
import { loadAssets, loadBalance } from "@/store/balance";
import { loadLastMonths } from "@/store/ipca";
import { RootState } from "@/store/state";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function DashboardPage() {
  const dispatch = useDispatch()
  const { totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);

  useEffect(() => {
    dispatch(loadAssets())
    dispatch(loadBalance())
    dispatch(loadLastMonths({}))
  }, [dispatch])

  return (
    <AppContext.Consumer>
      {({ formatters : { currency } }) => <>
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

        <h2 className="mt-16 font-bold text-center">Projection for the next 10 years</h2>
        <IncomesExpenses years={10} />
      </>}
    </AppContext.Consumer>
  )
}

export default DashboardPage
