"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderInquiryRadio from "./form/Radio";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormInquiryType() {
  const { t } = useLocale();
  const { register } = useFormContext();
  const list = useMemo(
    () => [
      {
        renderKey: "homepage/pre-order/form/inquiry-type/exist",
        selectorId: "pre_order_inquiry_type_exist",
        value: "exist",
        name: t("page/pre-order/form/inquiry-type/exist", "기존 사용자") as string,
      },
      {
        renderKey: "homepage/pre-order/form/inquiry-type/new",
        selectorId: "pre_order_inquiry_type_new",
        value: "new",
        name: t("page/pre-order/form/inquiry-type/new", "신규 사용자") as string,
      },
      {
        renderKey: "homepage/pre-order/form/inquiry-type/other",
        selectorId: "pre_order_inquiry_type_other",
        value: "other",
        name: t("page/pre-order/form/inquiry-type/other", "기타") as string,
      },
    ],
    [t],
  );

  return (
    <PreOrderFormField title={t("page/pre-order/form/inquiry-type", "문의 종류")} required={true}>
      <div className="pre-order-inquiry-clickable-list">
        {list.map(item => (
          <PreOrderInquiryRadio
            key={item.renderKey}
            selectorId={item.selectorId}
            label={item.name}
            value={item.value}
            register={register("inquiry_type", { required: true })}
          />
        ))}
      </div>
    </PreOrderFormField>
  );
}
