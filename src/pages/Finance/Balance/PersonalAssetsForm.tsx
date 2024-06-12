import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { InputMoney } from "@/components/ui/input-money"
import { Label } from "@/components/ui/label"
import AppContext from "@/app/providers"
import { setAssets } from "@/store/balance"
import { DialogClose } from "@radix-ui/react-dialog"
import { BaseSyntheticEvent, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/state"


function PersonalAssetsForm() {
  const { totalAssets } = useSelector((state: RootState) => state.balance)
  const assets = useRef(totalAssets || '0');
  const dispatch = useDispatch();

  const handleSubmit = (evt: BaseSyntheticEvent) => {
    evt.stopPropagation();
    dispatch(setAssets(assets.current))
  };

  return (
    <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
      <DialogHeader>
        <DialogTitle>Edit Your Assets </DialogTitle>
        <DialogDescription>
          Change the amount of your consolidated assets. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="items-center grid grid-cols-5 gap-4">
          <Label htmlFor="assets" className="text-right col-span-2">
            Sum Total Assets
          </Label>
          <AppContext.Consumer>
            {({ formatters: { currency } }) =>
              <InputMoney
                id="assets"
                formatter={currency}
                onChange={({ target: { value } }) => assets.current = value}
                onKeyUp={evt => {
                  evt.key === `Enter`
                  ? document.getElementById('save')?.click()
                  : null
                }}
                value={totalAssets}
                className="col-span-3"
              />
            }
          </AppContext.Consumer>
        </div>
      </div>
      <DialogFooter>
        <DialogClose
          id="save"
          className="rounded-xl bg-black text-white py-2 px-4"
          onClick={(evt) => handleSubmit(evt)}>Save changes</DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}

export default PersonalAssetsForm
