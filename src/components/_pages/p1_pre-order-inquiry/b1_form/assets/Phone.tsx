"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormPhone() {
  const { t } = useLocale();
  const { register } = useFormContext();

  return (
    <PreOrderFormField title={t("page/pre-order/form/contact", "연락처")} required={true}>
      <PreOrderFormInput
        register={register("phone", { required: true })}
        label={t("page/pre-order/form/contact", "연락처")}
        placeholder={
          t("page/pre-order/form/contact/placeholder", "연락처을 입력해 주세요.") as string
        }
      />
    </PreOrderFormField>
  );
}
