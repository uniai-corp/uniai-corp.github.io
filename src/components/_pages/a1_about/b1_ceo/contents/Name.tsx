"use client";

import { useRef } from "react";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageAboutCEOName() {
  const { t } = useLocale();

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const executivesRef = useRef<HTMLSpanElement | null>(null);
  const nameRef = useRef<HTMLElement | null>(null);

  useScrollAnimation({
    refs: [titleRef.current, executivesRef.current, nameRef.current],
    options: [
      {
        optionKey: "about/ceo/name/executive",
        target: executivesRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateX: 0,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 80%",
            },
          },
        ],
      },
      {
        optionKey: "about/ceo/name/name",
        target: nameRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateX: 0,
            delay: 0.24,
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "top 80%",
            },
          },
        ],
      },
    ],
  });

  return (
    <h3 className="page-about-ceo-name" ref={titleRef}>
      <span ref={executivesRef}>{t("common/company/ceo/title", "대표이사")}</span>
      <strong ref={nameRef}>{t("common/company/ceo/name", "백승환")}</strong>
    </h3>
  );
}
