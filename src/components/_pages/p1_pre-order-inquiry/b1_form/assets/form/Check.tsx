import clsx from "clsx";
import { type UseFormRegisterReturn } from "react-hook-form";

import PreOrderFormClickableLabel from "./ClickableLabel";

import Checked from "@renew-img/pre-order/form/checked.svg";
import { useCallback } from "react";

export default function PreOrderInquiryCheckbox({
  label,
  selectorId,
  value,
  register,
  className,
  onChange,
}: {
  label: string;
  selectorId: string;
  register: UseFormRegisterReturn;
} & Partial<{
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (typeof register.onChange !== "undefined") register.onChange(e);
      if (typeof onChange !== "undefined") onChange(e);
    },
    [register, onChange],
  );
  return (
    <PreOrderFormClickableLabel selectorId={selectorId} className="checkbox-label" title={label}>
      <input
        type="checkbox"
        id={selectorId}
        className={clsx("pre-order-inquiry-clickable-input input-checkbox", className)}
        aria-label={label}
        {...register}
        value={value}
        onChange={handleChange}
      />
      <figure className="pre-order-checkbox-icon">
        <Checked width={16} height={16} viewBox="0 0 16 16" />
      </figure>
    </PreOrderFormClickableLabel>
  );
}
