"use client";

import { useRef } from "react";
import PageSubVisual from "@/components/page-frame/SubVisual";
import useLocale from "@/hooks/useLocale";

export default function PagePreOrderVisual() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <PageSubVisual className="page-pre-order-visual" ref={sectionRef}>
      <h2 ref={titleRef}>
        <span>{t("page/pre-order/visual/title/upper", "치킨몽거 스마트 플러스")}</span>
        <span>{t("page/pre-order/visual/title/lower", "사전구매")}</span>
      </h2>
    </PageSubVisual>
  );
}
