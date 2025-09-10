"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormName() {
  const { t } = useLocale();
  const {
    register,
    formState: { errors },
  } = useFormContext<PreOrderInquiryForm>();

  return (
    <PreOrderFormField title={t("page/pre-order/form/name", "이름")} required={true}>
      <PreOrderFormInput
        register={register("name", {
          required: t("page/pre-order/form/validation/required", "필수 입력입니다.") as string,
        })}
        label={t("page/pre-order/form/name", "이름")}
        placeholder={t("page/pre-order/form/name/placeholder", "이름을 입력해 주세요.") as string}
      />
      {errors.name && (
        <div className="pre-order-inquiry-error">
          <p>{errors.name.message}</p>
        </div>
      )}
    </PreOrderFormField>
  );
}
