"use client";

// import Image from "next/image";
import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

import useScrollAnimation from "@/hooks/interaction/useScrollAnimation";
import useLocale from "@/hooks/useLocale";

export default function PageAboutVisual() {
  const { t } = useLocale();

  const sectionRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const ciLeftRef = useRef<HTMLElement | null>(null);
  const ciRightRef = useRef<HTMLElement | null>(null);
  const ciPlusRef = useRef<HTMLSpanElement | null>(null);

  useScrollAnimation({
    refs: [
      sectionRef.current,
      titleRef.current,
      descriptionRef.current,
      ciPlusRef.current,
      ciLeftRef.current,
      ciRightRef.current,
    ],
    options: [
      {
        optionKey: "about/visual/title",
        target: titleRef.current,
        animation: [{ duration: 0.8, autoAlpha: 1, translateY: 0 }],
      },
      {
        optionKey: "about/visual/description",
        target: descriptionRef.current,
        animation: [{ duration: 1, autoAlpha: 1, translateY: 0, delay: 0.32 }],
      },
      {
        optionKey: "about/visual/ci/plus",
        target: ciPlusRef.current,
        animation: [{ duration: 2, autoAlpha: 1, delay: 0.56 }],
      },
      {
        optionKey: "about/visual/ci/left",
        target: ciLeftRef.current,
        animation: [{ duration: 1.2, translateX: 0, autoAlpha: 1, delay: 0.72 }],
      },
      {
        optionKey: "about/visual/ci/right",
        target: ciRightRef.current,
        animation: [{ duration: 1.2, translateX: 0, autoAlpha: 1, delay: 0.72 }],
      },
    ],
  });

  return (
    <PageSectionContainer className="page-sub-visual page-about-visual" ref={sectionRef}>
      <figure className="bg">
        <picture>
          <img
            src="/img/about/visual.png"
            alt="회사소개 비주얼"
            style={{ width: "100%", height: "100%" }}
          />
        </picture>
      </figure>
      <div className="cover">
        <PageSectionWrapper>
          <h2 ref={titleRef}>{t("about/visual/title", "데이터로 만드는 <br />인공지능 혁신")}</h2>
          <p ref={descriptionRef}>
            {t(
              "about/visual/desc",
              "유니아이만의 AI 기술력을 통해 생산자와 소비자 모두에게 필요한 데이터를 제공하여, 세상에 단 하나뿐인 인공지능 혁신을 만들어갑니다.",
            )}
          </p>
          <div className="ci-origin">
            <strong className="left" ref={ciLeftRef}>
              United
            </strong>
            <span ref={ciPlusRef}>+</span>
            <strong className="right" ref={ciRightRef}>
              A.I
            </strong>
          </div>
        </PageSectionWrapper>
      </div>
    </PageSectionContainer>
  );
}
