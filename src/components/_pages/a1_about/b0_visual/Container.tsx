"use client";

import Image from "next/image";
import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";

import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageAboutVisual() {
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
        animation: [{ duration: 1, autoAlpha: 1, translateY: 0 }],
      },
      {
        optionKey: "about/visual/description",
        target: descriptionRef.current,
        animation: [{ duration: 0.8, autoAlpha: 1, translateY: 0, delay: 0.64 }],
      },
      {
        optionKey: "about/visual/ci/plus",
        target: ciPlusRef.current,
        animation: [{ duration: 1.2, autoAlpha: 1, delay: 1 }],
      },
      {
        optionKey: "about/visual/ci/left",
        target: ciLeftRef.current,
        animation: [{ duration: 0.8, translateX: 0, autoAlpha: 1, delay: 1.4 }],
      },
      {
        optionKey: "about/visual/ci/right",
        target: ciRightRef.current,
        animation: [{ duration: 0.8, translateX: 0, autoAlpha: 1, delay: 1.4 }],
      },
    ],
  });

  return (
    <PageSectionContainer className="page-about-visual" ref={sectionRef}>
      <figure className="bg">
        <Image src="/img/about/visual.png" alt="회사소개 비주얼" fill={true} priority={true} />
      </figure>
      <div className="cover">
        <PageSectionWrapper>
          <h2 ref={titleRef}>
            데이터로 만드는 <br />
            인공지능 혁신
          </h2>
          <p ref={descriptionRef}>
            UNIAI.는 데이터와 인공 지능(AI) 기술력을 통하여 생산자와 소비자 모두에게 필요한 데이터로
            이 세상에 단 하나뿐인 인공지능 혁신을 만듭니다.
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
