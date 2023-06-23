import type { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export function TextArea({ className, ...props }: TextAreaProps) {
  const { register } = useFormContext();

  return (
    <textarea
      id={props.name}
      className={`border-b bg-transparent p-2 text-white hover:border-b-2 focus:border-b-2 focus:outline-none ${
        className ?? ""
      }`}
      {...register(props.name)}
      {...props}
    />
  );
}
