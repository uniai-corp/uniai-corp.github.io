import clsx from "clsx";
import { type UseFormRegisterReturn } from "react-hook-form";
import PreOrderFormClickableLabel from "./ClickableLabel";

export default function PreOrderInquiryRadio({
  label,
  selectorId,
  register,
  value,
  className,
}: {
  label: string;
  selectorId: string;
  register: UseFormRegisterReturn;
  value: string;
} & Partial<{
  className: string;
}>) {
  return (
    <PreOrderFormClickableLabel selectorId={selectorId} className="radio-label" title={label}>
      <input
        type="radio"
        id={selectorId}
        className={clsx("pre-order-inquiry-clickable-input input-radio", className)}
        aria-label={label}
        value={value}
        {...register}
      />
    </PreOrderFormClickableLabel>
  );
}
