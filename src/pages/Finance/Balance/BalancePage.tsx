import constants from "@/app/constants";
import AppContext, { data } from "@/app/providers";
import { setTitle } from "@/store/layout";
import { RootState } from "@/store/state";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function BalancePage() {
  const location = useLocation();
  const { getRoute } = data;
  const route = getRoute(location);
  const { totalAssets, records } = useSelector((state: RootState) => state.balance);
  const totalExit = useRef(0);
  const totalEntrance = useRef(0);

  records.map((record) =>
    record.type === constants.FINANCE.BALANCE.INCOME
    ? totalEntrance.current += record.value
    : totalExit.current += record.value
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Balance Information'));
  })

  return (
    <>
      <AppContext.Consumer>
        {({ formatters : { currency } }) =>
          <>
            <p className="text-xl">
              Total: <span className="text-blue-500">{currency.format(totalAssets)}</span>
            </p>
            <p className="text-xl">
              Monthly: <span className="text-blue-500">{currency.format(totalEntrance.current - totalExit.current)}</span>
            </p>
          </>
        }
      </AppContext.Consumer>
      <div className="flex justify-between items-center mb-6">
      {route.id === `Finance` && <>
        <Redirect to="assets">Personal Assets</Redirect><br/>
        <Link to="balance">Balance</Link>
      </>}

        
        {/* <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Info</button> */}
      </div>
    </>
  )
}

export default BalancePage
