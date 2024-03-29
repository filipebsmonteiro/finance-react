import { ChangeEvent, InputHTMLAttributes, Reducer, useReducer } from "react";
import { Input } from "@/components/ui/input";

type ValueType = string | number;

interface InputProps<T> extends InputHTMLAttributes<T> {
  formatter: Intl.NumberFormat;
} 

export type { InputProps }

function InputMoney(props: InputProps<HTMLInputElement>) {
  const { value: initialValue = 0, formatter, onChange, ...restProps } = props;
  const initial = formatter.format(Number(initialValue));

  const reducer: Reducer<ValueType, ValueType> = (prevState, nextVal) => {
    const digits = nextVal.toString().replace(/\D/g, "");
    const inputNum = Number(digits);
    const fraction = inputNum / 100;
    const formatted = formatter.formatToParts(fraction);

    if (typeof onChange !== 'undefined') {
      const target: EventTarget & HTMLInputElement = {
        value: fraction.toString()
      }  as EventTarget & HTMLInputElement;
      onChange({ target } as ChangeEvent<HTMLInputElement>)
    }

    return formatted.map(({ value }) => value).join('');
  };
  const [value, setValue] = useReducer(reducer, initial);

  return (
    <Input
      {...restProps}
      type="text"
      onChange={(ev) => setValue(ev.target.value)}
      value={value}
    />
  );
}

export { InputMoney }