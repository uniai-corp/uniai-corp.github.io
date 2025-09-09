"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import PreOrderFormField from "./form/Field";
import PreOrderInquiryCheckbox from "./form/Check";

import useLocale from "@/hooks/useLocale";

export default function PreOrderFormServicePackage() {
  const { t } = useLocale();
  const { register } = useFormContext();
  const list = useMemo(
    () => [
      {
        renderKey: "homepage/pre-order/form/packages/basic",
        selectorId: "pre_order_packages_basic",
        value: "basic",
        name: t("page/pre-order/form/packages/basic", "스마트 플러스 기본 패키지") as string,
      },
      {
        renderKey: "homepage/pre-order/form/packages/weight",
        selectorId: "pre_order_packages_weight",
        value: "weight",
        name: t("page/pre-order/form/packages/weight", "체중 분석 패키지") as string,
      },
      {
        renderKey: "homepage/pre-order/form/packages/ai-management",
        selectorId: "pre_order_packages_ai_management",
        value: "ai",
        name: t(
          "page/pre-order/form/packages/ai-management",
          "인공지능 맞춤형 사양 매니저 패키지",
        ) as string,
      },
      {
        renderKey: "homepage/pre-order/form/packages/robot",
        selectorId: "pre_order_packages_robot",
        value: "robot",
        name: t("page/pre-order/form/packages/robot", "로봇 패키지") as string,
      },
    ],
    [t],
  );

  return (
    <PreOrderFormField title={t("page/pre-order/form/packages", "서비스 패키지")} required={true}>
      <div className="pre-order-inquiry-clickable-list">
        {list.map(item => (
          <PreOrderInquiryCheckbox
            key={item.renderKey}
            selectorId={item.selectorId}
            label={item.name}
            register={register(`service_package_check.${item.value}`)}
          />
        ))}
      </div>
    </PreOrderFormField>
  );
}
