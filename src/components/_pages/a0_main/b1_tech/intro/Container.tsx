"use client";

import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageTechIntroBackground from "./Background";
import PageTechIntroAI from "./AI";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageTechIntroKeywords from "./Keywords";

import useScrollAnimation from "@/hooks/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageMainTechIntroContainer() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const phraseUpperRef = useRef<HTMLParagraphElement | null>(null);
  const phraseLowerRef = useRef<HTMLParagraphElement | null>(null);

  useScrollAnimation({
    refs: [sectionRef.current, titleRef.current, phraseUpperRef.current, phraseLowerRef.current],
    options: [
      {
        optionKey: "main/tech/intro/title",
        target: titleRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "main/tech/intro/phrase/upper",
        target: phraseUpperRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.24,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: "main/tech/intro/phrase/lower",
        target: phraseLowerRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.24,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
    ],
  });

  return (
    <PageSectionContainer className="page-main-tech page-main-tech-intro" ref={sectionRef}>
      <PageTechIntroBackground />
      <PageTechIntroAI trigger={sectionRef.current} />
      <PageTechIntroKeywords trigger={sectionRef.current} />
      <PageSectionWrapper className="cover">
        <h2 ref={titleRef}>{t("main/tech/title", "유니아이의 AI 기술을 소개합니다")}</h2>
        <p>
          <span ref={phraseUpperRef}>
            {t("main/tech/desc/upper", "닭, 돼지 농가의 축사 관제 시스템과 ")}
          </span>
          <span ref={phraseLowerRef}>
            {t(
              "main/tech/desc/lower",
              "데이터에 기반한 체중예측, 질병예측 기능으로 축사를 편하게 관리할 수 있습니다",
            )}
          </span>
        </p>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
