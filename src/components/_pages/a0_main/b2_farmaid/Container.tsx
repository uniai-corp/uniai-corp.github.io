"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useRef } from "react";

import PageSectionContainer from "@/components/section/Container";
import PageSectionWrapper from "@/components/section/Wrapper";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function PageMainFarmaid() {
  const common = { alt: "팜에이드" };

  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 542,
    height: 69,
    src: "/img/main/farmaid/logo_desktop.png",
  });

  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 460,
    height: 59,
    src: "/img/main/farmaid/logo_tablet.png",
  });

  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 300,
    height: 39,
    src: "/img/main/farmaid/logo_mobile.png",
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const span0Ref = useRef<HTMLSpanElement | null>(null);
  const span1Ref = useRef<HTMLSpanElement | null>(null);
  const span2Ref = useRef<HTMLSpanElement | null>(null);

  useScrollAnimation({
    refs: [sectionRef.current, span0Ref.current, span1Ref.current, span2Ref.current],
    options: [
      {
        optionKey: `main/farmaid/desc/0`,
        target: span0Ref.current,
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
        optionKey: `main/farmaid/desc/1`,
        target: span1Ref.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.16,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "top 70%",
            },
          },
        ],
      },
      {
        optionKey: `main/farmaid/desc/2`,
        target: span2Ref.current,
        animation: [
          {
            duration: 0.64,
            autoAlpha: 1,
            translateY: 0,
            delay: 0.32,
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

  const logoRef = useRef<HTMLElement | null>(null);
  useScrollAnimation({
    refs: [sectionRef.current, logoRef.current],
    options: [
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
    ],
  });

  const nameRef = useRef<HTMLHeadingElement | null>(null);
  useScrollAnimation({
    refs: [sectionRef.current, nameRef.current],
    options: [
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
    ],
  });

  const btnRef = useRef<HTMLDivElement | null>(null);
  useScrollAnimation({
    refs: [sectionRef.current, btnRef.current],
    options: [
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
        <p>
          <span ref={span0Ref}>팜에이드는 실시간 모니터링, 농장제어, 사양관리와</span>
          <span ref={span1Ref}>더불어 유니아이의 인공지능 기술로</span>
          <span ref={span2Ref}>체중예측, 질병예측까지 가능한 축산 농가 종합 솔루션입니다.</span>
        </p>
        <figure className="service-logo" ref={logoRef}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={desktop} />
            <source media="(min-width: 768px)" srcSet={tablet} />
            <source srcSet={mobile} />
            <img {...rest} alt="팜에이드" style={{ width: "100%", height: "auto" }} />
          </picture>
        </figure>
        <h2 ref={nameRef}>팜에이드 플랫폼</h2>
        <div className="link-container" ref={btnRef}>
          <Link className="radius-button link-button" href="https://farmaid.kr/">
            <span>바로가기</span>
          </Link>
        </div>
      </PageSectionWrapper>
    </PageSectionContainer>
  );
}
