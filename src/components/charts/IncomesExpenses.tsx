import { RootState } from '@/store/state';
import { LineChart } from '@mui/x-charts/LineChart'
import { useSelector } from 'react-redux';

// interface IncomesExpensesPropsI {
//   years: number
// }

// function IncomesExpenses({ years }: IncomesExpensesPropsI) {
function IncomesExpenses() {
  const { totalAssets, totalIncomes, totalExpenses } = useSelector((state: RootState) => state.balance);

  const years = 10
  
  // Array of strings in years forward
  const months = Array.from({ length: years * 12 }, (_, i) => {
    const date = new Date()
    date.setMonth(date.getMonth() + i)
    return `${date.toLocaleString('default', { month: 'long' })}/${date.getFullYear()}`
    return `${date.getMonth() + 1}/${date.getFullYear()}`
  })

  const restMonthly = totalIncomes - totalExpenses;
  
  let patrimony = totalAssets;
  // const asset = Array.from({ length: years * 12 }, () => patrimony += restMonthly)

  patrimony = totalAssets
  const incomes = Array.from({ length: years * 12 }, () => {
    patrimony += restMonthly
    return patrimony * 0.01
  })

  //  0,32% = 0,0032
  let expensesSum = totalExpenses
  const expenses = Array.from({ length: years * 12 }, () => expensesSum += (expensesSum * 0.0032))

  return (
    <>
      <LineChart
        xAxis={[{ data: months, scaleType: 'point', }]}
        series={[
          // { data: asset, label: `Assets`, color: `blue` },
          { data: incomes, label: `Incomes`, color: `#4ADE80` },
          { data: expenses, label: `Expenses`, color: `#F87171` },
        ]}
        width={1000}
        height={300}
      />
    </>
  )
}

export default IncomesExpenses
