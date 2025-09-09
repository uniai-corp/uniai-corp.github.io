"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormAddress() {
  const { t } = useLocale();
  const { register } = useFormContext();

  return (
    <PreOrderFormField title={t("page/pre-order/form/address", "주소")}>
      <PreOrderFormInput
        register={register("address")}
        label={t("page/pre-order/form/address", "주소")}
        placeholder={
          t("page/pre-order/form/address/placeholder", "주소를 입력해 주세요.") as string
        }
      />
    </PreOrderFormField>
  );
}
