import clsx from "clsx";
import { type UseFormRegisterReturn } from "react-hook-form";

import PreOrderFormClickableLabel from "./ClickableLabel";

import Checked from "@renew-img/pre-order/form/checked.svg";

export default function PreOrderInquiryCheckbox({
  label,
  selectorId,
  register,
  className,
}: {
  label: string;
  selectorId: string;
  register: UseFormRegisterReturn;
} & Partial<{
  className: string;
}>) {
  return (
    <PreOrderFormClickableLabel selectorId={selectorId} className="checkbox-label" title={label}>
      <input
        type="checkbox"
        id={selectorId}
        className={clsx("pre-order-inquiry-clickable-input input-checkbox", className)}
        aria-label={label}
        {...register}
      />
      <figure className="pre-order-checkbox-icon">
        <Checked width={16} height={16} viewBox="0 0 16 16" />
      </figure>
    </PreOrderFormClickableLabel>
  );
}
