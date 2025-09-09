"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormInput from "./form/Input";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormFarmScale() {
  const { t } = useLocale();
  const { register } = useFormContext();

  return (
    <PreOrderFormField title={t("page/pre-order/form/breed-scale", "농장 규모")}>
      <PreOrderFormInput
        register={register("total_breeding_scale")}
        label={t("page/pre-order/form/breed-scale", "농장 규모")}
        placeholder={
          t("page/pre-order/form/breed-scale/placeholder", "농장 규모를 입력해 주세요.") as string
        }
      />
    </PreOrderFormField>
  );
}
