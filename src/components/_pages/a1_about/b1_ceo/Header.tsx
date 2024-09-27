"use client";

import { useRef } from "react";

import PageSectionHeader from "@/components/section/Header";
import PageAboutCEOHeaderLogo from "./Logo";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageAboutCEOHeader() {
  const { t } = useLocale();

  const headerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  useScrollAnimation({
    refs: [headerRef.current, logoRef.current, textRef.current],
    options: [
      {
        optionKey: "about/ceo/header/logo",
        target: logoRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      {
        optionKey: "about/ceo/header/title",
        target: textRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: `50%`,
            delay: 0.16,
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
    ],
  });

  return (
    <PageSectionHeader className="page-about-ceo-header" ref={headerRef}>
      <h2 className="page-about-ceo-title">
        <PageAboutCEOHeaderLogo ref={logoRef} />
        <strong ref={textRef}>{t("about/ceo/title", "유니아이 대표이사 소개")}</strong>
      </h2>
    </PageSectionHeader>
  );
}
