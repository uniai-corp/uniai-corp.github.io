"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormEmail() {
  const { t } = useLocale();
  const { register } = useFormContext();

  return (
    <PreOrderFormField title={t("page/pre-order/form/email", "이메일")} required={true}>
      <PreOrderFormInput
        register={register("email", { required: true })}
        label={t("page/pre-order/form/email", "이메일")}
        placeholder={
          t("page/pre-order/form/email/placeholder", "이메일을 입력해 주세요.") as string
        }
      />
    </PreOrderFormField>
  );
}
