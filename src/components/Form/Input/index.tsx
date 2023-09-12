import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function Input({ className, name, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <input
      id={name}
      className={`absolute h-full w-full border-b bg-transparent px-4 pr-32 text-white placeholder:text-white hover:border-b-2 focus:border-b-2 focus:outline-none ${
        className ?? ""
      }`}
      {...register(name)}
      {...props}
    />
  );
}
