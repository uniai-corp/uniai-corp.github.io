"use client";

import { useRef } from "react";
import PageSubVisual from "@/components/page-frame/SubVisual";
import useLocale from "@/hooks/useLocale";

export default function PagePreOrderVisual() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  return (
    <PageSubVisual className="page-pre-order-visual" ref={sectionRef}>
      <h2 ref={titleRef}>
        <span>{t("page/pre-order/visual/title/upper", "치킨몽거 스마트 플러스")}</span>
        <span>{t("page/pre-order/visual/title/lower", "사전구매")}</span>
      </h2>
      <p ref={descriptionRef}>
        {t(
          "page/pre-order/visual/description",
          "더 쉽고 똑똑하게, 양계 스마트 축사의 새로운 기준!",
        )}
      </p>
    </PageSubVisual>
  );
}
