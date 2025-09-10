"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormEmail() {
  const { t } = useLocale();
  const {
    register,
    formState: { errors },
  } = useFormContext<PreOrderInquiryForm>();

  return (
    <PreOrderFormField title={t("page/pre-order/form/email", "이메일")} required={true}>
      <PreOrderFormInput
        type="email"
        register={register("email", {
          required: t("page/pre-order/form/validation/required", "필수 입력입니다.") as string,
        })}
        label={t("page/pre-order/form/email", "이메일")}
        placeholder={
          t("page/pre-order/form/email/placeholder", "이메일을 입력해 주세요.") as string
        }
      />
      {errors.email && (
        <div className="pre-order-inquiry-error">
          <p>{errors.email.message}</p>
        </div>
      )}
    </PreOrderFormField>
  );
}
