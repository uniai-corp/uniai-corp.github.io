"use client";

import { useRef } from "react";

import PageSolutionProductCategoryHeader from "../assets/CategoryHeader";
import PageSolutionProductCategoryTitle from "../assets/CategoryTitle";
import PageSolutionProductCategoryDescription from "../assets/CategoryDescription";

import useLocale from "@/hooks/useLocale";
import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";

export default function PageSolutionProductWeightHeader() {
  const { t } = useLocale();

  const headerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descUpperRef = useRef<HTMLParagraphElement | null>(null);
  const descLowerRef = useRef<HTMLParagraphElement | null>(null);

  const DELAY_TIME = 0.24;

  useScrollAnimation({
    refs: [headerRef.current, titleRef.current],
    options: [
      {
        optionKey: "solution/product/weight/title",
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
        optionKey: `solution/product/weight/description/upper`,
        target: descUpperRef.current,
        animation: [
          {
            duration: 1,
            autoAlpha: 1,
            delay: DELAY_TIME + 0.24,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `solution/product/weight/description/lower`,
        target: descLowerRef.current,
        animation: [
          {
            duration: 1,
            autoAlpha: 1,
            delay: DELAY_TIME + 0.24 * 2,
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
    <PageSolutionProductCategoryHeader ref={headerRef}>
      <PageSolutionProductCategoryTitle
        title={t("solution/product/weightPackage/title", "개별상품")}
        className="product-weight-title"
        ref={titleRef}
      />
      <PageSolutionProductCategoryDescription className="fade-text" ref={descUpperRef}>
        {t("solution/product/weightPackage/desc/upper", "체중에 초점을 맞춘 “체중특화” 상품으로")}
      </PageSolutionProductCategoryDescription>
      <PageSolutionProductCategoryDescription className="fade-text" ref={descLowerRef}>
        {t(
          "solution/product/weightPackage/desc/lower",
          "사양관리 + 체중관리 + 통합제어를 이용하실 수 있습니다.",
        )}
      </PageSolutionProductCategoryDescription>
    </PageSolutionProductCategoryHeader>
  );
}
