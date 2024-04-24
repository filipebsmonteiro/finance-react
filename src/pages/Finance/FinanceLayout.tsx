import { data } from "@/app/providers";
import { loadAssets, loadBalance } from "@/store/balance";
import { useDispatch } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom"

function FinanceLayout() {
  const location = useLocation();
  const { getRoute } = data;
  const route = getRoute(location);
  if (route.id === `Finance`) {
    Navigate({ to: `/finance/balance`})
  }

  const dispatch = useDispatch();

  dispatch(loadAssets())
  dispatch(loadBalance())

  return (
    <>
      {/* {route.id === `Finance` && <>
        <Link to="assets">Personal Assets</Link><br/>
        <Link to="balance">Balance</Link>
      </>} */}
      <Outlet />
    </>
  )
}

export default FinanceLayout
