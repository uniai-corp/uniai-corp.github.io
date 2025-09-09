import clsx from "clsx";
import type { UseFormRegisterReturn } from "react-hook-form";

export default function PreOrderFormTextArea({
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
    <textarea
      autoComplete="off"
      className={clsx("pre-order-inquiry-input textarea", className)}
      aria-label={label}
      {...register}
      {...(selectorId ? { id: selectorId } : {})}
      {...(placeholder ? { placeholder } : {})}
    />
  );
}
