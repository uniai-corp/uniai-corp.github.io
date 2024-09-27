"use client";

import { useRef } from "react";

import PageSectionHeader from "@/components/section/Header";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageSolutionSystemHeader() {
  const { t } = useLocale();

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useScrollAnimation({
    refs: [titleRef.current],
    options: [
      {
        optionKey: "solution/system/header/title",
        target: titleRef.current,
        animation: [{ duration: 1, autoAlpha: 1, translateY: 0 }],
      },
    ],
  });

  return (
    <PageSectionHeader className="page-solution-system-header">
      <h2 className="page-solution-system-title" ref={titleRef}>
        {t("solution/system/title/0", "가금류")}{" "}
        <strong>{t("solution/system/title/1", "스마트 축사 통합 관제")}</strong>{" "}
        {t("solution/system/title/2", "시스템")}
      </h2>
    </PageSectionHeader>
  );
}
