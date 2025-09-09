import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

export default function PreOrderFormInput({
  className,
  label,
  selectorId,
  register,
  placeholder,
}: {
  label: string;
  register: UseFormRegisterReturn;
} & Partial<{
  className: string;
  selectorId: string;
  placeholder: string;
}>) {
  return (
    <input
      type="text"
      autoComplete="off"
      className={clsx("pre-order-inquiry-input", className)}
      aria-label={label}
      {...register}
      {...(selectorId ? { id: selectorId } : {})}
      {...(placeholder ? { placeholder } : {})}
    />
  );
}
