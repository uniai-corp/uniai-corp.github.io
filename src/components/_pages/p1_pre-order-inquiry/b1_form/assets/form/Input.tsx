import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

export default function PreOrderFormInput({
  className,
  type = "text",
  label,
  selectorId,
  register,
  placeholder,
}: {
  label: string;
  register: UseFormRegisterReturn;
} & Partial<{
  type: React.HTMLInputTypeAttribute;
  className: string;
  selectorId: string;
  placeholder: string;
}>) {
  return (
    <input
      type={type}
      autoComplete="off"
      className={clsx("pre-order-inquiry-input", className)}
      aria-label={label}
      {...register}
      {...(selectorId ? { id: selectorId } : {})}
      {...(placeholder ? { placeholder } : {})}
    />
  );
}
