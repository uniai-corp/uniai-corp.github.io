"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderInquiryCheckbox from "./form/Check";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormBreedType() {
  const { t } = useLocale();
  const { register } = useFormContext();
  const list = useMemo(
    () => [
      {
        renderKey: "homepage/pre-order/form/breed-type/broiler",
        selectorId: "pre_order_breed_type_broiler",
        value: "broiler",
        name: t("page/pre-order/form/breed-type/broiler", "육계") as string,
      },
      {
        renderKey: "homepage/pre-order/form/breed-type/layer",
        selectorId: "pre_order_breed_type_layer",
        value: "layer",
        name: t("page/pre-order/form/breed-type/layer", "산란계") as string,
      },
      {
        renderKey: "homepage/pre-order/form/breed-type/ps",
        selectorId: "pre_order_breed_type_ps",
        value: "ps",
        name: t("page/pre-order/form/breed-type/ps", "종계") as string,
      },
      {
        renderKey: "homepage/pre-order/form/breed-type/gps",
        selectorId: "pre_order_breed_type_gps",
        value: "gps",
        name: t("page/pre-order/form/breed-type/gps", "원종계") as string,
      },
      {
        renderKey: "homepage/pre-order/form/breed-type/other",
        selectorId: "pre_order_breed_type_other",
        value: "other",
        name: t("page/pre-order/form/breed-type/other", "기타") as string,
      },
    ],
    [t],
  );

  return (
    <PreOrderFormField title={t("page/pre-order/form/breed-type", "서비스 패키지")} required={true}>
      <div className="pre-order-inquiry-clickable-list">
        {list.map(item => (
          <PreOrderInquiryCheckbox
            key={item.renderKey}
            selectorId={item.selectorId}
            label={item.name}
            register={register(`breed_type_check.${item.value}`)}
          />
        ))}
      </div>
    </PreOrderFormField>
  );
}
