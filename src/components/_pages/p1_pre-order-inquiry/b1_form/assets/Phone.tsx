"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormPhone() {
  const { t } = useLocale();
  const {
    register,
    formState: { errors },
  } = useFormContext<PreOrderInquiryForm>();

  return (
    <PreOrderFormField title={t("page/pre-order/form/contact", "연락처")} required={true}>
      <PreOrderFormInput
        type="tel"
        register={register("phone", {
          required: t("page/pre-order/form/validation/required", "필수 입력입니다.") as string,
        })}
        label={t("page/pre-order/form/contact", "연락처")}
        placeholder={
          t("page/pre-order/form/contact/placeholder", "연락처을 입력해 주세요.") as string
        }
      />
      {errors.phone && (
        <div className="pre-order-inquiry-error">
          <p>{errors.phone.message}</p>
        </div>
      )}
    </PreOrderFormField>
  );
}
