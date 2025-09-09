"use client";

import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderFormTextArea from "./form/TextArea";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormContents() {
  const { t } = useLocale();
  const { register } = useFormContext();

  return (
    <PreOrderFormField title={t("page/pre-order/form/contents", "문의 내용")}>
      <PreOrderFormTextArea
        register={register("contents")}
        label={t("page/pre-order/form/contents", "문의 내용")}
        placeholder={
          t("page/pre-order/form/contents/placeholder", "문의 내용을 입력해 주세요.") as string
        }
      />
    </PreOrderFormField>
  );
}
