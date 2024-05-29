"use client";

import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import PageMainFarmaidLogo from "./Logo";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";

export default function PageMainFarmaid() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const logoRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

  useScrollAnimation({
    refs: [
      sectionRef.current,
      descriptionRef.current,
      logoRef.current,
      nameRef.current,
      btnRef.current,
    ],
    options: [
      ...(descriptionRef.current === null
        ? []
        : Array.from(descriptionRef.current.children).map((target, i) => ({
            optionKey: `main/farmaid/desc/0`,
            target,
            animation: [
              {
                duration: 0.64,
                autoAlpha: 1,
                translateY: 0,
                delay: 0.16 * i,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 70%",
                  end: "top 70%",
                },
              },
            ],
          }))),
      {
        optionKey: `main/farmaid/logo`,
        target: logoRef.current,
        animation: [
          {
            duration: 1.2,
            autoAlpha: 1,
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/name`,
        target: nameRef.current,
        animation: [
          {
            duration: 0.8,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.48,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "top 60%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/link`,
        target: btnRef.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            delay: 1.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "top 80%",
            },
          },
        ],
      },
    ],
  });

  return (
    <PageSectionContainer className="page-main-farmaid" ref={sectionRef}>
      <PageSectionWrapper className="page-main-farmaid-wrapper">
        <p className="page-main-farmaid-description" ref={descriptionRef}>
          <span className="page-main-farmaid-desc-span">
            팜에이드는 실시간 모니터링, 농장제어, 사양관리와
          </span>
          <span className="page-main-farmaid-desc-span">더불어 유니아이의 인공지능 기술로</span>
          <span className="page-main-farmaid-desc-span">
            체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.
          </span>
        </p>
        <PageMainFarmaidLogo ref={logoRef} />
        <h2 ref={nameRef}>팜에이드 플랫폼</h2>
        <div className="link-container" ref={btnRef}>
          <Link className="radius-button link-button" href="https://farmaid.kr/" target="_blank">
            <span>바로가기</span>
          </Link>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
