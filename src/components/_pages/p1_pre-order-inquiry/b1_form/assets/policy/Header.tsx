"use client";

import { useFormContext } from "react-hook-form";
import PreOrderInquiryCheckbox from "../form/Check";
import useLocale from "@/hooks/useLocale";
import Expand from "@renew-img/pre-order/form/expand.svg";

export default function PreOrderFormPrivatePolicyHeader() {
  const { locale, t } = useLocale();
  const { register } = useFormContext();

  return (
    <summary className="pre-order-inquiry-policy-header">
      <div className="pre-order-inquiry-policy-side pre-order-inquiry-policy-left">
        <PreOrderInquiryCheckbox
          selectorId="pre_order_private_policy_agree"
          label={t(
            "page/pre-order/form/policy-agree/notice",
            "개인정보 수집 및 이용에 동의합니다.",
          )}
          register={register("privacy_agreement", { required: true })}
        />
        <span className="pre-order-inquiry-policy-required">
          ({locale === "ko" ? "필수" : "Required"})
        </span>
      </div>
      <div className="pre-order-inquiry-policy-side pre-order-inquiry-policy-right">
        <span className="pre-order-inquiry-policy-detail">
          {t("page/pre-order/form/policy-agree/view-detail", "상세보기")}
        </span>
        <figure className="pre-order-expand-icon">
          <Expand width={24} height={24} viewBox="0 0 24 24" />
        </figure>
      </div>
    </summary>
  );
}
