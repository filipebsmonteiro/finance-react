import { RootState } from '@/store/state';
import { LineChart } from '@mui/x-charts/LineChart'
import { useSelector } from 'react-redux';

interface IncomesExpensesPropsI {
  years?: number
  assets?: number
  incomes?: number
  expenses?: number
}

function IncomesExpenses({ years = 10, assets, incomes, expenses }: IncomesExpensesPropsI) {
  const { totalAssets, totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);
  const initialAssets = assets ?? totalAssets
  const initialIncomes = incomes ?? totalIncomes
  const initialExpenses = expenses ?? totalExpenses;

  // Array of strings in years forward
  const months = Array.from({ length: years * 12 }, (_, i) => {
    const date = new Date()
    date.setMonth(date.getMonth() + i)
    return `${date.toLocaleString('default', { month: 'long' })}/${date.getFullYear()}`
  })

  const restMonthly = initialIncomes - initialExpenses;
  let patrimony = initialAssets;
  const incomesArray = Array.from({ length: years * 12 }, () => {
    patrimony += restMonthly
    return patrimony * 0.01 // 1%
  })

  const { list } = useSelector((state: RootState) => state.ipca);
  const ipcaAverage = list.length
    ? parseFloat(
        (list.reduce((acc, cur) => acc + parseFloat(cur.V), 0) / list.length).toFixed(2)
      )
    : 0.32 // 0,32%

  let expensesSum = initialExpenses
  const expensesArray = Array.from({ length: years * 12 }, () => expensesSum += (expensesSum * (ipcaAverage/100)))

  return (
    <>
      <LineChart
        xAxis={[{ data: months, scaleType: 'point' }]}
        series={[
          // { data: asset, label: `Assets`, color: `blue` },
          { data: incomesArray, label: `Incomes`, color: `#4ADE80` },
          { data: expensesArray, label: `Expenses`, color: `#F87171` },
        ]}
        width={1000}
        height={300}
      />
    </>
  )
}

export default IncomesExpenses
