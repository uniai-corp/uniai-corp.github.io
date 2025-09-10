"use client";

import { useMemo } from "react";

import PreOrderFormField from "./form/Field";
import PreOrderInquiryCheckbox from "./form/Check";

import useLocale from "@/hooks/useLocale";
import usePreOrderFormContext from "@/hooks/form/useContext";

export default function PreOrderFormBreedType() {
  const { t } = useLocale();

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

  const { register, onCheck, errors } = usePreOrderFormContext({
    checkListKey: "breed_type_list",
    checkList: list.map(item => item.value),
  });

  return (
    <PreOrderFormField title={t("page/pre-order/form/breed-type", "사육 구분")} required={true}>
      <input
        type="hidden"
        {...register("breed_type_list", {
          required: t(
            "page/pre-order/form/validation/check/breed-type",
            "사육 구분를 선택해 주세요.",
          ) as string,
        })}
      />
      <div className="pre-order-inquiry-clickable-list">
        {list.map(item => (
          <PreOrderInquiryCheckbox
            key={item.renderKey}
            selectorId={item.selectorId}
            label={item.name}
            value={item.value}
            register={register(`breed_type_check.${item.value}`)}
            onChange={onCheck}
          />
        ))}
        {errors.breed_type_list && (
          <div className="pre-order-inquiry-error">
            <p>{errors.breed_type_list.message}</p>
          </div>
        )}
      </div>
    </PreOrderFormField>
  );
}
