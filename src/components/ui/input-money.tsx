import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Input } from "@/components/ui/input";

interface InputProps<T> extends InputHTMLAttributes<T> {
  formatter: Intl.NumberFormat;
} 

export type { InputProps }

function InputMoney(props: InputProps<HTMLInputElement>) {
  const { defaultValue = 0, formatter, onChange, ...restProps } = props;
  const initial = formatter.format(Number(defaultValue));
  const [value, setValue] = useState(initial);

  const handlerChange = (value: string) => {
    const digits = value.toString().replace(/\D/g, "");
    const inputNum = Number(digits);
    const fraction = inputNum / 100;
    const formatted = formatter.formatToParts(fraction);

    setValue(formatted.map(({ value }) => value).join(''))

    if (typeof onChange !== 'undefined') {
      const target: EventTarget & HTMLInputElement = {
        value: fraction.toString()
      }  as EventTarget & HTMLInputElement;
      onChange({ target } as ChangeEvent<HTMLInputElement>)
    }
  };

  return (
    <Input
      {...restProps}
      type="text"
      onChange={(ev) => handlerChange(ev.target.value)}
      value={value}
    />
  );
}

export { InputMoney }