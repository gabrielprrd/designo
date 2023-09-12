import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export function TextArea({ className, name, ...props }: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      id={name}
      className={`absolute left-0 w-full border-b bg-transparent px-4 pr-32 text-white placeholder:text-white hover:border-b-2 focus:border-b-2 focus:outline-none ${
        className ?? ""
      }`}
      {...register(name)}
      {...props}
    />
  );
}
