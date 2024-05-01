import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { setTitle } from "@/store/layout";
import { Edit } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonalAssetsForm from "./Balance/PersonalAssetsForm";
import AppContext from "@/app/providers";
import { RootState } from "@/store/state";


function BalancePage() {
  const { totalAssets } = useSelector((state: RootState) => state.balance);
  // const contextType = AppContext.Consumer

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle('Assets'));
  })

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl">Personal Assets</p>

        <div className="flex items-center">
          <AppContext.Consumer>
            {({ formatters : { currency } }) =>
              <p className="text-blue-500 text-xl">{currency.format(totalAssets)}</p>
            }
          </AppContext.Consumer>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="ml-4 p-1 bg-transparent hover:bg-transparent hover:text-blue-500"
                variant="outline"
              >
                <Edit />
              </Button>
            </DialogTrigger>
            <PersonalAssetsForm />
          </Dialog>
        </div>
        {/* <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none rounded-lg px-6 py-2 text-white font-semibold shadow">View Info</button> */}
      </div>
    </>
  )
}

export default BalancePage
