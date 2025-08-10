"use client";

import { useRef } from "react";

import PageSolutionProductLogo from "./Logo";

import useLocale from "@/hooks/useLocale";
import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSolutionProductHeader() {
  const { t } = useLocale();

  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [headerRef.current, titleRef.current, logoRef.current],
    options: [
      {
        optionKey: "solution/product/header/title",
        target: titleRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "solution/product/header/logo",
        target: logoRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            delay: 0.24,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <header className="page-solution-product-header" ref={headerRef}>
      <h2 className="page-solution-product-title" ref={titleRef}>
        {t("solution/product/title", "스마트 축사 통합 관제 시스템")}
      </h2>
      <div className="page-solution-product-logo" ref={logoRef}>
        <PageSolutionProductLogo />
      </div>
    </header>
  );
}
