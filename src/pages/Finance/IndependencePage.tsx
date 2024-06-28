import AppContext from "@/app/providers";
import IncomesExpenses from "@/components/charts/IncomesExpenses"
import { InputMoney } from "@/components/ui/input-money"
import { loadAssets, loadBalance } from "@/store/balance";
import { RootState } from "@/store/state";
import { Slider } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function IndependencePage() {
  const { totalAssets, totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);
  const [count, setCount] = useState(10)
  const [assets, setAsset] = useState(totalAssets)
  const [income, setIncome] = useState(totalIncomes)
  const [expense, setExpense] = useState(totalExpenses)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAssets())
    dispatch(loadBalance())
  }, [dispatch])

  return (
    <AppContext.Consumer>
      {({ formatters : { currency } }) => <>
        <IncomesExpenses years={count} assets={assets} incomes={income} expenses={expense} />

        <div className="p-4">
          <h3 className="font-bold h3 mt-14">Calculator to Independence</h3>

          <label>
            Projecting {count}
            <Slider
              min={1}
              max={50}
              defaultValue={10}
              onChange={(_e, v) => setCount(v as number)}
            />
          </label>

          <div className="flex gap-4">
            <label className="flex-grow">
              Monthly Incomes
              <InputMoney
                formatter={currency}
                defaultValue={income}
                onChange={({ target: { value }}) => setIncome(parseFloat(value))}
              />
            </label>

            <label className="flex-grow">
              Monthly Expenses
              <InputMoney
                formatter={currency}
                defaultValue={expense}
                onChange={({ target: { value }}) => setExpense(parseFloat(value))}
              />
            </label>

            <label className="flex-grow">
              Actual Assets
              <InputMoney
                formatter={currency}
                defaultValue={assets}
                onChange={({ target: { value }}) => setAsset(parseFloat(value))}
              />
            </label>

          </div>

        </div>
      </>}
    </AppContext.Consumer>
  )
}

export default IndependencePage
