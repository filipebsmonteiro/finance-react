import { setTitle } from "@/store/layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function BalancePage() {
  // const [count, setCount] = useState(0)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Balance (Entrance | Exits)'));
  })

  return (
    <>
      BalancePage
    </>
  )
}

export default BalancePage
