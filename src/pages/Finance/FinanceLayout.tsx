import { Outlet } from "react-router-dom"

function FinanceLayout() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>FinanceLayout</h1>
      <Outlet />
    </>
  )
}

export default FinanceLayout
