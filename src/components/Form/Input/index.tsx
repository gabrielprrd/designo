import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ className, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className={`border-b bg-transparent p-2 text-white hover:border-b-2 focus:border-b-2 focus:outline-none ${
        className ?? ""
      }`}
      {...register(props.name)}
      {...props}
    />
  );
}
